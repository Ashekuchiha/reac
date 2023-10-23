import React,{useContext} from 'react'

import { UserContext } from './Context'

export default function Son() {
    const {User,Text}=useContext(UserContext);
  return (
    <div>
      <h1>son {User.Name}</h1>
      <h2>son {User.Id}</h2>
      <h3>son {Text}</h3>
    </div>
  )
}
