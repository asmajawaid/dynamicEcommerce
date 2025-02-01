// products/[id].tsx: Dynamic route for individual product details. It uses the id parameter to 
// fetch and display a specific product's details.


"use client"

import { useParams } from 'next/navigation'
import React from 'react';
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import ProductDetails from '@/components/ProductDetails';
import NavBar from '@/components/NavBar';

const page = async () => {
    const { slug }:any = useParams();
    const products = await client.fetch(groq `*[_type=="product"]`);
    const product = products.find((product:any)=>product.slug.current == slug);

    // console.log(product);

    

  return (
    <>
        {/* <NavBar /> */}
        <ProductDetails product={product} />
    </>

  )
}

export default page
