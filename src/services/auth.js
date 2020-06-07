import axios from "axios";
import { adresse } from "../config";

export const isBrowser = () => typeof window != "undefined";
export const getUser = () =>
  isBrowser() && window.localStorage.getItem("user")
    ? JSON.parse(window.localStorage.getItem("user"))
    : {};
const setUser = (user) =>
  window.localStorage.setItem("user", JSON.stringify(user));
//
export const login = async (email, password) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  };

  return await fetch(`${adresse}/users/login`, requestOptions)
    .then((response) => {
      if (!response.ok) {
        return new Error("Błąd logowania");
      }
      return response.json();
    })
    .then((user) => {
      // login successful if there's a jwt token in the response
      if (user.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        setUser(user);
      }
      return user;
    });
};
//
export const isLoggedIn = () => {
  const user = getUser();
  return !!user.token;
};
export const logout = () => {
  const url = `${adresse}/users/logoutOne`;
  const headers = {
    Authorization: "Bearer " + getUser().token,
  };
  fetch(url, {
    method: "POST",
    headers: headers,
  })
    .then((response) => {
      return response;
    })
    .then((data) => data);
  setUser({});
};
