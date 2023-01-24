import classes from "./Checkout.module.css";
import { useRef, useReducer } from "react";

const isEmpty = (value) => {
  return value.trim() === "";
};

const isNotFiveDigits = (value) => {
  return value.trim().length !== 5;
};

const validationReducer = (state, action) => {
  if (action.type === "INVALID_NAME") {
    return {
      ...state,
      nameIsValid: false,
    };
  }

  if (action.type === "INVALID_STREET") {
    return {
      ...state,
      streetIsValid: false,
    };
  }
  if (action.type === "INVALID_POSTAL") {
    return {
      ...state,
      postalCodeIsValid: false,
    };
  }
  if (action.type === "INVALID_CITY") {
    return {
      ...state,
      cityIsValid: false,
    };
  }

  if (action.type === "RESET_VALIDITY") {
    return initialInputValidity;
  }

  return initialInputValidity;
};

const initialInputValidity = {
  nameIsValid: true,
  streetIsValid: true,
  postalCodeIsValid: true,
  cityIsValid: true,
};

const Checkout = (props) => {
  const [inputValidityState, dispatch] = useReducer(
    validationReducer,
    initialInputValidity
  );

  const nameInputRef = useRef("");
  const streetInputRef = useRef("");
  const postalCodeInputRef = useRef("");
  const cityInputRef = useRef("");

  const confirmHandler = (event) => {
    event.preventDefault();

    dispatch({ type: "RESET_VALIDITY" });

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

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalCodeIsValid &&
      enteredCityIsValid;

    if (!formIsValid) {
      if (!enteredNameIsValid) {
        dispatch({ type: "INVALID_NAME" });
      }
      if (!enteredStreetIsValid) {
        dispatch({ type: "INVALID_STREET" });
      }
      if (!enteredPostalCodeIsValid) {
        dispatch({ type: "INVALID_POSTAL" });
      }
      if (!enteredCityIsValid) {
        dispatch({ type: "INVALID_CITY" });
      }
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
        {!inputValidityState.nameIsValid && <p>Please enter a valid name</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input ref={streetInputRef} type="text" id="street" />
        {!inputValidityState.streetIsValid && (
          <p>Please enter a valid street</p>
        )}
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input ref={postalCodeInputRef} type="text" id="postal" />
        {!inputValidityState.postalCodeIsValid && (
          <p>Please enter a valid postal code</p>
        )}
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input ref={cityInputRef} type="text" id="city" />
        {!inputValidityState.cityIsValid && <p>Please enter a valid city</p>}
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
