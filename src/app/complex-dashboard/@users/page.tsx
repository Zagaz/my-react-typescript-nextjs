import React from 'react'

type Props = {}
const style :React.CSSProperties = {
     backgroundColor : '#f0e9cc',
     display : 'flex',
     justifyContent : 'center',
     alignItems : 'center',
     padding : '10px',
     margin : '20px',
     border : '1px solid #ccc',
     borderRadius : '5px',
     height : '100px',
}

export default function users({}: Props) {
  return (
    <div style={style}>users</div>
  )
}