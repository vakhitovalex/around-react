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
  }

  return (
      <body className="page">
        <div className="page__container">
          <Header/>
          <Main
            onEditAvatar = {handleEditAvatarClick}
            onEditProfile = {handleEditProfileClick}
            onAddPlace = {handleAddPlaceClick}
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
          <ImagePopup/>



          {/* <div className="modal modal_type_edit-profile">
            <div className="modal__container">
              <button type="button" className="modal__close-button"></button>
              <h3 className="modal__title">Edit profile</h3>
              <form action="" className="form"  novalidate>
                  <input id="profile-name" type="text" className="form__input form__input_type_profile-name" value= "" placeholder="Name" required minLength="2" maxLength="40" name="profileName"/>
                  <span id="profile-name-error" className="form__error"></span>
                  <input id="profile-info" type="text" className="form__input form__input_type_profile-description" value="" placeholder="Description" required minLength="2" maxLength="200" name="profileAbout"/>
                  <span id="profile-info-error" className="form__error"></span>
                  <button className="form__submit" type="submit">Save</button>
              </form>
            </div>
          </div>
          <div className="modal modal_type_edit-profile-picture">
            <div className="modal__container">
              <button type="button" className="modal__close-button"></button>
              <h3 className="modal__title">Change profile picture</h3>
              <form action="" className="form"  novalidate>
                <input id="picture-url" type="url" className="form__input form__input_type_picture-link" value="" placeholder="Picture Link" name="pictureLink" required/>
                <span id="picture-url-error" className="form__error"></span>
                <button className="form__submit form__submit_inactive"  type="submit">Save</button>
              </form>
            </div>
          </div>
          <div className="modal modal_type_add-place">
            <div className="modal__container">
              <button type="button" className="modal__close-button"></button>
              <h3 className="modal__title">New place</h3>
              <form action="" className="form" novalidate>
                  <input id="place-title" type="text" className="form__input form__input_type_place-title" value="" placeholder="Title" minLength="1" maxLength="30" name="placeTitle" required/>
                  <span id="place-title-error" className="form__error"></span>
                  <input id="place-url" type="url" className="form__input form__input_type_place-link" value="" placeholder="Image Link" name="placeLink" required/>
                  <span id="place-url-error" className="form__error"></span>
                  <button className="form__submit form__submit_inactive" disabled type="submit">Save</button>
              </form>
            </div>
          </div>*/}
          {/* <div className="modal modal_type_image">
            <div className="modal__image-container">
              <button type="button" className="modal__close-button"></button>
              <img src="#" alt="" className="modal__img"/>
              <h3 className="modal__imgname"></h3>
            </div>
          </div> */}
          {/* <div className="modal modal_type_delete-place">
            <div className="modal__container">
              <button type="button" className="modal__close-button"></button>
              <form action="" className="form" novalidate>
                <h3 className="modal__title">Are you sure?</h3>
                <button className="form__submit" type="submit">Yes</button>
              </form>
            </div>
          </div> */}
          <template className="element-template">
            <div className="element">
              <button type="submit" className="element__delete"></button>
              <div className="element__image"></div>
              <div className="element__description">
                <h2 className="element__name"></h2>
                <div className="element__like">
                  <button type="button" className="element__like-figure"></button>
                  <h3 className="element__like-count"></h3>
                </div>


              </div>
            </div>
          </template>
        </div>
      </body>
  );
}

export default App;
