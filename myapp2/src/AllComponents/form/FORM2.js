
import React,{useState} from 'react'

export default function FORM2() {
    const [user,setuser]=useState({name:"",email:"",password:""});
const {name,email,password}=user;

const getname=(e)=>{
    setuser({name:e.target.value,email,password});
  }
  const getemail=(e)=>{
    setuser({name,email:e.target.value,password});
  }
  const getpass=(e)=>{
    setuser({name,email,password:e.target.value});
  }

  const getAllData=(e)=>{
    console.log("data submited");
    console.log(user);
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={getAllData}>
         <div>
          <label htmlFor='name'> NAme : </label>
          <input type='text' name='name' id='name' value={name} required onChange={getname}></input>
        </div>
        <div>
          <label htmlFor='email'> Email : </label>
         <input type='email' name='email' id='email' value={email} onChange={getemail}></input>
         </div>
         <div>
           <label htmlFor='password'> Password : </label>
           <input type='password' name='password' id='password' value={password} required onChange={getpass} ></input>
         </div>
         <div>
           <button type='submit'>submit</button>
         </div>
       </form>
    </div>
  )
}
