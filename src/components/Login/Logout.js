import React, {Component} from 'react'
import goodbye from '../../assets/images/goodbye.jpg' 
import classes from '../../styles/logout.module.scss'

class Logout extends Component{
    render(){
        return(
            <div className={classes.ContainerLogout}>
                <h1 className={classes.goodbyeText}> do zobaczenia !</h1>
                <img className={classes.goodbyeImg} src={goodbye}/>
            </div>
        )
    }
}
export default Logout