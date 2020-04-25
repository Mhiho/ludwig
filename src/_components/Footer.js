import React,{useContext} from 'react'
import {Link} from 'react-router-dom';
import classes from '../styles/index.module.scss'
import { ThemeContext } from '../store/Store';

const Footer = () => {
    const {light} = useContext(ThemeContext)
    return (
        <footer className={ light ? `${classes.Footer} ${classes.Footer2}` : `${classes.Footer}` }>
            <p>Zaprojektowane i stworzone przez 
                <Link className={ light ? `${classes.Signature} ${classes.Signature2}` : `${classes.Signature}` } to="https://github.com/Mhiho"> 
                    <span>:  </span>
                    <strong>Michał Pełka</strong>
                    <span> © </span> <span>{new Date().getFullYear()}</span> 
                </Link>

            </p>
        </footer>
    )
}

export default Footer