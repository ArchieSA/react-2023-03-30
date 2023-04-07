import React from 'react'

export function Dish({dish}) {
 
  return (
    <div>{dish.menu.map(item => (
      <div key={item.id}>{item.name}</div>
    ))}</div>
  );
}