import React, { useState, useEffect, useContext } from "react";
import Api from "../utils/Api.js";
import Card from "./Card.js";
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'


const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-6",
  headers: {
    authorization: "8335dbe9-1da8-4147-9f68-11c7f6c06af4",
    "Content-Type": "application/json",
  },
});

function Main(props) {
  const currentUser = useContext(CurrentUserContext);
  const [cards, setCards] = useState([]);

  function requestCards() {
    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => {
        console.log(err + " in cards request");
      });
  }

  useEffect(() => {
    requestCards();
  }, []);

  function handleCardLike(card) {
    // Check one more time if this card was already liked
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Send a request to the API and getting the updated card data
    api.changeLikeStatus(card._id, !isLiked)
      .then((newCard) => {
        // Create a new array based on the existing one and putting a new card into it
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        // Update the state
        setCards(newCards);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <main className="content">
        <section className="profile">
          <div className="profile__current">
            <button
              className="profile__picture-edit"
              onClick={props.onEditAvatar}
            >
              <img src={currentUser.avatar} alt={currentUser.name} className="profile__picture" />
            </button>
            <div className="profile__info">
              <div className="profile__head">
                <h1 className="profile__name">{currentUser.name}</h1>
                <button
                  type="button"
                  className="profile__edit"
                  onClick={props.onEditProfile}
                ></button>
              </div>
              <p className="profile__about">{currentUser.about}</p>
            </div>
          </div>
          <button
            type="button"
            className="profile__add"
            onClick={props.onAddPlace}
          ></button>
        </section>

        <section className="elements">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onClick={props.onCardClick}
              onCardLike={handleCardLike}
            />
          ))}
        </section>
      </main>
    </CurrentUserContext.Provider>
  );
}

export default Main;
