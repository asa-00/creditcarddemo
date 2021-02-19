import React, { useEffect, useState } from "react";
import "./CreditCard.scss";
import chip from "../../assets/chip.png";
import visa from "../../assets/visa.png";

const CreditCard = (props) => {
  const {
    cardNumber,
    cardHolder,
    cardMonth,
    cardYear,
    cardCvv,
    cardNumberRef,
    cardHolderRef,
    cardDateRef,
    cardCvvRef,
    focusedElm,
    isFlipped
  } = props;
  const [focused, setFocused] = useState(null);

  useEffect(() => {
    if (focusedElm) {
      setFocused(focusedElm.current);
    }
  }, [focusedElm]);

  const currentlyFocused = (ref) => {
    if (ref && focused) {
      if (ref.current === focused) {
        return "focused";
      } else {
        return "";
      }
    }
  };

  return (
    <div className="card">
      <div className="card-inner" style={isFlipped ? { transform: 'rotateY(180deg)'} : { transform: 'rotateY(0deg)'}}>
        <div className="card-front">
          <div className="card-img-container">
            <img className="chip" src={chip} alt="Chip" />
            <img className="type" src={visa} alt="Card Type" />
          </div>
          <div
            className={`credit-card-number ${currentlyFocused(cardNumberRef)}`}
            ref={cardNumberRef}
          >
            <div className="credit-card-number-label" htmlFor="cardExpiration">
              {cardNumber}
            </div>
          </div>
          <div className="card-holder-expiration">
            <span
              className={`card-holder ${currentlyFocused(cardHolderRef)}`}
              ref={cardHolderRef}
            >
              <label className="card-holder-label" htmlFor="cardHolderLabel">
                Card Holder
              </label>
              <label className="card-holder-name" htmlFor="cardHolderName">
                {cardHolder}
              </label>
            </span>
            <span className={`card-expiration ${currentlyFocused(cardDateRef)}`} ref={cardDateRef}>
              <label className="card-expiration-label" htmlFor="cardExpiration">
                Expires
              </label>
              <label
                className="card-expiration-date"
                htmlFor="cardExpiration"
              >{`${cardMonth}/${cardYear}`}</label>
            </span>
          </div>
        </div>
        <div className="card-back">
          <div className="card-magnet"></div>
          <div className="cvv-container">
            <label className="card-cvv-label" htmlFor="cardCvvLabel">
              CVV
            </label>
            <div className="card-cvv">
              <span className="cvv" ref={cardCvvRef}>{cardCvv}</span>
            </div>
          </div>
          <div className="typ-img-container">
            <img className="card-back-type-img" src={visa} alt="Card Type" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
