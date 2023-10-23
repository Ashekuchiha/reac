import React,{useState} from 'react'

export default function LOL() {
    const[name]=useState("shakil");
    const[age,fun]=useState(29);
    const add=()=>{
        fun((age)=>age+1)
    }
  return (
    <div>
      {name}
      {age}
      <button onClick={add}>add</button>
    </div>
  )
}

