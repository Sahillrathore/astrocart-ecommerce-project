import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import PulseLoader from "react-spinners/PulseLoader";

import useProducts from '../../utils/productContext'
import Cardslayout from '../../homepagelayout/featuredlayout/Cardslayout';
import bannerImg from '../../assets/banner bg.jpg'
import newImg from '../../assets/newarrivalimg.jpg'
import NewArrivals from '../../homepagelayout/newarrivals/NewArrivals';

const ProductCategory = () => {
    const [loading, setLoading] = useState(false);

    const {category, setCategory, productsData} = useProducts();

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 500);
        // console.log(category);
        window.scrollTo(0, 0);
        
    }, [])
    return (
        <>
        {
            loading ? 
            <div className="loader w-screen flex h-screen items-center justify-center">
                <PulseLoader color="#d63636" />
            </div>
            :
        
            category === "popularProducts" ?
                <div className="">
                    <div className="wrapper bg-gray-5 py-6 md:px-8 sm:px-4 xs:px-2 px-0">
                        <div className="navigation-on-popular flex justify-between  mb-5 gap-3 sm:px-0 xs:px-0 px-2 items-center text-gray-800">
                            <span className='sm:text-2xl font-medium xs:text-xl text-base'>
                                <NavLink to='/'>Home </NavLink>
                                /
                                <NavLink to='' className='font-semibold'> Popular</NavLink></span>
                            <span className='text-sm md:w-fit w-1/2'>Most loved products by the shoppers from all the categories</span>
                        </div>

                        <div className="product-cards bg-white">
                            <div className='cards-container md:container flex flex-wrap sm:gap-5 xs:gap-2 gap-1 justify-center items-center bg-zinc-00 sm:px-4 py-8' >
                                {
                                    productsData?.map((item) => (

                                        item.reviews > 200?
                                        <NavLink to={`/product/${item?.slug}`} key={item.slug}>
                                            <Cardslayout title={item.title} description={item.description} price={item.price} image={item.image} />
                                        </NavLink>
                                        : ''
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>

            : category === "newProducts" ?
                <>
                {/* <div className="text-2xl font-medium mb text-gray-800 py-6 px-8">
                    <span><NavLink to='/'>Home </NavLink></span>
                            /
                    <span className='font-semibold'><NavLink to=''> New</NavLink></span>
                </div> */}

                <div className="new-page-banner flex flex-row-reverse justify-between lg:w-full sm:h-56 xs:h-56 overflow-hidden m-auto relative" style={{backgroundImage: `url(${bannerImg})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover"}} >
                    {/* <img src={bannerImg} alt="" className='w-full h-72' /> */}

                    <span className=' font-bold text-gray-800 inline-block w-full capitalize sm:p-6 xs:p-5 p-3 sm:pl-6 xs:pl-6 pl-4'>
                        <span className='sm:text-[#CC0001] xs:text-[#CC0001] block sm:mb-3 mb-2 sm:text-3xl text-2xl'>Discover the latest trends!</span>
                        <span className='md:text-2xl sm:text-lg  text-zinc-700 block font-semibold'> Explore our new arrivals and elevate your style with the freshest picks.</span>
                        <span className='text-2xl block bg-red-500 text-zinc-50 w-fit rounded-md px-4 mt-4'> Slay the trend</span>
                    </span>

                    <div className="banner-img  rounded-r-full relative sm:block xs:block hidden">
                        <img src={newImg} alt="" className='h-64 w-80'/>
                    </div> 
                </div> 
                
                <div className='flex flex-row flex-wrap items-center justify-center sm:gap-5 xs:gap-2 gap-1 sm:px-4 px-2 py-8 bg-white'>
                
                    {productsData.map((item) => (
                        item.subcategory == "new" &&
                        <NavLink
                        to={`/product/${item?.slug}`}
                        key={item.slug}
                        >
                            <Cardslayout title={item.title} description={item.description} price={item.price} image={item.image}/>

                        </NavLink>

                ))}
                </div>
                </>
            : ""
        }
        </>
    )
}

export default ProductCategory