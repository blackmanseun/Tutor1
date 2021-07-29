import React from 'react'
import { Link } from "react-router-dom";
import './Css/Header.styles.scss'

const Header = () => (
    <div className="headerContainer">
            <div className="logo">
                <img src="/Images/logo-shortcut.png" alt="logo"/>
            </div>

            <div className="linkMenu">
            <Link to='/'>Home</Link>
            <Link to='/Shop'>Shop</Link>
            <Link to='/SignInOut'>Sign in</Link>
            </div>
    </div>
) 

export default Header
