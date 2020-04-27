import React, { useState, useContext } from "react"
import classes from '../styles/index.module.scss'
import { ThemeContext } from '../store/ContextAPI';

import { NavLink } from 'react-router-dom';
import menuStyle from '../styles/hamburger.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { isLoggedIn, logout } from '../services/auth'
import { Link, Redirect } from 'react-router-dom'

const Hamburger = data => {
  const logOut = () => {
    logout()
    console.log('logOut');
  };
  const toggleMenu = () => {
    data.toggleMenu();
  };

  const getSubLinks = subLinks => {
    return subLinks.map(link => {
      return (
        <NavLink
          key={link.name}
          to={link.path}
          className={`${menuStyle.link} mb-2`}
        >
          {link.name}
        </NavLink>
      );
    });
  };

  const navItems = data.elements.map(item => {
    return !item.subPages.length ? (
      <NavLink
        key={item.name}
        to={item.path}
        className={`${menuStyle.link} mb-2`}
      >
        {item.name}
      </NavLink>
    ) : (
        <div key={item.name}>
          <div className='d-flex flex-column justify-content-center'>
            {getSubLinks(item.subPages)}
          </div>
        </div>
      );
  });

  return (
    <div>
      <div
        className={`${menuStyle.menuBackground} ${data.close ? 'd-none' : ''}`}
      ></div>
      <div
        className={`${menuStyle.menuHide} ${
          !data.close ? menuStyle.menuShow : ''
          } d-flex flex-column justify-content-between`}
      >
        <div
          className={`${menuStyle.closeHide} ${
            !data.close ? menuStyle.closeShow : ''
            } p-2`}
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={faTimes} color='#ffffff' />
        </div>
        <div
          className={`${menuStyle.links} d-flex flex-column justify-content-center`}
        >
          <div className='d-flex flex-column justify-content-center'>
            {navItems}
          </div>
          <div
            className={`${menuStyle.logOut} mt-4 pt-3 pb-3`}
            onClick={isLoggedIn === true ? logOut() : null}
          >
            {isLoggedIn === true ? (<span>wyloguj się</span>) : (<Link to="/login"><span>zaloguj się</span></Link>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
