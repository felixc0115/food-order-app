import classes from "./Checkout.module.css";
import { useRef } from "react";

const isEmpty = (value) => {
  return value.trim() === "";
};

const isNotFiveDigits = (value) => {
  return value.trim().length !== 5;
};

const Checkout = (props) => {
  const nameInputRef = useRef("");
  const streetInputRef = useRef("");
  const postalCodeInputRef = useRef("");
  const cityInputRef = useRef("");

  const confirmHandler = (event) => {
    event.preventDefault();

    const customerInfo = {
      name: nameInputRef.current.value,
      street: streetInputRef.current.value,
      postalCode: postalCodeInputRef.current.value,
      city: cityInputRef.current.value,
    };

    const enteredNameIsValid = !isEmpty(customerInfo.name);
    const enteredStreetIsValid = !isEmpty(customerInfo.street);
    const enteredPostalCodeIsValid = !isNotFiveDigits(customerInfo.postalCode);
    const enteredCityIsValid = !isEmpty(customerInfo.city);

    if (
      !enteredNameIsValid ||
      !enteredStreetIsValid ||
      !enteredPostalCodeIsValid ||
      !enteredCityIsValid
    ) {
      return;
    }
    console.log(customerInfo);
    nameInputRef.current.value = "";
    streetInputRef.current.value = "";
    postalCodeInputRef.current.value = "";
    cityInputRef.current.value = "";
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input ref={nameInputRef} type="text" id="name" />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input ref={streetInputRef} type="text" id="street" />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input ref={postalCodeInputRef} type="text" id="postal" />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input ref={cityInputRef} type="text" id="city" />
      </div>
      <div className={classes.actions}>
        <button className={classes.submit}>Confirm</button>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Checkout;
