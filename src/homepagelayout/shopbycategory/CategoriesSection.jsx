import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useProducts from '../../utils/productContext'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const catData = [{ cat: "mens clothing", img: "https://www.thefashionisto.com/wp-content/uploads/2023/05/Mens-Trenchcoat.jpg" }, { cat: "womens clothing", img: "https://www.lushclothing.com/media/astr/homesections/cta/image/1/2/12.05-section2-right.jpg" }, { cat: "electronics", img: "https://t4.ftcdn.net/jpg/06/91/17/95/360_F_691179587_QSctAaNAIbYMjexjEV3w8clmvzcXmJuU.jpg" },

// { cat: "", img: "" },
// { cat: "mens clhing", img: "https://www.thefashionisto.com/wp-content/uploads/2023/05/Mens-Trenchcoat.jpg" },
// { cat: "mens clhothing", img: "https://t4.ftcdn.net/jpg/06/91/17/95/360_F_691179587_QSctAaNAIbYMjexjEV3w8clmvzcXmJuU.jpg" },
]

const CategoriesSection = () => {

    const { category, setCategory } = useProducts();
    const navigation = useNavigate();
    const handler = (cat) => {
        setCategory(cat);
        navigation("/browse-categories")
    }

    return (
        <>
            <section className='py-12 flex flex-col gap-8 mt-8 items-center bg-white sm:mx-8 xs:mx-2 mx-0' >

                <div className="featured-title-container flex flex-col items-center">
                    <h2 className='uppercase sm:text-3xl text-2xl font-semibold mb-2 text-zinc-800'>browse by categories</h2>
                    <hr className='bg-zinc-800 w-28 rounded-xl' style={{ height: "6px", }} />
                </div>

                <div className="category-container md:min-h-48 min-h-40 flex justify-center sm:w-8/12 xs:w-10/12 w-11/12">


                    <Swiper
                        
                        modules={[Navigation, Pagination]}
                        // navigation={true}
                        breakpoints={{
                            0: {
                                spaceBetween: 0,
                                slidesPerView: 3
                            },
                            300: {
                                spaceBetween: 0,
                                slidesPerView: 3
                            },
                            480: {
                                spaceBetween: 0,
                                slidesPerView: 3
                            },
                            680: {
                                spaceBetween: 10,
                                slidesPerView: 3
                            },
                            900: {
                                spaceBetween: 80,
                                slidesPerView: 3
                            },
                            1100: {
                                spaceBetween: 140,
                                slidesPerView: 3
                            }
                        }}

                        className=''
                    >

                        {catData.map((item) => (

                        <SwiperSlide key={item.cat}>

                            <div className={`cates md:h-40 md:w-40 sm:h-28 sm:w-28 xs:h-24 xs:w-24 w-20 h-20 border-gray-600  text-center relative ${item.cat==="" && "invisible w-12 m-0"}`}>
                                <img src={item.img}  className='h-full w-full rounded-full mb-2 hover:border-zinc-600 border-2 transition-color hover:shadow-xl' onClick={() => { handler(item.cat) }} />
                                <span className='font-semibold lg:text-base md:text-sm text-xs text-gray-800 uppercase'>{item.cat}</span>
                            </div>
                            
                        </SwiperSlide>
                        ))
                        }
                    </Swiper>


                    {/* <div className="cates h-40 w-40 border-gray-600  relative text-center"
                    >
                        <img src="" alt="womens clothing" className='h-full w-full rounded-full mb-2 hover:border-zinc-600 border-2 transition-shadow hover:shadow-2xl' onClick={handler}/>
                        <span className='font-semibold text-gray-800 uppercase'>womens</span>
                    </div>

                    <div className="cates h-40 w-40 border-gray-600  relative text-center"
                    >
                        <img src="" alt="electronics" className='h-full w-full rounded-full mb-2 hover:border-zinc-600 border-2 transition-shadow hover:shadow-2xl' onClick={handler}/>
                        <span className='font-semibold text-gray-800 uppercase'>electronics</span>
                    </div> */}
                </div>

            </section>
        </>
    )
}

export default CategoriesSection