import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import cartslice from '../../utils/store/slices/cartslice';
import useNavContext from '../../utils/context/navContext';
import Login from '../loginpage/Login';
import useIsLogin from '../../utils/context/loginContext';

const Header = ({ login, setLogin }) => {

  const cartQty = useSelector(state => state.cartQty);
  const navigate = useNavigate();
  const loginNavigate = useNavigate();
  const { navToggle, setNavToggle } = useNavContext();

  const { loginUsername, setLoginUsername } = useIsLogin();

  const cartHandler = () => {
    navigate("/cart")
    // setNavToggle(!navToggle);
  }
  return (
    <nav className='sticky top-0 backdrop-blur-sm bg-white/80 z-[100]'>
      <div className="nav-container flex sm:px-8 px-4 py-4 justify-between items-center shadow-sm shadow-black/15">
        <NavLink className="logo md:text-2xl text-xl text-red-500 font-black"
          to='/'
        >AstroCart.</NavLink>

        <div
          className={`nav-links lg:block  ${navToggle ? "absolute right-0 top-0 w-72 bg-gray-800/90  h-screen p-12 pt-16" : "hidden"}`}

        >
          <ul className='flex gap-4 lg:flex-row flex-col'>
            <li>
              <NavLink
                to='/'
                className={({ isActive }) => `${isActive ? "text-red-500 border-b-2 border-red-300" : "lg:text-zinc-500 text-zinc-100"}  p-1`}

              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='about'
                className={({ isActive }) => `${isActive ? "text-red-500 border-b-2 border-red-300" : "lg:text-zinc-500 text-zinc-100"} p-1`}

              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to='contact'
                className={({ isActive }) => `${isActive ? "text-red-500 border-b-2 border-red-300" : "lg:text-zinc-500 text-zinc-100"}  p-1 pr-2`}

              >
                Contact
              </NavLink>
            </li>
            <li className=''>
              <NavLink
                to='browse-categories'
                className={({ isActive }) => `${isActive ? "text-red-500 border-b-2 border-red-300" : "lg:text-zinc-500 text-zinc-100"}  p-1 pr-2`}

              >
                Categories
              </NavLink>
            </li>
          </ul>
        </div>

        <div className={`nav-actions lg:flex items-center gap-2
        ${navToggle ? "absolute right-[5.4rem] top-52 py-5 px-1 flex z-20" : "hidden"}`}
        >
          <div
            className="cart flex w-10 items-center gap-1 cursor-pointer"
            onClick={cartHandler}
          >
            <i className="fa-solid fa-cart-shopping lg:text-zinc-800 text-zinc-200 text-xl"></i>
            <span className='lg:text-inherit text-zinc-200'>{cartQty}</span>

          </div>

          {
            loginUsername.length >= 2 ?
              <div className={`flex gap-[3px] text-xs lg:text-black text-white lg:w-fit w-28 `}>
                <span className='lg:hidden'>{loginUsername}</span>
                <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" alt="" className="h-6 rounded-full" />
              </div>
              :
              <div className="login flex border-gray-500 border items-center lg:bg-transparent bg-red-500 rounded-2xl pr-1"
                onClick={() => setLogin(!login)}
              >
                <button className='lg:text-zinc-600 text-zinc-200 text-center px-2 py-1'>Login
                  <i className={`fa-regular fa-user ${navToggle ? "text-zinc-200" : ""} pl-1`}></i>
                </button>

              </div>

          }
        </div>

        <div
          className={`nav-toggle lg:hidden z-50`}
          onClick={() => { setNavToggle(!navToggle) }}
        >
          {
            navToggle ?
              <i className="fa-solid fa-xmark text-zinc-100 text-xl cursor-pointer pr-2"></i>
              :
              <span className='p-2 px-3 cursor-pointer bg-red-500 text-zinc-100 rounded-full' >|||</span>
          }
        </div>
      </div>

      <div
        className={`side-nav absolute transition-all ${navToggle ? " right-0 top-0 w-72 bg-black/60 h-screen p-12 pt-16" : "hidden"}`}
        style={{boxShadow: "5px 0px 13px 7px black"}}
      >
        <ul className={`flex gap-4 lg:flex-row flex-col`}>
          <li>
            <NavLink
              to='/'
              onClick={() => (setNavToggle(!navToggle))}
              className={({ isActive }) => `${isActive ? "text-red-500 border-b-2 border-red-300" : "lg:text-zinc-500 text-zinc-100"}  p-1`}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='about'
              onClick={() => (setNavToggle(!navToggle))}
              className={({ isActive }) => `${isActive ? "text-red-500 border-b-2 border-red-300" : "lg:text-zinc-500 text-zinc-100"} p-1`}

            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to='contact'
              onClick={() => (setNavToggle(!navToggle))}
              className={({ isActive }) => `${isActive ? "text-red-500 border-b-2 border-red-300" : "lg:text-zinc-500 text-zinc-100"}  p-1 pr-2`}

            >
              Contact
            </NavLink>
          </li>
          <li className=''>
            <NavLink
              to='browse-categories'
              onClick={() => (setNavToggle(!navToggle))}
              className={({ isActive }) => `${isActive ? "text-red-500 border-b-2 border-red-300" : "lg:text-zinc-500 text-zinc-100"}  p-1 pr-2`}

            >
              Categories
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
