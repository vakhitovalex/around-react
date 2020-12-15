import React, { useState, useEffect } from 'react';
import Api from '../utils/Api.js';
import Card from './Card.js'

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-6",
  headers: {
    authorization: "8335dbe9-1da8-4147-9f68-11c7f6c06af4",
    "Content-Type": "application/json",
  },
});


function Main(props) {

  const [userName, setUserName] = useState();
  const [userId, setUserId] = useState();
  useEffect(() => {
    api.getUserInfo()
    .then((res) => {
      setUserName (res.name)
      setUserDescritpion (res.about)
      setUserAvatar (res.avatar)
      setUserId(res._id)
    })
  });

  const [userDescription, setUserDescritpion] = useState();
  const [userAvatar, setUserAvatar] = useState();
  const [defaultCards, setCardsData] = useState([]);
  useEffect(() => {
      api.getInitialCards()
      .then(res => {
        // console.log(res);
        setCardsData(res.map(card => ({
          apiTitle : card.name,
          apiLink : card.link,
          apiLikesCount : card.likes.length,
          apiCardOwner : card.owner._id
        })
        ))
      })
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__current">
          <button className="profile__picture-edit" onClick={props.onEditAvatar}>
            <img src={userAvatar} alt={userName} className="profile__picture" />
          </button>
          <div className="profile__info">
            <div className="profile__head">
              <h1 className="profile__name">{userName}</h1>
              <button type="button" className="profile__edit" onClick={props.onEditProfile }></button>
            </div>
            <p className="profile__about">{userDescription}</p>
          </div>
        </div>
        <button type="button" className="profile__add" onClick={props.onAddPlace}></button>
      </section>

      <section className="elements">
          {
            defaultCards.map(card =>
              <Card
                cardName = {card.apiTitle}
                cardImage = {card.apiLink}
                cardLikes = {card.apiLikesCount}
                cardOwner = {card.apiCardOwner}
                currentUser = {userId}

              />
            )
          }
      </section>

    </main>
  );
}

export default Main;
