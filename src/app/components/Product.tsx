import React from 'react'
import Spinner from './Spinner';
import { useState, useEffect } from 'react';
import notfound from '@/app/not-found';


type Props = {
     productId: string;
}


// style

const card : React.CSSProperties = {
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
* @param url - the url of the api
* @param productId - the id of the product
* @returns a product details page or a not found page or a spinner (While the product is being fetched)
*/
export default function Product({productId }: Props) {
     const [item] = useState(productId); // [   
     const URL = "https://fakestoreapi.com/products/";
     
     const [product, setProduct] = useState<any | null>(null);
     
     useEffect(() => {
          fetchAPI()
     }, [item])
     
     async function fetchAPI() {
          // fetch api asynch call
          await fetch(URL + item)
               .then(response => response.json())
               //if response is ok, set the product
               .then(json => setProduct(json))
               // if response is not ok, set product to null
               .catch(() => setProduct(null))
               //error handling 
               if (product === null) {
                    return notfound({});
               }

     }
     if (parseInt(item) > 20) {
          return notfound({});
     }
     return (
          <div >
               {
                    product ? (
                         <div style={card}>

                              {
                                   !product.image? <Spinner /> : <img src={product.image} alt={product.title} style={{width: '300px' , backgroundColor: "grey"}} />
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

                        {
                         notfound({})
                        }

                   
                              
                         </>
                    )
               }
          </div>
     )
}