import React from 'react'
import { Link } from 'react-router-dom';

const ProductManagement = () => {

    const products = [
        {
            _id: 123123,
            name: "shirt",
            price: 1120,
            sku: "123123", //sku-- stock keeping unit
        },   
    ];

    const handleDelete = (id) => {
        if(window.confirm("Are you sure to delete the product ?")) {
            console.log("Delete product with id:", id);
        };
    };


  return (
    <div className='max-w-7xl mx-auto p-6'>
        <h2 className='text-2xl font-bold mb-6'>Product Management</h2>
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <table className="min-w-full text-left text-gray-600">
                <thead className="bg-orange-100 text-xs uppercase text-gray-800">
                    <tr>
                        <th className="py-3 px-4">Name</th>
                        <th className="py-3 px-4">Price</th>
                        <th className="py-3 px-4">SKU</th>
                        <th className="py-3 px-4">Actions</th>
                    </tr>
                </thead>
                <tbody className='bg-lime-50'>
                    {products.length > 0 ? (products.map((product) => (
                        <tr key={product._id} className='border-b hover:bg-lime-100 cursor-pointer'>
                            <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                                {product.name}
                            </td>
                            <td className="p-4 ">₹{product.price}</td>
                            <td className="p-4 ">{product.sku}</td>

                            <td className="p-4 ">
                                <Link to={`/admin/products/${product._id}/edit`} 
                                className='bg-yellow-500 text-white px-2 py-1 rounded mr-2 hover:bg-yellow-700'>
                                    Edit
                                </Link>
                                <button onClick={() => handleDelete(product._id)} 
                                        className='bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700'>Delete
                                </button>
                            </td>  
                        </tr>
                    )) 
                ) : ( 
                        <tr>
                            <td colSpan={4} className='p-4 text-center text-gray-700'>No Products found</td>
                        </tr> )}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ProductManagement