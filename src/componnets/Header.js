import React from "react";
import { useSelector } from "react-redux";
import appStore from "../redux/appStore";
import { useLocation, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utilities/firebase";

const Header = () => {
  const { displayName, photoURL } = useSelector((appStore) => appStore.user);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/browse");
      });
  };
  return (
    <div className="flex justify-between items-center px-2 sm:px-5 py-2 md:px-15 lg:px-20 md:py-3">
      <div className="">
        <img
          className="w-28 md:w-40"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png "
          alt="logo"
        />
      </div>
      {pathname !== "/" && (
        <div className="flex justify-between items-center text-white font-bold ">
          <p>Hi, {displayName}</p>
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
