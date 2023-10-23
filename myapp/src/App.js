import React from "react";

import { BsFill1CircleFill ,BsFill2SquareFill} from "react-icons/bs";//icon import react icon

import Card from './AllComponents/Card';
import Card2 from "./AllComponents/intro";
import DATAUPDOWN from "./AllComponents/DATAUPDOWN";

import Data from'./data.json';//data.json thika Data variable a sob data import korci
import Main from "./AllComponents/TodoComponent/Main";

// import { v4 as uuidv4 } from "uuid"; //for uniqe id use it for index 

const persons=[
    {
        name:"ashak",
        age:24,
        lang:["ban, ","eng, "," ger."],
        phns:[
            {
                home:"01746820406"
            },
            {
                office:"01889177515"
            }
        ]
    },
    {
        name:"alif",
        age:22,
        lang:["ban, ","eng, "," ger."],
        phns:[{home:"01746820406"},{office:"01889177515"}],
    }
]

function Myelementbyme(){
    return React.createElement("div",{},
    React.createElement("p",{},"hi i am p tag"),
    React.createElement("p",{},
    React.createElement("b",{},"i am p tag in bold tag"),
    ),
    );
}
function Myelement(){
    return <div>
        <p><BsFill1CircleFill  className="icon"/>hi am p tag</p>{/*icon use */}
        <p><BsFill2SquareFill className="icon"/><b>i am p tag in bold tag</b></p>
    </div>
}

const name="ashak";

function App(){
    //console.log(Data)
    let AllCard=[];//ei array er modhy map or push dia data dhukaici

    //push method
    // for (let i = 0; i < Data.length; i++) {
    //     AllCard.push(<Card title={Data[i].title} body={Data[i].body} name={Data[i].name} />);
        
    // }

    //map method
    AllCard=Data.map((i,index)=> <Card key={index} title={i.title} body={i.body} name={i.name} />);//key for uniq id
    
    const showData=(data)=>{
        console.log(data)
        return data;
    }

    return <div>
        
        <h1 className='mypublic-style'>Todo List</h1>
        <Main/>

        {AllCard} 

        {
            persons.map((person,index)=><article key={index}>
                <h3>Name : {person.name}</h3>
                <p><b>age : {person.age}</b></p>
                <p>Language : {person.lang}</p>
                <h5>phone number :</h5>
                {
                    person.phns.map((phn,index)=><div key={index}>
                        <p>home:{phn.home}</p>
                        <p>office :{phn.office}</p>
                    </div>)
                }
            </article>)
        }
        <Card2 name="i am card 2" />
        
        <Myelementbyme />
        <Myelement />
        <h1>{name +" its a variable "}</h1>
        <DATAUPDOWN names={name} reciveData={showData}/>
    </div>
    
}
export default App;