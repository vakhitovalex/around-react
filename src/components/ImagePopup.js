function ImagePopup () {

  return (
    <div className="modal modal_type_image">
      <div className="modal__image-container">
        <button type="button" className="modal__close-button"></button>
        <img src="#" alt="" className="modal__img"/>
        <h3 className="modal__imgname"></h3>
      </div>
    </div>
  )
}

export default ImagePopup;
