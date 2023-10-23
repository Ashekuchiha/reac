import React,{useContext} from 'react'

import { UserContext } from './Context'
import Dad from './Dad'

export default function GrandDad() {
  const {User}=useContext(UserContext);
  return (
    <div>
      <Dad/>
      <h4>GrandDad{User.Name}</h4>
    </div>
  )
}
