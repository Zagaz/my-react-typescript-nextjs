import React from 'react'



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

   
     return (
          <>
               <div> Product ID: {params.productid}</div>
    
          </>
     );
}