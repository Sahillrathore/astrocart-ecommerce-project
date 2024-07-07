import axios from 'axios'
import React, { useEffect } from 'react'

const About = () => {

    useEffect(()=>{
        window.scroll(0,0);
    },[])

  return (
    <>
        <div className="flex justify-evenly gap-6 lg:gap-0 items-center p-6 pt-8 bg-zinc-100 about-container flex-col-reverse lg:flex-row dark:bg-gray-900">
            <div className="lg:w-1/3 w-full lg:block lg:gap-0 gap-8 lg:px-0 sm:px-4 md:flex about-txt">

                <div>
                    <h2 className='md:text-4xl text-2xl font-bold mb-2 text-red-600'>About Us</h2>
                    <p className='opacity-70 text-sm mb-4 dark:text-zinc-200 dark:opacity-80 block'>At TrendyCart, we believe in the power of convenience, choice, and exceptional service. Our journey began with a simple yet ambitious goal: to create an online shopping destination that offers an unparalleled experience for our customers.</p>
                </div>
                <div>
                    <h2 className='md:text-4xl text-2xl text-reddish mb-2 font-bold text-red-600'>Our Story</h2>
                    <p className='opacity-70 text-sm dark:text-zinc-200 dark:opacity-80'>Founded in 2024, TrendyCart quickly established itself as a trusted name in the world of online retail. What sets us apart is our unwavering commitment to quality, reliability, and innovation. With a team of dedicated professionals and a passion for exceeding expectations, we've curated a diverse range of products to cater to every need and preference.</p>
                </div>
            </div>
            
            <div className="about-image ">
                <img src="https://t4.ftcdn.net/jpg/01/08/34/53/360_F_108345358_mREIebrNXJM0iuAlxvEshj1j2QrhhzpK.jpg" alt=""
                className='lg:h-full lg:w-full'/>
            </div>
        </div>
        <div className="flex justify-evenly items-center p-6 pt-2 bg-zinc-100 about-container flex-col lg:flex-row dark:bg-gray-900 lg:gap-0 gap-6">
            
            <div className="about-image ">
                <img src="https://kayako.com/wp-content/uploads/2022/03/ecommerce-customer-satisfaction-trends.jpg" alt="" className='lg:max-h-96 lg:max-w-[520px] ' />
            </div>

            <div className="lg:w-1/3 w-full about-txt lg:block md:flex  lg:gap-0 gap-8 lg:px-0 sm:px-4">
                <div>
                    <h2 className='md:text-4xl text-2xl font-bold lg:mt-4 mb-2 text-reddish text-red-600'>What We Offer</h2>
                    <p className='opacity-70 text-sm mb-4 dark:text-zinc-200 dark:opacity-80'>Whether you're searching for the latest trends in fashion, cutting-edge gadgets, or everyday essentials, TrendyCart has you covered. Our carefully curated selection features top brands and exclusive offerings, ensuring that you find exactly what you're looking for, every time you visit.</p>
                </div>
                <div>
                    <h2 className='md:text-4xl text-2xl text-reddish mb-2 font-bold text-red-600'>Customer Satisfaction</h2>
                    <p className='opacity-70 text-sm dark:text-zinc-200 dark:opacity-80'>At TrendyCart, customer satisfaction is our top priority. From seamless browsing and secure transactions to prompt delivery and responsive customer support, we go above and beyond to ensure that your shopping experience is nothing short of exceptional.</p>
                </div>
            </div>
        </div>

        <div className="lol text-center p-4 pb-6 opacity-90 bg-zinc-100 dark:bg-gray-900 dark:text-zinc-400 dark:opacity-95">
            <h4>Thank you for choosing Us. We look forward to serve you!</h4>
        </div>
    </>
  )
}

export default About