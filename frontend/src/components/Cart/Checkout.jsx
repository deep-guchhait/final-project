import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {createCheckout} from "../../redux/slices/checkoutSlice"
import axios from 'axios';



const Checkout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {cart, loading, error} = useSelector((state) => state.cart);
    const {user} = useSelector((state) => state.auth);


    const [checkoutId, setCheckoutId] = useState(null);
    const [shippingAddress, SetShippingAddress] = useState({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        postalCode: "",
        phone: "",

    });

    useEffect(() => {
        if(!cart || !cart.products || cart.products.length === 0) {
            navigate("/");
        }
    }, [cart, navigate])

const handleCreateCheckout = async (e) => {
    e.preventDefault();
    if(cart || cart.products.length > 0) {

        const checkoutItems = cart.products.map(product => ({
            productId: product.productId,
            name: product.name,
            image: Array.isArray(product.image) ? product.image[0] : product.image, // first image if array
            price: Number(product.price),  // convert string price to number
            quantity: product.quantity,
            size: product.size,
            color: product.color
        }));
        
        
            const res = await dispatch(createCheckout({
                checkoutItems,
                shippingAddress,
                totalPrice: cart.totalPrice,
            }))
            if (res.payload && res.payload._id) {
                setCheckoutId(res.payload._id)
            }

        } 

        
};




const handlePaymentSuccess = async () => {
    try {
        const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/checkout/${checkoutId}/pay`, {paymentStatus: "paid"}, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("userToken")}`
            }
        });
        
        await handleFinalizeCheckout(checkoutId)
        
    } catch (error) {
        console.error(error);
    }
    // navigate("/order-confirmation");  
};

const handleFinalizeCheckout = async (checkoutId) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/checkout/${checkoutId}/finalize`, {}, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("userToken")}`
            }
        });

        navigate("/order-confirmation"); 
        
    } catch (error) {
        console.error(error);
    }
};

if (loading) return <p>Loading Cart...</p>;
if (error) return <p>Error : {error}</p>;
if (!cart || !cart.products || cart.products.length === 0) {
    return <p>Your Cart is Empty</p>
}

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter'>
        {/**Left Section */}
        <div className="p-6 bg-lime-50 border shadow-md rounded-lg ">
            <h2 className="text-2xl uppercase mb-6">Checkout</h2>
            <form onSubmit={handleCreateCheckout}>
                <h3 className="text-lg mb-4">Contact Details</h3>
                <div className="mb-4">
                    <label className='block text-gray-800 '>Email</label>
                    <input type="email" value={user ? user.email : ""} className='w-full p-2 border rounded' disabled/>
                </div>
                <h3 className="text-lg mb-4">Delivery Address</h3>
                <div className="mb-4 grid grid-cols-2 gap-4">

                    <div>
                        <label className="block text-gray-800">First Name</label>
                        <input type="text" 
                               value={shippingAddress.firstName}
                               onChange={(e) => SetShippingAddress({...shippingAddress, firstName: e.target.value,})}
                               className='w-full p-2 border rounded' required/>
                    </div>

                    <div>
                        <label className="block text-gray-800">Last Name</label>
                        <input type="text" 
                               value={shippingAddress.lastName}
                               onChange={(e) => SetShippingAddress({...shippingAddress, lastName: e.target.value,})}
                               className='w-full p-2 border rounded' required/>
                    </div>

                </div>

                <div className="mb-4">
                    <label className="block text-gray-800">Address</label>
                    <input type="text" value={shippingAddress.address} 
                           onChange={(e) => SetShippingAddress({...shippingAddress, address: e.target.value,})} 
                           className='w-full p-2 border rounded' required />
                </div>

                <div className="mb-4 grid grid-cols-2 gap-4">
                <div>
                        <label className="block text-gray-800">City</label>
                        <input type="text" 
                               value={shippingAddress.city}
                               onChange={(e) => SetShippingAddress({...shippingAddress, city: e.target.value,})}
                               className='w-full p-2 border rounded' required/>
                    </div>

                    <div>
                        <label className="block text-gray-800">Pin Code</label>
                        <input type="text" 
                               value={shippingAddress.postalCode}
                               onChange={(e) => { const val = e.target.value;
                                                    if (/^\d{0,6}$/.test(val)) 
                                                        {SetShippingAddress({...shippingAddress, postalCode: val })} 
                                                }
                                        }
                               className='w-full p-2 border rounded' maxLength={6} pattern="\d{6}" title="Pin code must be exactly 6 digits" required/>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-800">Phone</label>
                    <input type="tel" value={shippingAddress.phone} 
                           onChange={(e) => { const val = e.target.value; 
                                                if (/^\d{0,10}$/.test(val)) 
                                                    { SetShippingAddress({...shippingAddress, phone: e.target.value,})} 
                                            } 
                                    }
                           className='w-full p-2 border rounded' maxLength={10} pattern="\d{10}" title="Phone Number must be exactly 10 digits" required />
                </div>

                <div className="mt-6">
                    {!checkoutId ? (
                        <button type='submit' className='w-full bg-black text-white py-3 rounded'>Continue to Payment</button>
                    ) : (
                        <div>
                            <button onClick={handlePaymentSuccess} className="w-full bg-blue-600 text-white py-3 px-4 rounded hover:bg-blue-700 transition">Pay  ₹{cart.totalPrice}</button>
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