import React, { useState, useRef, useCallback } from "react";
import CreditCard from "./components/card/CreditCard";
import Form from "./components/form/Form";
import "./App.scss";

const intialStateValues = {
  cardNumber: "#### #### #### ####",
  cardHolder: "Ali Ahmed",
  cardMonth: "MM",
  cardYear: "YY",
  cardCvv: "***",
};

function App() {
  const [intialState, setIntialState] = useState(intialStateValues);
  const [focusedElement, setFocusedElment] = useState(null);
  const [, setFocusedInputName] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false)

  const cardElementsRef = {
    cardNumber: useRef(),
    cardHolder: useRef(),
    cardDate: useRef(),
    cardCvv: useRef(),
  };

  const formFieldsRef = {
    cardNumber: useRef(),
    cardHolder: useRef(),
    cardDate: useRef(),
    cardCvv: useRef(),
  };

  const handleCardInputFocus = (event, inputName) => {
    const refByName = cardElementsRef[inputName];
    setFocusedInputName(inputName)
    if(inputName === 'cardCvv') {
      setIsFlipped(true)
      setFocusedElment(refByName);
    } else {
      setIsFlipped(false)
    }
    setFocusedElment(refByName);
  };

  const handleInputChange = () => {
    
  }

  const handleCardInputBlur = useCallback(() => {
    setFocusedElment(null);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <CreditCard
          cardNumber={intialState.cardNumber}
          cardHolder={intialState.cardHolder}
          cardMonth={intialState.cardMonth}
          cardYear={intialState.cardYear}
          cardCvv={intialState.cardCvv}
          isFlipped={isFlipped}
          focusedElm={focusedElement}
          cardNumberRef={cardElementsRef.cardNumber}
          cardHolderRef={cardElementsRef.cardHolder}
          cardDateRef={cardElementsRef.cardDate}
          cardCvvRef={cardElementsRef.cardCvv}
        />
        <div className="form-container">
          <Form
            handleChange={handleInputChange} 
            onCardInputFocus={handleCardInputFocus} 
            onCardInputBlur={handleCardInputBlur}
            />
        </div>
      </div>
    </div>
  );
}

export default App;
