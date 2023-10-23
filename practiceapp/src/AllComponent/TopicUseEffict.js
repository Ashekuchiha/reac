

// import React ,{useState,useEffect} from 'react'

// const TopicUseEffict = () => {

//     const [Todos,SetTodos]=useState(null);
//     const [AError,SetAError]=useState(null);
//     const [IsLoading,SetIsLoading]=useState(true);

//     useEffect(()=>{
//         fetch("https://jsonplaceholder.typicode.com/todos")
//         .then((res)=>{
//             if(!res.ok){
//                 throw Error("found a error");
//             }
//             else{
//                 return res.json();
//             }
//         })
//         .then((data)=>{
//             SetTodos(data);
//             SetIsLoading(false);
//             SetAError(null);
//         })
//         .catch((error)=>{
//             SetAError(error.message);
//             SetIsLoading(false)
//         })
//     },[])

//     // todos && todos.map() that means jodi todos e kisu thakay taholay todos.map kaj korbay orthat && er dui paser valui true hoity hobay karon eita and oporetion todos e valu thaka manay todos er value true.
//     const AllTodo=Todos && Todos.map((todo)=>{
//         return <p key={todo.id}>{todo.title}</p>
//     })

//     const LoadingMsg=<p>data is loading ...</p>;
//     const ErrorMsg=<p>{AError}</p>

//   return (
//     <div>
//         {AError && ErrorMsg}
//         {IsLoading && LoadingMsg}
//         {AllTodo}
//     </div>
//   )
// }

// export default TopicUseEffict


// *************************************************



import React ,{useState,useEffect} from 'react'
import useFatch from './useFatch'//i creat this hook

const TopicUseEffict = () => {


    const {Data,AError,IsLoading}=useFatch("https://jsonplaceholder.typicode.com/todos")
    //eikhany 3 ta useState variable and useEfect chilo.
    // todos && todos.map() that means jodi todos e kisu thakay taholay todos.map kaj korbay orthat && er dui paser valui true hoity hobay karon eita and oporetion todos e valu thaka manay todos er value true.
    const AllTodo=Data && Data.map((todo)=>{
        return <p key={todo.id}>{todo.title}</p>
    })

    const LoadingMsg=<p>data is loading ...</p>;
    const ErrorMsg=<p>{AError}</p>

  return (
    <div>
        {AError && ErrorMsg}
        {IsLoading && LoadingMsg}
        {AllTodo}
    </div>
  )
}

export default TopicUseEffict