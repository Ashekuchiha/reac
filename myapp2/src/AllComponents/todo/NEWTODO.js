import React from 'react'

import { useFormik} from 'formik'

export default function NEWTODO(props) {
  const formik=useFormik({
    initialValues:{
      todo:"",
    },
    onSubmit:(values,{resetForm})=>{
      props.onnew(values.todo);
      resetForm({values:""});
    }
  })
    // const [todo,setTodo]=useState("");
    // const handeltext=(event)=>{
    //     setTodo(event.target.value);
    // }
    // const handelSub=(event)=>{
    //     event.preventDefault();
    //     props.onnew(todo);
    // }
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor='todo'>what's your plane :</label>
        <input type='text' id='todo' name='todo' value={formik.values.todo} onChange={formik.handleChange}></input>
        <button>add</button>
      </form>
    </div>
  )
}
