import { useState } from "react";
import "./CartDetailsForm.css";
import useInput from "../customHook/useInput";

const CartDetailsForm = (props) => {
  const [radioChecked, setRadioChecked] = useState(false);

  const {
    value: entereFirstdName,
    hasError: enteredFirstNameIsInvalid,
    isValid: enteredFirstNameIsValid,
    enteredValueChangeHandler: enteredFirstNameChangeHandler,
    enteredValueBlurHandler: enteredFirstNameBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredAddress,
    hasError: enteredAddressIsInvalid,
    isValid: enteredAddressIsValid,
    enteredValueChangeHandler: enteredAddressChangeHandler,
    enteredValueBlurHandler: enteredAddressBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: entereCity,
    hasError: entereCityIsInvalid,
    isValid: entereCityIsValid,
    enteredValueChangeHandler: entereCityChangeHandler,
    enteredValueBlurHandler: entereCityBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredZip,
    hasError: enteredZipIsInvalid,
    isValid: enteredZipIsValid,
    enteredValueChangeHandler: enteredZipChangeHandler,
    enteredValueBlurHandler: enteredZipBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredPhone,
    hasError: enteredPhoneIsInvalid,
    isValid: enteredPhoneIsValid,
    enteredValueChangeHandler: enteredPhoneChangeHandler,
    enteredValueBlurHandler: enteredPhoneBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const firstNameofClasses = enteredFirstNameIsInvalid ? "invalid" : "";
  const addressofClasses = enteredAddressIsInvalid ? "invalid" : "";
  const cityofClasses = entereCityIsInvalid ? "invalid" : "";
  const zipofClasses = enteredZipIsInvalid ? "invalid" : "";
  const phoneofClasses = enteredPhoneIsInvalid ? "invalid" : "";

  if (
    enteredFirstNameIsValid &&
    enteredAddressIsValid &&
    entereCityIsValid &&
    enteredPhoneIsValid &&
    radioChecked
  ) {
    props.onFormSubmit(false);
  }

  const setShippingHandler = (event) => {
    setRadioChecked(event.target.checked);
    // console.log("event.target.value radio==>", event.target.value);
    // console.log("event.target.checked==>", event.target.checked);
  };

  //props.onFormSubmit(false); //enable
  return (
    <form action="#">
      <div class="user-name">
        <input
          type="text"
          name="firstname"
          id="firstname"
          className={firstNameofClasses}
          placeholder="First Name"
          value={entereFirstdName}
          onBlur={enteredFirstNameBlurHandler}
          onChange={enteredFirstNameChangeHandler}
        />
        <input
          type="text"
          name="lastname"
          id="lastname"
          placeholder="Last Name(optional)"
        />
        {enteredFirstNameIsInvalid && (
          <span className="has-error">Please enter a valid First name</span>
        )}
      </div>
      <div class="address">
        <input
          type="text"
          name="address"
          className={addressofClasses}
          id="address"
          placeholder="Address"
          value={enteredAddress}
          onBlur={enteredAddressBlurHandler}
          onChange={enteredAddressChangeHandler}
        />
        {enteredAddressIsInvalid && (
          <span className="has-error">Please enter a valid Address name</span>
        )}
        <input
          type="text"
          name="address-2"
          id="address-2"
          placeholder="Address 2(optional)"
        />
      </div>
      <div class="country">
        <select name="country" id="country">
          {/* <option value="Country">Country</option> */}
          <option value="India">India</option>
        </select>
        <input
          type="text"
          name="city"
          id="city"
          placeholder={
            entereCityIsInvalid ? "Please enter a valid city name" : "City"
          }
          className={cityofClasses}
          value={entereCity}
          onBlur={entereCityBlurHandler}
          onChange={entereCityChangeHandler}
        />
        <input
          type="text"
          name="zip"
          id="zip"
          placeholder={
            enteredZipIsInvalid ? "Please enter a valid Zip Code" : "Zip Code"
          }
          className={zipofClasses}
          value={enteredZip}
          onBlur={enteredZipBlurHandler}
          onChange={enteredZipChangeHandler}
        />
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder={
            enteredPhoneIsInvalid
              ? "Please enter a valid Phone Number "
              : "Phone Number"
          }
          className={phoneofClasses}
          value={enteredPhone}
          onBlur={enteredPhoneBlurHandler}
          onChange={enteredPhoneChangeHandler}
        />
      </div>
      <div class="row shipping" onChange={setShippingHandler}>
        <div class="col-lg-5 col-md-5 free">
          <input type="radio" name="shipping" id="free-shipping" />
          <label for="free-shipping">Free Shipping</label>
          <span>Between 2-5 working days</span>
        </div>
        <div class="col-lg-5 col-md-5 paid">
          <input type="radio" name="shipping" id="paid-shipping" />
          <label for="paid-shipping">Next Day Delivery-$20</label>
          <span>24 hours from checkout</span>
        </div>
      </div>
    </form>
  );
};

export default CartDetailsForm;
