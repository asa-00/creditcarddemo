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
                    <div className="credit-card-number-label" htmlFor="cardExpiration">{intialValues.cardNumber}</div>
                </div>
                <div className='card-holder-wrapper'></div>
                <div className="card-holder-expiration">
                    <span className="card-holder">
                        <label className="card-holder-label" htmlFor="cardHolderLabel">Card Holder</label>
                        <label className="card-holder-name" htmlFor="cardHolderName">{intialValues.cardHolderName}</label>
                    </span>
                    <span className="card-expiration">
                        <label className="card-expiration-label" htmlFor="cardExpiration">Expires</label>
                        <label className="card-expiration-date" htmlFor="cardExpiration">{intialValues.expiration}</label>
                    </span>
                </div>
                </div>
                <div className="card-back">
                    <div className='card-magnet'></div>
                    <div className='cvv-container'>
                        <label className="card-cvv-label" htmlFor="cardCvvLabel">CVV</label>
                        <div className='card-cvv'><span className='cvv'>***</span></div>
                    </div>
                    <div className="typ-img-container">  
                        <img className="card-back-type-img" src={visa} alt="Card Type" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreditCard