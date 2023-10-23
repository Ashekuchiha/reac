import React from 'react'
import TODO from './TODO'

export default function TODOS(props) {
    
  return (
    <div>
      {props.todos.map((todo,index)=><TODO key={index} todo={todo}/>)}
    </div>
  )
}
