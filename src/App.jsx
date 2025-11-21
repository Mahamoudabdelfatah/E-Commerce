import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Pages/Home/Home'
import Products from './Pages/Products/Products'
import Login from './auth/Login/Login'
import Register from './auth/Register/Register'
import Cart from './Pages/Cart/Cart'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Categories from './Pages/Categories/Categories'
import NotFound from './Pages/NotFound/NotFound'
import Orders from './Pages/Orders/Orders'
import ProductDetailes from './Pages/ProductDetailes/ProductDetailes'
import { Button } from '@material-tailwind/react'
import { useState } from 'react'
import Checkout from './Pages/Checkout/Checkout'
import Account from './Pages/Account/Account'



let routes = createBrowserRouter([
  {
    path: "", element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "productdetailes", element: <ProductDetailes /> },
      { path: "categories", element: <Categories /> },
      { path: "login", element: <Login /> },
      { path: "account", element: <Account /> },
      { path: "register", element: <Register /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
      { path: "orders", element: <Orders /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ]
  }
])


const App = () => {



  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
