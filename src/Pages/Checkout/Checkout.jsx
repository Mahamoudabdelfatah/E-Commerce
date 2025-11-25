import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useFormik } from "formik";
import axios from "axios";
import { ClimbingBoxLoader } from "react-spinners";
import Swal from "sweetalert2";
import * as Yup from 'yup';



const Checkout = () => {
  const { getLoggedUserCart, clearCartAfterOrder } = useContext(CartContext);

  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isloading, setIsLoading] = useState(true);
  const [cartId, setCartId] = useState(null);
  const [orderType, setOrderType] = useState(null)
  const navigate = useNavigate()

  let headers;
  if (localStorage.getItem("userToken")) {
    headers = {
      token: localStorage.getItem("userToken"),
    };
  }

  // -------- CREATE CASH ORDER --------
  async function createCashOrder(values) {
    console.log("====================Cash");

    try {
      let { data } = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,
        values, // Correct body
        {
          headers: headers, // Correct headers
        }
      );

      console.log(data);

      if (data.status === "success") {
        clearCartAfterOrder()
        setCartItems([])
        setTotalPrice(0)
        Swal.fire({
          icon: "success",
          title: "Order Created",
          text: "Your order has been placed successfully!",
          timer: 2000,
          showConfirmButton: false,
          position: "top-end"
        });
      }
      navigate("/allorders")

    } catch (error) {
      console.log(error);
    }
  }
  // -------- CREATE Online ORDER --------
  async function createOnlineOrder(values) {
    console.log("====================Online");
    try {
      let { data } = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:5173`,
        values, // Correct body
        {
          headers: headers, // Correct headers
        }
      );

      console.log(data);
      // toast.loading("Loading...");
      Swal.fire({
        icon: "info",
        title: "Redirecting...",
        text: "You will be redirected to the payment page",
        timer: 3000,
        showConfirmButton: false,
        position: "top-end"
      });
      setTimeout(() => {

        if (data.status === "success") {
          window.location.href = data.session.url
        }
      }, 3000)
    } catch (error) {
      console.log(error);
    }

  }

  // let validationSchema = Yup.object().shape({
  //   city : Yup.string().min(4,"Min Length City is 3").max(15,"Max Length City is 15").required("City is Required"),
  //   phone: Yup.string().matches(/^01[0125][0-9]{8}$/, "Phone Not Egyption Number").required("Phone is Required"),
  //   details : Yup.string().min(8,"Min Length City is 3").max(50,"Max Length City is 50").required("Detailes is Required"),
  // })

  const formik = useFormik({
    initialValues: {
      shippingAddress: {
        city: "",
        phone: "",
        details: "",
      },
    },

    onSubmit: (values) => {
      orderType === "cash" ? createCashOrder(values) : createOnlineOrder(values);

    },
  });

  useEffect(() => {
    getLoggedUserCart().then((res) => {
      setCartItems(res?.data?.data?.products || []);
      setTotalPrice(res?.data?.data?.totalCartPrice || 0);
      setCartId(res?.data?.data?._id || null);
      setIsLoading(false);
    });
  }, []);

  if (isloading) {
    return (
      <div className="flex justify-center items-center py-[10rem]">
        <ClimbingBoxLoader color="#bd4444" size={50} />
      </div>
    );
  }

  return (
    <div className="bg-white py-5">
      <div className="flex gap-3 my-5 text-sm text-gray-500 flex-wrap">
        <Link to="/account">Account</Link>
        <span>/</span>
        <Link to="/account">My Account</Link>
        <span>/</span>
        <Link to="/product">Product</Link>
        <span>/</span>
        <Link to="/cart">View Cart</Link>
        <span>/</span>
        <Link className="font-medium text-black">CheckOut</Link>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8">

          {/* LEFT FORM */}
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Contact information
            </h2>

            <form className="mt-10" onSubmit={formik.handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">

                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium">City</label>
                  <input
                    type="text"
                    className="mt-2 block w-full border-0 py-1.5 px-3 bg-gray-100 rounded-lg outline-none"
                    name="shippingAddress.city"
                    value={formik.values.shippingAddress.city}
                    onChange={formik.handleChange}
                    required
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium">Phone</label>
                  <input
                    type="tel"
                    className="mt-2 block w-full border-0 py-1.5 px-3 bg-gray-100 rounded-lg outline-none"
                    name="shippingAddress.phone"
                    value={formik.values.shippingAddress.phone}
                    onChange={formik.handleChange}
                    required
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium">Details</label>
                  <textarea
                    className="mt-2 block w-full border-0 py-1.5 px-3 bg-gray-100 rounded-lg outline-none"
                    name="shippingAddress.details"
                    value={formik.values.shippingAddress.details}
                    onChange={formik.handleChange}
                    required
                  />
                </div>
              </div>

              <div className="mt-10 flex justify-end">
                <button
                  type="submit"
                  className="rounded-md bg-red-600 mr-4 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-red-700"
                  onClick={() => { setOrderType("cash") }}
                >
                  Cash Order
                </button>

                <button
                  type="submit"
                  className="rounded-md bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-red-700"
                  onClick={() => { setOrderType("online") }}
                >
                  Online Order
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT SUMMARY */}
          <div className="lg:ml-10">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              Order summary
            </h3>

            <div className="space-y-4 border-b pb-4">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div key={item._id} className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <img
                        src={item.product.imageCover}
                        alt={item.product.title}
                        className="w-14 h-14 rounded-lg object-cover"
                      />
                      <div>
                        <p className="text-sm font-medium">{item.product.title}</p>
                        <p className="text-xs text-gray-500">Quantity: {item.count}</p>
                        <p className="text-xs text-gray-500">Price: {item.price}</p>
                      </div>
                    </div>

                    <p className="text-sm font-semibold">
                      ${item.price * item.count}
                    </p>
                  </div>
                ))
              ) : (
                <div className="flex flex-col items-center text-center">
                  <ShoppingCartIcon className="w-20 h-20 text-red-500 mb-4" />
                  <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
                  <p className="mb-6 text-gray-500 max-w-md">
                    Looks like you haven't added anything yet.
                  </p>
                  <Link
                    to="/products"
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg"
                  >
                    Continue Shopping
                  </Link>
                </div>
              )}
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex justify-between text-sm">
                <p>Subtotal</p>
                <p className="font-medium">${totalPrice}</p>
              </div>

              <div className="flex justify-between text-sm">
                <p>Delivery</p>
                <p className="font-medium">$0</p>
              </div>

              <div className="flex justify-between text-base font-semibold">
                <p>Total</p>
                <p>${totalPrice}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
