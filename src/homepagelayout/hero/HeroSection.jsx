import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import img from '../../assets/hero-banner-image.png'
import womenFash from '../../assets/women_banner_fash_-_Copy-removebg.png'

// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import { NavLink } from 'react-router-dom';

const HeroSection = () => {
    return (
        <>
            {/* sm:h-[54vh] xs:h-[48vh] xxs:h-[40vh] xmin:h-[36vh] */}
            <section className='lg:h-[85vh] h-fit'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    slidesPerView={1}
                    autoplay={{
                        delay: 60080,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    // navigation={true}
                    modules={[Autoplay, Pagination,]}
                    className="mySwiper h-full"
                >

                    <SwiperSlide>
                        <div className="hero flex md:flex-row flex-co w-full h-full bg-gradient-to-l from-[#d6475b] to-white justify-between  lg:pl-20 md:pl-14 sm:pl-8 xs:pl-5 relative">
                            <div className="hero-left flex flex-col xxs:pl-4 xmin:pl-2 sm:py-0 xs:py-8 xxs:py-8 xmin:py-4 gap-2 justify-center ">

                                <p className='sm:text-lg xs:text-lg xxs:text-base text-sm text-red-500 font-semibold sm:mb-4 xs:mb-4 mb-2 '><i className="fa-solid fa-award"></i> Best Quality Assured</p>
                                <div className="banner-title sm:!leading-[4rem] md:text-5xl sm:text-4xl xs:text-3xl xxs:text-2xl xmin:text-xl sm:font-bold xs:font-bold xxs:font-semibold "
                                // style={{lineHeight}}
                                >
                                    <p className='text-blue-950'>Big Festive</p>
                                    <p className='lg:text-6xl md:text-5xl sm:text-4xl text-pink-600'>Fashion Sale</p>
                                    <p className='text-blue-950'>This Weekend</p>
                                </div>

                                <NavLink
                                    to='browse-categories'
                                    className="hero-btn flex bg-red-500 sm:w-40 xs:w-40 w-32 text-zinc-100 sm:text-base text-sm rounded-3xl py-2 justify-center items-center gap-1 sm:mt-8 xs:mt-8 mt-4 hover:bg-transparent hover:text-black transition-all ease-in border-transparent border hover:border-black active:scale-90 cursor-pointer">
                                    Top Products
                                    <img src="https://img.icons8.com/?size=24&id=85463&format=png" alt="..img" className='invert opacity-90 h-5 w-5' />
                                </NavLink>
                            </div>

                            <div className="hero-right justify-center rounded-tl-[33rem] rounded-bl-[11rem] flex sm:w-1/2 xs:w-1/2 items-end bg-[#d6475b]">
                                <img src={womenFash} alt="" className='lg:h-full sm:h-[28rem] xs:h-72 xxs:h-60 xmin:h-52' />
                            </div>

                            <div className="hero-banner-btn-cont absolute lg:top-20 top-12 left-[45%] border-yellow-400 border-2 rounded-full p-[5px] ">
                                <div
                                    className=' text-white font-semibold sm:leading-[1.25] sm:text-lg xs:text-sm text-xs md:w-24 sm:w-20 w-16 md:h-24 sm:h-20 h-16 md:px-1 sm:px-2 xs:px-0 px-2 pt-2 leading-5 text-center rounded-full bg-yellow-300'>up to <span className='font-bold md:text-3xl'>50%</span> off</div>
                            </div>
                            <div className='absolute sm:top-2 xs:-top-2 -top-5 md:left-20 sm:left-12 left-6 sm:text-6xl text-4xl'>
                                ....
                                ....
                            </div>

                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="hero flex md:flex-row flex-co w-full h-full bg-gradient-to-t from-blue-500 to-indigo-50 sm:justify-around xs:justify-around xxs:justify-between xmin:justify-between md:px-5">
                            <div className="hero-left flex flex-col xxs:pl-4 xmin:pl-2 sm:py-0 xs:py-8 xxs:py-8 xmin:py-4 gap-2 justify-center">

                                <p className='sm:text-lg xs:text-lg xxs:text-base text-sm text-red-500 font-semibold sm:mb-4 xs:mb-4 mb-2 '><i className="fa-solid fa-award"></i> Best Quality Assured</p>

                                <div className="banner-title sm:!leading-[4rem] md:text-5xl sm:text-4xl xs:text-3xl xxs:text-2xl xmin:text-xl sm:font-bold xs:font-bold xxs:font-semibold "
                                // style={{lineHeight}}
                                >
                                    <p className='text-blue-950'>One Stop</p>
                                    <p className='text-indigo-800'>Destination For</p>
                                    <p className='text-blue-950'>All your Needs</p>
                                </div>

                                <a
                                    href='#trending'
                                    className="hero-btn flex bg-red-500 sm:w-40 xs:w-40 w-32 text-zinc-100 sm:text-base text-sm rounded-3xl py-2 justify-center items-center gap-1 sm:mt-8 xs:mt-8 mt-4 hover:bg-transparent hover:text-black transition-all ease-in border-transparent border hover:border-black active:scale-90 cursor-pointer">
                                    Top Products
                                    <img src="https://img.icons8.com/?size=24&id=85463&format=png" alt="..img" className='invert opacity-90 h-5 w-5' />
                                </a>
                            </div>

                            <div className="hero-right md:block flex items-end">
                                <img src={img} alt="" className='lg:h-full sm:h-[28rem] xs:h-72 xxs:h-60 xmin:h-52' />
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="hero flex md:flex-row flex-co w-full h-full bg-gradient-to-t from-yellow-400 to-orange-200 sm:justify-around xs:justify-around xxs:justify-between xmin:justify-between relative">
                            {/* <div className="hero-left flex flex-col xxs:pl-4 xmin:pl-2 sm:py-0 xs:py-8 xxs:py-8 xmin:py-4 gap-2 justify-center ">

                                <p className='sm:text-lg xs:text-lg xxs:text-base text-sm text-red-500 font-semibold sm:mb-4 xs:mb-4 mb-2 '><i className="fa-solid fa-award"></i> Best Quality Assured</p>
                                <div className="banner-title sm:!leading-[4rem] md:text-5xl sm:text-4xl xs:text-3xl xxs:text-2xl xmin:text-xl sm:font-bold xs:font-bold xxs:font-semibold " 
                                // style={{lineHeight}}
                                >
                                    <p className=''>One Stop</p>
                                    <p className=''>Destination For</p>
                                    <p className=''>All your Needs</p>
                                </div>

                                <a
                                    href='#trending'
                                    className="hero-btn flex bg-red-500 sm:w-40 xs:w-40 w-32 text-zinc-100 sm:text-base text-sm rounded-3xl py-2 justify-center items-center gap-1 sm:mt-8 xs:mt-8 mt-4 hover:bg-transparent hover:text-black transition-all ease-in border-transparent border hover:border-black active:scale-90 cursor-pointer">
                                    Top Products
                                    <img src="https://img.icons8.com/?size=24&id=85463&format=png" alt="..img" className='invert opacity-90 h-5 w-5' />
                                </a>
                            </div> */}

                            {/* <div>
                                <button className='capitalize bg-pink-300 border-2 border-gray-700 px-6 py-4 rounded-lg font-bold hover:bg-white transition-colors bottom-2 left-[44.5%] absolute'>Shop Now</button>
                            </div> */}

                            <div className="hero-right md:block flex items-end">
                                <img src="https://static.vecteezy.com/system/resources/previews/006/645/733/non_2x/ad-banner-design-with-the-words-now-on-sale-electronic-product-advertising-design-free-vector.jpg" alt="" className='w-full lg:h-full sm:h-[28rem] xs:h-72 xxs:h-60 xmin:h-52' />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
        </>
    )
}

export default HeroSection