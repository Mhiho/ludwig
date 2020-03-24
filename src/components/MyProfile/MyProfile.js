import React,{Component} from "react"
import { getUser } from "../../services/auth"


class MyProfile extends Component {

    render(){
      
return(
  <>
    <h1>Twój profil:</h1>
    <ul>
      <li>Nazwa: {!getUser().user ? null : getUser().user.name}</li>
      <li>E-mail: {!getUser().user ? null : getUser().user.email}</li>
    </ul>
  </>
        )
    }
}


export default MyProfile