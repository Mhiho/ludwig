import React, { useState, useContext} from "react"
import classes from '../styles/index.module.scss'
import { ThemeContext } from './ThemeContext';


const Hamburger = () => {

    const {animate,setAnimate} = useContext(ThemeContext)

    const toggle = () => {
      setAnimate(!animate);
    };

        return (
         <div onClick={toggle} className={classes.hamburger}>

          <div className={`${classes.upLine}`} >
            <div className={animate ? `${classes.upLeft} ${classes.upLeftAnim}` : `${classes.upLeft}`}></div>
            <div className={animate ? `${classes.upMiddle} ${classes.upMiddleAnim}` : `${classes.upMiddle}`}></div>
            <div className={animate ? `${classes.upRight} ${classes.upRightAnim}` : `${classes.upRight}`}></div>
          </div>
          <div className={classes.middleLine}>
             <div className={animate ? `${classes.middleLeft} ${classes.middleLeftAnim}` : `${classes.middleLeft}`}></div>
            <div className={`${classes.middleMiddle}`}></div>
            <div className={animate ? `${classes.middleRight} ${classes.middleRightAnim}` : `${classes.middleRight}`}></div>
          </div>
          <div className={classes.downLine}>
          <div className={animate ? `${classes.upLeft} ${classes.upLeftAnim}` : `${classes.upLeft}`}></div>
            <div className={animate ? `${classes.upMiddle} ${classes.upMiddleAnim}` : `${classes.upMiddle}`}></div>
            <div className={animate ? `${classes.upRight} ${classes.upRightAnim}` : `${classes.upRight}`}></div>
          </div>
            </div>
        )
  
}

export default Hamburger