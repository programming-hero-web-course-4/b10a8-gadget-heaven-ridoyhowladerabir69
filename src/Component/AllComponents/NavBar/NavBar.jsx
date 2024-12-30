// import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { MdFavoriteBorder } from "react-icons/md";
// import { dataContext } from "../../context-api/DataProvider";

const NavBar = () => {
    const {pathname} = useLocation();
    // const data = useContext(dataContext);
    // const {addCart} = data;
    // console.log(addCart.length);

    const link = <>
        <li className={`text-lg hover:border-b-2
            ${pathname === "/" && "border-b-2 text-white font-semibold"}
            ${pathname === '/statistics' && 'text-gray-600 hover:border-b-gray-600'}
            ${pathname === '/dashboard' && 'text-gray-600 hover:border-b-gray-600'}
            `}><NavLink to="/">Home</NavLink>
        </li>
        <li className={`${pathname === '/' && 'text-white'} text-lg hover:border-b-2
            ${pathname === "/statistics" && "border-b-2 text-purple-600 border-purple-600 font-semibold"}
            ${pathname === '/dashboard' && 'text-gray-600 hover:border-b-gray-600'}
            `}><NavLink to="/statistics">Statistics</NavLink>
        </li>
        <li className={`${pathname === '/' && 'text-white'} text-lg hover:border-b-2
            ${pathname === '/statistics' && 'text-gray-600 border-gray-600'}
            ${pathname === "/dashboard" && "border-b-2 text-purple-600 border-purple-600 font-semibold"}`}><NavLink to="/dashboard">Dashboard</NavLink>
        </li>
    </>

  return (
    <div className={`navbar mx-auto lg:px-16 bg-purple-600 mt-4 rounded-t-xl ${pathname === '/statistics' && 'bg-white'} ${pathname === '/dashboard' && 'bg-white'} ${pathname === '/cart' && 'bg-white'} ${pathname === '/wishlist' && 'bg-white'}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content bg-slate-400 bg-opacity-90 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <a className={`invisible md:visible md:text-xl font-semibold 
            ${pathname === '/' && 'text-white'}
            ${pathname === '/statistics' && 'text-gray-700'}
            `}>Gadget Heaven</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-x-16 px-1">
          {link}
        </ul>
      </div>
      <div className="navbar-end gap-x-4">
        <div className={`bg-white rounded-full p-2
        ${pathname === '/statistics' && 'border-2'}
        ${pathname === '/dashboard' && 'border-2'}
        `}>
            <HiOutlineShoppingCart className="text-xl" />
        </div>
        <div className={`bg-white rounded-full p-2
        ${pathname === '/statistics' && 'border-2'}
        ${pathname === '/dashboard' && 'border-2'}`}>
            <MdFavoriteBorder  className="text-xl" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
