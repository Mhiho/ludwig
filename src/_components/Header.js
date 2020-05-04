import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import Hamburger from './Hamburger';
import navStyle from '../styles/navigation.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/images/logo_bookcase_white.png';

const Header = () => {
  const [isMenuHamburger, isMenuHamburgerTrue] = useState(false);
  const isMenuHamburgerTrueFunc = () => {
    isMenuHamburgerTrue(true);
  };

  const [close, setClose] = useState(true);
  const toggleMenu = () => {
    if (!isMenuHamburger) {
      isMenuHamburgerTrueFunc();
    }
    setClose(!close);
  };

  const elements = [
    {
      name: 'Książki',
      path: '/books',
      subPages: [],
    },
    {
      name: 'Aktualności',
      path: '/news',
      subPages: [],
    },
    {
      name: 'Felietony',
      path: '/feuilletons',
      subPages: [],
    },
    {
      name: 'Opowiadania',
      path: '/story',
      subPages: [],
    },
    {
      name: 'Wiersze',
      path: '/poems',
      subPages: [],
    },
  ];

  return (
    <header className={navStyle.header}>
      <div
        className={`${navStyle.globalNav}
          container-fluid d-flex justify-content-between`}
      >
        <section className='d-flex justify-content-center'>
          <NavLink className='p-4' to='/'>
            <img src={logo} alt='logo dream book case'></img>
          </NavLink>
        </section>
        <div
          className={`${!close ? navStyle.hamburgerOpen : navStyle.hamburger} ${
            !isMenuHamburger ? navStyle.appear : ''
          }`}
          onClick={toggleMenu}
        >
          <div className={`${!close ? navStyle.dNone : ''}`}>
            <FontAwesomeIcon icon={faBars} color='#ffffff' size='2x' />
          </div>
          <div className={`${close ? navStyle.dNone : ''}`}>
            <FontAwesomeIcon icon={faTimes} color='#ffffff' size='2x' />
          </div>
        </div>
      </div>
      <div className={`${!isMenuHamburger ? 'invisible' : ''}`}>
        <Hamburger elements={elements} close={close} toggleMenu={toggleMenu} />
      </div>
    </header>
  );
};

export default Header;
