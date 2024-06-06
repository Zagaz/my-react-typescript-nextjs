import React from 'react'
import Spinner from './Spinner';
import { useState, useEffect } from 'react';
import notfound from '@/app/not-found';


type Props = {
     url: string;
     productId: string;
}

/*
* @param url - the url of the api
* @param productId - the id of the product
* @returns a product details page or a not found page or a spinner (While the product is being fetched)
*/
export default function Product({ url, productId }: Props) {
     const [item] = useState(productId); // [   
     const URL = url;
     const [product, setProduct] = useState<any | null>(null);

     async function fetchAPI() {
          // fetch api asynch call
          await fetch(URL + item)
               .then(response => response.json())
               //if response is ok, set the product
               .then(json => setProduct(json))
               // if response is not ok, set product to null
               .catch(() => setProduct(null))
     }

     useEffect(() => {
          fetchAPI()
     }
          , [item])
     if (parseInt(item) > 20) {
          return notfound({});
     }
     /*
       <img src={product.image} alt={product.title} style={{ width: '100%' , backgroundColor: "grey"}} />

     */


     return (
          <div >
               {
                    product ? (
                         <div  >

                              {
                                   !product.image? <Spinner /> : <img src={product.image} alt={product.title} style={{ width: '100%' , backgroundColor: "grey"}} />
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
                         <>
                              <Spinner />
                         </>
                    )
               }
          </div>
     )
}