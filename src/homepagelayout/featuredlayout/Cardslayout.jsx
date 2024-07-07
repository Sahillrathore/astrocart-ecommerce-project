import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../utils/store/slices/cartslice';
// import './card.css'

const Cardslayout = ({title, price, description, image, rating, reviews, proData}) => {

  const dispatch = useDispatch();
  
  return (
    <>
        <div className="card sm:w-64 xs:w-52 xxs:w-40 xmin:w-36 cursor-pointer rounded-t-lg overflow-hidden">
            <div className="card-img overflow-hidden relative border border-b-0">
              <img src={image} alt="" className='sm:h-72 xs:h-60 xxs:h-48 xmin:h-44 w-full hover:scale-105 transition-transform'/>

              {/* <button
              className="add-cart-btn absolute font-bold text-xl bottom-6 right-4 bg-gray-800 text-white"
              onClick={()=>{dispatch(addToCart(proData))}}
              >
                Add
              </button> */}
            </div>

            <div className="card-text pt-2">
                <h4 className='xs:mb-2 xmin:mb-1 sm:font-medium font-light xs:text-lg xxs:text-sm xmin:text-sm'>{title}</h4>
                {/* <p className='text-zinc-400 text-sm mb-2 mt-1'>{props.description}</p> */}
                <span className='xs:text-base xxs:text-sm xmin:text-sm'>Rs.{price}</span>
                
            </div>
        
        </div>
    </>
  )
}

export default Cardslayout