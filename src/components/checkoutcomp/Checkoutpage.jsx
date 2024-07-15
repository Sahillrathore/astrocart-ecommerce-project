import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import emailjs from '@emailjs/browser';

const Checkoutpage = () => {

    const cartItem = useSelector(state => state.cartItems);
    const cartValue = useSelector(state => state.cartValue);
    const [result, setResult] = useState([{naem:"sahil", age:21}]);


    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    const formSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);

        formData.append("access_key", "3201b543-5c29-4336-8cef-6972717e06c3");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            
            e.target.reset();
        } else {
            console.log("Error", data);
        }
    }

    return (
        <>

            <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
                <div className="px-4 pt-8">
                    <p className="text-xl font-medium">Order Summary</p>
                    <p className="text-gray-400">
                        Check your items. And select a suitable shipping method.
                    </p>
                    <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
                        {
                            cartItem.map((item) => (
                                <div className="flex flex-col rounded-lg bg-white sm:flex-row" key={item.title}>
                                    <img
                                        className="m-2 h-24 w-28 rounded-md border object-center"
                                        src={item.image}
                                        alt="pro_img"
                                    />
                                    <div className="flex w-full flex-col px-4 py-4">
                                        <span className="font-semibold">
                                            {item.title}
                                        </span>
                                        <div className='flex justify-between pr-5 text-gray-400'>
                                            <span>{item.category}</span>
                                            <span className=''>Qty : {item.proQty}</span>
                                        </div>
                                        <p className="text-md ">Rs. {item.price} </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>
                <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
                    <p className="text-xl font-medium">Payment Details</p>
                    <p className="text-gray-400">
                        Complete your order by providing your payment details.
                    </p>

                    <form
                        onSubmit={formSubmit}>

                        <label htmlFor="email" className="mt-4 mb-2 block text-sm font-medium">
                            Email
                        </label>
                        <div className="relative">
                            <input
                                type="email"
                                // id="email"
                                name="emailId"
                                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                placeholder="your.email@gmail.com"
                            />
                            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                    />
                                </svg>
                            </div>
                        </div>
                        <label
                            htmlFor="user-name"
                            className="mt-4 mb-2 block text-sm font-medium"
                        >
                            Name
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                id="username"
                                name="user-name"
                                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm  shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                placeholder="Your full name here"
                            />
                            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <label
                            htmlFor="cardno"
                            className="mt-4 mb-2 block text-sm font-medium"
                        >
                            CardDetails
                        </label>
                        <div className="flex">
                            <div className="relative w-7/12 flex-shrink-0">
                                <input
                                    type="number"
                                    id="card-no"
                                    name="card-no"
                                    className="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                    placeholder="xxxx-xxxx-xxxx-xxxx"
                                />
                                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                    <svg
                                        className="h-4 w-4 text-gray-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                                        <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                                    </svg>
                                </div>
                            </div>
                            <input
                                type="number"
                                // name="expiry"
                                className="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                placeholder="MM/YY"
                            />
                            <input
                                type="number"
                                // name="cardcv"
                                className="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                placeholder="CVC"
                            />
                        </div>
                        <label
                            htmlFor="billing-address"
                            className="mt-4 mb-2 block text-sm font-medium"
                        >
                            Billing Address
                        </label>
                        <div className="flex flex-col sm:flex-row">
                            <div className="relative flex-shrink-0 sm:w-7/12">
                                <input
                                    type="text"
                                    id="billing-address"
                                    name="city_address"
                                    className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                    placeholder="Street Address"
                                />
                                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                    <img
                                        className="h-4 w-4 object-contain"
                                        src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <input
                                type="text"
                                name="state_address"
                                className="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                placeholder="STATE"
                            />
                            <input
                                type="text"
                                name="zip_code"
                                className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                placeholder="ZIP"
                            />
                        </div>

                        {/* {
                            cartItem.map(prod => (
                                <div key={prod.title}>
                                    <input
                                        type="text"
                                        name="order_details_title"
                                        hidden
                                        readOnly
                                        value={result}
                                    />
                                    <input
                                        type="text"
                                        name="order_details"
                                        hidden
                                        readOnly
                                        value={prod.proQty}
                                    />
                                </div>
                            ))
                        } */}

                        <input type='submit' value="Submit" className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
                        />
                    </form>

                    {/* Total */}
                    <div className="mt-6 border-t border-b py-2">
                        <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-900">Subtotal</p>
                            <p className="font-semibold text-gray-900">Rs. {cartValue}</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-900">Shipping</p>
                            <p className="font-semibold text-gray-900">FREE</p>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900">Total</p>
                        <p className="text-2xl font-semibold text-gray-900">Rs. {cartValue}</p>
                    </div>

                </div>
            </div>

        </>

    )
}

export default Checkoutpage