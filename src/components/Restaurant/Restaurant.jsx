import { Button } from '@/components/Button/Button'
import React from 'react'
import Menu from '../Menu/Menu'

export const Restaurant = ({ restaurant }) => {
  if (!restaurant) {
    return null
  }

  const { name, menu } = restaurant

  return (
    <div>
      <h3>{name}</h3>
      <Menu menu={menu} />
    </div>
  )
}
