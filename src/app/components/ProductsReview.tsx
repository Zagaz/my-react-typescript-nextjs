import React from 'react'

type Props = {
     reviewId : string
}

export default function ProductsReview({reviewId}: Props) {
  return (
    <div>ProductsReview:{reviewId}</div>
  )
}