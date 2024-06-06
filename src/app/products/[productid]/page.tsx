'use client'
import React from 'react'
import { useState , useEffect } from 'react';
import Spinner from '@/components/Spinner';
import notfound from '@/app/not-found';



type ProductDetailProps = {
     params: {
          productid: string;
     };
};

const card  = {
     display : 'flex',
     flexDirection : 'column',
     justifyContent : 'space-between',
     padding : '1rem',
     margin : '20px',
     border : '1px solid #ccc',
     borderRadius : '5px',
     width : '300px',
      
}

    


export default function ProductDetail({ params }: ProductDetailProps) {
     const [item] = useState(params.productid); // [   
     const url = "https://fakestoreapi.com/products/"
     const [product, setProduct] = useState<any|null>(null);
    
    async function fetchAPI(){
          // fetch api asynch call
          await fetch(url + item)
          .then(response => response.json())
          .then(json => setProduct(json))         
         }

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
                         <div style={{...card, flexDirection: 'column'}} >
                              <img src={product.image} alt={product.title} />
                              <div>
                              <h2>{product.title}</h2>
                              <p>{product.description}</p>
                              <h2>Price: {product.price}</h2>
                              </div>
                         </div>
                    ) : (
                         <Spinner />
                    )
               }
              
              
          </div>
     )
      
     
}