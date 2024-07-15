import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart, removeFromCart } from '../../utils/store/slices/cartslice';
import { NavLink } from 'react-router-dom';

const Cart = () => {

    const cartItem = useSelector(state => state.cartItems);
    const dispatch = useDispatch();
    const cartValue = useSelector(state => state.cartValue);

    useEffect(()=>{
        window.scroll(0,0)
    },[])
    return (
        
        <section className="bg-white py-8 antialiased :bg-gray-900 md:py-8">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <h2 className="text-xl font-semibold text-gray-900 :text-white sm:text-2xl">
                    Shopping Cart
                </h2>

                {cartItem.length === 0 && <span className='text-lx font-light mt-4 inline-block'>Wow so empty! continue shopping</span>}
                <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                    <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                        <div className="space-y-6">
                            
                            {
                                cartItem.map((cartProducts) => (
                                    <div
                                    className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm :border-gray-700 :bg-gray-800 md:p-6"
                                    key={cartProducts.slug}
                                    >
                                        <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                                            <span className="cursor-default shrink-0 md:order-1">
                                                <img
                                                    className="h-20 w-20 :hidden"
                                                    src={cartProducts.image}
                                                    alt="product image"
                                                />
                                            </span>
                                            <label htmlFor="counter-input" className="sr-only">
                                                Choose quantity:
                                            </label>
                                            <div className="flex items-center justify-between md:order-3 md:justify-end">
                                                <div className="flex items-center">
                                                    <button
                                                        type="button"
                                                        id="decrement-button"
                                                        onClick={()=>{dispatch(removeFromCart(cartProducts))}}
                                                        data-input-counter-decrement="counter-input"
                                                        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 :border-gray-600 :bg-gray-700 :hover:bg-gray-600 :focus:ring-gray-700"
                                                    >
                                                        <svg
                                                            className="h-2.5 w-2.5 text-gray-900 :text-white"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 18 2"
                                                        >
                                                            <path
                                                                stroke="currentColor"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M1 1h16"
                                                            />
                                                        </svg>
                                                    </button>
                                                        <span className='px-2'>{cartProducts.proQty}</span>
                                                    <button
                                                        type="button"
                                                        onClick={()=>{dispatch(addToCart(cartProducts))}}
                                                        id="increment-button"
                                                        data-input-counter-increment="counter-input"
                                                        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 :border-gray-600 :bg-gray-700 :hover:bg-gray-600 :focus:ring-gray-700"
                                                    >
                                                        <svg
                                                            className="h-2.5 w-2.5 text-gray-900 :text-white"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 18 18"
                                                        >
                                                            <path
                                                                stroke="currentColor"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M9 1v16M1 9h16"
                                                            />
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div className="text-end md:order-4 md:w-32">
                                                    <p className="text-base font-bold text-gray-900 :text-white">
                                                        {cartProducts.price * cartProducts.proQty} Rs.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                                                <h6
                                                    className="text-base font-medium text-gray-900  :text-white"
                                                >
                                                    {cartProducts.title}
                                                </h6>
                                                <div className="flex items-center gap-4">
                                                    
                                                    <button
                                                        type="button"
                                                        className="inline-flex items-center text-sm font-medium text-red-600 hover:underline :text-red-500"
                                                        onClick={()=>{dispatch(deleteFromCart(cartProducts))}}
                                                    >
                                                        <svg
                                                            className="me-1.5 h-5 w-5"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                stroke="currentColor"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M6 18 17.94 6M18 18 6.06 6"
                                                            />
                                                        </svg>
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                            
                        </div>
                    </div>
                    <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                        <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm :border-gray-700 :bg-gray-800 sm:p-6">
                            <p className="text-xl font-semibold text-gray-900 :text-white">
                                Order summary
                            </p>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <dl className="flex items-center justify-between gap-4">
                                        <dt className="text-base font-normal text-gray-500 :text-gray-400">
                                            Original price
                                        </dt>
                                        <dd className="text-base font-medium text-gray-900 :text-white">
                                            {cartValue}
                                        </dd>
                                    </dl>
                                    <dl className="flex items-center justify-between gap-4">
                                        <dt className="text-base font-normal text-gray-500 :text-gray-400">
                                            Shipping
                                        </dt>
                                        <dd className="text-base font-medium text-green-600">
                                            Free
                                        </dd>
                                    </dl>
                                </div>
                                <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 :border-gray-700">
                                    <dt className="text-base font-bold text-gray-900 :text-white">
                                        Total
                                    </dt>
                                    <dd className="text-base font-bold text-gray-900 :text-white">
                                    {cartValue}
                                    </dd>
                                </dl>
                            </div>
                            <NavLink
                                to="/checkout-page"
                                className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-zinc-100 focus:outline-none focus:ring-4 focus:ring-green-300 bg-blue-600 hover:border-blue-500 hover:bg-white hover:text-blue-600 border transition-colors"
                            >
                                Proceed to Checkout
                            </NavLink>
                            <div className="flex items-center justify-center gap-2">
                                <span className="text-sm font-normal text-gray-500 :text-gray-400">
                                    {" "}
                                    or{" "}
                                </span>
                                <NavLink
                                    to='/'
                                    className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline :text-primary-500"
                                >
                                    Continue Shopping
                                    <svg
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 12H5m14 0-4 4m4-4-4-4"
                                        />
                                    </svg>
                                </NavLink>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Cart