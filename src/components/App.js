import React, { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import AddPlacePopup from './AddPlacePopup';

function App(props) {
  const [currentUser, setCurrentUser] = useState('');
  const [cards, setCards] = useState([]);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlaceModalOpen, setIsAddPlaceModalOpen] = useState(false);
  const [isEditAvatarModalOpen, setIsEditAvatarModalOpen] = useState(false);
  const [{ cardName, cardImage }, setCardData] = useState({});
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  function requestUserInfo() {
    api
      .getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err + ' in user api request');
      });
  }

  useEffect(() => {
    requestUserInfo();
  }, []);

  function requestCards() {
    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => {
        console.log(err + ' in cards request');
      });
  }

  useEffect(() => {
    requestCards();
  }, []);

  function handleCardLike(card) {
    // Check one more time if this card was already liked
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    // Send a request to the API and getting the updated card data
    api.changeLikeStatus(card._id, !isLiked)
      .then((newCard) => {
        // Create a new array based on the existing one and putting a new card into it
        const newCards = cards.map((item) =>
          item._id === card._id ? newCard : item
        );
        // Update the state
        setCards(newCards);
      })
      .catch((err) => {
        console.log(err + ' in like api request');
      });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        const arrayWithoutDeletedCard = cards.filter(
          (item) => item._id !== card._id
        );
        setCards(arrayWithoutDeletedCard);
      })
      .catch((err) => {
        console.log(err + ' in delete api request');
      });
  }



  function handleCardClick(cardName, cardImage) {
    setIsImageModalOpen(true);
    setCardData({ cardName, cardImage });
  }

  function handleEditAvatarClick() {
    setIsEditAvatarModalOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlaceModalOpen(true);
  }

  function closeAllModals() {
    setIsEditAvatarModalOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlaceModalOpen(false);
    setIsImageModalOpen(false);
  }

  function handleUpdateUser({ name, about }) {
    api
      .updateUserInfo({ name, about })
      .then((res) => setCurrentUser(res))
      .catch((err) => {
        console.log(err + ' in user api request');
      })
      .then(() => closeAllModals());
  }

  function handleUpdateAvatar(link) {
    api
      .updateUserPicture(link)
      .then((res) => setCurrentUser(res))
      .catch((err) => {
        console.log(err + ' in user avatar api request');
      })
      .then(() => closeAllModals());
  }

  function handleAddPlaceSubmit({ name, link }) {
    api
      .addNewCard({
        name,
        link,
      })
      .then((newCard) => setCards([newCard, ...cards]))
      .catch((err) => {
        console.log(err + ' in add card api request');
      })
      .then(() => closeAllModals());
  }

  return (
    <div className='page'>
      <div className='page__container'>
        <CurrentUserContext.Provider value={currentUser}>
          <Header />
          <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            cards={cards}
          />
          <Footer />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllModals}
            onUpdateUser={handleUpdateUser}
          />
          <EditAvatarPopup
            isOpen={isEditAvatarModalOpen}
            onClose={closeAllModals}
            onUpdateAvatar={handleUpdateAvatar}
          />
          <AddPlacePopup
            isOpen={isAddPlaceModalOpen}
            onClose={closeAllModals}
            onAddPlace={handleAddPlaceSubmit}
          />
          <PopupWithForm
            name='delete-place'
            title='Are you sure?'
          ></PopupWithForm>
          <ImagePopup
            isOpen={isImageModalOpen}
            imageUrl={cardImage}
            imageTitle={cardName}
            onClose={closeAllModals}
          />
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
