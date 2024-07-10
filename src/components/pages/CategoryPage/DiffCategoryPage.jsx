import React, { useEffect, useState } from 'react'
import PulseLoader from "react-spinners/PulseLoader";

import catImg from '../../../assets/women-cat-banner.png'
import catImg2 from '../../../assets/mens-cat-banner.png'
import catImg3 from '../../../assets/electronic-cat.png'

import Cardslayout from '../../../homepagelayout/featuredlayout/Cardslayout';
import useProducts from '../../../utils/productContext';
import { NavLink } from 'react-router-dom';

import './diffcategory.css'

const DiffCategoryPage = () => {

    const { category, setCategory, productsData } = useProducts();
    const [loading, setLoading] = useState(false);
    // const {productCategory, setproductCategory} = useProducts([]);

    useEffect(() => {
        window.scroll(0, 0);

        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, [])
    return (

        <>

        <div
        className={`loader w-screen flex h-[90vh] items-center justify-center ${loading ? "block" : "hidden"}`}
        >
            <PulseLoader color="#d63636" />
        </div>

        <div className='py-6 sm:px-8 px-2 bg-white'>
            <div className='flex md:flex-row flex-col  xs:items-start items-center  lg:gap-6 gap-4 pb-6'>
                <div className='flex md:flex-col flex-row w-fit sm:gap-3 bg-gray-50 h-fit'>
                    <button className='bg-lime-400 xs:px-4 px-2 xs:py-3 py-1 xs:font-bold active:bg-lime-500 scale-95 hover:rounded-md sm:text-base text-sm' onClick={() => { setCategory("") }}>All</button>
                    <button className='bg-lime-400 xs:px-4 px-2 xs:py-3 py-1 xs:font-bold active:bg-lime-500 scale-95 hover:rounded-md sm:text-base text-sm' onClick={() => { setCategory("mens clothing") }}>Mens</button>
                    <button className='bg-lime-400 xs:px-4 px-2 xs:py-3 py-1 xs:font-bold active:bg-lime-500 scale-95 hover:rounded-md sm:text-base text-sm' onClick={() => { setCategory("womens clothing") }}>Womens</button>
                    <button className='bg-lime-400 xs:px-4 px-2 xs:py-3 py-1 xs:font-bold active:bg-lime-500 scale-95 hover:rounded-md sm:text-base text-sm' onClick={() => { setCategory("electronics") }}>Electronics</button>
                </div>

                <div className="imgs flex lg:gap-4 gap-[6px] relative">
                    {
                        [{img: catImg2, name: "Mens", cat: "mens clothing"}, {img: catImg, name: "Womens", cat: "womens clothing"}, {img: catImg3, name: "Electronics", cat: "electronics"}].map((item) => (

                            <div
                            key={item.name}
                            className='relative overflow-hidden h-fit transition-opacity cursor-pointer'
                            onClick={()=>{setCategory(item.cat)}}
                            >
                                <img src={item.img} alt="" className='md:h-56 sm:h-48 xs:h-40 xxs:h-28 xmin:h-24 rounded-md' />
                                
                                <div className="img-overlay absolute w-full bottom-0 h-0 text-white text-lg font-light text-center pt-2">
                                    {item.name}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="products-container flex md:justify-start justify-center flex-wrap sm:gap-6 xs:gap-2 gap-1 ">
                {
                    productsData?.map((product) => (
                        product.category == category ?
                        
                        <NavLink
                         key={product?.slug}
                         to={`/product/${product?.slug}`}
                         >
                            <Cardslayout image={product.image} title={product.title} description={product.description} price={product.price}/>

                         </NavLink>

                        :
                        category == "" ? 
                        <NavLink
                         key={product?.slug}
                         to={`/product/${product?.slug}`}
                         >
                            <Cardslayout image={product.image} title={product.title} description={product.description} price={product.price}/>

                         </NavLink>
                        :
                        ""
                    ))
                }
            </div>
        </div>

        </>
    )
}
export default DiffCategoryPage