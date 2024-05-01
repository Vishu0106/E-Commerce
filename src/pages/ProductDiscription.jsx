import React, { useEffect } from "react"
import axiosInstance from "../config/axiosInstance"
import { useDispatch , useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import { useParams } from "react-router"

import { categorieProducts } from "../redux/slices/ProductsSlice";
import { addToWishlist } from "../redux/slices/wishlistSlice"
import HomeLayout from "../layouts/HomeLayout"
import ProductList from "../components/ProductList"
import toast from "react-hot-toast";
import { addToCart } from "../redux/slices/cartSlice"


function ProductDiscription() {
    window.scrollTo(0,0);
    const {isLoggedIn} = useSelector(state => state.auth);
    const {wishlist} = useSelector(state => state.wishlist);
    const {cart} = useSelector(state => state.cart);
    const {id} = useParams();
    const {state} = useLocation();
    console.log(state);
    const dispatch = useDispatch();
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
    const addToWhishlistHandler = (product) => {
        if(!isLoggedIn) {
          navigate("/login");
          return;
        }
        if(!product) {
          toast.error("Product not found");
          return;
        }
        if(wishlist.find((item) => item.id === product.id)) {
          toast.error("Product already in wishlist");
          return;
        }
        dispatch(addToWishlist(product));
        toast.success("Product added to wishlist");
      } 
    async function fetchProducts() {
        await dispatch(categorieProducts(state?.category||"electronics"));
    }
    useEffect(()=>{
        fetchProducts();
    },[])
  return (
    <HomeLayout>
    <section className="bg-[#F3F4F6] w-full flex flex-col flex-wrap">
        <div className=" flex flex-col border-2 border-[#714B67] p-3 sm:flex-row gap-4 m-3 rounded-md">
            <div className="bg-gray-100 py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row -mx-4">
                        <div className="md:flex-1 px-4">
                            <div className="h-[460px] rounded-lg p-3 flex items-center justify-center bg-gray-300  mb-4">
                                <img className="w-[350px] h-[400px] object-cover" src={state.image} alt="Product Image" />
                            </div>
                            <div className="flex -mx-2 mb-4 items-center justify-center">
                                <div className="w-1/2 px-2">
                                    <button className="w-full bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800"onClick={()=>addToCartHandler(state)}>Add to Cart</button>
                                </div>
                                <div className="w-1/2 px-2">
                                    <button className="w-full bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800" onClick={()=>addToWhishlistHandler(state)}>Add to Wishlist</button>
                                </div>
                            </div>
                        </div>
                        <div className="md:flex-1 px-4">
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">{state?.title}</h2>
                            <div className="flex mb-4">
                                <div className="mr-4">
                                    <span className="font-bold text-gray-700">Price: </span>
                                    <span className="text-gray-600"> Rs{state.price}</span>
                                </div>
                                <div>
                                    <span className="font-bold text-gray-700">Availability:</span>
                                    <span className="text-gray-600 ">In Stock</span>
                                </div>
                            </div>
                            <div className="mb-4">
                                <span className="font-bold text-gray-700 ">Select Color:</span>
                                <div className="flex items-center mt-2">
                                    <button className="w-6 h-6 rounded-full bg-gray-80 mr-2"></button>
                                    <button className="w-6 h-6 rounded-full bg-red-500 mr-2"></button>
                                    <button className="w-6 h-6 rounded-full bg-blue-500 mr-2"></button>
                                    <button className="w-6 h-6 rounded-full bg-yellow-500 mr-2"></button>
                                </div>
                            </div>
                            <div className="mb-4">
                                <span className="font-bold text-gray-700 ">Select Size:</span>
                                <div className="flex items-center mt-2">
                                    <button className="bg-gray-300  text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 ">S</button>
                                    <button className="bg-gray-300  text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 ">M</button>
                                    <button className="bg-gray-300  text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 ">L</button>
                                    <button className="bg-gray-300  text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 ">XL</button>
                                    <button className="bg-gray-300  text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 ">XXL</button>
                                </div>
                            </div>
                            <div>
                                <span className="font-bold text-gray-700 ">Product Description:</span>
                                <p className="text-gray-600 text-sm mt-2">
                                    {state.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <h3 className=" text-center text-2xl font-bold text-gray-800"> 
            Related Products
        </h3>
        <ProductList/>
    </section>
    </HomeLayout>
  )
}

export default ProductDiscription;