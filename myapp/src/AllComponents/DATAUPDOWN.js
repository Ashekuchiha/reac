import React from 'react'

export default function DATAUPDOWN(props) {
    const need=props.reciveData("hi");
  return (
    <div>
      <h1>{props.names}</h1>
      <h1>{need}</h1>
    </div>
  )
}
