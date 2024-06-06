'use client'
import React from 'react'
import { json } from 'stream/consumers';
import { useState , useEffect } from 'react';
import Spinner from '@/components/Spinner';



type ProductDetailProps = {
     params: {
          productid: string;
     };
};

const card = {
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
     const [item, setItem] = useState(params.productid); // [   
     const url = "https://fakestoreapi.com/products/"
     const [product, setProduct] = useState<any>(null);
    
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
     return (
          <div >
               {
               product ? (
                    <div style={card} >
                         <img src = {product.image} alt = {product.title} />
                         <h1>{product.title}</h1>
                         <p>{product.description}</p>
                         <p>Price: {product.price}</p>
                    </div>
               ) : (
                    <Spinner />
               )
               

               }
              
              
          </div>
     )
      
     
}