import React, { useEffect, useState } from 'react'
import Hero from '../components/Layout/Hero'
import GenderCollectionSection from '../components/Products/GenderCollectionSection'
import ProductDetails from '../components/Products/ProductDetails'
import FeaturesSection from '../components/Products/FeaturesSection';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';

const Home = () => {
  const dispatch = useDispatch();
  const {products, loading, error} = useSelector((state) => state.products);
  const [bestSellerProduct, setBestSellerProduct] = useState(null);
  

  useEffect(() => { 
    // Fetch best seller product
    const fetchBestSeller = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/best-seller`);
        
        setBestSellerProduct(response.data);
        
        
      } catch (error) {
        console.error(error);
      }
    }
    fetchBestSeller();
  }, [dispatch]);

  return (
    <div>
        <Hero/>
        
        <h2 className='text-3xl text-center font-bold mt-8'>Collection</h2>
        <GenderCollectionSection/>

        {/**Best Seller */}
        <h2 className='text-3xl text-center font-bold mb-4'>Best Seller</h2>
        {bestSellerProduct ? (<ProductDetails productId={bestSellerProduct._id} />) : (
          <p className='text-center'>Loading Best Seller Product...</p>
        )}
        
        
        <FeaturesSection/>
    </div>
  )
}

export default Home