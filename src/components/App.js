import React, { useState, useEffect } from 'react';
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import EditProfilePopup from './EditProfilePopup.js'
import Api from "../utils/Api.js";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-6",
  headers: {
    authorization: "8335dbe9-1da8-4147-9f68-11c7f6c06af4",
    "Content-Type": "application/json",
  },
});

function App(props) {
  const [currentUser, setCurrentUser] = useState('');

  function requestUserInfo() {
    api
      .getUserInfo()
      .then((res) => {
        setCurrentUser(res);
        // setUserName(res.name);
        // setUserDescritpion(res.about);
        // setUserAvatar(res.avatar);
        // setUserId(res._id);
      })
      .catch((err) => {
        console.log(err + " in user api request");
      })
  }

  useEffect(() => {
    requestUserInfo();
  }, []);

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlaceModalOpen, setAddPlaceModalOpen] = useState(false);
  const [isEditAvatarModalOpen, setEditAvatarModalOpen] = useState(false);
  const [{ cardName, cardImage }, setCardData] = useState({});
  const [isImageModalOpen, setImageModalOpen] = useState(false);

  function handleCardClick(cardName, cardImage) {
    console.log('cardName: ', cardName);
    setImageModalOpen(true);
    setCardData({ cardName, cardImage });
  }

  function handleEditAvatarClick() {
    setEditAvatarModalOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlaceModalOpen(true);
  }

  function closeAllModals() {
    setEditAvatarModalOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlaceModalOpen(false);
    setImageModalOpen(false);
  }

  function handleUpdateUser({ name, about }) {
    api.updateUserInfo({ name, about })
      .then((res) => setCurrentUser(res))
      .then(() => closeAllModals());
  }

  return (

    <div className="page">
      <div className="page__container">
        <CurrentUserContext.Provider value={currentUser}>
          <Header />
          <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
          />
          <Footer />
          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllModals} onUpdateUser={handleUpdateUser} />
          {/* <PopupWithForm name='edit-profile' title='Edit profile' isOpen={isEditProfileModalOpen} onClose={closeAllModals} >
            <input id="profile-name" type="text" className="form__input form__input_type_profile-name" defaultValue="" placeholder="Name" required minLength="2" maxLength="40" name="profileName" />
            <span id="profile-name-error" className="form__error"></span>
            <input id="profile-info" type="text" className="form__input form__input_type_profile-description" defaultValue="" placeholder="Description" required minLength="2" maxLength="200" name="profileAbout" />
            <span id="profile-info-error" className="form__error"></span>
          </PopupWithForm> */}
          <PopupWithForm name='edit-profile-picture' title='Change profile picture' isOpen={isEditAvatarModalOpen} onClose={closeAllModals}>
            <input id="picture-url" type="url" className="form__input form__input_type_picture-link" defaultValue="" placeholder="Picture Link" name="pictureLink" required />
            <span id="picture-url-error" className="form__error"></span>
          </PopupWithForm>
          <PopupWithForm name='add-place' title='New place' isOpen={isAddPlaceModalOpen} onClose={closeAllModals}>
            <input id="place-title" type="text" className="form__input form__input_type_place-title" defaultValue="" placeholder="Title" minLength="1" maxLength="30" name="placeTitle" required />
            <span id="place-title-error" className="form__error"></span>
            <input id="place-url" type="url" className="form__input form__input_type_place-link" defaultValue="" placeholder="Image Link" name="placeLink" required />
            <span id="place-url-error" className="form__error"></span>
          </PopupWithForm>
          <PopupWithForm name='delete-place' title='Are you sure?'>
          </PopupWithForm>
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
