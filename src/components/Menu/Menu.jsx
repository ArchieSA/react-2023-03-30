import React from 'react'
import Dish from './Dish/Dish'

export default function Menu({ menu }) {
  if (!menu || !!menu.length) {
    return null
  }

  return (
    <div className="menu">
      <h4>Menu:</h4>
      {menu.map((dish) => (
        <Dish dish={dish} key={dish.id} />
      ))}
    </div>
  )
}
