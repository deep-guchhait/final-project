import React from 'react'
import MyOrdersPage from './MyOrdersPage'

const Profile = () => {
  return (
    <div className='min-h-screen flex flex-col'>
        <div className="flex-grow container mx-auto p-4 md:p-6">
            <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
                {/**Left (User Details) */}
                <div className="w-full md:w-1/3 lg:w-1/4 bg-lime-50 shadow-md rounded-lg p-6">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">Deep Guchhait</h1>
                    <p className="text-lg text-gray-700 mb-4">deep@example.com</p>
                    <button className="w-full bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-500">Logout</button>
                </div>

                {/**Right (My Order table section) */}
                <div className="w-full md:w-2/3 lg:w-3/4">
                    <MyOrdersPage/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile