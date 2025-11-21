import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const RecentProducts = () => {

  const [resentProducts, setResentProducts] = useState([])

  function getRecentProducts() {
    axios.get("https://ecommerce.routemisr.com/api/v1/products")
      .then((response) => {
        setResentProducts(response.data.data)
      })
      .catch((error) => {
        console.log(error);

      })
  }

  useEffect(() => {
    getRecentProducts()
  }, [])







  return (
    <>
     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {resentProducts.map((product) => (
          <Card key={product._id} className="shadow-xl rounded-xl hover:scale-105 transition-transform duration-300">
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
            <CardFooter className="pt-0 p-4">
              <Button
                ripple={false}
                fullWidth
                className="bg-blue-gray-900/10 text-blue-gray-900 hover:text-white hover:bg-[#bd4444] shadow-md hover:shadow-lg transition-all duration-300"
              >
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>


    </>
  )
}

export default RecentProducts
