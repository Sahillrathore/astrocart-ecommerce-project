import axios from 'axios'
import Cardslayout from '../featuredlayout/Cardslayout';
import { NavLink } from 'react-router-dom';
import useProducts from '../../utils/productContext';

const PopularProducts = ({ products }) => {

    const {category, setCategory} = useProducts();

    return (
        <section className=''>
            <div className="products-section mt-8 bg-white py-12 sm:mx-8 xs:mx-2 mx-0">
                <div className="featured-title-container flex flex-col items-center mb-8">
                    <h2 className='uppercase sm:text-3xl text-2xl font-semibold mb-2 text-zinc-800'>popular products</h2>
                    <hr className='bg-zinc-800 w-28 rounded-xl' style={{ height: "6px", }} />
                </div>

                <div className="products-container flex sm:gap-5 xs:gap-2 gap-1 justify-center items-center flex-wrap">
                    {
                        products?.map((item) => (

                            item?.subcategory === "popular" ?
                                <NavLink to={`product/${item?.slug}`} key={item.slug}>
                                    <Cardslayout  title={item?.title} price={item?.price} description={item?.description.slice(0, 60) + '...'} image={item.image} />
                                </NavLink>
                                :
                                ''
                        ))
                    }
                </div>

                <div className="pro-sec-btn text-center mt-8">
                    <NavLink to='product-categories' className='bg-red-600/95 text-gray-100 hover:bg-black/80 transition-colors px-16 rounded-3xl py-2' onClick={()=>{setCategory("popularProducts")}}>View All</NavLink>
                </div>
            </div>
        </section>
    )
}

export default PopularProducts