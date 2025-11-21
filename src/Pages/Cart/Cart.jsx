import { Link, NavLink } from "react-router-dom";
import { IconButton } from "@material-tailwind/react";
import { useContext } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Swal from "sweetalert2";


const Cart = () => {
  return (
    <>

      <div className="flex gap-3 mt-5 container md:justify-start justify-center font-bold">
        <Link to="/" className="text-gray-400 hover:text-gray-600 transition">
          Home
        </Link>
        <span>/</span>
        <span className="">Cart</span>
      </div>


      <section className="bg-white py-4 md:py-8">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h1 className="text-3xl font-semibold text-gray-800 flex justify-center items-center gap-2 mb-6">
            Items in Your Cart :
            <span className="px-4 py-2 bg-red-600 text-white rounded-full text-xl font-semibold">
              3
            </span>
          </h1>


          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              {/* Desktop Table View */}
              <div className="hidden sm:block">
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
                      <tr className="border-b hover:bg-gray-50">
                        <td className="py-4 flex items-center">
                          <img className="h-20 w-20 mr-4 object-cover rounded" src="https://via.placeholder.com/80" alt="Product 1" />
                          <span className="font-medium">Product 1</span>
                        </td>
                        <td className="py-4">$25.00</td>
                        <td className="py-4">
                          <div className="flex items-center gap-2">
                            <span className="w-8 text-center">1</span>
                          </div>
                        </td>
                        <td className="py-4 font-medium">$25.00</td>
                        <td className="py-4">
                          <button className="text-red-600 hover:text-red-800 transition font-medium">Remove</button>
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="py-4 flex items-center">
                          <img className="h-20 w-20 mr-4 object-cover rounded" src="https://via.placeholder.com/80" alt="Product 2" />
                          <span className="font-medium">Product 2</span>
                        </td>
                        <td className="py-4">$30.00</td>
                        <td className="py-4">
                          <div className="flex items-center gap-2">
                            <span className="w-8 text-center">2</span>
                          </div>
                        </td>
                        <td className="py-4 font-medium">$60.00</td>
                        <td className="py-4">
                          <button className="text-red-600 hover:text-red-800 transition font-medium">Remove</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Mobile List View */}
              <div className="block sm:hidden space-y-4">
                <div className="border rounded-lg p-4 hover:shadow-md transition">
                  <div className="flex gap-4">
                    <img className="h-24 w-24 object-cover rounded" src="https://via.placeholder.com/96" alt="Product 1" />
                    <div className="flex-1">
                      <h3 className="font-medium">Product 1</h3>
                      <p className="text-gray-600 mt-1">$25.00</p>
                      <p className="font-medium mt-2">Subtotal: $25.00</p>
                    </div>
                  </div>
                </div>
                <div className="border rounded-lg p-4 hover:shadow-md transition">
                  <div className="flex gap-4">
                    <img className="h-24 w-24 object-cover rounded" src="https://via.placeholder.com/96" alt="Product 2" />
                    <div className="flex-1">
                      <h3 className="font-medium">Product 2</h3>
                      <p className="text-gray-600 mt-1">$30.00</p>
                      <p className="font-medium mt-2">Subtotal: $60.00</p>
                    </div>
                  </div>
                </div>
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
                        <span className="font-medium">$85.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Shipping:</span>
                        <span className="font-medium">Free</span>
                      </div>
                      <div className="border-t border-gray-200 pt-3 flex justify-between">
                        <span className="font-semibold">Total:</span>
                        <span className="font-bold text-lg">$85.00</span>
                      </div>
                    </div>
                    <NavLink to="/checkout"><button className="w-full mt-6 rounded-lg bg-red-600 hover:bg-red-700 px-5 py-3 text-white font-medium transition">Proceed to Checkout</button></NavLink>
                  </div>
                </div>
              </div>

            </div>
          </div>
          ```

        </div>
      </section>



    </>
  )
}

export default Cart
