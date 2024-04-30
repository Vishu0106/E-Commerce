import React, { useState } from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/slices/ProductsSlice.js";
import ProductCard from './ProductCard.jsx';
function ProductList() {
    const dispatch = useDispatch();
    const {productList} = useSelector((state) => state.products);

  return (
    <section>
        <div className='m-3 rounded-3xl sm:rounded-md p-10 bg-[#F3F4F6]  flex flex-row flex-wrap gap-4 items-center justify-center'>
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