
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaIndianRupeeSign , FaCartArrowDown } from "react-icons/fa6";
import { useDispatch , useSelector } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
function ProductCard({product}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {isLoggedIn} = useSelector((state) => state.auth);
  const {cart} = useSelector((state) => state.cart);
  const addToCartHandler = (product) => {
    if(!isLoggedIn) {
      navigate("/login");
      return;
    }
    if(!product) {
      toast.error("Product not found");
      return;
    }
    if(cart.find((item) => item.id === product.id)) {
      toast.error("Product already in cart");
      return;
    }
    dispatch(addToCart(product));
    toast.success("Product added to cart");
  }
  
  const onClikHandle = (id) => {
    navigate("/description" , {state: product});

  }
  return (
    
    <div className='relative h-[450px] w-[300px] border-2 border-[#714B67] rounded-md shadow-md flex flex-col items-center justify-start '>
        <div className='w-64 h-64 p-3 flex items-center justify-center' onClick={() =>{ navigate("/description", {state: {...product}})}}>
            <img className='w-full h-full object-center transition-transform transform scale-100 hover:scale-110' src={product.image} alt='product image' />
        </div>
        <h3 className='text-xl px-1 min-h-8 text-black font-semibold line-clamp-2'>{product.title}</h3>
        <p className='mt-2  px-1 text-md font font-semibold text-slate-600 font line-clamp-2'>{product.description}</p>
        <div className='absolute bottom-0 right-0 left-0 mb-3 flex items-center justify-around gap-4'>
         <p className='flex items-center font-bold text-lg '><span><FaIndianRupeeSign /></span>{product.price}</p>
         <button className='flex items-center gap-1 p-2 bg-[#714B67] rounded-md hover:bg-[#5e3454] text-white' onClick={()=>addToCartHandler(product)}><span><FaCartArrowDown /></span>Add to cart</button>
        </div>
    </div>

  )
}

export default ProductCard