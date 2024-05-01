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
        console.log(val);  
        console.log(id);
        await dispatch(categorieProducts(val||"electronics"));
    }
    useEffect(()=>{
        fetchProducts();
    },[])
  return (
    <HomeLayout>
        <h1 className='text-4xl text-center font-bold sm:text-left sm:no-underline  pl-5  text-black'>{cat[id]} products</h1>
        <ProductList />
    </HomeLayout>
  )
}

export default CategoriProducts