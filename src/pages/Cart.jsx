import React, { useEffect } from 'react'
import HomeLayout from '../layouts/HomeLayout'
import { FiPlus , FiMinus } from "react-icons/fi";
import { FaBagShopping } from 'react-icons/fa6';
import { useDispatch , useSelector } from 'react-redux';
import { addQuantity , subtractQuantity } from '../redux/slices/cartSlice';
import {  useNavigate } from 'react-router-dom';
import { removeFromCart } from '../redux/slices/cartSlice';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

function CartCard({product}) {
    const dispatch = useDispatch();
    const handleAddQuantity = () => {
        dispatch(addQuantity(product));
    }
    const handleSubtractQuantity = () => {
        dispatch(subtractQuantity(product));
    }

    const handleRemoveProduct = (id) => {
        dispatch(removeFromCart({id}));
        toast.success("Product removed from cart");
    }
    return (
        <div className="flex flex-col md:flex-row border-b border-gray-400 py-4">
            <div className="flex-shrink-0">
                <img src={product.image} alt="Product image" className="w-32 h-32 object-center" />
            </div>
            <div className="mt-4 md:mt-0 md:ml-6">
                <h2 className="text-lg font-bold">{product.title}</h2>
                <div className="mt-4 flex items-center">
                    <span className="mr-2 mb-2 text-gray-600">Quantity:</span>
                    <div className="flex items-center mb-2">
                        <button className="bg-gray-200 rounded-l-lg px-2 py-1" onClick={handleSubtractQuantity} ><FiMinus/></button>
                        <span className="mx-2 text-gray-600">{product.quantity}</span>
                        <button className="bg-gray-200 rounded-r-lg px-2 py-1" onClick={handleAddQuantity} ><FiPlus/></button>
                    </div>
                </div>
                <span className="mb-2 font-bold">Rs.{product.price*product.quantity}</span>
                <button className=' ml-2 bg-white text-gray-600 border-2 border-gray-600 px-2 rounded-md' onClick={()=>handleRemoveProduct(product.id)}>Remove</button>
            </div>
        </div>
    )

}



function Cart() {
        const {cart} = useSelector(state => state.cart);
        const [total, setTotal] = React.useState(0);
        const navigate = useNavigate();
        const updateTotal = (value) => {
            setTotal(+value.toFixed(2));
        }
        const data = {
            total : total,
            noOfItems : cart.length
        }
        const handleCheckout = () => {
            navigate("/checkout",{state:data});

        }
        useEffect(()=>{
            let total = 0;
            cart.forEach(product => {
                total += product.price * product.quantity;
            });
            updateTotal(total);
        },[cart])
    return (
        <HomeLayout>
                {
                    cart?.length>0 ? (
                        <div className="container mx-auto px-4 py-8 min-h-[80vh]">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                                <h1 className="text-2xl font-bold my-4 sticky">Shopping Cart</h1>
                                <div onClick={handleCheckout} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-center">
                                    Checkout
                                </div>
                            </div>
                        <div className="mt-8">
                            {
                                cart.map(product => (
                                    <CartCard product={product} key={product.id} />
                                ))

                            }
                        </div>
                        <div className="flex justify-end items-center mt-8">
                            <span className="text-gray-600 mr-4">Subtotal:</span>
                            <span className="text-xl font-bold">{total}</span>
                        </div>
                        <div className='flex items-center justify-center'>
                            <Link to="/" className="mt-2 bg-[#604058] hover:bg-[#633557] transition-all ease-in-out duration-300 cursor-pointer py-2 px-4 font-semibold text-lg rounded-md">
                            Keep Shopping
                            </Link>
                        </div>
                    </div>) : (
                    <div className="min-h-[80vh] bg-[#F3F4F6] flex items-center justify-center">
                        <div className="bg-white p-8 shadow-lg rounded-lg">
                            <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
                            <p className="text-gray-600">Start adding items to your cart to see them here.</p>
                            <Link to="/" className="text-2xl font-bold mb-4 underline text-center flex items-center gap-2 text-accent">Continue Shopping <span><FaBagShopping/></span></Link>
                        </div>

                    </div>)
                }        
        </HomeLayout>
    )
}

export default Cart;