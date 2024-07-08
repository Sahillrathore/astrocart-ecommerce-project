import React, { useEffect, useState } from 'react'
import PulseLoader from "react-spinners/PulseLoader";
import HeroSection from '../../../homepagelayout/hero/HeroSection'
import TrendingSec from '../../../homepagelayout/featuredsection/TrendingSec'
import CategoriesSection from '../../../homepagelayout/shopbycategory/CategoriesSection';
import Offerbanners from '../../../homepagelayout/ctaofferbanners/Offerbanners';
import PopularProducts from '../../../homepagelayout/popularproductssection/PopularProducts';
import NewArrivals from '../../../homepagelayout/newarrivals/NewArrivals';
import Footer from '../../footer/Footer';
import fetchDataFromApi from '../../../utils/api';
import data from '../../../../public/serverData/data.json'

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState();

  useEffect(()=>{
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    getProductsData();

  }, [])
  
  window.scroll(0,0);
  const getProductsData = () => {
    
    setProducts(data.productsData);
    // console.log(products);
  }
  return (
    <>
    {
      loading ? 
      <div className="loader w-screen flex h-screen items-center justify-center">
          <PulseLoader color="#d63636" />
      </div>
        
      :
      <>
        <HeroSection/>
        <CategoriesSection/>
        <TrendingSec products={products} />
        <PopularProducts products={products} />
        <NewArrivals products={products} />
        <Offerbanners/>
      </>
    }
    </>
  )
}

export default HomePage