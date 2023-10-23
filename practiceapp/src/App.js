import React,{useState,useEffect} from "react";
import GrandGrandDad from "./AllComponent/PropDrilling useContext/GrandGrandDad";

// import TopicUseEffict from './AllComponent/TopicUseEffict'

function App() {
  const [Name,SetName]=useState("");
  const TakeTheValueAndPutItNameVariable=(e)=>{
    SetName(e.target.value);
  }
  useEffect(()=>{
    console.log(Name);
  })
  const Error=false;

  return (
    <div>
      {/* <TopicUseEffict/> */}
      <GrandGrandDad/>
      {/*dynamic style cause Error er valur upor depend koray style chng hoi etai dynamic bolay*/}
      <h1
      style={
        {
          color:Error?"red":"green",
          backgroundColor:Error?"black":"yellow",
        }
      }
      >welcome</h1>
      <input type="text" value={Name} onChange={TakeTheValueAndPutItNameVariable}/>

    </div>
  );
}

export default App;
