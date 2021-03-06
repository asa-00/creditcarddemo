import "./Form.scss";

const Form = (props) => {
  const { onCardInputFocus, handleCardInputBlur, handleChange } = props
  return (
    <div className="form">
      <div className="wrapper">
        <div className="form-input">
          <label
            htmlFor="cardNumberLabel"
            className="input-cardnumber-label label"
          >
            Card Number
          </label>
          <input
            type="tel"
            name="cardNumber"
            className="card-number-input input"
            autoComplete="off"
            ref={null}
            onChange={handleChange}
            onFocus={(e) => onCardInputFocus(e, 'cardNumber')}
            onBlur={handleCardInputBlur}
            value={null}
            maxLength="19"
          />
        </div>
        <div className="form-input">
          <label htmlFor="cardNameLabel" className="form-name-label label">
            Card Name
          </label>
          <input
            type="text"
            className="form-name-input input"
            autoComplete="off"
            name="cardHolder"
            onChange={handleChange}
            ref={null}
            onFocus={(e) => onCardInputFocus(e, 'cardHolder')}
            onBlur={handleCardInputBlur}
          />
        </div>
        <div className="form-input">
          <div className="form-input-group-row row">
            <div className="form-input-group-column-date-month column">
              <label
                htmlFor="cardMonthLabel"
                className="form-month-input-label label"
              >
                Expiration Date
              </label>
              <select
                className="card-mounth-select select"
                value={null}
                name="cardDateRef"
                onChange={handleChange}
                ref={null}
                onFocus={(e) => onCardInputFocus(e, 'cardDateRef')}
                onBlur={handleCardInputBlur}
              >
                <option value="" disabled>
                  Month
                </option>

                {["01", "02"].map((val, index) => (
                  <option key={index} value={val}>
                    {val}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-input-group-column-date-year column">
            <label
                htmlFor="cardMonthLabel"
                className="form-year-input-label label"
              >
                Expiration Date
              </label>
            <select
                name="cardDateRef"
                className="card-year-select select"
                value={null}
                onChange={handleChange}
                onFocus={(e) => onCardInputFocus(e, 'cardDateRef')}
                onBlur={handleCardInputBlur}
              >
                <option value="" disabled>
                  Year
                </option>

                {["2021", "2022"].map((val, index) => (
                  <option key={index} value={val}>
                    {val}
                  </option>
                ))}
              </select>
              </div>
            <div className="form-input-column-cvv column">
              <label htmlFor="cardCvv" className="form-cvv-label label">
                CVV
              </label>
              <input
                type="tel"
                className="form-cvv-input input"
                maxLength="4"
                autoComplete="off"
                name="cardCvv"
                onChange={handleChange}
                onFocus={(e) => onCardInputFocus(e, 'cardCvv')}
                onBlur={handleCardInputBlur}
                ref={null}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
