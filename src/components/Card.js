import React from 'react';


function Card({cardName, cardImage, cardLikes, cardOwner, currentUser}) {

  // function handleClick () {
  //   props.onCardClick();
  // }

  return (
    <div className="element">
      {(cardOwner === currentUser) ? (
        <button type='submit' className='element__delete'></button>
      ) : (
        null
      )
      }

    <div className="element__image" alt= {cardName} style={{ backgroundImage: `url(${cardImage})`}}></div>
    <div className="element__description">
    <h2 className="element__name">{cardName}</h2>
      <div className="element__like">
        <button type="button" className="element__like-figure"></button>
  <h3 className="element__like-count">{cardLikes}</h3>
      </div>
    </div>
  </div>
  );
}
export default Card;


