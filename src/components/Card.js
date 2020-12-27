import React, { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'

function Card(props) {
  const {
    owner,
    name,
    link,
    likes
  } = props.card;

  const currentUser = useContext(CurrentUserContext);
  const isLiked = likes.some((item) => item._id === currentUser._id);

  return (
    <div className="element">
      {
        owner._id === currentUser._id && <button type='submit' className='element__delete'></button>
      }

      <div
        className="element__image"
        style={{ backgroundImage: `url(${link})` }}
        onClick={() => props.onClick(name, link)}
      >
      </div>
      <div className="element__description">
        <h2 className="element__name">{name}</h2>
        <div className="element__like">
          <button
            className={isLiked ? 'element__like-figure_active' : 'element__like-figure'}
            onClick={() => props.onCardLike(props.card)}
          >
          </button>
          <h3 className="element__like-count">{likes.length}</h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
