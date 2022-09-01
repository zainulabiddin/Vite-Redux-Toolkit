import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { changeTextColor } from './ThemeSlice'

const Theme = () => {
    const[color,setColor]=useState("white")
    const dispatch = useDispatch();
  return (
    <div>
        <input type="text" onChange={(e)=>setColor(e.target.value)}/>
        <button onClick={()=>{dispatch(changeTextColor(color))}}>Change the text theme</button>
    </div>
  )
}

export default Theme