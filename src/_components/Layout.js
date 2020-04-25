import React, {useContext,useEffect, useState} from "react"
import Header from "./Header"
import Footer from "./Footer"
import classes from '../styles/index.module.scss'
import {ThemeContext} from '../store/Store'
import ErrorBoundary from "../hoc/errorHandler"


const Layout = ({ children }) => {

  const {light} = useContext(ThemeContext)
  const {animate} = useContext(ThemeContext)



  return (
    <>
    <Header />
      <div style={{height: '64px', width: '100%'}} ></div>
      <div className={light ? `${classes.light}` : `${classes.dark}`}>
        <div className={light ? `${classes.hidden}` : `${classes.hidden2}`}><h2 className={classes.CenterText}>wkrótce aplikacja mobilna</h2> 
          
            <div className={classes.backplan1}></div>    
            <div className={classes.backplan2}></div>        
            <div className={classes.backplan3}></div>  
            <div className={classes.backplan4}></div>  
            <div className={classes.backplan5}></div>  
          
        </div>
        <main>
          <div className={classes.marginTop}>
          <div>
            <ErrorBoundary>

          {children }
            </ErrorBoundary>
          </div>
          </div>
          </main>
    <Footer />
      </div>
    </>
  )
  
}

export default Layout