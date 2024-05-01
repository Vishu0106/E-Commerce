import React from 'react'
import HomeLayout from '../layouts/HomeLayout'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { FaIndianRupeeSign } from 'react-icons/fa6';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-hot-toast';

function Checkout({total}) {
  const navigate = useNavigate();
   const {state} = useLocation();
  const [checkoutDetails, setCheckoutDetails] = useState({
    fullName:'',
    zipcode:'',
    address:'',
  });
  function inputHandler(e) {
    const {name , value } = e.target;
    setCheckoutDetails({
        ...checkoutDetails,
        [name]: value
    })
    console.log("changuing");
}

async function  onFormSubmit(e) {
  e.preventDefault();
  if(!checkoutDetails.fullName || !checkoutDetails.zipcode || !checkoutDetails.address) {
      toast.error("Please fill all the details");
      return;
  }
  if(checkoutDetails.fullName.length < 5) {
      toast.error("Name should be length of 5 or greater");
      return;
  }
  if(checkoutDetails.zipcode.length !== 6) {
      toast.error("Zipcode should be of 6 digits");
      return;
  }
  if(checkoutDetails.address.length < 10) {
      toast.error("Address should be of 10 characters");
      return;
  }
  navigate('/payment',{state:{...checkoutDetails}});
}
  return (
    <HomeLayout>
        <div className='h-[80vh] bg-[#F3F4F6] flex items-center justify-center'>
        <form
               onSubmit={onFormSubmit} noValidate className="w-1/2 flex flex-col justify-center gap-3 rounded-2xl p-4 text-white bg-white shadow-2xl">
                    <h1 className="text-2xl text-center font-bold text-[#604058]">Shipping Address</h1>
                     <div className="flex flex-col gap-1">
                          <label htmlFor="fullName" className="font-semibold text-black">Customer Name</label>
                          <input
                            onChange={inputHandler} 
                            value={checkoutDetails.fullName}
                            type="text"
                            name="fullName"
                            id="fullName"
                            className="bg-transparent px-2 py-1 border rounded-md text-black"
                            placeholder="enter your Name..."
                          />
                     </div>
                     <div className="flex flex-col gap-1">
                          <label htmlFor="zipcode" className="font-semibold text-black">Zipcode</label>
                          <input
                            onChange={inputHandler} 
                            value={checkoutDetails.email} 
                            type="zipcode"
                            name="zipcode"
                            id="zipcode"
                            className="bg-transparent px-2 py-1 border rounded-md text-black"
                            placeholder="enter your Zipcode..."
                          />
                     </div>
                     <div className="flex flex-col gap-1">
                          <label htmlFor="password" className="font-semibold text-black">Address</label>
                          <textarea minLength={10} maxLength={100} rows={5} cols={5}
                            onChange={inputHandler} 
                            value={checkoutDetails.password} 
                            type="address"
                            name="address"
                            id="address"
                            className="bg-transparent px-2 py-1 border focus:border-[#b4629e] rounded-md text-black"
                            placeholder="enter your Address..."
                          />
                     </div>
                     <div className="flex flex-col gap-1 items-center justify-center">
                          <h3 className='sm:text-2xl font-semibold text-black text-lg'>Your Order Price</h3>
                          <h1 className='text-4xl font-bold text-slate-950 flex items-center justify-center'><span><FaIndianRupeeSign className='text-3xl'/></span>{state.total||0}</h1>
                          <h1 className='sm:text-2xl font-semibold text-black flex items-center justify-center gap-3 text-xl'><span>No of Items : </span> {state.noOfItems||0}</h1>                          
                     </div>
                     <button type='submit' className="mt-2 bg-[#604058] hover:bg-[#633557] transition-all ease-in-out duration-300 cursor-pointer py-2 font-semibold text-lg rounded-md text-center">
                            Place Order 
                     </button>
                </form>
        </div>
    </HomeLayout>
  )
}

export default Checkout;