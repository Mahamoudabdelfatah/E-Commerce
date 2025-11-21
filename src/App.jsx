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
import Checkout from './Pages/Checkout/Checkout'
import Account from './Pages/Account/Account'
import ProtectedRoute from './auth/ProtectedRoute/ProtectedRoute'
import UserContextProvider from './Context/UserContext'



let routes = createBrowserRouter([
  {
    path: "", element: <Layout />, children: [
      { index: true, element: <ProtectedRoute><Home /></ProtectedRoute> },
      { path: "products", element: <ProtectedRoute><Products /></ProtectedRoute> },
      { path: "productdetailes", element: <ProtectedRoute><ProductDetailes /></ProtectedRoute> },
      { path: "categories", element: <ProtectedRoute><Categories /></ProtectedRoute> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "account", element: <ProtectedRoute><Account /> </ProtectedRoute> },
      { path: "cart", element: <ProtectedRoute><Cart /></ProtectedRoute> },
      { path: "checkout", element: <ProtectedRoute><Checkout /></ProtectedRoute> },
      { path: "orders", element: <ProtectedRoute><Orders /></ProtectedRoute> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ]
  }
])


const App = () => {



  return (
    <>
      <UserContextProvider>
        <RouterProvider router={routes}></RouterProvider>
      </UserContextProvider>
    </>
  )
}

export default App
