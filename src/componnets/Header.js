import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utilities/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../redux/userSlice";
import { logoURL } from "../utilities/constants";
import { toggleGPTSearch } from "../redux/GPTSlice";
import { SUPPORTED_LANGUAGES } from "../utilities/constants";
import { changeLanguage } from "../redux/configSlice";

const Header = () => {
  const user = useSelector((appStore) => appStore.user);
  const showGPTSearch = useSelector((appStore) => appStore.GPT.showGPTSearch);
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

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="z-10 absolute w-full flex items-center justify-between p-4">
      <div className="">
        <img className="w-36" src={logoURL} alt="logo" />
      </div>

      <div className=" flex text-white font-bold p-4 md:p-0">
        {showGPTSearch && (
          <select
            onChange={handleLanguageChange}
            className="bg-gray-800 text-white px-3 py-2 mr-2 rounded-sm "
          >
            {SUPPORTED_LANGUAGES.map((lang) => {
              return (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.identifier}
                </option>
              );
            })}
          </select>
        )}
        <span
          onClick={handleGPTSearch}
          className="bg-red-700 px-4 py-2 mr-3 text-white font-bold rounded-sm cursor-pointer"
        >
          {showGPTSearch ? "🏡" : "🔍"}
        </span>
        {/* <img
            className="mx-4  rounded-md w-[40px]"
            src={user.displayName}
            alt="userIcon"
          /> */}
        <span
          onClick={handleSignout}
          className="bg-red-700 px-4 py-2 mr-3  text-white font-bold rounded-sm cursor-pointer"
        >
          👤
        </span>
      </div>
    </div>
  );
};

export default Header;
