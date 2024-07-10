import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import useProducts from '../../utils/productContext'
import iphoneImg from '../../assets/0x0-removebg-preview.png'
import './newarrival.css'

const NewArrivals = ({products}) => {


    const {category, setCategory} = useProducts();
    const navigate = useNavigate();

    const handler = () => {
        setCategory("newProducts")
        navigate('/product-categories')
    }
  return (
    <section className=''>
        <div className="new-arrivals-section mt-8 bg-white py-12 
        sm:mx-8 xs:mx-2 mx-0 sm:px-8 px-4 ">
            <div className="featured-title-container flex flex-col items-center mb-8">
                <h2 className='uppercase sm:text-3xl text-2xl font-semibold mb-2 text-zinc-800'>new arrivals</h2>
                <hr className='bg-zinc-800 w-28 rounded-xl' style={{ height: "6px", }} />
            </div>
            
            <div className="flex md:flex-row flex-col justify-center w-full gap-8 items-center">
                <div className="new-arrivals-left md:w-1/2 ">
                    <div className="div bg-background">
                        <div className="left-text md:px-14 px-10 pt-8">
                            <h4 className='capitalize text-2xl font-semibold text-gray-800 mb-5'>IPhone 15 pro max 5G</h4>
                            <NavLink to={`/product/iphone-15-pro`} className='bg-blue-600 rounded-md text-sm px-6 py-2 transition-colors text-white hover:bg-transparent border-transparent hover:border-blue-600 border hover:text-blue-600'>Shop Now</NavLink>
                        </div>
                        <img src={iphoneImg} alt="" className='' />
                    </div>
                </div>

                <div className="new-arrivals-right md:w-1/2">
                    <div className="right-pro-container flex md:flex-col lg:pr-16 md:gap-0 sm:gap-4 gap-2 md:justify-around h-full">

                        {
                            products?.map((item) => (
                                item?.subcategory === 'new'?

                                <div key={item.slug} className="product-card rounded-md border border-gray-300 bg-white p-4 flex md:flex-row flex-col gap-4 sm:mb-4 md:w-full w-36 shadow-slate-200 shadow-md cursor-pointer" onClick={handler}>
                                    <img src={item.image} alt="" className='h-28' />

                                    <div className="text flex flex-col gap-3 justify-center">
                                        <h3 className='xs:text-lg text-base text-gray-700 '>{item?.title}</h3>
                                        <div className="stars text-yellow-400 xs:text-base text-sm">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <span className='font-semibold'>Rs.{item?.price}</span>
                                    </div>
                                </div>
                                : ''
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default NewArrivals