import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ThemeProvider} from "./context/ThemeContext";
import PageLayout from "./layouts/PageLayout"
import Home from './pages/Home';
import StudySession from './pages/StudySession';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ErrorPage from './pages/ErrorPage';
import './index.css';

const router =  createBrowserRouter([
  {
    path: "/",
    element: <PageLayout/>,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <Home />},
      {path: "login", element: <Login />},
      {path: "signup", element: <Signup />},
      {path: "study-session", element: <StudySession />},
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </React.StrictMode>
);