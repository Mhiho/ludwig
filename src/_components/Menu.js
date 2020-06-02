import React, { useState, useContext } from "react";
import classes from "../styles/index.module.scss";
import { ThemeContext } from "../store/ContextAPI";

import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { Link, Redirect } from "react-router-dom";

const Menu = (props) => {
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
            <NavLink to={props.path}>
              <FontAwesomeIcon
                size="3x"
                className={classes.menuIcon}
                icon={props.elements}
              />
            </NavLink>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Menu;
