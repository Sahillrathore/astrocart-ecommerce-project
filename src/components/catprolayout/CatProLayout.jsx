import React, { useEffect } from "react"
import useProducts from "../../utils/productContext"
import { NavLink } from 'react-router-dom'
import Cardslayout from "../../homepagelayout/featuredlayout/Cardslayout";


const CatProLayout = ({navTitle, introPara, categoryIs}) => {

    const {productsData, category, setCategory} = useProducts();

    return (
        <>
            <div className="">
                <div className="wrapper bg-gray-5 py-6 px-8">
                    <div className="text-2xl font-medium mb-5 text-gray-800 flex md:flex-row flex-col md:items-center justify-between">

                        <div>
                            <span><NavLink to='/'>Home </NavLink></span>
                            /
                            <span className='font-semibold'><NavLink to=''> {navTitle}</NavLink></span>
                        </div>

                        <div className='text-sm w-2/3'>{introPara}</div>
                    </div>

                    <div className="product-cards bg-white/70">
                        <div className='cards-container container flex flex-wrap gap-6 justify-center items-center bg-zinc-00 px-4 py-8' >
                            {
                                productsData?.map((item) => (

                                    item?.category == categoryIs &&
                                    <NavLink to={`/product/${item?.slug}`} key={item.slug}>
                                        <Cardslayout title={item?.title} price={item?.price} description={item?.description.slice(0, 60) + '...'} image={item.image} />
                                    </NavLink>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CatProLayout