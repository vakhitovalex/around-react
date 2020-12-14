function popupWithForm (props) {

  return (
    <div className = {`modal modal_type_${props.name} ${props.isOpen ? 'modal_open' : '' }` }>
      <div className="modal__container">
        <button type="button" className="modal__close-button" onClick={props.onClose}></button>
        <h3 className="modal__title">{props.title}</h3>
        <form action="" className="form" name={props.name} novalidate>
          {props.children}
          {/* <input id="profile-name" type="text" className="form__input form__input_type_profile-name" value="" placeholder="Name" required minlength="2" maxlength="40" name="profileName" />
          <span id="profile-name-error" className="form__error"></span>
          <input id="profile-info" type="text" className="form__input form__input_type_profile-description" value="" placeholder="Description" required minlength="2" maxlength="200" name="profileAbout" />
          <span id="profile-info-error" className="form__error"></span> */}
          <button className="form__submit" type="submit">Save</button>
        </form>
      </div>
    </div>
  );
}

export default popupWithForm;
