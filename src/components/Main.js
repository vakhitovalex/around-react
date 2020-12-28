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
          {props.cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onClick={props.onCardClilk}
              onCardLike={props.onCardLike}
              onCardDelete={props.onCardDelete}
            />
          ))}
        </section>
      </main>
    </CurrentUserContext.Provider>
  );
}

export default Main;
