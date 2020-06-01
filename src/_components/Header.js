import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import Menu from "./Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "../styles/header.module.scss";
import {
  faBook,
  faPenSquare,
  faFeatherAlt,
  faPaperPlane,
  faStickyNote,
  faUserCircle,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import goButton from "../assets/sounds/goButton2.mp3";

const Header = () => {
  let audio = new Audio(goButton);
  const [counter, setCounter] = useState(0);
  const [moveLine, setMoveLine] = useState(false);
  const move = () => {
    audio.play();
    setMoveLine(true);
    setTimeout(() => {
      setMoveLine(false);
    }, 600);
    counter >= elements.length - 1 ? setCounter(0) : setCounter(counter + 1);
  };
  const elements = [
    {
      name: "Książki",
      path: "/books",
      subPages: [],
      icon: faBook,
    },
    {
      name: "Wyszukiwarka",
      path: "/search",
      subPages: [],
      icon: faSearch,
    },
    {
      name: "Opowiadania",
      path: "/story",
      subPages: [],
      icon: faPenSquare,
    },
    {
      name: "Wiersze",
      path: "/poems",
      subPages: [],
      icon: faPaperPlane,
    },
  ];

  const showOneIcon = (id) => {
    return elements[id].icon;
  };
  const path = (id) => {
    return elements[id].path;
  };
  console.log(showOneIcon(counter));
  return (
    <React.Fragment>
      <nav className="">
        <div className={classes.navContainer}>
          <div className={classes.subNavContainer}>
            <div className={classes.menuAndMoveButton}>
              <div className={classes.userIcon}>
                <NavLink to="#">
                  <FontAwesomeIcon icon={faUserCircle} size="3x" />
                </NavLink>
              </div>
              <div
                className={
                  !moveLine
                    ? `${classes.MovingButton}`
                    : `${classes.MovingButton} ${classes.addClassMove}`
                }
              ></div>
              <div
                className={
                  !moveLine
                    ? `${classes.MovingMask}`
                    : `${classes.MovingMask} ${classes.addMoveMask}`
                }
              ></div>
              <div className={classes.menuIcon}>
                <Menu elements={showOneIcon(counter)} path={path(counter)} />
              </div>
            </div>
          </div>
          <div></div>
          <div className={classes.titleAndGoButton}>
            <div className={classes.titleModif}>
              <NavLink className="Title" to="/">
                Ich Otchłanie
              </NavLink>
            </div>
            <button className={classes.GoButton} onClick={() => move()}>
              ↲
            </button>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;
