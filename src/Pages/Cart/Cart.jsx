import { Link, NavLink } from "react-router-dom";
import { IconButton } from "@material-tailwind/react";
import { useContext, useEffect, useState } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Swal from "sweetalert2";
import { CartContext } from "../../Context/CartContext";
import { FaTrash } from "react-icons/fa6";



const Cart = () => {

  let { getLoggedUserCart, updateCartCount, removeProductToCart, clearAllCart } = useContext(CartContext);

  const [cartDetailes, setCartDetailes] = useState(null)

  async function getLoggedUserCartItem() {
    let response = await getLoggedUserCart()
    console.log(response.data.data);
    setCartDetailes(response.data.data)
  }

  async function updateCartCountItem(productId, count, update) {
    let response = await updateCartCount(productId, count)
    setCartDetailes(response.data.data)
    Swal.fire({
      icon: "success",
      title: update,
      timer: 800,
      showConfirmButton: false,
      position: "top-end",
      width: 300

    });
  }

  async function removeProductToCartItem(productId) {
    let response = await removeProductToCart(productId)
    setCartDetailes(response.data.data)
    Swal.fire({
      icon: "success",
      title: "Removed Product",
      timer: 800,
      showConfirmButton: false,
      position: "top-end",
      width: 300
    });

  }

  async function clearAllCartItem() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be deleted All Cart!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        // Clear cart API call
        let response = await clearAllCart();
        setCartDetailes(response.data.data);

        Swal.fire({
          title: "Deleted!",
          text: "Your cart has been cleared.",
          icon: "success"
        });
      }
    });
  }

  useEffect(() => {
    getLoggedUserCartItem()
  }, [])




  return (
    <>

      {cartDetailes?.products?.length > 0 ?

        <>

          <div className="flex gap-3 mt-5 container md:justify-start justify-center font-bold">
            <Link to="/" className="text-gray-400 hover:text-gray-600 transition">
              Home
            </Link>
            <span>/</span>
            <span className="">Cart</span>
          </div>


          <section className="bg-white ">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
              <h1 className="text-3xl font-semibold text-gray-800 flex justify-center items-center gap-2 mb-6">
                Items in Your Cart :
                <span className="px-4 py-2 bg-red-600 text-white rounded-full text-xl font-semibold">
                  {cartDetailes?.products.length}
                </span>
              </h1>


              <div className="mt-6  sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                <div className="mx-auto w-full flex-none ">
                  {/* Desktop Table View */}
                  <div className="hidden sm:block  ">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left">
                        <thead>
                          <tr className="border-b">
                            <th className="py-2">Product</th>
                            <th className="py-2">Price</th>
                            <th className="py-2">Quantity</th>
                            <th className="py-2">Subtotal</th>
                            <th className="py-2">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cartDetailes?.products.map((product) =>

                            <tr key={product._id} className="border-b hover:bg-gray-50">
                              <td className="py-4 flex items-center">
                                <img className="h-20 w-20 mr-4 object-cover rounded" src={product.product.imageCover} alt={product.product.title} />
                                <span className="font-medium">{product.product.title.split(" ").slice(0, 2).join(" ")}</span>
                              </td>
                              <td className="py-4">${product.price}</td>
                              <td className="py-4">
                                <div className="flex items-center gap-2">
                                  <IconButton color="red" size="sm" onClick={() => updateCartCountItem(product.product.id, product.count - 1, "Removed Product Successfly")} >-</IconButton>
                                  <span className="w-8 text-center">{product.count}</span>
                                  <IconButton color="red" size="sm" onClick={() => updateCartCountItem(product.product.id, product.count + 1, "Added Product Successfly")} >+</IconButton>
                                </div>
                              </td>
                              <td className="py-4 font-medium">${product.price * product.count}</td>
                              <td className="py-4">
                                <button className="text-red-600 hover:text-red-800 transition font-medium">
                                  <FaTrash onClick={() => removeProductToCartItem(product.product.id)} className="text-red-600 text-2xl hover:text-red-700" />
                                </button>
                              </td>
                            </tr>
                          )}

                        </tbody>
                      </table>
                    </div>
                  </div>


                  {/* Mobile List View */}

                  <div className="block sm:hidden space-y-4">
                    <div className="border rounded-lg p-4 hover:shadow-md transition">
                      {cartDetailes?.products.map((product) =>
                        <div className="flex gap-4 mt-4" key={product._id} >
                          <img className="h-24 w-24 object-cover rounded " src={product.product.imageCover} alt={product.product.title} />
                          <hr />
                          <div className="flex-1">
                            <h3 className="font-medium">{product.product.title.split(" ").slice(0, 2).join(" ")}</h3>
                            <p className="text-gray-600 mt-1">Price : ${product.price}</p>
                            <p className="text-gray-600 mt-1">Quantity : {product.count}</p>
                            <p className="font-medium mt-2">Subtotal: ${product.price * product.count}</p>
                            <div className="flex justify-start gap-4 mt-4 mb-4">
                              <IconButton color="red" size="sm" onClick={() => updateCartCountItem(product.product.id, product.count - 1, "Removed Product Successfly")}>-</IconButton>
                              <IconButton color="red" size="sm" onClick={() => updateCartCountItem(product.product.id, product.count + 1, "Added Product Successfly")}>+</IconButton>
                              <FaTrash onClick={() => removeProductToCartItem(product.product.id)} className="text-red-600 text-3xl cursor-pointer hover:text-red-700" />
                            </div>

                            <hr />
                          </div>
                        </div>
                      )}
                    </div>

                  </div>
                  <div className="flex flex-col sm:flex-row justify-between gap-4 mt-6">
                    <Link
                      to="/products"
                      className="rounded-lg text-center bg-red-600 hover:bg-red-700 px-5 py-2.5 text-sm font-medium text-white transition "
                    >
                      Return To Shoping
                    </Link>
                    <button

                      className="rounded-lg bg-red-600 hover:bg-red-700 px-5 py-2.5 text-sm font-medium text-white transition"
                      onClick={clearAllCartItem}
                    >
                      Clear Cart
                    </button>
                  </div>


                  {/* Cart Summary */}
                  <div className="mt-8 flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">
                    <div className="w-full lg:w-1/2">
                      <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                        <h3 className="text-lg font-semibold mb-4">Coupon Code</h3>
                        <form className="flex gap-2">
                          <input type="text" placeholder="Enter coupon code" className="flex-1 block w-full rounded-lg border border-gray-300 p-2.5 text-sm" />
                          <button type="button" className="rounded-lg bg-red-600 hover:bg-red-700 px-5 py-2.5 text-sm font-medium text-white transition">Apply</button>
                        </form>
                      </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                        <h3 className="text-xl font-semibold mb-4">Cart Summary</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Subtotal:</span>
                            <span className="font-medium">${cartDetailes?.totalCartPrice}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Shipping:</span>
                            <span className="font-medium">Free</span>
                          </div>
                          <div className="border-t border-gray-200 pt-3 flex justify-between">
                            <span className="font-semibold">Total:</span>
                            <span className="font-bold text-lg">${cartDetailes?.totalCartPrice}</span>
                          </div>
                        </div>
                        <NavLink to="/checkout"><button className="w-full mt-6 rounded-lg bg-red-600 hover:bg-red-700 px-5 py-3 text-white font-medium transition">Proceed to Checkout</button></NavLink>
                      </div>
                    </div>
                  </div>

                </div>
              </div>


            </div>
          </section>



        </>
        // Cart Is Empty if Length = Zero
        : <div className="flex flex-col items-center justify-center py-20 text-center">
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
        </div>}
    </>
  )
}

export default Cart
