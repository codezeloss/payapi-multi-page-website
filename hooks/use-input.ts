import { SetStateAction, useState } from "react";

const useInput = (validateValue: { (enteredValue: string): any }) => {
  const [enteredValue, setEnteredValue] = useState<string>("");
  const [isTouched, setIsTouched] = useState<boolean>(false);

  // Valid Inputs
  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  // onChange
  const valueChangeHandler = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setEnteredValue(e.target.value);
  };

  // onBlur
  const valueBlurHandler = () => {
    setIsTouched(true);
  };

  // reset user Input
  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    valueBlurHandler,
    reset
  };
};

export default useInput;
