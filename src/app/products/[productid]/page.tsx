'use client'
import React from 'react'
import { useState, useEffect } from 'react';
import Spinner from '@/components/Spinner';
import notfound from '@/app/not-found';
import Product from '@/components/Product';


type ProductDetailProps = {
     params: {
          productid: string;
     };
};

/*
* Styling for the card
*/
const card = {
     display: 'flex',
     flexDirection: 'column',
     justifyContent: 'space-between',
     padding: '1rem',
     margin: '20px',
     border: '1px solid #ccc',
     borderRadius: '5px',
     width: '300px',
}
/*
* This is a page for product details
*/

const URL = "https://fakestoreapi.com/products/";

export default function ProductDetail({ params }: ProductDetailProps) {
     return (
          <Product url={URL} productId={params.productid} />
     )

     
}