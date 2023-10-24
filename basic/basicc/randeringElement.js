
{//randering
//  const root = ReactDOM.createRoot(
//     document.getElementById('root')
//   );
//   const element = <h1>Hello, world</h1>;
//   root.render(element);
}

{//dom vs Vdom
// const root = ReactDOM.createRoot(
//     document.getElementById('root')
//   );
  
//   function tick() {
//     const element = (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {new Date().toLocaleTimeString()}.</h2>
//       </div>
//     );
//     root.render(element);
//   }
  
//   setInterval(tick, 1000);
}

{//element
// const root = ReactDOM.createRoot(
//     document.getElementById('root')
// );
// const element = (
//         <div>
//           <h1>Hello, world!</h1>
//           <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//       );

// root.render(element);
}

{//function
// const root = ReactDOM.createRoot(
//   document.getElementById('root')
// );
// const clock = ()=>{
//   return (
//     <div>
//           <h1>Hello, world!</h1>
//           <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//   );
// }
// root.render(clock());
}

{//functional component
  // const root = ReactDOM.createRoot(
  //   document.getElementById('root')
  // );
  // const Clock = ()=>{
  //   return (
  //     <div>
  //           <h1>Hello, world!</h1>
  //           <h2>It is {new Date().toLocaleTimeString()}.</h2>
  //         </div>
  //   );
  // }
  // root.render(<Clock />);
}

{//functional component with props
  // const root = ReactDOM.createRoot(
  //   document.getElementById('root')
  // );
  // const Clock = ({locale})=>{
  //   return (
  //     <div>
  //           <h1>Hello, world!</h1>
  //           <h2>It is {new Date().toLocaleTimeString(locale)}.</h2>
  //         </div>
  //   );
  // }
  // root.render(<Clock locale="bn-BD"/>);
}
{//functional component with hook or useState
  const root = ReactDOM.createRoot(
    document.getElementById('root')
  );
  const TemperatureInput =()=>{
    const [temp,setTemp] = React.useState("0");
    return (
        <div>
            <fieldset>
                <legend>enter the temperature</legend>
                <input
                  type="text"
                  value={temp}
                  onChange={(e)=>setTemp(e.target.value)}
                />
                <p>{temp}</p>
            </fieldset>
        </div>
    );
}
  root.render(<TemperatureInput />);
}
{//class
  // const root = ReactDOM.createRoot(
  //   document.getElementById('root')
  // );

  // class Clock{
  //   print =()=>{
  //     return (
  //       <div>
  //         <h1>Hello, world!</h1>
  //         <h2>It is {new Date().toLocaleTimeString()}.</h2>
  //       </div>
  //     );
  //   }
  // }
  // var ColockComponent = new Clock();
  // root.render(ColockComponent.print());
}

{//class component
  // const root = ReactDOM.createRoot(
  //   document.getElementById('root')
  // );

  // class Clock extends React.Component{
  //   render =()=>{
  //     return (
  //       <div>
  //         <h1>Hello, world!</h1>
  //         <h2>It is {new Date().toLocaleTimeString()}.</h2>
  //       </div>
  //     );
  //   }
  // }
  // var ColockComponent = new Clock();
  // root.render(<Clock/>);
}

{//class component with props
  // const root = ReactDOM.createRoot(
  //   document.getElementById('root')
  // );

  // class Clock extends React.Component{
  //   render =()=>{
  //     return (
  //       <div>
  //         <h1>Hello, {this.props.children}!</h1>
  //         <h2>It is {new Date().toLocaleTimeString(this.props.local)}.</h2>
  //       </div>
  //     );
  //   }
  // }
  // var ColockComponent = new Clock();
  // root.render(<Clock local="bn-BD">Ashak </Clock>);
}

{//class component with state 1
//   const root = ReactDOM.createRoot(
//     document.getElementById('root')
//   );

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);

//     // Initialize the state
//     this.state = {
//       counter: 0
//     };
//   }

//   render() {
//     return (
//       <div>
//         <p>Counter: {this.state.counter}</p>
//         <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>
//           Increment
//         </button>
//       </div>
//     );
//   }
// }

// root.render(<MyComponent/>);

}

{//class component with state 2
//     const root = ReactDOM.createRoot(
//     document.getElementById('root')
//   );

//   class Clock extends React.Component {
//     state = { date: new Date() };

//life cycle: component dom e thakly ekbar call hoi
//     componentDidMount() {
//         this.clockTimer = setInterval(() => this.tick(), 1000);
//     }

//life cycle: component dom e thika choly gylay ekbar call hoi
//     componentWillUnmount() {
//         clearInterval(this.clockTimer);
//     }

//     tick() {
//         this.setState({
//             date: new Date(),
//         });
//     }

//     render() {
//         const { date } = this.state;
//         const { locale } = this.props;
//         return (
//             <h1 className="heading">
//                 <span className="text">{date.toLocaleTimeString(locale)}</span>
//             </h1>
//         );
//     }
// }
// root.render(<Clock/>);

}

{//class component with state and event
//   const root = ReactDOM.createRoot(
//     document.getElementById('root')
//   );

//   class Clock extends React.Component {
//     constructor(props) {
//     super(props);

//     // Initialize the state
//     this.state = {
//       date: new Date(),
//       locale:'bn-BD',
//     };
//   }
//   //state = { date: new Date() };//sortcut of construtor

//     componentDidMount() {
//         this.clockTimer = setInterval(() => this.tick(), 1000);
//     }

//     componentWillUnmount() {
//         clearInterval(this.clockTimer);
//     }

//     tick=()=> {
//         this.setState({
//             date: new Date(),
//         });
//     }

//     chng=(locale)=>{//arrow function this er problem dur kory
//       this.setState({
//         locale,
//       })
//     }

//     render() {
//       const { date } = this.state;
//       const { locale } = this.state;
//       return (
//         <>
//           <h1 className="heading">
//             <span className="text">{date.toLocaleTimeString(locale)}</span>
//           </h1>
//           <button onClick={()=>{this.chng("en-US")}}>change the clock language</button>
//         </>
//       );
//     }
// }
// root.render(<Clock/>);

}