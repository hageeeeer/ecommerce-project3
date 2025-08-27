import React from 'react'
import CheckOut from '../_componennets/Checkout'

export default async function page({params}:{ params: Promise<{ id: string }>}) {
  const {id} = await params
 
  
  return (
    <div>
        <CheckOut id={id}></CheckOut>
    </div>
  )
}
