import React from 'react'
import ImageFull from './ImageCard'
import Link from 'next/link'
import '../app/globals.scss'


type Props = {
     title: string,
     id: number,

}

export default function Card({ title, id }: Props) {
     return (
          <div className='card'>
               <div className='card-flex'>
                    <Link className='card-flex-image' href={'/'} >
                         <ImageFull id={id} alt="A random image" />
                    </Link>
                    <Link className='card-flex-title' href={'/'} >
                         <h2 className='card-flex-title-text' >{title}</h2>
                    </Link>
               </div>
          </div>
     )
}