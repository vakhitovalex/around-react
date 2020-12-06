import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'


function App() {
  return (
    // <div className="App">
      <body class="page">
        <div className="page__container">
          <Header/>
          <Main/>
          <Footer/>
           
         

          
          <div className="modal modal_type_edit-profile">
            <div className="modal__container">
              <button type="button" className="modal__close-button"></button>
              <h3 className="modal__title">Edit profile</h3>
              <form action="" className="form"  novalidate>
                  <input id="profile-name" type="text" className="form__input form__input_type_profile-name" value= "" placeholder="Name" required minlength="2" maxlength="40" name="profileName"/>
                  <span id="profile-name-error" className="form__error"></span>
                  <input id="profile-info" type="text" className="form__input form__input_type_profile-description" value="" placeholder="Description" required minlength="2" maxlength="200" name="profileAbout"/>
                  <span id="profile-info-error" className="form__error"></span>
                  <button className="form__submit" type="submit">Save</button>
              </form>
            </div>
          </div>
          
          <div className="modal modal_type_add-place">
            <div className="modal__container">
              <button type="button" className="modal__close-button"></button>
              <h3 className="modal__title">New place</h3>
              <form action="" className="form" novalidate>
                  <input id="place-title" type="text" className="form__input form__input_type_place-title" value="" placeholder="Title" minlength="1" maxlength="30" name="placeTitle" required/>
                  <span id="place-title-error" className="form__error"></span>
                  <input id="place-url" type="url" className="form__input form__input_type_place-link" value="" placeholder="Image Link" name="placeLink" required/>
                  <span id="place-url-error" className="form__error"></span>
                  <button className="form__submit form__submit_inactive" disabled type="submit">Save</button>
              </form>
            </div>
          </div>
          <div className="modal modal_type_image">
            <div className="modal__image-container">
              <button type="button" className="modal__close-button"></button>
              <img src="#" alt="" className="modal__img"/>
              <h3 className="modal__imgname"></h3>
            </div>
          </div>
          <div className="modal modal_type_delete-place">
            <div className="modal__container">
              <button type="button" className="modal__close-button"></button>
              <form action="" className="form" novalidate>
                <h3 className="modal__title">Are you sure?</h3>
                <button className="form__submit" type="submit">Yes</button>
              </form>

            </div>
          </div>
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
    // </div>


    /* 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */
  );
}

export default App;
