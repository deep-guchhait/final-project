import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';



const cart = {
    products: [
        {
            name: "Stylish Jacket",
            size: "M",
            color: "black",
            price: 120,
            image: "https://picsum.photos/150?random=1"
        },
        {
            name: "Casul Sneakers",
            size: "42",
            color: "White",
            price: 75,
            image: "https://picsum.photos/150?random=2"
        },
    ],
    totalPrice: 195,
};

const Checkout = () => {
    const navigate = useNavigate();
    const [checkoutId, setCheckoutId] = useState(null);
    const [ShippingAddress, SetShippingAddress] = useState({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        postalCode: "",
        phone: "",

    });

const handleCreateCheckout = (e) => {
    e.preventDefault();
    setCheckoutId(123)
};

// const handlePaymentSuccess = (details) => {
//     console.log("Payment Successful", details);
//     navigate("/order-confirmation");
    
// }

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter'>
        {/**Left Section */}
        <div className="p-6 bg-lime-50 border shadow-md rounded-lg ">
            <h2 className="text-2xl uppercase mb-6">Checkout</h2>
            <form onSubmit={handleCreateCheckout}>
                <h3 className="text-lg mb-4">Contact Details</h3>
                <div className="mb-4">
                    <label className='block text-gray-800 '>Email</label>
                    <input type="email" value="sdsj.help@gmail.com" className='w-full p-2 border rounded' disabled/>
                </div>
                <h3 className="text-lg mb-4">Delivery</h3>
                <div className="mb-4 grid grid-cols-2 gap-4">

                    <div>
                        <label className="block text-gray-800">First Name</label>
                        <input type="text" 
                               value={ShippingAddress.firstName}
                               onChange={(e) => SetShippingAddress({...ShippingAddress, firstName: e.target.value,})}
                               className='w-full p-2 border rounded' required/>
                    </div>

                    <div>
                        <label className="block text-gray-800">Last Name</label>
                        <input type="text" 
                               value={ShippingAddress.lastName}
                               onChange={(e) => SetShippingAddress({...ShippingAddress, lastName: e.target.value,})}
                               className='w-full p-2 border rounded' required/>
                    </div>

                </div>

                <div className="mb-4">
                    <label className="block text-gray-800">Address</label>
                    <input type="text" value={ShippingAddress.address} 
                           onChange={(e) => SetShippingAddress({...ShippingAddress, address: e.target.value,})} 
                           className='w-full p-2 border rounded' required />
                </div>

                <div className="mb-4 grid grid-cols-2 gap-4">
                <div>
                        <label className="block text-gray-800">City</label>
                        <input type="text" 
                               value={ShippingAddress.city}
                               onChange={(e) => SetShippingAddress({...ShippingAddress, city: e.target.value,})}
                               className='w-full p-2 border rounded' required/>
                    </div>

                    <div>
                        <label className="block text-gray-800">Pin Code</label>
                        <input type="text" 
                               value={ShippingAddress.postalCode}
                               onChange={(e) => SetShippingAddress({...ShippingAddress, postalCode: e.target.value,})}
                               className='w-full p-2 border rounded' required/>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-800">Phone</label>
                    <input type="tel" value={ShippingAddress.phone} 
                           onChange={(e) => SetShippingAddress({...ShippingAddress, phone: e.target.value,})} 
                           className='w-full p-2 border rounded' required />
                </div>

                <div className="mt-6">
                    {!checkoutId ? (
                        <button type='submit' className='w-full bg-black text-white py-3 rounded'>Continue to Payment</button>
                    ) : (
                        <div>
                            <Link to="checkout/order-confirm" className="w-full bg-blue-600 text-white py-3 px-4 rounded hover:bg-blue-700 transition">Pay Now</Link>
                            {/**payment button component */}
                            
                        </div>
                    )}
                </div>

            </form>
        </div>


        {/**Right Section */}
        <div className='bg-orange-50 p-6 border shadow-md rounded-lg'>
            <h3 className='text-lg mb-4'>Order Summary</h3>
            <div className="border-t py-4 mb-4">{cart.products.map((product, index) => (
                <div key={index} className='flex items-center justify-between py-2 border-b'>
                    <div className="flex items-start">
                        <img src={product.image} alt={product.name} className='w-20 h-24 object-cover mr-4' />
                        <div>
                            <h3 className='text-md'>{product.name}</h3>
                            <p className="text-gray-600">Size: {product.size}</p>
                            <p className="text-gray-600">Color: {product.color}</p>
                        </div>
                    </div>
                    <p className="text-xl">₹{product.price ?.toLocaleString()}</p>
                </div>
            ))}
            </div>
            <div className="flex justify-between items-center text-lg mb-4">
                <p>Total</p>
                <p>₹{cart.totalPrice?.toLocaleString()}</p>
            </div>
            <div className="flex justify-between items-center text-lg">
                
            </div>
        </div>

    </div>
  )
}

export default Checkout