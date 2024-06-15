import React from 'react'

type Props = {}
const style :React.CSSProperties = {
     backgroundColor : '#ccc333',
     display : 'flex',
     justifyContent : 'center',
     alignItems : 'center',
     padding : '10px',
     margin : '20px',
     border : '1px solid #ccc',
     borderRadius : '5px',
     height : '100px',
}

export default function revenue({}: Props) {
  return (
    <div style ={style}> revenue</div>
  )
}