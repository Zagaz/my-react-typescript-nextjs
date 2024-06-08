import React from 'react'

type Props = {
     id : number
     alt ?: string,
}

export default function ImageFull({id,alt}: Props) {
       alt ? alt : "Image"
       let idString = id.toString()
  return (
       <>
                <img src={`https://picsum.photos/id/${idString}/300/200`} alt={alt} />
       </>
      
  )
}