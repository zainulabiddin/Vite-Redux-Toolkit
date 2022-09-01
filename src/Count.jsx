import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,incrementByAmount } from './features/counter/Counter'

const Count = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const themeTextColor = useSelector((state) => state.theme.color)
  return (
    <div>
      <button onClick={()=>dispatch(increment())}>Increment</button>{" "}
      <span style={{color:themeTextColor}}>Count : {count}</span>{" "}
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
      <button onClick={()=>dispatch(incrementByAmount(10))}>incrementBy10</button>
    </div>
  )
}

export default Count