import React from 'react'

export default function CHILD(props) {
    props.ParentFV("hi");
  return (
    <div>
      <h1>i am child function component</h1>
      <p>{props.ParentV}</p>
    </div>
  )
}
