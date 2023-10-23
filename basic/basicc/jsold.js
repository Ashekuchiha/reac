
//type 1:
// var root = document.querySelector("#root");

// ReactDOM.render("myElement",root);

//type 2:
// var root = document.querySelector("#root");

// var myElement = React.createElement("p",null,"hi i am text")

// ReactDOM.render(myElement,root);

//type 3:
// var root = document.querySelector("#root");

// var myElement = React.createElement("h1",null,
// React.createElement("ol",null,
// React.createElement("li",null,"hihi"),
// React.createElement("li",null,"gigi"),
// )
// )

// ReactDOM.render(myElement,root);

//type 4:
//for that we need babel
// var root = document.querySelector("#root");

// var myElement =(
//     <h1>
//         <ol>
//             <li>ashak</li>
//             <li>alif</li>
//         </ol>
//     </h1>
// );

// ReactDOM.render(myElement,root);

// var root = document.querySelector("#root");

// const Increment = ()=>{
//     var [count,setCount] = React.useState(2);
//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick = { ()=>setCount(count+1) } >add</button>
//         </div>
//     )
// };

const root = document.querySelector("#root");

const Increment = ()=>{
    let [count,setCount] = React.useState(0);
    return (
        <div>
             <h1>{count}</h1>
             <button onClick = { ()=>setCount(count+1) } >add</button>
         </div>
    )
}
//ReactDOM.render(Increment(),root);//increment()=<increment/>
ReactDOM.render(<div>
    <Increment/>
    <p>
        <Increment/>
    </p>
</div>,root);