"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
type Props = {}

export default function OrderProduct({}: Props) {
     const router = useRouter()
  
  const handleClick = () => {
     console.log('OrderProduct')
     router.push('/')
     }    
  
     return (
     <>
    <div>OrderProduct</div>
    <button onClick={handleClick}>Order</button>
    </>
  )
}