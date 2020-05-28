import React, { useState, useContext } from "react";
import classes from "../styles/index.module.scss";
import { ThemeContext } from "../store/ContextAPI";

import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { isLoggedIn, logout } from "../services/auth";
import { Link, Redirect } from "react-router-dom";

const Menu = (props) => {
  const logOut = () => {
    logout();
    window.location.replace("/logout");
  };

  const getSubLinks = (subLinks) => {
    return subLinks.map((link) => {
      return (
        <NavLink key={link.name} to={link.path} className="">
          {link.name}
        </NavLink>
      );
    });
  };
  return (
    <React.Fragment>
      <div className=""></div>
      <div>
        <div className="">
          <div className="">
            <FontAwesomeIcon
              size="3x"
              className={classes.menuIcon}
              icon={props.elements}
            />
          </div>
          {/* <div className="">
            {isLoggedIn() === true ? (
              <div className="">
                <ul>
                  <li>
                    <Link to="/myProfile">Mój profil</Link>
                  </li>
                  <li>
                    <Link to="/myAll">Moja twórczość</Link>
                  </li>
                  <li>
                    <Link to="/mySettings">Ustawienia</Link>
                  </li>
                  <li onClick={() => logOut()}>wyloguj się</li>
                </ul>
              </div>
            ) : (
              <Link to="/login">
                <span>zaloguj się</span>
              </Link>
            )}
          </div> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Menu;
