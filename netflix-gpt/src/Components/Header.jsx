import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/UserSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../Utils/constants";
import { toggleSearchButton } from "../Utils/GPTSearchSlice";
import { updateLanguage } from "../Utils/LangugeSlice";

const Header = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const userProfile = useSelector((store) => store.user);
  const GPTSearchToggle = useSelector((store) => store.search.toggleSearch);
  const dispatch = useDispatch();
  const [showSignOut, setShowSignOut] = useState(false);

  const handleProfileClick = () => {
    setShowSignOut(!showSignOut);
  };

  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  const handleSearchClick = () => {
    dispatch(toggleSearchButton());
  };

  const handleLanguageselect = (identifier) => {
    dispatch(updateLanguage(identifier));
  };

  useEffect(() => {
    const unSubscribeFunction = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => {
      unSubscribeFunction();
    };
  }, []);
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" alt="logo" src={LOGO}></img>
      {userProfile && (
        <div className="flex p-2">
          {GPTSearchToggle && (
            <select
              className="px-2 m-3 text-white rounded-lg bg-gray-700"
              onChange={(e) => {
                handleLanguageselect(e.target.value);
              }}
            >
              {SUPPORTED_LANGUAGES.map((lan) => (
                <option key={lan.identifier} value={lan.identifier}>
                  {lan.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="px-3 py-2 m-3 bg-white text-black font-bold rounded-lg"
            onClick={handleSearchClick}
          >
            {!GPTSearchToggle ? "GPT Search" : "Home Page"}
          </button>
          {/*<img
            className="w-12 h-12 ml-2"
            alt="user"
            src={userProfile.photoURL}
          ></img>

          <button
            className="font-bold text-white pl-2 cursor-pointer"
            onClick={handleSignout}
          >
            {" "}
            (Sign Out)
              </button>*/}
          <div className="flex items-center">
            <div className="relative">
              <img
                className="w-12 h-12 ml-2 cursor-pointer"
                alt="user"
                src={userProfile.photoURL}
                onClick={handleProfileClick}
              />
              {showSignOut && (
                <button
                  className="absolute top-full right-0 mt-3 bg-red-600 text-white w-[6.5rem] px-4 py-2 font-bold rounded shadow-md"
                  onClick={handleSignout}
                >
                  Sign Out
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
