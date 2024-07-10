import React from 'react'
import { NavLink } from 'react-router-dom'
import useProducts from '../../utils/productContext';

const Footer = () => {

    const {category, setCategory} = useProducts();

  return (
    <footer>
        <div className="footer-container bg-white" >
            <div className="newsletter-container flex flex-wrap lg:flex-row lg:gap-0 gap-5 items-center justify-between lg:py-12 py-8 border-b-2 sm:px-8 px-5 bg-gray-100">
                <div className="newsletter-heading">
                    <h5 className='text-2xl text-gray-800 font-bold mb-2'>Join us and get updates</h5>
                    <span className='text-gray-600'>Sign up for exclusive offers, latest news and latest updates</span>
                </div>
                <div className="newsletter-form sm:w-fit xs:w-fit xxs:w-fit justify- flex-wrap flex bg-white rounded-full overflow-hidden border border-black/40 border-r-0">
                    <input type="text" id="newsletterInp" placeholder='Your Email' className='outline-none indent-4 w-'/>
                    <button className='bg-red-600 sm:px-8 xs:px-4 px-2 py-2 sm:text-sm text-xs text-gray-200 rounded-full border-transparent border hover:border-red-600 hover:text-red-700 hover:bg-transparent transition-colors'>Submit</button>
                </div>
            </div>

            <div className="foot-links lg:py-12 py-8 flex items- justify-between px-8 lg:flex-row flex-col lg:gap-0 gap-6 bg-gray-100">
                <div className="foot-socials">
                    <NavLink className='text-3xl font-black text-red-500'
                    to='/'
                    >AstroCart</NavLink>

                    <div className="social-icons text-gray-300 text-2xl flex flex-wrap gap-2 max-w-52 mt-4">
                        <i className="fa-brands fa-instagram bg-pink-600 px-6 py-2 rounded-lg hover:rotate-6 transition-transform"></i>
                        <i className="fa-brands fa-x-twitter bg-black px-6 py-2 rounded-lg hover:-rotate-6 transition-transform"></i>
                        <i className="fa-brands fa-facebook-f bg-blue-600 px-7 py-2 rounded-lg hover:-rotate-6 transition-transform"></i>
                        <i className="fa-brands fa-google bg-red-500 px-6 py-2 rounded-lg hover:rotate-6 transition-transform"></i>
                    </div>
                </div>

                <div className="links">
                    <h5 className='text-xl mb-4 font-semibold text-gray-700' >Usefull Links</h5>
                    <ul className='text-gray-600 leading-7'>
                        <NavLink
                        to='about'
                        className='hover:text-gray-900 cursor-pointer block'>About Us</NavLink>
                        <NavLink
                        to='contact'
                        className='hover:text-gray-900 cursor-pointe block'>Contact Us</NavLink>
                        
                    </ul>
                </div>

                <div className="links">
                    <h5 className='text-xl mb-4 font-semibold text-gray-700' >Continue Shopping</h5>
                    <ul className='text-gray-600 leading-7'>
                        <li className='hover:text-gray-900 cursor-pointer'>
                            <NavLink
                            to='browse-categories'
                            className='hover:text-gray-900 cursor-pointe block'>Categories</NavLink>
                        </li>
                        <li className='hover:text-gray-900 cursor-pointer'>
                            <NavLink
                            to='product-categories'
                            onClick={()=>{setCategory("popularProducts")}}
                            className='hover:text-gray-900 cursor-pointe block'>Popular</NavLink>
                        </li>
                        <li className='hover:text-gray-900 cursor-pointer'>
                            <NavLink
                            to='product-categories'
                            onClick={()=>{setCategory("newProducts")}}
                            className='hover:text-gray-900 cursor-pointe block'>New Collection</NavLink>
                        </li>
                    </ul>
                </div>

                <div className="links">
                    <h5 className='text-xl mb-4 font-semibold text-gray-700' >Reach Us</h5>
                    <ul className='text-gray-600 leading-7'>
                        <li className='hover:text-gray-900 cursor-pointer'>
                            <i className="fa-solid fa-phone"></i> &nbsp;
                            +91 84643563
                        </li>
                        <li className='hover:text-gray-900 cursor-pointer'>
                            <i className="fa-regular fa-envelope"></i> &nbsp;
                            atro@cart.com
                        </li>
                        <li className='hover:text-gray-900 cursor-pointer'>
                            <i className="fa-solid fa-location-dot"></i> &nbsp;
                            232 2nd Street, North Delhi, Delhi.
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer