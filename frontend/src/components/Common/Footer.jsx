import React from 'react'
import { Link } from "react-router-dom"
import { FaFacebook } from "react-icons/fa"
import { FaInstagramSquare } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"

const Footer = () => {
  return (
    <footer className='border-t py-12 bg-lime-50'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-5 lg:px-0'>
            <div>
                <h3 className='text-lg text-gray-900 mb-5'>Newsletter</h3>
                <p className='text-gray-700 mb-5'>To Know about online offers and new products. </p>
                <p>Subscribe and Order Now.</p>
                {/**Newsletter Form */}
                <form className='flex'>
                    <input type="email" placeholder='Enter your email' className='p-3 w-full text-sm border-t border-l border-b border-gray-500 rounded-l-md 
                    focus:outline-none focus:ring-2 focus:ring-gray-600 transition-all' />
                    <button type='submit' className='bg-black text-white px-6 py-3 text-sm rounded-r-md transition-all hover:text-gray-400'>Subscribe</button>
                </form>
            </div>

            {/**Shop link */}
            <div>
              <h3 className="text-lg text-gray-900 mb-4">Shop</h3>
              <ul className='space-y-2 text-gray-800'>
                <li>
                  <Link to="#" className='hover:text-gray-600 transition-colors'>Men's Top Wear</Link>
                </li>

                <li>
                  <Link to="#" className='hover:text-gray-600 transition-colors'>Women's Top Wear</Link>
                </li>

                <li>
                  <Link to="#" className='hover:text-gray-600 transition-colors'>Men's Bottom Wear</Link>
                </li>

                <li>
                  <Link to="#" className='hover:text-gray-600 transition-colors'>Women's Bottom Wear</Link>
                </li>
              </ul>
            </div>
            
          {/**Support link */}
          <div>
              <h3 className="text-lg text-gray-900 mb-4">Support</h3>
              <ul className='space-y-2 text-gray-800'>
                <li>
                  <Link to="#" className='hover:text-gray-600 transition-colors'>Contact Us</Link>
                </li>

                <li>
                  <Link to="#" className='hover:text-gray-600 transition-colors'>About Us</Link>
                </li>

                <li>
                  <Link to="#" className='hover:text-gray-600 transition-colors'>FAQs</Link>
                </li>

                <li>
                  <Link to="#" className='hover:text-gray-600 transition-colors'>Features</Link>
                </li>
              </ul>
            </div>
            
            {/**Follow us */}
            <div>
              <h3 className='text-lg text-gray-800 mb-4'>Follow Us</h3>
              <div className='flex items-center space-x-5 mb-6'>
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
              <a href='' className='text-lg text-gray-800 mb-4'>Call Us : +91 9883986698</a>
            </div>

        </div>
       
    </footer>
  )
}

export default Footer