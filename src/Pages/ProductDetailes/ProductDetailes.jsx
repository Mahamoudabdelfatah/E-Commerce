import React, { useContext } from "react";
import { Button, IconButton, Rating, Typography, Card, CardHeader, CardBody, CardFooter,
} from "@material-tailwind/react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { CartContext } from "../../Context/CartContext";
import Swal from "sweetalert2";



const ProductDetailes = () => {


  let { id, category } = useParams()
  const [productDetailes, setProductDetailes] = useState(null)
  const [relatedProducts, setRelatedProducts] = useState([])

  const [loadingBtn, setLoadingBtn] = useState(false)
    const [currentProductId, setCurrentProductId] = useState(0)
  let {addProductToCart , updateCartCount} = useContext(CartContext);

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
    

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  function getProductDetailes(id) {
    axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
      .then((response) => {
        setProductDetailes(response.data.data)
      })
      .catch((error) => {
        console.log(error);

      })
  }

  function getRelatedProducts(category) {
    axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
      .then((response) => {
        let allProducts = response.data.data;
        let related = allProducts.filter((product) => product.category.name == category)
        setRelatedProducts(related)
      })
      .catch((error) => {
        console.log(error);

      })
  }

  useEffect(() => {
    getProductDetailes(id)
    getRelatedProducts(category)
  }, [id, category])


  return (
    <>
      <section className="py-16 px-8">
        <div className="mx-auto container grid place-items-center grid-cols-1 md:grid-cols-2">
          <img
            src={productDetailes?.images[0]}
            alt="pink blazer"
            className="h-[36rem]"
          />

          <div>
            <Typography className="mb-4" variant="h3">
              {productDetailes?.title}
            </Typography>

            <Typography variant="h5">${productDetailes?.price}</Typography>
            <Typography className="!mt-4 text-base font-normal leading-[27px] !text-gray-500">
              {productDetailes?.description}
            </Typography>
            <div className="my-8 flex items-center gap-2">
              <Rating value={4} className="text-amber-500" />
              <Typography className="!text-sm font-bold !text-gray-700">
                {productDetailes?.ratingsAverage} (100 reviews)
              </Typography>
            </div>
            <Typography color="blue-gray" variant="h6">
              Color
            </Typography>
            <div className="my-8 mt-3 flex items-center gap-2">
              <div className="h-5 w-5 rounded border border-gray-900 bg-blue-gray-600 "></div>
              <div className="h-5 w-5 rounded border border-blue-gray-100 "></div>
              <div className="h-5 w-5 rounded border border-blue-gray-100 bg-gray-900 "></div>
            </div>
            <div className="mb-4 flex w-full items-center gap-3 md:w-1/2 ">
              <Button color="gray" className="w-10">
                +
              </Button>
              <Button color="gray" onClick={()=>addProductToCartItem(productDetailes?.id)} className="w-50">
                Add to Cart
              </Button>
              <Button color="gray" className="w-10">
                -
              </Button>
              <IconButton color="gray" variant="text" className="shrink-0">
                <HeartIcon className="h-6 w-6" />
              </IconButton>
            </div>
          </div>
        </div>
      </section>
      <h1 className="text-center text-3xl md:text-4xl font-extrabold text-[#bd4444] transition-transform duration-300 ease-in-out transform hover:scale-110 ">
        Related Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {relatedProducts.map((product) =>

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
                onClick={()=>addProductToCartItem(product.id)}
                className="bg-blue-gray-900/10 text-blue-gray-900 hover:text-white hover:bg-[#bd4444] shadow-md hover:shadow-lg transition-all duration-300"
              >
                Add to Cart
              </Button>
            </CardFooter>
          </Card>

        )}
      </div>
    </>
  );
}

export default ProductDetailes

