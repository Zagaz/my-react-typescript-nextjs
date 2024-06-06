import React from 'react'

type Props = {
     children : React.ReactNode
}
export const metadata = {
     title : 'Product Detailed',
     descprition : "A short description of the product",
}
const style = {
 backgroundColor : 'orange',
}
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

export default function ProductIdLayout({children}: Props) {
     return (
           <>
           <h3 style = {style}>Products Detailes</h3>
          {/* The Product */}
           <div style = {{...card, flexDirection: 'column'}}>
           <img src='https://prd.place/200' />
           <h3>Product Name</h3>
           <h2>100,00</h2>
           </div>
          
           {children}
           </>
          
     )
}