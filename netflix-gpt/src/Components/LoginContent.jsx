import React, { useRef, useState } from "react";
import { checkValidateData, checkValidateDataSignUp } from "../Utils/Validate";

const LoginContent = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInform = () => {
    setIsSignIn(!isSignIn);
  };
  const handleButtonClick = () => {
    //validate
    const message = isSignIn
      ? checkValidateData(email.current.value, password.current.value)
      : checkValidateDataSignUp(
          email.current.value,
          password.current.value,
          name.current.value
        );
    setErrorMsg(message);
  };

  return (
    <div>
      <div className="absolute">
        <img
          alt="logo"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        ></img>
      </div>
      <div className="w-4/12 absolute p-12 bg-black my-32 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h1 className="font-bold text-3xl py-4">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-4 my-4 w-full bg-gray-700"
            ></input>
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-4 my-4 w-full bg-gray-700"
          ></input>

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-700"
          ></input>
          <p className="text-red-500 font-bold">{errorMsg}</p>
          <button
            className="p-4 my-6 bg-red-700 w-full rounded-lg"
            onClick={(e) => {
              handleButtonClick();
            }}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-white">
            {isSignIn
              ? " New to Netflix? "
              : " Already Registered? Sign In Now "}
            <span
              className="underline cursor-pointer"
              onClick={(e) => {
                toggleSignInform();
              }}
            >
              {!isSignIn ? "Sign In" : "Sign Up"}
            </span>{" "}
            Now
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginContent;
