import { useRef } from "react";
import useInput from "../hooks/use-input";

const Form = () => {
  // const ref = useRef(null);

  // Name input
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput((value) => value.trim() !== "");

  // Email input
  const validRegex = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.match(validRegex));

  // Company Name input
  const {
    value: enteredCompanyName,
    isValid: enteredCompanyNameIsValid,
    hasError: companyNameHasError,
    valueChangeHandler: companyNameChangeHandler,
    valueBlurHandler: companyNameBlurHandler,
    reset: companyNameReset,
  } = useInput((value) => value.trim() !== "");

  // Title input
  const {
    value: enteredTitle,
    isValid: enteredTitleIsValid,
    hasError: titleHasError,
    valueChangeHandler: titleChangeHandler,
    valueBlurHandler: titleBlurHandler,
    reset: titleReset,
  } = useInput((value) => value.trim() !== "");

  // Message input
  const {
    value: enteredMessage,
    isValid: enteredMessageIsValid,
    hasError: messageHasError,
    valueChangeHandler: messageChangeHandler,
    valueBlurHandler: messageBlurHandler,
    reset: messageReset,
  } = useInput((value) => value.trim() !== "");

  // Checkbox
  // const checkBoxHandler = () => {
  //   if (ref.current.checked) {
  //     console.log("✅ Checkbox is checked");
  //   } else {
  //     console.log("⛔️ Checkbox is NOT checked");
  //   }
  // };

  // form validation && submission
  let formIsValid = false;

  if (
    enteredNameIsValid &&
    enteredEmailIsValid &&
    enteredMessageIsValid &&
    enteredCompanyNameIsValid &&
    enteredTitleIsValid
  ) {
    formIsValid = true;
  }

  const formSubmissionHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (
      !enteredNameIsValid &&
      !enteredEmailIsValid &&
      !enteredCompanyName &&
      enteredMessage &&
      !enteredMessageIsValid
    ) {
      return;
    }
    console.log(
      enteredName,
      enteredEmail,
      enteredCompanyName,
      enteredTitle,
      enteredMessage
    );

    nameReset();
    emailReset();
    companyNameReset();
    titleReset();
    messageReset();
  };

  return (
    <div className="w-[445px] 4bp:w-[100%]">
      <form
        className="flex flex-col gap-[24px]"
        onSubmit={formSubmissionHandler}
      >
        <div>
          <input
            className={`w-[100%] h-[42px] input01 ${
              nameHasError ? "error-border inputplace" : ""
            } ${enteredName ? "valid-border" : ""}`}
            id="name"
            type="text"
            placeholder="Name"
            value={enteredName}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
          {nameHasError && (
            <p className="error-message">This field can’t be empty</p>
          )}
        </div>

        <div>
          <input
            className={`w-[100%] h-[42px] input01 ${
              emailHasError ? "error-border inputplace" : ""
            } ${enteredEmail ? "valid-border" : ""}`}
            id="email"
            type="email"
            placeholder="Email Address"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          {emailHasError && (
            <p className="error-message">This field can’t be empty</p>
          )}
        </div>

        <div>
          <input
            className={`w-[100%] h-[42px] input01 ${
              companyNameHasError ? "error-border inputplace" : ""
            } ${enteredCompanyName ? "valid-border" : ""}`}
            id="companyName"
            type="text"
            placeholder="Company Name"
            value={enteredCompanyName}
            onChange={companyNameChangeHandler}
            onBlur={companyNameBlurHandler}
          />
          {companyNameHasError && (
            <p className="error-message">This field can’t be empty</p>
          )}
        </div>

        <div>
          <input
            className={`w-[100%] h-[42px] input01 ${
              titleHasError ? "error-border inputplace" : ""
            } ${enteredTitle ? "valid-border" : ""}`}
            id="title"
            type="text"
            placeholder="Title"
            value={enteredTitle}
            onChange={titleChangeHandler}
            onBlur={titleBlurHandler}
          />
          {titleHasError && (
            <p className="error-message">This field can’t be empty</p>
          )}
        </div>

        <div>
          <textarea
            className={`w-[100%] min-h-[89px] input01 ${
              messageHasError ? "error-border inputplace" : ""
            } ${enteredMessage ? "valid-border" : ""}`}
            id="message"
            placeholder="Message"
            value={enteredMessage}
            onChange={messageChangeHandler}
            onBlur={messageBlurHandler}
          />
          {messageHasError && (
            <p className="error-message">This field can’t be empty</p>
          )}
        </div>

        <div className="flex gap-[26px] items-center">
          <div>
            <input
              className="w-[24px] h-[24px] bg-dark-pink border-0"
              id="update-check"
              type="checkbox"
            />
          </div>
          <p className="ptext max-w-[395] text-sj-blue">
            Stay up-to-date with company announcements and updates to our API
          </p>
        </div>

        <button
          type="submit"
          className="w-[168px] font-public-sans font-bold text-[15px] text-sj-blue leading-[18px] tracking-[-0.115385px] rounded-[24px] border-[1px] border-sj-blue py-[14px] px-[8px] hover:bg-sj-blue hover:text-water-white"
          disabled={!formIsValid}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
