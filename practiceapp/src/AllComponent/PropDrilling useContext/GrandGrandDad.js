import React,{useState} from 'react'

import { UserContext } from './Context';

import GrandDad from './GrandDad';


export default function GrandGrandDad() {
    const [User]=useState({Name:"Ashak ul",Id:"01"});
    const [Text]=useState("hi i am text");
  return (
    <div>
      <>GrandGrabdDad </>
        <UserContext.Provider value={{Text,User}}>
            <GrandDad/>
        </UserContext.Provider>
      
    </div>
  )
}
