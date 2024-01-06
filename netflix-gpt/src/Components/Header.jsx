import React, { useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/UserSlice";
import { LOGO } from "../Utils/constants";

const Header = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const userProfile = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
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
          <img
            className="w-12 h-12"
            alt="user"
            src={userProfile.photoURL}
          ></img>
          <button className="font-bold text-white pl-2" onClick={handleSignout}>
            {" "}
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
