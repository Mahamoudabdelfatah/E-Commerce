import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../Context/UserContext'
import { jwtDecode } from 'jwt-decode'
import axios from 'axios'
import { useState } from 'react'
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom'
import { ClimbingBoxLoader } from 'react-spinners'


const Allorders = () => {

    const { token } = useContext(UserContext)
    const { id } = jwtDecode(token)
    // console.log(id);
    const [orders, setOrders] = useState(null)
    const [isloading, setIsLoading] = useState(true)



    async function getUserOrders() {
        const options = {
            url: `https://ecommerce.routemisr.com/api/v1/orders/user/${id}`,
            method: "GET",
        }

        const { data } = await axios.request(options)
        setIsLoading(false)
        // console.log(data);
        setOrders(data)

    }

    useEffect(() => {
        getUserOrders()
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

            {!orders ? (
                <div className="flex flex-col mt-4 items-center justify-center py-20 text-center">
                    <ShoppingCartIcon className="w-20 h-20 text-red-500 mb-4" />
                    <h2 className="text-2xl font-semibold mb-2">
                        Your cart is empty
                    </h2>
                    <p className="mb-6 text-gray-500 max-w-md">
                        Looks like you haven't added anything to your cart yet.
                    </p>
                    <Link
                        to="/products"
                        className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300"
                    >
                        Continue Shopping
                    </Link>
                </div>
            ) : (
                orders.map((order) =>
                    <div key={order.id} className="order border border-gray-400 rounded p-4 my-3">
                        <div className='flex justify-between items-center'>
                            <div className=''>
                                <h2 className='text-gray-400'>Order ID</h2>
                                <h3 className='font-bold'>#{order.id}</h3>
                            </div>
                            <div className='p-3'>
                                {order.isDelivered ? (

                                    <span className='bg-lime-600 hover:bg-lime-700 inline-block text-white font-bold rounded-xl py-4 px-6 cursor-pointer me-2'>Delivered</span>
                                ) : (
                                    <span className='bg-blue-600 hover:bg-blue-700 inline-block text-white font-bold rounded-xl py-4 px-6 cursor-pointer me-2'>In Delivery</span>

                                )}
                                {order.isPaid ? (

                                    <span className='bg-lime-600 hover:bg-lime-700 inline-block text-white font-bold rounded-xl py-4 px-6 cursor-pointer'> Paid</span>
                                ) : (

                                    <span className='bg-red-600 hover:bg-red-700 inline-block text-white font-bold rounded-xl py-4 px-6 cursor-pointer'> Not Paid</span>
                                )}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                            {order.cartItems.map((product, index) => (
                                <div
                                    key={`${order.id}-${product.product.id}-${index}`}
                                    className="border border-gray-300 rounded p-3"
                                >
                                    <img
                                        src={product.product.imageCover}
                                        alt=""
                                        className="w-full h-40 object-cover rounded"
                                    />
                                    <h3 className="font-semibold mt-2 text-center">
                                        {product.product.title.split(" ").slice(0, 1).join(" ")}
                                    </h3>
                                    <h3 className="text-red-600 font-bold text-center">${product.price}</h3>
                                </div>
                            ))}

                        </div>

                    </div>
                )

            )}
        </>
    )
}

export default Allorders
