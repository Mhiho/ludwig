import React,{Component} from "react"
import { Link } from "react-router-dom"
import { getUser, isLoggedIn } from "../../services/auth"
import HamburgerBig from '../../_components/HamburgerBig';
import classes from '../../styles/index.module.scss';
import classes2 from '../../styles/login.module.scss'
import Search from '../../_components/Search'


class HomePage extends Component {

    render(){
        return(
            <div>
              <div className={classes.HomeFace}>
                
                <HamburgerBig />
               </div>
      
              <div>
      
              <h2 className={classes2.pageTitleHomePage}>Szukaj pozycji:</h2>
              <Search />
              </div>
          </div>
        )
    }
}
export default HomePage