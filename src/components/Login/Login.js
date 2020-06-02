import classes from "../../styles/login.module.scss";
import React, { useState, useContext, useEffect } from "react";
import { isLoggedIn, getUser, login } from "../../services/auth";
import { adresse } from "../../config";
import { Link, Redirect } from "react-router-dom";
import { ThemeContext } from "../../store/ContextAPI";
import { useHistory } from "react-router-dom";

const Login = () => {
  const { logged, setLogged } = useContext(ThemeContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [info, setInfo] = useState("");
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (email !== "" && password !== "") {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      };

      const setUser = (user) =>
        window.localStorage.setItem("user", JSON.stringify(user));
      fetch(`${adresse}/users/login`, requestOptions)
        .then((response) => {
          if (!response.ok) {
            setInfo("Błąd logowania!");
          }
          return response.json();
        })
        .then((user) => {
          // login successful if there's a jwt token in the response
          if (user.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            setUser(user);
            setLogged(true);
          }
          setLogged(true);
          history.push("/myProfile");
          return user;
        });
    }
  };

  return (
    <>
      <div className={classes.Container}>
        <h2 className={classes.pageTitle}>Zaloguj:</h2>
        <h3 style={{ height: "40px", width: "100%" }}>{info}</h3>
        <form method="post" onSubmit={(e) => handleSubmit(e)}>
          <label>
            <span className={classes.emailInp}>Email</span>
            <input
              className={classes.emailField}
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
          <label>
            <span className={classes.emailInp}>Hasło</span>
            <input
              className={classes.emailField}
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </label>
          <div className={`${classes.submitContainer} ${classes.marginLogin}`}>
            <input
              className={classes.emailField}
              type="submit"
              value="Zaloguj"
            />
          </div>
        </form>
        <div className={classes.submitContainer}>
          <button className={`${classes.signUpButton}`}>
            <Link to="/signUp">Utwórz konto</Link>
          </button>
        </div>
        <div className={classes.submitContainer}>
          <Link to="/resetPassword">Zapomniałeś hasła?</Link>
        </div>
      </div>
    </>
  );
};

export default Login;
