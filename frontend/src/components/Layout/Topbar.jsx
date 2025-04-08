import React from 'react'
import { FaFacebook } from "react-icons/fa"
import { FaInstagramSquare } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"

const Topbar = () => {
  return (
    <div className='bg-orange-600 text-white'>
        <div className='container mx-auto flex justify-between items-center py-3 px-4'>
            <div className='hidden md:flex items-center space-x-5'>
                <a href="#" className='hover:text-gray-400'>
                    <FaFacebook className="h-5 w-5"/>
                </a>
                <a href="#" className='hover:text-gray-400'>
                    <FaInstagramSquare className="h-5 w-5"/>
                </a>
                <a href="#" className='hover:text-gray-400'>
                    <FaSquareXTwitter className="h-5 w-5"/>
                </a>
            </div>
            <div className="text-sm text-center flex-grow">
                <span>Get Free & Fast Delivery</span>
            </div>
            <div className="text-sm hidden md:block">
                <a href="tel:+919883986698" className='hover:text-gray-400'>+91 9883986698</a>
            </div>
        </div>
    </div>
  )
}

export default Topbar