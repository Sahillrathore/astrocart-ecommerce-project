import axios from 'axios'
import Cardslayout from '../featuredlayout/Cardslayout';
import { NavLink } from 'react-router-dom';

const TrendingSec = ({ products }) => {

  
  return (
    <>
      <section
      id='trending'
      className='featured-section flex flex-col items-center justify-center gap-8 mt-8 bg-white sm:mx-8 xs:mx-2 mx-0 py-12'>

        <div className="featured-title-container flex flex-col items-center">
          <h2 className='uppercase sm:text-3xl text-2xl font-semibold mb-2 text-zinc-800'>featured products</h2>
          <hr className='bg-zinc-800 w-28 rounded-xl' style={{height: "6px",}}/>
        </div>

        <div className='cards-container sm:container flex flex-wrap sm:gap-6 xs:gap-2 gap-1 justify-center items-center bg-zinc-00' >
          {
            products?.map((item)=> (

              item?.subcategory === "featured"?
              <NavLink to={`/product/${item?.slug}`} key={item.slug}>
                <Cardslayout title={item?.title} price={item?.price} description={item?.description.slice(0,60)+'...'} image={item.image} proData={item} />
              </NavLink>
              :
              ''
            ))
          }
        </div>
      </section>
    </>
  )
}

export default TrendingSec