import React from 'react';
import axios from 'axios';
import {setProducts} from '../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

const ProductListing =()=>{
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();
    const fetchProducts =async()=>{
        const response = await axios
        .get('https://fakestoreapi.com/products')
        .catch((err)=>{
            console.log("Err",err)
        });
        dispatch(setProducts(response.data));

        console.log(setProducts(response.data));
    };

    useEffect(()=>{
        fetchProducts()
        const cookieValue = Cookies.get('exampleCookie');
        console.log('Cookie value:', cookieValue);
    },[])

    console.log("Products :" ,products);
    return(
        <>
        <br/>
        <ProductComponent/>
        </>
    );
};

export default ProductListing;