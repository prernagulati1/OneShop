import { useState } from "react";
const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const valueIsValid = validateValue(enteredValue);
  const hasError = !enteredValue && isTouched;

  const enteredValueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const enteredValueBlurHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };
  //   console.log("useinput", valueIsValid);

  return {
    value: enteredValue,
    hasError,
    isValid: valueIsValid,
    enteredValueChangeHandler,
    enteredValueBlurHandler,
    reset,
  };
};

export default useInput;
