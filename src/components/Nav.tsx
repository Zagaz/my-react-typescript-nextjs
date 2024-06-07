import React from 'react'
import Link from 'next/link'

type Props = {}

const ul = {
     display: 'flex',
     justifyContent: 'space-between',
     padding: '1rem',
     borderBottom: '1px solid #ccc',
     backgroundColor: 'lightblue',
}
const li: React.CSSProperties = {
     listStyleType: 'none',
     padding: '1rem',
     border: '1px solid #ccc',
     borderRadius: '5px',
     width: '100px',
     textAlign: 'center',
     backgroundColor: 'white',
     color: 'white',
     fontWeight: 'bold',
     fontSize: '1.2rem',
     cursor: 'pointer',
     margin: '10px',
     boxShadow: '0 0 10px rgba(0,0,0,0.5)',
     transition: 'all 0.3s ease',


    
}


export default function Nav({ }: Props) {
     return (
          <>
               <nav >
                    <ul style={ul}>
                         <li style={li} key={1}><Link href='/'>Home</Link></li>
                         <li style={li} key={2}><Link href='/products/1'>Product 1</Link></li>
                         <li style={li} key={3}><Link href='/products/2'>Product 2</Link></li>
                         <li style={li} key={4}><Link href='/products/3'>Product 3</Link></li>
                    </ul>
               </nav>

          </>
     )
}