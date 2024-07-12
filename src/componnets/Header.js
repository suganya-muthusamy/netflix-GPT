import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utilities/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../redux/userSlice";
import { logoURL } from "../utilities/constants";
import { toggleGPTSearch } from "../redux/GPTSlice";

const Header = () => {
  const { displayName, photoURL } = useSelector((appStore) => appStore.user);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // navigate("/");
      })
      .catch((error) => {
        // navigate("/browse");
      });
  };

  const dispatch = useDispatch();

  useEffect(() => {
    // event listener to hanlde the login credential state change
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // user sign in or sign up
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
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe the event listener when the header component is unmounted
    return () => unsubscribe();
  }, []);

  const handleGPTSearch = () => {
    dispatch(toggleGPTSearch());
  };

  return (
    <div className="absolute w-screen flex justify-between items-center px-2 sm:px-5 py-2 md:px-15 lg:px-20 md:py-4">
      <div className="">
        <img
          className="w-28 md:w-32 absolute z-10 top-0 md:top-[10px]"
          src={logoURL}
          alt="logo"
        />
      </div>
      {pathname !== "/" && (
        <div className="flex justify-between items-center text-white font-bold ">
          <p
            onClick={handleGPTSearch}
            className="bg-red-700 px-4 py-2 text-white font-bold rounded-sm cursor-pointer"
          >
            GPT Search
          </p>
          <img
            className="mx-4  rounded-md w-[40px]"
            src={photoURL}
            alt="userIcon"
          />
          <p
            onClick={handleSignout}
            className="bg-red-700 px-4 py-2 text-white font-bold rounded-sm cursor-pointer"
          >
            Logout
          </p>
        </div>
      )}
    </div>
  );
};

export default Header;
