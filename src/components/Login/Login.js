import classes from '../../styles/login.module.scss'
import React,{useState} from "react"
import { isLoggedIn, getUser, login } from "../../services/auth"
import { adresse } from '../../config';
import {Link, Redirect} from 'react-router-dom'


class Login extends React.Component {
  state = {
    email: '',
    password: '',
    info: '',
    logged: false

  }
  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    if (this.state.email !== '' && this.state.password !== '') {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email: this.state.email, password: this.state.password })
    };

    const setUser = user =>
    window.localStorage.setItem("user", JSON.stringify(user))
    fetch(`${adresse}users/login`, requestOptions)
        .then(response =>{
            if(!response.ok){
                this.setState({info: 'Błąd logowania!'})
            }
            return response.json()
        })
        .then(user => {
            // login successful if there's a jwt token in the response
            if (user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                setUser(user)
                this.setState({logged: true})
            }
            return user;
      })
    }
  }
    componentDidUpdate(){
      if(this.state.logged){
        this.props.history.push('/myProfile')
      }
    }
      render() {
    
       
        return (
          <>
            <div className={classes.Container}>
    
            <h2 className={classes.pageTitle}>Zaloguj:</h2> 
            <h3 style={{height: '40px', width: '100%'}}>{this.state.info}</h3>
            <form
              method="post"
              onSubmit={
                this.handleSubmit.bind(this)
              }
              >
              <label>
                <span className={classes.emailInp}>Email</span>
                <input className={classes.emailField} type="email" name="email" onChange={this.handleUpdate} value={this.state.email}/>
              </label>
              <label>
                <span className={classes.emailInp}>Hasło</span>
                <input
                  className={classes.emailField}
                  type="password"
                  name="password"
                  onChange={this.handleUpdate}
                  value={this.state.password}
                  />
              </label>
              <div className={`${classes.submitContainer} ${classes.marginLogin}`}>
              <input className={classes.emailField} type="submit" value="Zaloguj" />
              </div>
            </form>
              <div className={classes.submitContainer}>
              <button className={`${classes.signUpButton}`}><Link to="/signUp">Utwórz konto</Link></button>
              </div>
              <div className={classes.submitContainer}>
              <Link to="/resetPassword">Zapomniałeś hasła?</Link>
              </div>        
              
            </div>
          </>
        )
      }
    }
    export default Login