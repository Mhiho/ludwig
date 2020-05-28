import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import classes from "../styles/index.module.scss";
import { ThemeContext } from "../store/ContextAPI";
import ErrorBoundary from "../hoc/errorHandler";

const Layout = ({ children }) => {
  const { light } = useContext(ThemeContext);
  const { animate } = useContext(ThemeContext);

  return (
    <>
      <Header />
      <div className={light ? `${classes.light}` : `${classes.dark}`}>
        <main>
          <div>{children}</div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
