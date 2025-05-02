import React from 'react'
import { Link } from "react-router-dom"
import { useState } from "react"
import { FaUser,FaShoppingCart,FaSearch } from "react-icons/fa"
import { HiMiniXMark } from "react-icons/hi2"
import { MdMenu } from "react-icons/md"
import SearchBar from './SearchBar'
import CartDrawer from '../Layout/CartDrawer'

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [navDrawerOpen, setNavDrawerOpen] =useState(false);

    const toggleNavDrawer = () => {
        setNavDrawerOpen(!navDrawerOpen)
    }

    const toggleCartDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

  return (
    <>
    <nav className='mx-auto flex items-center justify-between py-4 px-6 bg-lime-50'>
        {/**Left - Logo */}
        <div>
            <Link to="/" className='text-2xl font-semibold'>
            SDSJ Fashion
            </Link>
        </div>
        {/**Center - Navigation Link */}
        <div className="hidden md:flex space-x-6">
            <Link to="/collections/all" className='text-gray-800 hover:text-black text-sm font-medium uppercase'>
            Men
            </Link>

            <Link to="#" className='text-gray-800 hover:text-black text-sm font-medium uppercase'>
            Women
            </Link>

            <Link to="#" className='text-gray-800 hover:text-black text-sm font-medium uppercase'>
            Top Wear
            </Link>

            <Link to="#" className='text-gray-800 hover:text-black text-sm font-medium uppercase'>
            Bottom Wear
            </Link>
        </div>

        {/**Right-Icons */}
        <div className='flex items-center space-x-4'>
            <Link to="/admin" className='block bg-slate-900 px-2 rounded text-sm text-white'>Admin</Link>
            <Link to="/profile" className='hover:text-black'>
            <FaUser className='h-6 w-6 text-gray-800'/>
            </Link>
            <button onClick={toggleCartDrawer} className='relative hover:text-black'>
                <FaShoppingCart className='h-6 w-6 text-gray-800'/>
                <span className='absolute -top-1 bg-orange-700 text-white text-xs rounded-full px-2 py-0.5'>
                    4
                </span>
            </button>

            {/**Search Icon */}
            <div className="overflow-hidden">
            <SearchBar/>
            </div>
            


            <button onClick={toggleNavDrawer} className='md:hidden'>
            <MdMenu className='h-8 w-8 text-gray-800'/>
            </button>

        </div>
    </nav>
    <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />

    {/**Mobile Navigation */}
    <div className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-slate-50 shadow-lg transform transition-transform duration-300 z-50 ${
        navDrawerOpen ? "translate-x-0": "-translate-x-full"}`}>
            <div className='flex justify-end p-5'>
                <button onClick={toggleNavDrawer}>
                 <HiMiniXMark className='h-6 w-6 text-gray-800' />
                </button>
            </div>
            
            <div className='p-4'>
                <h2 className='text-xl font-semibold mb-4 '>Menu</h2>
                <nav className='space-y-4'>
                    <Link to="#" onClick={toggleNavDrawer} className='block text-gray-700 hover:text-black'>Men</Link>
                    <Link to="#" onClick={toggleNavDrawer} className='block text-gray-700 hover:text-black'>Women</Link>
                    <Link to="#" onClick={toggleNavDrawer} className='block text-gray-700 hover:text-black'>Top Wear</Link>
                    <Link to="#" onClick={toggleNavDrawer} className='block text-gray-700 hover:text-black'>Bottom Wear</Link>
                </nav>
            </div>
        </div>
    </>
  )
}

export default Navbar