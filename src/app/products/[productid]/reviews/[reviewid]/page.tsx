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
     return (
          <>
               <h1>Review Detail</h1>
               <p>Product ID: {params.productid}</p>
               <p>Review ID: {params.reviewid}</p>
          </>
     )
}
