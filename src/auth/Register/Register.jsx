import React from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row min-h-screen">

            {/* LEFT IMAGE - ON MOBILE GOES DOWN */}
            <div className="w-full md:w-1/2 h-auto flex justify-center items-center p-4">
                <img
                    src="/Side Image.png"
                    alt="Side"
                    className="md:w-full md:h-full object-contain"
                />
            </div>


            {/* RIGHT FORM */}
            <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-6 md:p-12 lg:p-20">
                <form className="w-full max-w-sm sm:max-w-md space-y-6">
                    <div className="py-4 text-gray-800">
                        <h1 className="text-3xl font-bold">Create an account</h1>
                        <p className="py-2">Enter your details below</p>
                    </div>

                    {/* Name */}
                    <div className="relative z-0 w-full group">
                        <input
                            type="text"
                            id="name"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 
                                bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
                                focus:border-[#db4444] focus:outline-none focus:ring-0 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="name"
                            className="absolute text-sm text-gray-500 duration-300 
                                transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                                peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                                peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-[#db4444]"
                        >
                            Name
                        </label>
                    </div>

                    {/* Email */}
                    <div className="relative z-0 w-full group">
                        <input
                            type="email"
                            id="email"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 
                                bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
                                focus:border-[#db4444] focus:outline-none focus:ring-0 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="email"
                            className="absolute text-sm text-gray-500 duration-300 
                                transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                                peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                                peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-[#db4444]"
                        >
                            Email Address
                        </label>
                    </div>

                    {/* Password */}
                    <div className="relative z-0 w-full group">
                        <input
                            type="password"
                            id="password"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 
                                        bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
                                        focus:border-[#db4444] focus:outline-none focus:ring-0 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="password"
                            className="absolute text-sm text-gray-500 duration-300 
                                    transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                                    peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                                    peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-[#db4444]"
                        >
                            Password
                        </label>
                    </div>

                    {/* Confirm Password */}
                    <div className="relative z-0 w-full group">
                        <input
                            type="password"
                            id="confirmPassword"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 
                                    bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
                                    focus:border-[#db4444] focus:outline-none focus:ring-0 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="confirmPassword"
                            className="absolute text-sm text-gray-500 duration-300 
                                        transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                                        peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                                        peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-[#db4444]"
                        >
                            Confirm Password
                        </label>
                    </div>

                    {/* Phone */}
                    <div className="relative z-0 w-full group">
                        <input
                            type="tel"
                            id="phone"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 
                                        bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
                                        focus:border-[#db4444] focus:outline-none focus:ring-0 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="phone"
                            className="absolute text-sm text-gray-500 duration-300 
                                        transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                                        peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                                        peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-[#db4444]"
                        >
                            Phone
                        </label>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-[#db4444] text-white py-2.5 rounded-lg 
                                    text-sm font-medium hover:bg-[#e72727] transition"
                    >
                        Submit
                    </button>

                </form>
                <div className="py-4 text-gray-600">
                    <p>Already have account? <span className="border-b-2 border-[#db4444] text-[#db4444] ml-1"><NavLink to="/login" >Login</NavLink></span> </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
