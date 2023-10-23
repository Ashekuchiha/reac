import React ,{useState} from 'react'

import style from "./Faq.module.css"
export default function FAQS() {
    const [togol,setTogol]=useState("true");
    const p=<span>
        {
            togol&&(
                <span>
                    u see me cause togol er valu={togol ? "true" : "false"}
                </span>
            )
        }
    </span>
  return (
    <div>
        <div className={style.main1}>
            <h2>FAQs</h2>
            <div className={style.main2}>
            <div className={style.main3}>
                <span className={style.main4}>do you have any contact number ? {p}</span><button onClick={()=>{setTogol(!togol)}}>+</button>
            </div>
            </div>
        </div>
      
    </div>
  )
}
