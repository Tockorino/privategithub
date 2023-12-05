import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,  RouterProvider, } from "react-router-dom";
import Login from './routes/login'
import Register from './routes/register'
import CreativeProject from './routes/creativeProject'
import CreativeRepo from './routes/creativeRepo'
import './App.css'


const router = createBrowserRouter([
    {
        path: "/", //path: "/login.jsx",
        element: <Login/>,
    },
    {
       path: "/register.jsx",
       element: <Register />,
    },
    {
        path: "/creativeProject.jsx",
        element: <CreativeProject />,
    },
    {
        path: "/creativeRepo.jsx",
        element: <CreativeRepo />,
    },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
