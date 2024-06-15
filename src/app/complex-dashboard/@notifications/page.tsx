import React from 'react'

type Props = {}

const style :React.CSSProperties = {
     backgroundColor : '#aaa111',
     display : 'flex',
     justifyContent : 'center',
     alignItems : 'center',
     padding : '10px',
     margin : '20px',
     border : '1px solid #ccc',
     borderRadius : '5px',
     height : '100px',
}

export default function page({}: Props) {
  return (
    <div style = {style} >Notifications</div>
  )
}