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


let routes = createBrowserRouter([
  {
    path: "", element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "productdetailes", element: <ProductDetailes /> },
      { path: "categories", element: <Categories /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "cart", element: <Cart /> },
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
      <h1 className='text-center'>App</h1>
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
