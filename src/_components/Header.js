import { NavLink, useHistory } from "react-router-dom";
import React, { useState, useContext } from "react";
import Menu from "./Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "../styles/header.module.scss";
import { isLoggedIn, logout, getUser } from "../services/auth";
import { ThemeContext } from "../store/ContextAPI";
import { adresse } from "../config";
import {
  faBook,
  faPenSquare,
  faFeatherAlt,
  faPaperPlane,
  faAddressCard,
  faUserCircle,
  faSearch,
  faUserCog,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import goButton from "../assets/sounds/goButton2.mp3";

const Header = () => {
  let audio = new Audio(goButton);
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [moveLine, setMoveLine] = useState(false);
  const move = () => {
    audio.play();
    setMoveLine(true);
    setTimeout(() => {
      setMoveLine(false);
    }, 600);
    counter >= elements.length - 1 ? setCounter(0) : setCounter(counter + 1);
  };
  const switchIcon = () => {
    audio.play();
    counter2 >= elementsProfile.length - 1
      ? setCounter2(0)
      : setCounter2(counter2 + 1);
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
      path: "/stories",
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
  const elementsProfile = [
    {
      name: "Profil",
      path: "/myProfile",
      subPages: [],
      icon: faAddressCard,
    },
    {
      name: "Moje książki",
      path: "/mine",
      subPages: [],
      icon: faBook,
    },
    {
      name: "Moje opowiadania",
      path: "/stories",
      subPages: [],
      icon: faPenSquare,
    },
    {
      name: "Moje wiersze",
      path: "/minePoems",
      subPages: [],
      icon: faPaperPlane,
    },
    {
      name: "Społeczność",
      path: "/society",
      subPages: [],
      icon: faUsers,
    },
    {
      name: "Ustawienia",
      path: "/settings",
      subPages: [],
      icon: faUserCog,
    },
  ];
  const history = useHistory();
  const { logged, setLogged } = useContext(ThemeContext);
  const logOut = () => {
    logout();
    history.push("/logout");
    setLogged(false);
  };
  const showOneIcon = (id) => {
    return elements[id].icon;
  };
  const showOneIcon2 = (id) => {
    return elementsProfile[id].icon;
  };
  const path = (id) => {
    return elements[id].path;
  };
  const path2 = (id) => {
    return elementsProfile[id].path;
  };
  const user = getUser();
  console.log(user);
  return (
    <React.Fragment>
      <nav className="">
        <div className={classes.navContainer}>
          <div className={classes.subNavContainer}>
            <div className={classes.menuAndMoveButton}>
              {logged === false ? (
                <div className={classes.userIcon}>
                  <NavLink to="/login">
                    <FontAwesomeIcon icon={faUserCircle} size="3x" />
                  </NavLink>
                </div>
              ) : (
                <div className={classes.userIcon}>
                  <Menu
                    elements={showOneIcon2(counter2)}
                    path={path2(counter2)}
                  />
                </div>
              )}
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
                .IO
              </NavLink>
            </div>
            <div className={classes.GoButton}>
              {logged === true ? (
                <React.Fragment>
                  <button className={classes.GoButtonUpUp} onClick={logOut}>
                    <NavLink to="/">x</NavLink>
                  </button>
                  <button
                    className={classes.GoButtonUp}
                    onClick={() => switchIcon()}
                  >
                    o
                  </button>
                  <button
                    className={classes.GoButtonDown}
                    onClick={() => move()}
                  >
                    ↲
                  </button>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <button
                    className={classes.GoButtonDown}
                    onClick={() => move()}
                  >
                    ↲
                  </button>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;
