import React, { useContext } from 'react'
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiUser, FiLogOut } from "react-icons/fi";
import { NavLink, useNavigate } from 'react-router-dom';
import { Avatar, Button, Menu, MenuHandler, MenuItem, MenuList, Typography, } from "@material-tailwind/react";
import { UserContext } from '../../Context/UserContext';
import { CartContext } from '../../Context/CartContext';




const Navbar = () => {

    const navigate = useNavigate();

    let { userLogin, setUserLogin } = useContext(UserContext)
    let { cartCount } = useContext(CartContext)

    function logOut() {
        localStorage.removeItem("userToken")
        setUserLogin(null)
        navigate("/login")
    }


    return (


        <nav className="bg-white  dark:bg-gray-900 fixed  left-0 w-full  z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 shadow-md  ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <h1 className="text-2xl font-bold hover:text-[#DB4444] cursor-pointer ">Exclusive</h1>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    {userLogin !== null ? <>

                        {/* Cart Icon */}
                        <div className="relative mr-1">
                            <NavLink to="/cart">
                                <MdOutlineShoppingCart className="text-3xl hover:scale-105 hover:cursor-pointer" />
                            </NavLink>

                            {/* Badge */}
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                                {cartCount}
                            </span>
                        </div>

                        {/* Account Icon */}
                        <Menu>
                            <MenuHandler>
                                <Avatar
                                    src="/user.png"
                                    alt="User avatar"
                                    className="cursor-pointer w-8 h-8 hover:scale-105"
                                />
                            </MenuHandler>
                            <MenuList className="bg-white rounded-lg shadow-lg">
                                <MenuItem className="flex items-center gap-2 hover:bg-gray-100">
                                    <NavLink to="/account" className="flex">
                                        <FiUser />
                                        <Typography variant="small" className="font-medium">
                                            <span> Welcome Mahmoud</span>
                                        </Typography>
                                    </NavLink>
                                </MenuItem>
                                <hr className="my-2 border-gray-200" />
                                <MenuItem className="flex items-center gap-2 hover:bg-gray-100" onClick={logOut}>
                                    <FiLogOut />
                                    <Typography variant="small" className="font-medium"  >
                                        Sign Out
                                    </Typography>
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </> : null}

                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {userLogin !== null ? <>
                            <li>
                                <NavLink to="/" className="font-bold block py-2 px-3 text-white bg-[#DB4444] rounded-sm md:bg-transparent md:text-[#DB4444] md:p-0" aria-current="page">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/products" className="font-bold block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#DB4444] md:p-0 md:dark:hover:text-[#DB4444] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Products</NavLink>
                            </li>
                            <li>
                                <NavLink to="/allorders" className="font-bold block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#DB4444] md:p-0 md:dark:hover:text-[#DB4444] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Orders</NavLink>
                            </li>
                        </> : null}
                        <li>
                            <NavLink to="/about" className="font-bold block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#DB4444] md:p-0 md:dark:hover:text-[#DB4444] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className="font-bold block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#DB4444] md:p-0 md:dark:hover:text-[#DB4444] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</NavLink>
                        </li>
                        {userLogin === null ? <>
                            <li>
                                <NavLink to="/register" className="font-bold block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#DB4444] md:p-0 md:dark:hover:text-[#DB4444] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Sign Up</NavLink>
                            </li>
                            <li>
                                <NavLink to="/login" className="font-bold block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#DB4444] md:p-0 md:dark:hover:text-[#DB4444] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Login</NavLink>
                            </li></> : null}
                    </ul>
                </div>
            </div>
        </nav>


    )
}

export default Navbar
