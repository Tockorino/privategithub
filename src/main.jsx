import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,  RouterProvider, } from "react-router-dom";
import Login from './routes/login'
import OrgManagement from './routes/orgManagement.jsx'
import CreativeProject from './routes/creativeProject'
import CreativeRepo from './routes/creativeRepo'
import RepositoryManagement from './routes/repositoryManagement.jsx'
import ReposMember from './routes/reposMember.jsx'
import './App.css'


const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>,
    },{
        path: "/orgManagement.jsx",
        element: <OrgManagement />,
    },
    {
       path: "/repositoryManagement/:orgId",
       element: <RepositoryManagement />,
    },
    {
        path: "/reposMembers/:orgId/:repoName",
        element: <ReposMember />,
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
