import React, { useEffect } from 'react'
import HomeLayout from '../layouts/HomeLayout'
import ProductList from '../components/ProductList'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { categorieProducts } from '../redux/slices/ProductsSlice';
function CategoriProducts() {
    const dispatch = useDispatch();
    const {id} = useParams();
    const cat = ["","electronics","jewelery","men's clothing","women's clothing"];
    async function fetchProducts() { 
        const val = cat[id];
        await dispatch(categorieProducts(val||"electronics"));
    }
    useEffect(()=>{
        fetchProducts();
    },[])
  return (
    <HomeLayout>
        <div className='min-h-[80vh] w-full flex flex-col flex-wrap items-center justify-center'>
        <h1 className='text-4xl text-center font-bold text-slate-950'>{cat[id]} products</h1>
        <ProductList />
        </div>
    </HomeLayout>
  )
}

export default CategoriProducts