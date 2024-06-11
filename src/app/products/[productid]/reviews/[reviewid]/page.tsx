"use client"
import notfound from '@/app/not-found';
import Product from '@/app/components/Product';
import ProductsReview from '@/app/components/ProductsReview';
import React from 'react'

type ReviewDetailProps = {
     params: {
          productid: string;
          reviewid: string;
     };
};

export default function ReviewDetail(
     { params }: ReviewDetailProps
){

     if (parseInt(params.productid) > 10) {
          return notfound({});
     }
     return (
          <>
               <h1>Review Detail</h1>
               <p>Product ID: {params.productid}</p>
               <Product  productId={params.productid} />
               <ProductsReview reviewId={params.reviewid} />
               
              
          </>
     )
}
