import './App.css';
import Body from './componnets/Body';
import { createBrowserRouter } from 'react-router-dom';
import Login from './componnets/Login';
import Browse from './componnets/Browse';
import { RouterProvider } from 'react-router-dom';
const App =()=> {

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Body/>,
    },
    { 
      path: '/login',
      element: <Login/>,
    },
    { 
      path: '/browse',
      element: <Browse/>,
    },
  ])

  
  return (
    <RouterProvider router={appRouter}/>
  );
}

export default App;
