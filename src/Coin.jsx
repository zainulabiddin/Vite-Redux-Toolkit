import React from 'react'
import { useSelector } from 'react-redux'

const Coin = () => {
    const count = useSelector((state) => state.counter.value)
    const themeTextColor = useSelector((state) => state.theme.color)

  return (
    <div style={{color:themeTextColor}}>Coin : {count}</div>
  )
} 

export default Coin