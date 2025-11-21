import React from 'react'
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlineAccountCircle } from "react-icons/md";

import { NavLink, useNavigate } from 'react-router-dom';
import { Avatar, Button, Menu, MenuHandler, MenuItem, MenuList, Typography, } from "@material-tailwind/react";
import { Cog6ToothIcon, InboxArrowDownIcon, LifebuoyIcon, PowerIcon, UserCircleIcon, } from "@heroicons/react/24/solid";



const Navbar = () => {

    const navigate = useNavigate();

    // profile menu component
    const profileMenuItems = [
        {
            label: "My Profile",
            icon: UserCircleIcon,
        },
        {
            label: "Edit Profile",
            icon: Cog6ToothIcon,
        }, {
            label: "Inbox",
            icon: InboxArrowDownIcon,
        },
        {
            label: "Help",
            icon: LifebuoyIcon,
        },

        {
            label: "Sign Out",
            icon: PowerIcon,
        },
    ];

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const closeMenu = () => setIsMenuOpen(false);


    return (


        <nav className="bg-white  dark:bg-gray-900 fixed  left-0 w-full  z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 shadow-md  ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <h1 className="text-2xl font-bold hover:text-[#DB4444] cursor-pointer ">Exclusive</h1>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    {/* Cart Icon */}
                    <NavLink to="/cart" ><MdOutlineShoppingCart className='text-3xl cursor-pointer mr-2' /></NavLink>
                    {/* Account Icon */}
                    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
                        <MenuHandler>
                            <Button

                                className="flex items-center rounded-full p-0"
                            >
                                <MdOutlineAccountCircle className='text-3xl' />

                            </Button>
                        </MenuHandler>
                        <MenuList className="p-1">
                            {profileMenuItems.map(({ label, icon }, key) => {
                                const isLastItem = key === profileMenuItems.length - 1;
                                return (
                                    <MenuItem
                                        key={label}
                                        onClick={closeMenu}
                                        className={`flex items-center gap-2 rounded ${isLastItem
                                            ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                                            : ""
                                            }`}
                                    >
                                        {React.createElement(icon, {
                                            className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                                            strokeWidth: 2,
                                        })}
                                        <Typography
                                            as="span"
                                            variant="small"
                                            className="font-normal"
                                            color={isLastItem ? "red" : "inherit"}
                                        >
                                            {label}
                                        </Typography>
                                    </MenuItem>
                                );
                            })}
                        </MenuList>
                    </Menu>
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <NavLink to="/" className="font-bold block py-2 px-3 text-white bg-[#DB4444] rounded-sm md:bg-transparent md:text-[#DB4444] md:p-0" aria-current="page">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className="font-bold block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#DB4444] md:p-0 md:dark:hover:text-[#DB4444] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className="font-bold block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#DB4444] md:p-0 md:dark:hover:text-[#DB4444] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="/register" className="font-bold block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#DB4444] md:p-0 md:dark:hover:text-[#DB4444] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Sign Up</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    )
}

export default Navbar
