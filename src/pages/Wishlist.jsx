import React from 'react'
import HomeLayout from '../layouts/HomeLayout'
import { useDispatch , useSelector } from 'react-redux';
import { removeFromWishlist } from '../redux/slices/wishlistSlice';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { nanoid } from '@reduxjs/toolkit';
import { FaBagShopping } from 'react-icons/fa6';


function CartCard({product}) {
    const dispatch = useDispatch();
    const handleRemoveProduct = (id) => {
        dispatch(removeFromWishlist({id}));
        toast.success("Product removed from Wishlist");
    }
    return (
        <div className="flex flex-col md:flex-row border-b border-gray-400 py-4">
            <div className="flex-shrink-0 p-2">
                <img src={product.image} alt="Product image" className=" w-32 h-32 object-center" />
            </div>
            <div className="mt-4 md:mt-0 md:ml-6">
                <h2 className="text-lg font-bold">{product.title}</h2>
                <span className="mb-2 font-bold">Rs.{product.price}</span>
                <button className=' ml-2 bg-white text-gray-600 border-2 border-gray-600 px-2 rounded-md' onClick={()=>handleRemoveProduct(product.id)}>Remove</button>
            </div>
        </div>
    )

}




function Wishlist() {

    const {wishlist} = useSelector(state => state.wishlist);
    
    useEffect(()=>{

    },[wishlist])


  return (
    <HomeLayout>
    {
            wishlist?.length>0 ? (
                <div className="container mx-auto px-4 py-8 min-h-[80vh]">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                        <h1 className="text-2xl font-bold my-4 sticky">Whish List</h1>
                    </div>
                <div className="mt-8">
                    {
                        wishlist.map(product => (
                            <CartCard product={product} key={nanoid()} />
                        ))
                        
                    }
                </div>
                <div className='flex items-center justify-center'>
                    <Link to="/" className="mt-2 bg-[#604058] hover:bg-[#633557] transition-all ease-in-out duration-300 cursor-pointer py-2 px-4 font-semibold text-lg rounded-md">
                    Keep Shopping
                    </Link>
                </div>
            </div>) : (
            <div className="min-h-[80vh] bg-[#F3F4F6] flex items-center justify-center">
                <div className="bg-white p-8 shadow-lg rounded-lg">
                    <h2 className="text-2xl font-bold mb-4">Your WishList is Empty</h2>
                    <p className="text-gray-600">Start adding items to your WishList to see them here.</p>
                    <Link to="/" className="text-2xl font-bold mb-4 underline text-center flex items-center gap-2 text-accent">Continue Shopping <span><FaBagShopping/></span></Link>
                </div>
                
            </div>)
    }        
</HomeLayout>
  )
}

export default Wishlist