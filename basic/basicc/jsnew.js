
const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
const Increment = ()=>{
    var [count,setCount] = React.useState(2);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick = {()=>setCount(count+1)} >+</button>
        </div>
    )
};
root.render(<Increment/>);