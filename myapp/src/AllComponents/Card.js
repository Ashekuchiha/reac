//functional component

import React from "react";
// import { v4 as uuidv4 } from "uuid";

//day
const date = new Date().getDate();
//day name
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const d = new Date().getDay();
const dayName = days[d];
//year
const year = new Date().getFullYear();

function Card(props){
  const {title,body,name}=props;//distructuring==importent with it app.js thika valu disay props e.
    return <div>
      <h1>functional  component</h1>
    <div className='card'>
      <h3 className='card-title'>{title}</h3>
      <p>{body}</p>
      <p>{name}</p>
      <footer>{date+","+dayName+" "+year}</footer>
    </div>
</div>
  }

  export default Card;
