import { NavLink, Link, useHistory,withRouter } from "react-router-dom"
import React, {useContext,useState} from "react"
import classes from '../styles/index.module.scss'
import Hamburger from './Hamburger'
import {ThemeContext} from './ThemeContext'
import { getUser, isLoggedIn, logout } from "../services/auth"

const Header = () => {

  const {animate} = useContext(ThemeContext)
  const {light, setLight} = useContext(ThemeContext)
  const [panelOn,setPanelOn] = useState(false)
  const [miniPanelOn, setMiniPanelOn] = useState(false)
  const toggleTheme = () => {
    setLight(!light);
  };
  const toggleMiniPanel = () => {
    setMiniPanelOn(!miniPanelOn)
  }
  const togglePanel = () => {
    setPanelOn(!panelOn)
  }
  return(
    <header className={light ? `${classes.Header} ${classes.Header2}` :`${classes.Header}` }>
    <nav  className={light ? `${classes.navMain}` : `${classes.navMain2}`}>
      <div className={classes.leftMenu}>

        <Hamburger />
        <Link to={{pathname: '/'}} className={light ? `${classes.SiteTitle} ${classes.SiteTitle2}` : `${classes.SiteTitle}` }>
          Ich Otchłanie
        </Link>
      </div>
      <div className={classes.middleMenu}></div>
      <div className={classes.rightMenu}>
        <button className={light ? `${classes.Button} ${classes.Button2}` : `${classes.Button}` } onClick={toggleTheme}>kolor</button>
        <ul>

          <li><NavLink to="/books" className={light ?  `${classes.Link} ${classes.Link2}` : `${classes.Link}`} activeClassName={light ? `${classes.active}` : `${classes.active2}`} >Książki</NavLink></li>
          <li><NavLink to="/poems"  className={light ? `${classes.Link} ${classes.Link2}` : `${classes.Link}` } activeClassName={light ? `${classes.active}` : `${classes.active2}`}  >Wiersze</NavLink></li>
        {isLoggedIn() ? 
<div><NavLink to="#" onClick={togglePanel}  className={light ? `${classes.Link} ${classes.Link2}` : `${classes.Link}` }  activeClassName={light ? `${classes.active}` : `${classes.active2}`}><span className={panelOn ? `${classes.hideIt}` : ``} >{getUser().user.name}</span></NavLink>
                {panelOn ? <div className={light ? `${classes.Submenu}` : `${classes.Submenu2}` }> 
                              <ul className={light ? `${classes.mainSubmenu2}` : `${classes.mainSubmenu}`}>
                                <li onClick={togglePanel} className={classes.closePanel}>×</li>
                                <li><Link to='/myProfile'>Mój profil</Link></li>
                                <li><Link to='/mine'>Moje książki</Link></li>
                                <li><Link to='/minePoems'>Moje wiersze</Link></li>
                                <li><Link to='/society'>Społeczność</Link></li>
                                <li><Link to='/settings'>Administracja</Link></li>
                                <li><Link onClick={logout} to='/logout'>Wyloguj się</Link></li> 
                             </ul> 
                           </div> : null}
           </div>
         : <li><NavLink to="/login" className={light ? `${classes.Link} ${classes.Link2}` : `${classes.Link}` }  activeClassName={light ? `${classes.active}` : `${classes.active2}`} >Zaloguj</NavLink></li>

        }
          
          </ul>
      </div>

    </nav>
        <div className={window.matchMedia("(max-width: 999px)") && !animate ? `${classes.smallNav}` : `${classes.smallNav} ${classes.correction}`}>
          <ul  className={light ? `${classes.navUl} ${classes.navUl2} ${classes.hiddenMenu}`: `${classes.navUl} ${classes.hiddenMenu}`}>
            <li onClick={toggleTheme} className={light ? `${classes.switch}` : `${classes.switch2}`}>◑</li>
            <li><NavLink to="/books" className={light ?  `${classes.Link} ${classes.Link2}` : `${classes.Link}`} activeClassName={light ? `${classes.active}` : `${classes.active2}`} >Książki</NavLink></li>
            <li><NavLink to="/poems"  className={light ? `${classes.Link} ${classes.Link2}` : `${classes.Link}` } activeClassName={light ? `${classes.active}` : `${classes.active2}`}  >Wiersze</NavLink></li>
            {isLoggedIn() ?
              <li><NavLink onClick={toggleMiniPanel} to="#" className={light ?  `${classes.Link} ${classes.Link2}` : `${classes.Link}`} activeClassName={light ? `${classes.active}` : `${classes.active2}`} ><span>{getUser().user.name}</span></NavLink> </li>
            : <li><NavLink to="/login" className={light ?  `${classes.Link} ${classes.Link2}` : `${classes.Link}`} activeClassName={light ? `${classes.active}` : `${classes.active2}`} >Zaloguj</NavLink></li> 
          }
          </ul>
                    {miniPanelOn ? <div className={light ? `${classes.miniSubmenu}` : `${classes.miniSubmenu2}` }> 
                              <ul className={light ? `${classes.mainMiniSubmenu2}` : `${classes.mainMiniSubmenu}`}>
                                <li onClick={toggleMiniPanel} className={classes.closeMiniPanel}>×</li>
                                <li><Link to='/myProfile'>Mój profil</Link></li>
                                <li><Link to='/mine'>Moje książki</Link></li>
                                <li><Link to='/minePoems'>Moje wiersze</Link></li>
                                <li><Link to='/society'>Społeczność</Link></li>
                                <li><Link to='settings'>Administracja</Link></li>
                                <li><Link onClick={logout} to='/logout'>Wyloguj się</Link></li> 
                             </ul> 
                           </div> : null}
         
        </div>
  </header>
)
}


export default withRouter(Header)