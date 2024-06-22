/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useRef, useState } from "react";
import Header from "./Header";
import { formValidate } from "./utils/Validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const toggleSignInForm = (e) => {
    e.preventDefault();
    setIsSignInForm(!isSignInForm);
  };

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleLoginForm = () => {
    //form validation
    const message = formValidate(email.current.value, password.current.value);
    setErrorMessage(message);

    //sign in or sign up
  };

  return (
    <div className=" bg-black sm:bg-hero-pattern bg-cover h-lvh">
      <Header />

      <div className="flex justify-center items-center my-3 sm:my-5">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-black w-full sm:w-6/12 lg:w-4/12 p-4 sm:p-8 md:p-12 rounded-lg bg-opacity-80"
        >
          <h1 className="text-white font-bold text-3xl text-start mb-3">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              className="p-3 my-4 w-full rounded-lg text-white bg-gray-600 bg-opacity-50"
              type="text"
              placeholder="Full Name"
            ></input>
          )}
          <input
            ref={email}
            className="p-3 my-4 w-full rounded-lg text-white bg-gray-600 bg-opacity-50"
            type="text"
            placeholder="Email or Mobile Number"
          ></input>
          <input
            ref={password}
            className="p-3 my-4 w-full rounded-lg text-white bg-gray-600 bg-opacity-50"
            type="password"
            placeholder="Password"
          ></input>
          <p className="text-md text-red-700 font-semibold my-2">
            {errorMessage}
          </p>
          <button
            onClick={handleLoginForm}
            className="bg-red-700 text-white w-full my-4 py-2 rounded-lg cursor-pointer"
            type="submit"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-gray-400 my-2">
            {isSignInForm ? " New to Netflix?" : "Already registered!"}
            <span
              onClick={toggleSignInForm}
              className="text-white font-bold px-2 cursor-pointer"
            >
              {isSignInForm ? "Sign up now" : "Sign in now"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
