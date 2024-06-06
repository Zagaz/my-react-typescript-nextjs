'use client'
import React from 'react'
import { useState, useEffect } from 'react';
import Spinner from '@/components/Spinner';
import notfound from '@/app/not-found';

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

export default function ProductDetail({ params }: ProductDetailProps) {
     const [item] = useState(params.productid); // [   
     const URL = "https://fakestoreapi.com/products/"
     const [product, setProduct] = useState<any | null>(null);
     /*
     * Fetches the product data from the fakestoreapi
     */
     async function fetchAPI() {
          // fetch api asynch call
          await fetch(URL + item)
               .then(response => response.json())
               //if response is ok, set the product
               .then(json => setProduct(json))
               // if response is not ok, set product to null
               .catch(() => setProduct(null))
     }

     /*
     * useEffect to fetch the product data
     */
     useEffect(() => {
          fetchAPI()
     }
          , [item])
     if (parseInt(params.productid) > 20) {
          return notfound({});
     }
     return (
          <div >
               {
                    product ? (
                         <div style={{ ...card, flexDirection: 'column' }} >

                              {
                                   product.image && (
                                        <img src={product.image} alt={product.title} style={{ width: '100%' }} />
                                   )
                              }
                              {
                                   product.category && (
                                        <h4>Category: {product.category}</h4>
                                   )
                              }
                              {
                                   product.title && (
                                        <h2>{product.title}</h2>
                                   )

                              }
                              {
                                   product.description && (
                                        <p>{product.description}</p>
                                   )
                              }
                              {
                                   product.price && (
                                        <h3>Price: ${product.price}</h3>
                                   )
                              }
                         </div>
                    ) : (
                         <Spinner />
                    )
               }
          </div>
     )
}