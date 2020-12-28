import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function EditProfilePopup(props) {

  return (
    <PopupWithForm
      name='edit-profile'
      title='Edit profile'
      isOpen={props.isOpen}
      onClose={props.onClose} >
      <input id="profile-name" type="text" className="form__input form__input_type_profile-name" defaultValue="" placeholder="Name" required minLength="2" maxLength="40" name="profileName" />
      <span id="profile-name-error" className="form__error"></span>
      <input id="profile-info" type="text" className="form__input form__input_type_profile-description" defaultValue="" placeholder="Description" required minLength="2" maxLength="200" name="profileAbout" />
      <span id="profile-info-error" className="form__error"></span>
    </PopupWithForm>
  )

}

export default EditProfilePopup;
