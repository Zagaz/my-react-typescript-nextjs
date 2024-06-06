import React from 'react'

type Props = {
     children : React.ReactNode
}
export const metadata = {
     title : 'Product Detailed',
     descprition : "A short description of the product",
}
const style = {
 backgroundColor : '#f0e9cc',
}


export default function ProductIdLayout({children}: Props) {
     return (
           <>
           <h3 style = {style}>Products Detailes</h3>
          {/* The Product */}
      
          
           {children}
           </>
          
     )
}