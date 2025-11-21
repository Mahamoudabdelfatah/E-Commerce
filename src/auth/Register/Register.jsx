import axios from "axios";
import { useFormik } from "formik";
import * as Yup from 'yup';
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { UserContext } from "../../Context/UserContext";
import { useContext } from "react";




const Register = () => {


    let navigate = useNavigate()
    const [apiError, setApiError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    let { setUserLogin } = useContext(UserContext)

    function handleRegister(formValues) {
        setIsLoading(true)
        axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, formValues)
            .then((response) => {
                if (response.data.message === "success") {
                    setIsLoading(false)
                    localStorage.setItem("userToken", response.data.token)
                    setUserLogin(response.data.token)
                    navigate("/")
                }

            })
            .catch((error) => {
                setIsLoading(false)
                setApiError(error?.response?.data?.message)
                console.log(error);

            })
    }

    let validationSchema = Yup.object().shape({

        name: Yup.string().min(3, "Name Length is 3").max(10, "Max is 10").required("Name is Required"),
        email: Yup.string().email("Email is Invalid").required("Email is Required"),
        phone: Yup.string().matches(/^01[0125][0-9]{8}$/, "Phone Not Egyption Number").required("Phone is Required"),
        password: Yup.string().matches(/^(?=.*[A-Z]).{6,}$/, "Invalid Password").required("password is Required"),
        rePassword: Yup.string().oneOf([Yup.ref('password')], "Password Not Match Pssword").required("rePassword is Required")

    })

    let formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            password: "",
            rePassword: "",
        },
        validationSchema: validationSchema,
        onSubmit: handleRegister,
    })





    return (
        <div className="min-h-screen flex justify-center items-start pt-5 pb-6 ">

            {/* LEFT IMAGE - ON MOBILE GOES DOWN
            <div className="w-full md:w-1/2 h-auto flex justify-center items-center p-4">
                <img
                    src="/Side Image.png"
                    alt="Side"
                    className="md:w-full md:h-full object-contain"
                />
            </div> */}


            {/* RIGHT FORM */}
            <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-md  ">
                <form className="space-y-6" onSubmit={formik.handleSubmit} >
                    <div className="py-4 text-gray-800">
                        <h1 className="text-3xl font-bold">Create an account</h1>
                        <p className="py-2">Enter your details below</p>
                    </div>
                    {apiError ? <h1 className='text-xl text-red-600 font-extrabold'>{apiError}</h1> : null}

                    {/* Name */}
                    <div className="relative z-0 w-full group">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 
                                bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
                                focus:border-[#db4444] focus:outline-none focus:ring-0 peer"
                            placeholder=" "
                            onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name}
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
                        {formik.errors.name && formik.touched.name ? <div className="p-4 mb-4 mt-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                            <span className="font-bold ">{formik.errors.name}</span>
                        </div> : null}
                    </div>

                    {/* Email */}
                    <div className="relative z-0 w-full group">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 
                                bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
                                focus:border-[#db4444] focus:outline-none focus:ring-0 peer"
                            placeholder=" "
                            onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email}
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
                        {formik.errors.email && formik.touched.email ? <div className="p-4 mb-4 mt-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                            <span className="font-bold">{formik.errors.email}</span>
                        </div> : null}
                    </div>

                    {/* Password */}
                    <div className="relative z-0 w-full group">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 
                                        bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
                                        focus:border-[#db4444] focus:outline-none focus:ring-0 peer"
                            placeholder=" "
                            onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password}
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
                        {formik.errors.password && formik.touched.password ? <div className="p-4 mb-4 mt-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                            <span className="font-bold">{formik.errors.password}</span>
                        </div> : null}
                    </div>

                    {/* Confirm Password */}
                    <div className="relative z-0 w-full group">
                        <input
                            type="password"
                            id="rePassword"
                            name="rePassword"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 
                                    bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
                                    focus:border-[#db4444] focus:outline-none focus:ring-0 peer"
                            placeholder=" "
                            onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.rePassword}
                        />
                        <label
                            htmlFor="rePassword"
                            className="absolute text-sm text-gray-500 duration-300 
                                        transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                                        peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                                        peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-[#db4444]"
                        >
                            Confirm Password
                        </label>
                        {formik.errors.rePassword && formik.touched.rePassword ? <div className="p-4 mb-4 mt-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                            <span className="font-bold">{formik.errors.rePassword}</span>
                        </div> : null}
                    </div>

                    {/* Phone */}
                    <div className="relative z-0 w-full group">
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 
                                        bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
                                        focus:border-[#db4444] focus:outline-none focus:ring-0 peer"
                            placeholder=" "
                            onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone}
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
                        {formik.errors.phone && formik.touched.phone ? <div className="p-4 mb-4 mt-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                            <span className="font-bold">{formik.errors.phone}</span>
                        </div> : null}
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-[#db4444] text-white py-2.5 rounded-lg 
                                    text-sm font-medium hover:bg-[#e72727] transition"
                    >
                        {isLoading ? <FaSpinner className="animate-spin mx-auto" /> : "Register"}
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


