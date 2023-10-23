import React, { useState } from 'react'

export default function HOOKS() {

    const[county,setCounty]=useState(3);
    const add=()=>{
        setCounty((x)=>x+1)
    }

  return (
    <div>
      <h1>count : {county}</h1>
      <button onClick={add}>+</button>
    </div>
  )
}
