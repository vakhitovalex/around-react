import React, { useState } from 'react';
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';




function App() {

  const [isEditProfileModalOpen, setEditProfileModalOpen] = useState(false);
  const [isAddPlaceModalOpen, setAddPlaceModalOpen] = useState(false);
  const [isEditAvatarModalOpen, setEditAvatarModalOpen] = useState(false);
  const [{cardName, cardImage}, setCardData] = useState({});
  const [isImageModalOpen, setImageModalOpen] = useState(false);

  function handleCardClick (cardName, cardImage) {
    setImageModalOpen(true);
    setCardData ({cardName, cardImage});
  }

  function handleEditAvatarClick () {
    setEditAvatarModalOpen(true);
  }

  function handleEditProfileClick () {
    setEditProfileModalOpen(true);
  }

  function handleAddPlaceClick () {
    setAddPlaceModalOpen(true);
  }

  function closeAllModals () {
    setEditAvatarModalOpen(false);
    setEditProfileModalOpen(false);
    setAddPlaceModalOpen(false);
    setImageModalOpen (false);
  }

  return (
      <div className="page">
        <div className="page__container">
          <Header/>
          <Main
            onEditAvatar = {handleEditAvatarClick}
            onEditProfile = {handleEditProfileClick}
            onAddPlace = {handleAddPlaceClick}
            onCardClick = {handleCardClick}
          />
          <Footer/>
          <PopupWithForm name='edit-profile' title='Edit profile' isOpen = {isEditProfileModalOpen} onClose = {closeAllModals} >
            <input id="profile-name" type="text" className="form__input form__input_type_profile-name" value="" placeholder="Name" required minLength="2" maxLength="40" name="profileName" />
            <span id="profile-name-error" className="form__error"></span>
            <input id="profile-info" type="text" className="form__input form__input_type_profile-description" value="" placeholder="Description" required minLength="2" maxLength="200" name="profileAbout" />
            <span id="profile-info-error" className="form__error"></span>
          </PopupWithForm>
          <PopupWithForm name='edit-profile-picture' title='Change profile picture' isOpen = {isEditAvatarModalOpen} onClose = {closeAllModals}>
            <input id="picture-url" type="url" className="form__input form__input_type_picture-link" value="" placeholder="Picture Link" name="pictureLink" required/>
            <span id="picture-url-error" className="form__error"></span>
          </PopupWithForm>
          <PopupWithForm name='add-place' title='New place' isOpen = {isAddPlaceModalOpen} onClose = {closeAllModals}>
            <input id="place-title" type="text" className="form__input form__input_type_place-title" value="" placeholder="Title" minLength="1" maxLength="30" name="placeTitle" required/>
            <span id="place-title-error" className="form__error"></span>
            <input id="place-url" type="url" className="form__input form__input_type_place-link" value="" placeholder="Image Link" name="placeLink" required/>
            <span id="place-url-error" className="form__error"></span>
          </PopupWithForm>
          <PopupWithForm name='delete-place' title='Are you sure?'>
          </PopupWithForm>
          <ImagePopup
            isOpen = {isImageModalOpen}
            imageUrl = {cardImage}
            imageTitle = {cardName}
            onClose = {closeAllModals}
          />
        </div>
      </div>
  );
}

export default App;
