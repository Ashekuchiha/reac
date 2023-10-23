import React from 'react'

import * as yup from 'yup';
import {useFormik} from 'formik'

import STYLE from './FORM.module.css'

export default function FORM() {

  const formik=useFormik({
    initialValues:{
      name:"",
      email:"",
      password:"",
    },
    validationSchema:yup.object({
      name :yup.string().min(2,"name must have 2 charecter").required(),
      email :yup.string().required().email(),
      password :yup.string().min(8,"password must have 8 charecter").required(),

    }),
    onSubmit:(values,{resetForm})=>{
      console.log(values);
      resetForm({values:""});
    }
  });

  const randerNameError= formik.touched.name && formik.errors.name && (<span style={{colo:"red"}}>{formik.errors.name}</span>);
  const randerEmailError= formik.touched.email && formik.errors.email && (<span style={{colo:"red"}}>{formik.errors.email}</span>);
  const randerPasswordError= formik.touched.password && formik.errors.password && (<span style={{colo:"red"}}>{formik.errors.password}</span>);

  const RanderForm=(<form onSubmit={formik.handleSubmit}>
  <div>
    <label htmlFor='name'> NAme : </label>
    <input type='text' name='name' id='name' value={formik.values.name} required onChange={formik.handleChange}></input>
    <br/>
    {randerNameError}
  </div>
  <div>
    <label htmlFor='email'> Email : </label>
    <input type='email' name='email' id='email' value={formik.values.email} onChange={formik.handleChange}></input>
    <br/>
    {randerEmailError}
  </div>
  <div>
    <label htmlFor='password'> Password : </label>
    <input type='password' name='password' id='password' value={formik.values.password} required onChange={formik.handleChange} ></input>
    <br/>
    {randerPasswordError}
  </div>
  <div>
    <button type='submit'>submit</button>
  </div>
</form>);


  //initialValues dia nicher kaj kora hoisay
  // const [name,setname]=useState("");
  // const [email,setemail]=useState("");
  // const [password,setpassword]=useState("");

   // nicher 3 ta function er kaj onchange={handelchange} dia kora hoisay
  // const getname=(e)=>{
  //   setname((name)=>name=e.target.value);
  // }
  // const getemail=(e)=>{
  //   setemail(e.target.value);
  // }
  // const getpass=(e)=>{
  //   setpassword((password)=>e.target.value);
  // }

  // nicher function er kaj onSubmit={formik.handleSubmit} dia kora hoisay
  // const getAllData=(e)=>{
  //   const user={
  //     name,email,password
  //   };
  //   console.log(user);
  //   e.preventDefault();
  // }

  return (
    <div className={STYLE.xx}>
      {RanderForm}
    </div>
  )
}
