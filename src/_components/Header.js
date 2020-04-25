import { NavLink, withRouter } from 'react-router-dom';
import React, { useState } from 'react';
import navStyle from '../styles/navigation.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faCaretDown,
  faUserCircle
} from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/images/logo_bookcase_white.png';
const Header = () => {
  const [hide, subPagesOnOff] = useState(true);
  const togglSubPages = () => {
    subPagesOnOff(!hide);
  };

  const [close, menuOnOff] = useState(true);
  const toggleMenu = () => {
    menuOnOff(!close);
  };

  const elements = [
    {
      name: 'Książki',
      path: '/books',
      subPages: []
    },
    {
      name: 'Aktualności',
      path: '/news',
      subPages: []
    },
    {
      name: '???',
      path: '',
      close: true,
      subPages: [
        {
          name: 'Felietony',
          path: '/feuilletons'
        },
        {
          name: 'Opowiadania',
          path: '/story'
        }
      ]
    },
    {
      name: 'Wiersze',
      path: '/poems',
      subPages: []
    }
  ];

  const showSubPages = subPages => {
    return subPages.map(page => {
      return (
        <NavLink
          key={page.name}
          to={page.path}
          className={`${navStyle.subLink} p-2`}
          activeClassName={navStyle.subLinkActive}
        >
          {page.name}
        </NavLink>
      );
    });
  };

  const navItems = elements.map(item => {
    return !item.subPages.length ? (
      <NavLink
        key={item.name}
        to={item.path}
        className={`${navStyle.link} p-4 ml-2 mr-2`}
        activeClassName={navStyle.linkActive}
      >
        {item.name}
      </NavLink>
    ) : (
      <div className={`${navStyle.link} p-4 ml-2 mr-2`} key={item.name}>
        <div className={navStyle.dropDown} onClick={togglSubPages}>
          <span className='mr-2'>{item.name}</span>
          <FontAwesomeIcon icon={faCaretDown} color='#ffffff' />
          <div
            className={`${navStyle.subPages} ${
              hide ? 'd-none' : 'd-flex flex-column justify-content-start`'
            }`}
          >
            {showSubPages(item.subPages)}
          </div>
        </div>
      </div>
    );
  });

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
        <section className='d-none d-lg-flex justify-content-between'>
          {navItems}
        </section>
        <section className='d-flex justify-content-between'>
          <NavLink className='p-4' to='/profile'>
            <FontAwesomeIcon icon={faUserCircle} color='#ffffff' />
          </NavLink>
          <div className='p-4'>
            <div className={navStyle.hamburger} onClick={toggleMenu}>
              <FontAwesomeIcon icon={faBars} color='#ffffff' />
            </div>
          </div>
        </section>
      </div>
    </header>
  );
};

export default withRouter(Header);
