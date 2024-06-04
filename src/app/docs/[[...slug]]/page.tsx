import React from 'react'

type PropsDocs = {
     params: {
          slug: string[];
     };
}


export default function Docs({ params }: PropsDocs) {
     if (params.slug?.length === 2) {
          return (
               <>
                    Docs - Param:{params.slug[0]} and
                    concept {params.slug[1]}

               </>
          )
     } else if(params.slug?.length === 1){
          return (
               <>
                    Docs - Param:{params.slug[0]}
               </>
          )
     }
     return (
          <div>Docs</div>
     )
}