import React, { useEffect, useState } from 'react'
import PulseLoader from "react-spinners/PulseLoader";

import Contactbox from '../../contactboxes/Contactbox';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

const Contact = () => {
    
    const [loading, setLoading] = useState(false);
    
    const notify = (e) => {
        toast.success('🦄 Message Sent!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            // transition: Bounce,
            });
    };

    useEffect(() => {
        window.scroll(0, 0);

        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, [])

    const formHandler = (e) => {
        e.preventDefault();
        e.target.reset();
    }

    return (
        <>

            <div
            className={`loader w-screen flex h-[90vh] items-center justify-center ${loading ? "block" : "hidden"}`}
            >
                <PulseLoader color="#d63636" />
            </div>

            <ToastContainer 
            draggable
            />
            <div className="contact">
                <div className="contact-banner bg-[#7CBAF7] h-48 w-full">
                    <img src="https://iifls.com/wp-content/uploads/2023/02/Contact-Us.jpg" alt="contact-banner"
                    className='h-full w-'
                    />
                </div>
                <div className="contact-container mt-8">

                    <div className="contact-method-boxes flex sm:gap-6 gap-0 justify-center">
                        <Contactbox title="Our Office" secTitle="New Delhi, India" icon="fa-solid fa-location-dot" />
                        <Contactbox title="Mail Us" secTitle="Trends@cart.com" icon="fa-solid fa-envelope" />
                        <Contactbox title="Call Us" secTitle="+91 9717334625" icon="fa-solid fa-phone-volume" />

                    </div>

                    <div className="contact-form flex mt-8 lg:w-3/4 sm:w-5/6 sm:px-0 px-4 md:items-stretch items-center md:flex-row flex-col m-auto">
                        <form action="" className='md:w-1/2 sm:w-3/4 w-full sm:bg-red-400 sm:px-16 px-8 py-14 z-10'
                        onSubmit={(e)=>{formHandler(e)}}
                        >
                            <h4 className='font-light text-2xl mb-2'>Contact Us</h4>

                            <input
                            type="text"
                            placeholder='Name'
                            name='name'
                            className='w-full mb-5 h-8 indent-3 rounded-lg focus:outline-indigo-400 sm:border-0 border-black/30 border sm:bg-white bg-blue-200/40 backdrop-blur-sm sm:placeholder:text-gray-400 placeholder:text-gray-700'
                            />

                            <input type="text" placeholder='Email' name='email' className='w-full mb-5 h-8 indent-3 rounded-lg focus:outline-indigo-400 sm:border-0 border-black/30 border sm:bg-white bg-blue-200/40 backdrop-blur-sm sm:placeholder:text-gray-400 placeholder:text-gray-700'/>

                            <select name="query-type" id="" className='w-full mb-5 h-8 rounded-lg focus:outline-indigo-400 sm:border-0 border-black/30 border sm:bg-white bg-blue-200/40 backdrop-blur-sm sm:text-gray-400 text-gray-700'>
                                <option value="">--select--</option>
                                <option value="order-query">Order Assistance</option>
                                <option value="delivery-query">Order Tracking</option>
                                <option value="order-query">Others</option>
                            </select>

                            <textarea name="contact-msg" className='h-24 p-2 w-full rounded-lg focus:outline-indigo-400 sm:border-0 border-black/30 border sm:bg-white bg-blue-200/40 backdrop-blur-sm sm:placeholder:text-gray-400 placeholder:text-gray-700' placeholder='Message'></textarea>

                            <button 
                            onClick={notify}
                            className='bg-blue-500 rounded-lg text-sm px-2 py-1 text-white '
                            >Send Message</button>
                        </form>

                        <div className="form-banner bg-white md:w-1/2 sm:w-3/4 w-full sm:relative absolute z-0">
                            <img src="https://www.snickbyseo.com/wp-content/uploads/2021/03/contactus.png"
                            alt=""
                            className='h-full min-h-[400px]'
                            />

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact