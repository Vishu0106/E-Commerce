import React, { useState } from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/slices/ProductsSlice.js";
import ProductCard from './ProductCard.jsx';
function ProductList() {
    const dispatch = useDispatch();
    const [page,setPage] = useState(1);
    const {productList} = useSelector((state) => state.products);

    async function fetchProducts() {
        await dispatch(getProducts(page));
    }
    useEffect(()=>{
        fetchProducts();
    },[page])
  return (
    <section className='mt-2 flex flex-col'>
        <h1 className='text-2xl font-semibold text-gray-700 md:text-center'>Top products</h1>
        <div className='mt-2 p-10 bg-[#F3F4F6] rounded-sm flex flex-row flex-wrap gap-4 items-center justify-center'>
            {
                productList.map((product) => (
                    <ProductCard key={product?.id} product={product} />
                ))
            }
        </div>
    </section>
  )
}

export default ProductList