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
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [counter, setCounter] = useState(0);
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
    console.log(menu);
  };
  const [moveLine, setMoveLine] = useState(false);
  const move = () => {
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
      name: "Aktualności",
      path: "/news",
      subPages: [],
      icon: faFeatherAlt,
    },
    {
      name: "Felietony",
      path: "/feuilletons",
      subPages: [],
      icon: faPenSquare,
    },
    {
      name: "Opowiadania",
      path: "/story",
      subPages: [],
      icon: faStickyNote,
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
  console.log(showOneIcon(counter));
  return (
    <React.Fragment>
      <nav className="">
        <div className={classes.navContainer}>
          <div className={classes.subNavContainer}>
            <div className={classes.menuAndMoveButton}>
              <button
                className={
                  !moveLine
                    ? `${classes.MovingButton}`
                    : `${classes.MovingButton} ${classes.addClassMove}`
                }
                onClick={() => toggleMenu()}
              ></button>
              <div
                className={
                  !moveLine
                    ? `${classes.MovingMask}`
                    : `${classes.MovingMask} ${classes.addMoveMask}`
                }
              ></div>
            </div>
            <div>
              <Menu elements={showOneIcon(counter)} />
            </div>
          </div>
          <div></div>
          <div className={classes.titleAndGoButton}>
            <div>
              <NavLink className="Title" to="/">
                Ich Otchłanie
              </NavLink>
            </div>
            <button className={classes.GoButton} onClick={() => move()}>
              Go
            </button>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;
