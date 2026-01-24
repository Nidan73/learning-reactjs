import { StrictMode, Suspense } from 'react'
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
import Users from './Components/Users/Users.jsx';
import Users2 from './Components/Users/Users2.jsx';
import UserDetails from './Components/userDetails/UserDetails.jsx';
import Posts from './Components/Posts/Posts.jsx';
import PostDetails from './Components/Posts/PostDetails.jsx';


const userPromise = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
const router = createBrowserRouter([
  {
    path: "/",
    Component : Root,
    children : [
      {index : true , Component : Home},
      {path : 'Mobiles', Component : Mobile},
      {path : 'Laptops', Component : Laptops},
      {
      path : 'Users',
      loader : () => fetch('https://jsonplaceholder.typicode.com/users'),
      Component : Users 
    },
      {
      path : 'Users2',
      element : <Suspense fallback = {"Data is loading"}>
           <Users2 userPromise = {userPromise}></Users2>
      </Suspense>
    },
    {path : 'users/:userId',
     loader : ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
     Component : UserDetails
    },
    {
      path : 'Posts',
      loader : ()=> fetch('https://jsonplaceholder.typicode.com/posts'),
      Component : Posts
    },
    {
      path : 'posts/:postId',
      loader : ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
      Component : PostDetails
    },
    {
      path : '*',
      element : <div>404 error</div>
    }
    ]
  },
   
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  fallbackElement={<div>Loading...</div>} router={router}></RouterProvider>
  </StrictMode>,
)
