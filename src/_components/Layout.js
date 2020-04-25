import React, { useContext, useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import classes from '../styles/index.module.scss';
import { ThemeContext } from './ThemeContext';

const Layout = ({ children }) => {
  const { light } = useContext(ThemeContext);
  const { animate } = useContext(ThemeContext);

  return (
    <>
      <Header />
      <div style={{ height: '64px', width: '100%' }}></div>
      <div className={light ? `${classes.light}` : `${classes.dark}`}>
        <main>
          <div className={classes.marginTop}>
            <div>{children}</div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
