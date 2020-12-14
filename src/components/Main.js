function Main(props) {
  // function handleEditAvatarClick () {
  //   document.querySelector('.modal_type_edit-profile-picture').classList.add('modal_open');
  // }

  // function handleEditProfileClick () {
  //   document.querySelector('.modal_type_edit-profile').classList.add('modal_open');
  // }

  // function handleAddPlaceClick () {
  //   document.querySelector('.modal_type_add-place').classList.add('modal_open');
  // }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__current">
          <button className="profile__picture-edit" onClick={props.onEditAvatar}>
            <img src="#" alt="profile" className="profile__picture" />
          </button>
          <div className="profile__info">
            <div className="profile__head">
              <h1 className="profile__name">Marie C</h1>
              <button type="button" className="profile__edit" onClick={props.onEditProfile }></button>
            </div>
            <p className="profile__about">Scientist</p>
          </div>
        </div>
        <button type="button" className="profile__add" onClick={props.onAddPlace}></button>
      </section>

      <section className="elements"></section>
    </main>
  );
}

export default Main;
