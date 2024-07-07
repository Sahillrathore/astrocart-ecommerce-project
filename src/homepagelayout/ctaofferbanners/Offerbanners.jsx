import React from 'react'

const Offerbanners = () => {
  return (
    <section>
        <div className="offer-banners-container flex sm:flex-row flex-col sm:mx-8 xs:mx-2 mx-0 justify-between py-12 ">
            <div className="image1 imgg relative">
                <img src="https://static.wixstatic.com/media/c22c23_e140bfa8cd6f4cb2ac5ee6e204f64073~mv2.jpg/v1/fill/w_620,h_421,al_t,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_e140bfa8cd6f4cb2ac5ee6e204f64073~mv2.jpg" alt="" />

                <div className="banner-text text-zinc-100 absolute flex flex-col md:gap-4 sm:gap-1 gap-4 sm:top-2 top-4 sm:left-16 left-4 capitalize">
                    <p className='text-lg'>Hot summer deals </p>
                    <p className='lg:text-5xl sm:text-4xl text-2xl sm:w-2/3 font-medium leading-'>up to 35% off </p>
                    <p className='text-lg'>on selected brands</p>

                    <button className='bg-white text-black w-24 border border-transparent hover:border-white hover:bg-transparent hover:text-white transition-colors rounded-3xl py-2'>Shop</button>
                </div>
            </div>
            <div className="image2 imgg relative sm:block hidden">
                <img src="https://static.wixstatic.com/media/c837a6_d84a631864a442a496670bc2d787c6a0~mv2.jpg/v1/fill/w_620,h_421,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_d84a631864a442a496670bc2d787c6a0~mv2.jpg" alt="" />

                <div className="banner-text text-zinc-100 absolute flex flex-col md:gap-4 sm:gap-1 top-2 left-16 capitalize">
                    <p className='text-lg'>Hot summer deals </p>
                    <p className='lg:text-5xl text-4xl w-2/3 font-medium leading-'>up to 35% off </p>
                    <p className='text-lg'>on selected brands</p>

                    <button className='bg-white text-black w-24 border border-transparent hover:border-white hover:bg-transparent hover:text-white transition-colors rounded-3xl py-2'>Shop</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Offerbanners