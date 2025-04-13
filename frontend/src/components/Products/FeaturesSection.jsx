import React from 'react'
import { MdLocalShipping } from "react-icons/md";
import { IoReturnUpBack } from "react-icons/io5";
import { GiCash } from "react-icons/gi";

const FeaturesSection = () => {
  return (
    <section className='py-10 px-5 bg-orange-100'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
            {/**Feature 1 */}
            <div className="flex flex-col items-center">
                <div className='p-4 rounded-full mb-4'>
                <MdLocalShipping className='text-xl' />
                </div>
                <h4 className="tracking-tighter mb-2">FREE Delivery</h4>
                <p className="text-gray-900 text-sm tracking-tighter">On All Orders</p>
            </div>

            {/**Feature 2 */}
            <div className="flex flex-col items-center">
                <div className='p-4 rounded-full mb-4'>
                <IoReturnUpBack className='text-xl' />
                </div>
                <h4 className="tracking-tighter mb-2">10 DAYS</h4>
                <p className="text-gray-900 text-sm tracking-tighter">Return Policy</p>
            </div>

            {/**Feature 3 */}
            <div className="flex flex-col items-center">
                <div className='p-4 rounded-full mb-4'>
                <GiCash className='text-xl' />
                </div>
                <h4 className="tracking-tighter mb-2">Cash On Delivery</h4>
                <p className="text-gray-900 text-sm tracking-tighter">Available</p>
            </div>

            
        </div>
    </section>
  )
}

export default FeaturesSection