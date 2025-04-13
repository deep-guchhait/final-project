import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import login from "../assets/login.png";

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("User Registered:", {name, email, password})
    };

  return (
    <div className='flex'>
        <div className="w-full flex flex-col justify-center items-center p-8 md:p-12">
            <form onSubmit={handleSubmit} className='w-full max-w-md bg-lime-50 p-8 rounded-lg border shadow-md' action="">
                <div className="flex justify-center mb-6">
                    <h2 className="text-2xl font-bold">SDSJ Fashion</h2>
                </div>
                
                <p className="text-center mb-6">
                    Enter the details to register 
                </p>

                <div className='mb-4'>
                    <label className='block text-sm font-semibold mb-2' htmlFor="">Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} 
                    className='w-full p-2 border rounded' placeholder='Enter your Name'/>
                </div>

                <div className='mb-4'>
                    <label className='block text-sm font-semibold mb-2' htmlFor="">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} 
                    className='w-full p-2 border rounded' placeholder='Enter your email address'/>
                </div>

                <div className="mb-4">
                    <label htmlFor="" className="block text-sm font-semibold mb-2">Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} 
                    className='w-full p-2 border rounded' placeholder='Enter your password' />
                </div>

                <button type='submit' 
                  className='w-full bg-blue-700 text-white p-2 rounded-lg font-semibold hover:bg-blue-500 transition'>
                    Sign Up</button>
                <p className="mt-6 text-center text-sm">Already have an account? 
                    <Link to="/login" className="text-blue-700"> Login</Link>
                </p>
            </form>
        </div>

        {/**Right Image */}
        <div className="hidden md:block w-1/2 bg-white pr-4">
        <div className="h-full flex flex-col justify-center items-center">
            <img src={login} alt="Login to Account" className=' w-full object-cover rounded-full' />
        </div>
        </div>
    </div>
  )
}


export default Register