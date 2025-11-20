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

  const [counter, setCounter] = useState(0)
  const incF = () => {
    setCounter(counter + 1)
  }

  return (
    <>
      <h1 className='text-center '>App</h1>
      <h1 className='text-center text-red-400 text-3xl font-extrabold'>{counter}</h1>
      <Button onClick={incF} >Increment</Button>
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
