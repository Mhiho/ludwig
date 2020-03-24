import React,{Component} from 'react'
import { getUser } from "../../services/auth"
import {Link} from 'react-router-dom'
import {adresse} from '../../config'


class SocialRoom extends Component {
    state={
        isLoading: true,
        users: []
    }
        componentDidMount() {
            this._isMounted = true;
            const url = `${adresse}users/all`
            const headers = { 'Content-Type': 'application/json',
                              'Authorization': 'Bearer ' + `${getUser().token}`
            }
            fetch(url, {
                headers: headers
              })
            .then(response => response.json())
              .then(users => {            
                this.setState({ users
                                },()=>{
                                    
                                        this.setState({isLoading: false})
                                    
                                })
     
            });
    }
    render(){
        console.log(this.state.users)
        return(
                <div>
                    <h2>Społeczność otchłani:</h2>
                    {this.state.users.length === 0 ? null : this.state.users.map((user,index)=>(
                        <div>
                            <h3>{user.name}</h3>
                        </div>
                    ))
                    
                    }
                </div>
            )
    }
}

export default SocialRoom