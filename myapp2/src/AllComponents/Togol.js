import React ,{useState} from 'react'

export default function Togol() {
    const [togol,setTogol]=useState("true");
    const bb=<div>
      {
            togol&&(
                <p>
                    u see me cause togol er valu={togol ? "true" : "false"}
                </p>
            )
        }
    </div>
  return (
    <div>
      <div>
        {bb}
        <button onClick={()=>{setTogol(!togol)}}>{togol ? "hide" : "show"}</button>
      </div>
    </div>
  )
}
