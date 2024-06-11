'use client'
import React from 'react'
import Card from './Card'
import {useState,useEffect} from 'react'
import notfound from '@/app/not-found'
import { json } from 'stream/consumers'

type Props = {
    
}

export default function Section ({}: Props) {
   
     const URL = 'https://jsonplaceholder.typicode.com/posts/'
     
     return (
          <>
               <div className='section'>
                    
                 
               </div>
          </>
     );
     
}






