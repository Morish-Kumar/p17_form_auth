import { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== "");
  
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(value => value.includes("@"));
  // function to validate the userInput on every keystroke
  // const [enteredName, setEnteredName] = useState("");
  // const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  // const [formIsValid, setFormIsValid] = useState(false);

  // for email
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);

  // useEffect(() => {
  //   if (enteredNameIsValid) {
  //     console.log("name input is valid!");
  //   }
  // }, [enteredNameIsValid]);

  // const enteredNameIsValid = enteredName.trim() !== "";
  // const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  // const enteredEmailIsValid = enteredEmail.includes("@");
  // const enteredEmailIsInValid = !enteredEmailIsValid && enteredEmailTouched;
  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  // const nameInputChangeHandler = (event) => {
  //   setEnteredName(event.target.value);
  //   // if condition to validate the form as soon as user start typing and change the color of input box from red to default value
  //   // if (enteredName.trim() !== "") {
  //   //   setEnteredNameIsValid(true);
  //   // }
  // };

  // const emailInputChangeHandler = (event) => {
  //   setEnteredEmail(event.target.value);
  // };

  // function to validate the form when the user losses focus
  // const nameInputBlurHandler = (event) => {
  //   setEnteredNameTouched(true);
  //   // if (enteredName.trim() === "") {
  //   //   setEnteredNameIsValid(false);
  //   //   // return;
  //   // }
  // };

  // const emailInputBlurHandler = (event) => {
  //   setEnteredEmailTouched(true);
  // };

  // function to validate the userInput after submission
  const formSubmissionHandler = (event) => {
    event.preventDefault();

    // setEnteredNameTouched(true);
    // adding a if condition to make sure that the user can't submit blank value
    // if (enteredName.trim() === "") {
    //   setEnteredNameIsValid(false);
    //   return;
    // }

    if (!enteredNameIsValid) {
      return;
    }
    // setEnteredNameIsValid(true);

    console.log(enteredName);
    console.log(enteredEmail);
    // setEnteredName("");
    // setEnteredNameTouched(false);
    resetNameInput()
    resetEmailInput()



    // setEnteredEmail("");
    // setEnteredEmailTouched(false);
  };
  // const nameInputClasses = nameInputIsInvalid
  //   ? "form-control invalid"
  //   : "form-control";
  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";
    
    // const emailInputClasses = enteredEmailIsInValid
    //   ? "form-control invalid"
    //   : "form-control";
  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          // onChange={nameInputChangeHandler}
          onChange={nameChangeHandler}
          // onBlur={nameInputBlurHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {/* {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty....</p>
        )} */}
        {nameInputHasError && (
          <p className="error-text">Name must not be empty....</p>
        )}
      </div>

      {/* for email */}
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        { emailInputHasError && (
          <p className="error-text">please enter a valid email....</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
