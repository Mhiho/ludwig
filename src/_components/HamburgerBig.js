import React, { useState } from "react";
import classes from "../styles/index.module.scss";

const HamburgerBig = () => {
  const [animateBig, setAnimateBig] = useState(false);
  const toggle = () => {
    setAnimateBig(!animateBig);
  };
  return (
    <div onClick={toggle} className={classes.hamburgerBig}>
      <div className={`${classes.upLine}`}>
        <div
          className={
            animateBig
              ? `${classes.upLeft} ${classes.upLeftAnim}`
              : `${classes.upLeft}`
          }
        ></div>
        <div
          className={
            animateBig
              ? `${classes.upMiddle} ${classes.upMiddleAnim}`
              : `${classes.upMiddle}`
          }
        ></div>
        <div
          className={
            animateBig
              ? `${classes.upRight} ${classes.upRightAnim}`
              : `${classes.upRight}`
          }
        ></div>
      </div>
      <div className={classes.middleLine}>
        <div
          className={
            animateBig
              ? `${classes.middleLeft} ${classes.middleLeftAnim}`
              : `${classes.middleLeft}`
          }
        ></div>
        <div className={`${classes.middleMiddle}`}></div>
        <div
          className={
            animateBig
              ? `${classes.middleRight} ${classes.middleRightAnim}`
              : `${classes.middleRight}`
          }
        ></div>
      </div>
      <div className={classes.downLine}>
        <div
          className={
            animateBig
              ? `${classes.upLeft} ${classes.upLeftAnim}`
              : `${classes.upLeft}`
          }
        ></div>
        <div
          className={
            animateBig
              ? `${classes.upMiddle} ${classes.upMiddleAnim}`
              : `${classes.upMiddle}`
          }
        ></div>
        <div
          className={
            animateBig
              ? `${classes.upRight} ${classes.upRightAnim}`
              : `${classes.upRight}`
          }
        ></div>
      </div>
    </div>
  );
};

export default HamburgerBig;
