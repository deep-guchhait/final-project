import React from 'react'
import { Link } from "react-router-dom"
import mensCollectionImg from "../../assets/Mens.png"
import womensCollectionImg from "../../assets/Womens.png"

const GenderCollectionSection = () => {
  return (
    <section className='py-16 px-4 lg:px-0'>
      <div className='container mx-auto flex flex-col md:flex-row gap-8'>

         {/**Men's Collection */}
         <div className='"relative flex-1'>
            <img src={mensCollectionImg} alt="Men's Collection" className='w-full h-[700px] object-cover rounded-lg' />
            <div className=" bottom-8 left-8 bg-neutral-500 bg-opacity-90 p-4 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-950 mb-3">Men's Collection</h2>
              <Link to="/collections/all?gender=Men" className="text-gray-900 underline" >Shop Now</Link>
            </div>
        </div>

        {/**Women's Collection */}
        <div className='"relative flex-1'>
            <img src={womensCollectionImg} alt="Women's Collection" className='w-full h-[700px] object-cover rounded-lg' />
            <div className="bottom-8 left-8 bg-neutral-500 bg-opacity-90 p-4 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-950 mb-3">Women's Collection</h2>
              <Link to="/collections/all?gender=Women" className="text-gray-900 underline" >Shop Now</Link>
            </div>
        </div>

       
      </div>
    </section>
  )
}

export default GenderCollectionSection