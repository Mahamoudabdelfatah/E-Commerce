import React, { useContext } from 'react'
import {
  Card, CardHeader, CardBody, CardFooter, Typography, Button,
} from "@material-tailwind/react";
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { ClimbingBoxLoader } from 'react-spinners'
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import toast from 'react-hot-toast';
import { FaSpinner } from "react-icons/fa";
import Swal from 'sweetalert2';





const RecentProducts = () => {

  const [resentProducts, setResentProducts] = useState([])
  const [isloading, setIsLoading] = useState(true)
  const [loadingBtn, setLoadingBtn] = useState(false)
  const [currentProductId, setCurrentProductId] = useState(0)


  let { addProductToCart } = useContext(CartContext)

  async function addProductToCartItem(productId) {
    setLoadingBtn(true)
    setCurrentProductId(productId)
    let response = await addProductToCart(productId)
    if (response.data.status === "success") {
      Swal.fire({
        icon: "success",
        title: "Added Successfly",
        timer: 800,
        showConfirmButton: false,
        position: "top-end",
        width: 400

      });
      setLoadingBtn(false)
    } else {
      Swal.fire({
        icon: "error",
        title: response.data.message,
        timer: 800,
        showConfirmButton: false,
        position: "top-end",
        width:400

      });
      setLoadingBtn(false)
    }
  }

  function getRecentProducts() {
    axios.get("https://ecommerce.routemisr.com/api/v1/products")
      .then((response) => {
        setResentProducts(response.data.data)
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false)

      })
  }

  useEffect(() => {
    getRecentProducts()
  }, [])


  if (isloading) {
    return (
      <div className='flex justify-center items-center py-[10rem]'>
        <ClimbingBoxLoader color='#bd4444' size={50} />
      </div>
    )
  }





  return (
    <>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {resentProducts.map((product) => (
          <Card key={product._id} className="shadow-xl rounded-xl hover:scale-105 transition-transform duration-300">
            <Link to={`/productdetailes/${product._id}/${product.category.name}`} >
              <CardHeader shadow={false} floated={false} className="h-64">
                <img
                  src={product.imageCover}
                  alt={product.title}
                  className="h-full w-full object-cover rounded-t-xl"
                />
              </CardHeader>
              <CardBody className="p-4">
                <div className="mb-2 flex justify-between items-center">
                  <Typography color="blue-gray" className="font-semibold text-sm md:text-base">
                    {product.title.split(" ").slice(0, 3).join(" ")}
                  </Typography>
                  <Typography color="blue-gray" className="font-semibold text-sm md:text-base">
                    ${product.price}
                  </Typography>
                </div>
                <Typography variant="small" color="gray" className="font-normal text-xs md:text-sm opacity-80">
                  {product.description.length > 60
                    ? product.description.slice(0, 60) + "..."
                    : product.description
                  }
                </Typography>
              </CardBody>
            </Link>
            <CardFooter className="pt-0 p-4">
              <Button
                ripple={false}
                fullWidth
                onClick={() => addProductToCartItem(product.id)}
                className="bg-blue-gray-900/10 text-blue-gray-900 hover:text-white hover:bg-[#bd4444] shadow-md hover:shadow-lg transition-all duration-300"
              >
                {currentProductId === product.id && loadingBtn ? <FaSpinner className="animate-spin mx-auto" /> : "Add to Cart"}

              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>


    </>
  )
}

export default RecentProducts
