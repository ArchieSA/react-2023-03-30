import React from 'react'

export default function Dish({ dish }) {
  if (!dish) {
    return null
  }
  return (
    <div>
      <h5>{dish.name}</h5>
      <p>Price: {dish.price}</p>
      <ul>
        {dish.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
