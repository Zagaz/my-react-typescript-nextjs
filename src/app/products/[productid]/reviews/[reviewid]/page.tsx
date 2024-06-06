import notfound from '@/app/not-found';
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
               <p>Review ID: {params.reviewid}</p>
              
          </>
     )
}
