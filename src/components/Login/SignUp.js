import React, { useState } from "react"
import { adresse } from '../../config';
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import classes from '../../styles/login.module.scss'
import update from 'immutability-helper';


const regex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
class SignUp extends React.Component {
  state = {
    email: '',
    birth: '',
    name: '',
    password: '',
    passwordConf: '',
    genre: '',
    description: '',
    error: '',
    errors: {
      name: true,
      email: true,
      birth: true,
      description: true,
      genre: true,
      password: true,
      button: false
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    const reqOpt = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: this.state.email, birth: this.state.birth, name: this.state.name, password: this.state.password, genre: this.state.genre, description: this.state.description })
    }
    return fetch(`${adresse}/users/add`, reqOpt).then(response => {
      if (!response.ok) {
        this.setState({ error: 'Coś poszło nie tak. Prawdopodobnie masz już konto na tym portalu.' })
        event.preventDefault()
        // throw new Error('Network response was not ok.');
      }
      return response
    }).then(data => {
      window.location.replace('/login')
    })
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
    if ([event.target.name] == 'name' && this.state.errors.name == false && this.state.name.length <= 3) {
      this.setState({ errors: { ...this.state.errors, [event.target.name]: true } })
    }
    if ([event.target.name] == 'email' && this.state.errors.email == false && !regex.test(this.state.email)) {
      this.setState({ errors: { ...this.state.errors, [event.target.name]: true } })
    }
    if ([event.target.name] == 'birth' && this.state.errors.birth == false && this.state.birth == '') {
      this.setState({ errors: { ...this.state.errors, [event.target.name]: true } })
    }
    if ([event.target.name] == 'genre' && this.state.errors.genre == false && this.state.genre == '') {
      this.setState({ errors: { ...this.state.errors, [event.target.name]: true } })
    }
    if ([event.target.name] == 'description' && this.state.errors.description == false && this.state.description == '') {
      this.setState({ errors: { ...this.state.errors, [event.target.name]: true } })
    }
    if ([event.target.name] == 'password' && this.state.errors.password == false && this.state.password.length < 6) {
      this.setState({ errors: { ...this.state.errors, [event.target.name]: true } })
    }
  }
  handleBlur = (field) => (evt) => {
    this.setState({ errors: { ...this.state.errors, [field]: false } })

    if (field == 'name' && this.state.errors.name == true && this.state.name.length >= 3) {
      this.setState({ errors: { ...this.state.errors, [field]: true } })
    }
    if (field == 'email' && this.state.errors.email == true && regex.test(this.state.email)) {
      this.setState({ errors: { ...this.state.errors, [field]: true } })
    }
    if (field == 'birth' && this.state.errors.birth == true && this.state.birth != '') {
      this.setState({ errors: { ...this.state.errors, [field]: true } })
    }
    if (field == 'genre' && this.state.errors.genre == true && this.state.genre != '') {
      this.setState({ errors: { ...this.state.errors, [field]: true } })
    }
    if (field == 'description' && this.state.errors.description == true && this.state.description != '') {
      this.setState({ errors: { ...this.state.errors, [field]: true } })
    }
    if (field == 'password' && this.state.errors.password == true && this.state.password.length >= 6) {
      this.setState({ errors: { ...this.state.errors, [field]: true } })
    }
  }
  render() {
    return (
      <div>
        <div style={{ color: 'red', width: '100%', height: '50px' }}>{this.state.error}</div>
        <form name="form" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="email">
              <span>Email</span>
              <input
                type="email"
                onBlur={this.handleBlur('email')}
                className={this.state.errors.email == true ? `${classes.Input}` : `${classes.Input} ${classes.Error}`}
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className={classes.errMes}>{this.state.errors.email == false && !regex.test(this.state.email) ? (<span>Wprowadź właściwy email</span>) : ''}</div>
          <div>
            <label htmlFor="name">
              <span>Nazwa użytkownika</span>
              <input
                onBlur={this.handleBlur('name')}
                className={this.state.errors.name == true ? `${classes.Input}` : `${classes.Input} ${classes.Error}`}
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </label>
          </div>

          <div className={classes.errMes}>{this.state.errors.name == false && this.state.name.length < 3 ? (<span>Nazwa musi składać się przynajmniej z trzech znaków</span>) : ''}</div>
          <div>
            <label htmlFor="birth">
              <span>Data urodzenia</span>
              <input
                onBlur={this.handleBlur('birth')}
                className={this.state.errors.birth == true ? `` : `${classes.Error}`}
                type="date"
                name="birth"
                value={this.state.birth}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className={classes.errMes}>{this.state.errors.birth == false && this.state.birth == '' ? (<span>Uzupełnij datę urodzenia</span>) : ''}</div>
          <div>
            <label htmlFor="genre">
              <span>Wybierz gatunek</span>
              <select
                onBlur={this.handleBlur('genre')}
                className={this.state.errors.genre == true ? `${classes.Input}` : `${classes.Input} ${classes.Error}`}
                name="genre"
                value={this.state.genre}
                onChange={this.handleChange}
              >
                <option value=""></option>
                <option value="papuga">Papuga</option>
                <option value="kot">Kot</option>
              </select>
            </label>
          </div>
          <div className={classes.errMes}>{this.state.errors.genre == false && this.state.genre == '' ? (<span>Pole wymagane</span>) : ''}</div>
          <div>
            <label htmlFor="description">
              <span>Opis</span>
              <input
                onBlur={this.handleBlur('description')}
                className={this.state.errors.description == true ? `${classes.Input}` : `${classes.Input} ${classes.Error}`}
                type="textarea"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className={classes.errMes}>{this.state.errors.description == false && this.state.password == '' ? (<span>Przydałby się jeszcze jakiś opis...</span>) : ''}</div>
          <div>
            <label htmlFor="password">
              <span>Hasło</span>
              <input
                onBlur={this.handleBlur('password')}
                className={this.state.errors.password == true ? `${classes.Input}` : `${classes.Input} ${classes.Error}`}
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className={classes.errMes}>{this.state.errors.password == false && this.state.password.length < 6 ? (<span>Hasło musi mieć przynajmniej 6 znaków</span>) : ''}</div>
          <div>
            <label htmlFor="password">
              <span>Powtórz hasło</span>
              <input
                type="password"
                name="passwordConf"
                value={this.state.passwordConf}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className={classes.errMes}>{this.state.errors.password == true && this.state.password.length >= 6 && this.state.password != this.state.passwordConf ? (<span>Hasła się nie zgadzają</span>) : ''}</div>
          <div className={classes.submitContainer}>
            <input
              type="submit"
              value={this.state.errors.email === true &&
                this.state.errors.name === true &&
                this.state.errors.genre === true &&
                this.state.errors.birth === true &&
                this.state.errors.description === true &&
                this.state.errors.password === true
                ? "Rejestruj" : 'Wypełnij pola'}
            />
          </div>
        </form>

      </div>
    )
  }
}
export default SignUp