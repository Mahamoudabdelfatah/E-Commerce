import React from 'react'
import RecentProducts from '../RecentProducts/RecentProducts'

const Products = () => {
  return (
    <>
      <h1 className="text-center text-3xl md:text-4xl font-extrabold text-[#bd4444] transition-transform duration-300 ease-in-out transform hover:scale-110 ">
        All Products
      </h1>
      <RecentProducts />
    </>
  )
}

export default Products
