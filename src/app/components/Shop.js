import React from 'react'
import Card from './Card'
import product from '../Product'
const Shop = ({handleClick}) => {
  return (
    <section className="w-[80%] mx-auto mt-[5%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {product.map((item) => {
            return <Card  item={item} key={item.id} handleClick={handleClick}/>
        })}
    </section>
  )
}

export default Shop