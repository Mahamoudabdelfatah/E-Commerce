import React from "react";
import { Link } from "react-router-dom";

const Account = () => {
  return (
    <div className="container mx-auto p-5">
      {/* Breadcrumb + Welcome */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-5">
        <div className="flex gap-3">
          <Link to="/" className="text-gray-400">
            Home
          </Link>
          <span>/</span>
          <button className="font-medium">My Account</button>
        </div>
        <div className="mt-3 md:mt-0">
          <span>Welcome!</span>
          <span className="text-red-600"> Mahmoud</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        {/* Sidebar */}
        <div className="md:w-1/4 p-4 border-r">
          <p className="font-medium mb-2">Manage My Account</p>
          <ul className="mb-4 p-4">
            <li className="my-2 text-red-500">My Profile</li>
            <li className="my-2 text-gray-400">Address Book</li>
            <li className="my-2 text-gray-400">My Payment Options</li>
          </ul>

          <p className="font-medium mb-2">My Orders</p>
          <ul className="mb-4 p-4">
            <li className="my-2 text-gray-400">My Returns</li>
            <li className="my-2 text-gray-400">My Cancellations</li>
          </ul>

          <p className="font-medium">My Wishlist</p>
        </div>

        {/* Profile Form UI Only */}
        <div className="md:w-3/4 px-5 py-4 shadow-sm bg-white">
          <p className="text-2xl font-medium text-red-600 mb-5">
            Edit Your Profile
          </p>

          <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
            <div className="w-full md:w-1/2">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                First Name
              </label>
              <input
                type="text"
                placeholder="First Name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5"
              />
            </div>

            <div className="w-full md:w-1/2">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Last Name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5"
              />
            </div>
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Email
            </label>
            <input
              type="email"
              placeholder="mahmoud@gmail.com"
              className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Password Changes
            </label>

            <input
              type="password"
              placeholder="Current Password"
              className="shadow-sm mb-3 bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5"
            />

            <input
              type="password"
              placeholder="New Password"
              className="shadow-sm mb-3 bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5"
            />

            <input
              type="password"
              placeholder="Confirm New Password"
              className="shadow-sm mb-4 bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5"
            />
          </div>

          <div className="flex justify-end gap-4">
            <button className="text-gray-500 hover:underline">Cancel</button>
            <button className="bg-red-600 text-white px-4 py-2 hover:bg-red-800 rounded">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
