import "./App.css";
import Body from "./componnets/Body";
import { createBrowserRouter } from "react-router-dom";
import Login from "./componnets/Login";
import Browse from "./componnets/Browse";
import { RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utilities/firebase";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "./redux/userSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // event listener to hanlde the login credential state change
    onAuthStateChanged(auth, (user) => {
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
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  }, []);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return <RouterProvider router={appRouter}></RouterProvider>;
};

export default App;
