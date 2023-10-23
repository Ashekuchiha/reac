import React,{useContext} from 'react'

import { UserContext } from './Context'
import Son from './Son'

export default function Dad() {
     const {Text}=useContext(UserContext);
  return (
    <div>
      <Son/>
      <h1>dad {Text}</h1>
    </div>
  )
}
