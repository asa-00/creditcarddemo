import React from 'react'
import './CreditCard.scss'
import chip from '../../assets/chip.png'
import visa from '../../assets/visa.png'

const CreditCard = (props) => {
    const intialValues = {
        cardNumber: '#### #### #### ####',
        cardHolderName: 'Ali Ahmed',
        expiration: 'MM/YY'
    }
    return (
        <div className="card">
            <div class="card-inner">
                <div class="card-front">
                <div className="card-img-container"> 
                    <img className="chip" src={chip} alt="Chip" />   
                    <img className="type" src={visa} alt="Card Type" />
                </div>
                <div className="credit-card-number">
                    <div className="credit-card-number-label" for="cardExpiration">{intialValues.cardNumber}</div>
                </div>
                <div className='card-holder-wrapper'></div>
                <div className="card-holder-expiration">
                    <span className="card-holder">
                        <label className="card-holder-label" for="cardHolderLabel">Card Holder</label>
                        <label className="card-holder-name" for="cardHolderName">{intialValues.cardHolderName}</label>
                    </span>
                    <span className="card-expiration">
                        <label className="card-expiration-label" for="cardExpiration">Expires</label>
                        <label className="card-expiration-date" for="cardExpiration">{intialValues.expiration}</label>
                    </span>
                </div>
                </div>
                <div class="card-back">
                    <h1>Form</h1>
                    <p></p>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default CreditCard