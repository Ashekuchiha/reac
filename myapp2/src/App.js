import React from "react";

import Heading from "./AllComponents/Heading";
import STATE from "./AllComponents/STATE";
//import CALLCONDITION from "./AllComponents/CALLCONDITION";
import TASK1 from "./AllComponents/TEXT.js/TASK1";
import HOOKS from "./AllComponents/TEXT.js/HOOKS";
import FORM from "./AllComponents/form/FORM";
import LOL from "./AllComponents/practice/DELET";
import FORM2 from "./AllComponents/form/FORM2";
import CHILD from "./AllComponents/importent/CHILD";
import MAIN from "./AllComponents/todo/MAIN";
import Togol from "./AllComponents/Togol";
import FAQS from "./AllComponents/FAQS/Faq";

import { FaFacebookSquare } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import FORM3 from "./AllComponents/form/FORM3";


const ParentD="i am your father";
function App(){
    
    const ParentF=(childData)=>{
        console.log(childData);
    }

    return (
        <div>
            <Heading />
            <h3>body is coming</h3>
            <MAIN/>
            <p className="icon"><FaFacebookSquare/></p>
            <Button>click me</Button>
            <STATE />
            {/* <CALLCONDITION /> */}
            <TASK1/>
            <HOOKS/>
            <FORM/>
            <LOL/>
            {/* <FORM2/> */}
            <FORM3/>
            <CHILD ParentV={ParentD} ParentFV={ParentF}/>
            <Togol/>
            <FAQS/>
        </div>
    )
}

export default App;