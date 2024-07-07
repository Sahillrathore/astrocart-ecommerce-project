import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import img from '../../assets/hero-banner-image.png'

// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';

const HeroSection = () => {
    return (
        <>
            <section className='md:h-[85vh] sm:h-[58vh] xs:h-[58vh] xxs:h-[52vh] xmin:h-[42vh]'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    slidesPerView={1}
                    autoplay={{
                        delay: 6000,
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
                        <div className="hero flex md:flex-row flex-co w-full h-full bg-gradient-to-t from-blue-500 to-indigo-50 sm:justify-around xs:justify-around xxs:justify-between xmin:justify-between">
                            <div className="hero-left flex flex-col md:justify-center xxs:pl-4 xmin:pl-2 justify-end gap-2 md:pb-0 pb-8">

                                <p className='sm:text-lg xs:text-lg xxs:text-base text-sm text-red-500 font-semibold sm:mb-4 xs:mb-4 mb-2 '><i className="fa-solid fa-award"></i> Best Quality Assured</p>
                                <div className="banner-title md:text-5xl sm:text-4xl xs:text-3xl xxs:text-2xl xmin:text-xl sm:font-bold xs:font-bold xxs:font-semibold ">
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
                            </div>

                            <div className="hero-right md:block flex items-end">
                                <img src={img} alt="" className='md:h-full sm:h-72 xs:h-72 xxs:h-64 xmin:h-52' />
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="hero flex md:flex-row flex-co w-full h-full bg-gradient-to-t from-yellow-400 to-orange-200 sm:justify-around xs:justify-around xxs:justify-between xmin:justify-between">
                            <div className="hero-left flex flex-col md:justify-center xxs:pl-4 xmin:pl-2 justify-end gap-2 md:pb-0 pb-8">

                                <p className='sm:text-lg xs:text-lg xxs:text-base text-sm text-red-500 font-semibold sm:mb-4 xs:mb-4 mb-2 '><i className="fa-solid fa-award"></i> Best Quality Assured</p>
                                <div className="banner-title md:text-5xl sm:text-4xl xs:text-3xl xxs:text-2xl xmin:text-xl sm:font-bold xs:font-bold xxs:font-semibold ">
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
                            </div>

                            <div className="hero-right md:block flex items-end">
                                <img src={img} alt="" className='md:h-full sm:h-72 xs:h-72 xxs:h-64 xmin:h-52' />
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="hero flex md:flex-row flex-co w-full h-full bg-gradient-to-t from-pink-400 to-pink-100 sm:justify-around xs:justify-around xxs:justify-between xmin:justify-between">
                            <div className="hero-left flex flex-col md:justify-center xxs:pl-4 xmin:pl-2 justify-end gap-2 md:pb-0 pb-8">

                                <p className='sm:text-lg xs:text-lg xxs:text-base text-sm text-red-500 font-semibold sm:mb-4 xs:mb-4 mb-2 '><i className="fa-solid fa-award"></i> Best Quality Assured</p>
                                <div className="banner-title md:text-5xl sm:text-4xl xs:text-3xl xxs:text-2xl xmin:text-xl sm:font-bold xs:font-bold xxs:font-semibold ">
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
                            </div>

                            <div className="hero-right md:block flex items-end">
                                <img src={img} alt="" className='md:h-full sm:h-72 xs:h-72 xxs:h-64 xmin:h-52' />
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </section>
        </>
    )
}

export default HeroSection