import React from 'react'

export const Dish = ({name, price}) => {
  return (
    <div><span>{name}</span> - <span>${price.toFixed(2)}</span></div>
  )
}
