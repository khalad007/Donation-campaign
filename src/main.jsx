import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root';
import Home from './Component/Home/Home';
import Donation from './Component/Donation/Donation';
import Statistics from './Component/Statistics/Statistics';
import ErrorPage from './Component/ErrorPage/ErrorPage';
import Card from './Component/Card/Card';
import Banner from './Component/Banner/Banner';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/card.json')
      },
      {
        path: '/Donation',
        element: <Donation></Donation>
      },
      {
        path: '/Statistics',
        element: <Statistics></Statistics>,
        loader: () => fetch('/card.json')
      },
      {
        path: '/Card/:id',
        element: <Card></Card>,
        loader: () => fetch('/card.json')
      },
      {
        element: <Banner></Banner>,
        loader: () => fetch('/card.json')
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
