import React,{useState} from 'react'

import STYLE from './FORM.module.css'

export default function FORM3() {
    const [Name,SetName]=useState("");
    const [Password,SetPassword]=useState("")

    const GetAllData=(e)=>{
        e.preventDefault();
        console.log("subjhjihjk jhgyujhg");
    }
  return (
    <div>
      <React.Fragment>
        <form onSubmit={GetAllData} className={STYLE.xx}>
            <div>
                <label>Name : </label>
                <input type='text'></input>
            </div>
            <div>
                <label>Password : </label>
                <input type='password'></input>
            </div>
            <div>
                <button type='submit'>submit</button>
            </div>
        </form>
      </React.Fragment>
    </div>
  )
}
