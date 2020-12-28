import React, { useState } from 'react';
import PopupWithForm from './PopupWithForm.js';

function AddPlacePopup(props) {
  const [cardTitle, setCardTitle] = useState('');
  const [cardImageLink, setCardLink] = useState('');


  function handleCardTitleChange(e) {
    setCardTitle(e.target.value);
  }

  function handleCardImageLinkChange(e) {
    setCardLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({
      name: cardTitle,
      link: cardImageLink
    })
  }

  return (
    <PopupWithForm
      name='add-place'
      title='New place'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input id="place-title" type="text" value={cardTitle} onChange={handleCardTitleChange} className="form__input form__input_type_place-title" defaultValue="" placeholder="Title" minLength="1" maxLength="30" name="placeTitle" required />
      <span id="place-title-error" className="form__error"></span>
      <input id="place-url" type="url" value={cardImageLink} onChange={handleCardImageLinkChange} className="form__input form__input_type_place-link" defaultValue="" placeholder="Image Link" name="placeLink" required />
      <span id="place-url-error" className="form__error"></span>
    </PopupWithForm>
  )
}

export default AddPlacePopup;
