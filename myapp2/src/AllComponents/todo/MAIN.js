import React, { useState } from 'react'

import TODOS from './TODOS'
import NEWTODO from './NEWTODO';

const Alltodos=["work1","work2"];

export default function MAIN() {
    const [todos,setTodos]=useState(Alltodos);
    const handelNewTODO=(newTodo)=>{
        setTodos([...todos,newTodo]);
    }
  return (
    <div>
        <NEWTODO onnew={handelNewTODO} />
        <TODOS todos={todos}/>
    </div>
  )
}
