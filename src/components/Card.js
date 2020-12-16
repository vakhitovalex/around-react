import React from 'react';


function Card(props) {

  function handleClick () {
    props.onCardClick(props.card);
  }

  return (
    <div className="element">
      {(props.cardOwner === props.currentUser) ? (
        <button type='submit' className='element__delete'></button>
      ) : (
        null
      )
      }

    <div className="element__image" alt= {props.cardName} style={{ backgroundImage: `url(${props.cardImage})`}} onClick={handleClick}></div>
    <div className="element__description">
    <h2 className="element__name">{props.cardName}</h2>
      <div className="element__like">
        <button type="button" className="element__like-figure"></button>
  <h3 className="element__like-count">{props.cardLikes}</h3>
      </div>
    </div>
  </div>
  );
}
export default Card;


