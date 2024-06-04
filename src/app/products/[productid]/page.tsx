import React from 'react'

type ProductDetailProps = {
     params: {
          productid: string;
     };
};

export default function ProductDetail({ params }: ProductDetailProps) {
     return (
          <>
               <div> Product Detail {params.productid}</div>
          </>
     );
}