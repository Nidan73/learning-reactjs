import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Mobile from './Components/Mobiles/Mobile.jsx';
import Laptops from './Components/Laptops/Laptops.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    Component : Root,
    children : [
      {index : true , Component : Home},
      {path : 'Mobiles', Component : Mobile},
      {path : 'Laptops', Component : Laptops}
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
