import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import fetchDataFromApi from '../../utils/api';
import PulseLoader from "react-spinners/PulseLoader";
import data from '../../../public/serverData/data.json';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../utils/store/slices/cartslice';



const Singleproductview = () => {

    const {slug} = useParams();
    // console.log(slug);
    const [singleProduct, setSingleProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    useEffect(()=>{
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 500);
        window.scroll(0,0);

        setSingleData();
    },[])

    const setSingleData = () => {
        data.productsData.map((item) => (
            item.slug === slug ? setSingleProduct(item) : ''
        ))
    }
    
    const addProductToCart = (singleProduct) => {
        dispatch(addToCart(singleProduct));
    }
    return (
        <>
        {
            loading ? 
            <div className="loader w-screen flex h-screen items-center justify-center">
                <PulseLoader color="#d63636" />
            </div>
            :
            ''
        }
        <section className="text-gray-600 body-font overflow-hidden">
        
            
            <div className="container px-5 py-8 mx-auto bg-white">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img
                        alt="ecommerce"
                        className="lg:w-1/2 w-full lg:h-auto object-cover object-center rounded"
                        src={singleProduct?.image}
                    />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">
                            {singleProduct?.category}
                        </h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                            {singleProduct?.title}
                        </h1>

                        <div className='flex my-6 gap-6'>
                            <span className=''> <span className='text-blue-600'>
                                {singleProduct?.rating}
                            </span> Rating</span>
                            <span className=''><span className='text-blue-600'>
                                {singleProduct?.reviews}
                            </span> Reviews</span>
                        </div>
                        
                        <p className="leading-relaxed text-gray-500">
                            {singleProduct?.description}
                        </p>
                        <div className="flex mt-6 items-center pb-3 border-b-2 border-gray-100 mb-2">
                           
                           {
                            singleProduct?.category != "electronics"? 
                            <div className="flex items-center">
                                <span className="mr-6">Size</span>
                                <div className="relative">
                                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                                        <option>SM</option>
                                        <option>M</option>
                                        <option>L</option>
                                        <option>XL</option>
                                    </select>
                                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            className="w-4 h-4"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M6 9l6 6 6-6" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            : ''
                           }
                        </div>
                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-gray-900">
                                Rs. {singleProduct?.price}
                            </span>
                            <button
                            className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                            onClick={()=>{addProductToCart(singleProduct)}}
                            >
                                Add To Cart
                            </button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Singleproductview