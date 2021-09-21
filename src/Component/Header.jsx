import React from 'react'
import { Link } from "react-router-dom";
import './Css/Header.styles.scss'
import { auth } from './Firebase/Firebase.utils';
import { connect } from 'react-redux'

const Header = ({currentUser}) => (
    <div className="headerContainer">
            <div className="logo">
                <img src="/Images/logo-shortcut.png" alt="logo"/>
            </div>

            <div className="linkMenu">
            <Link to='/'>Home</Link>
            <Link to='/Shop'>Shop</Link>
            {
                currentUser ? (
                    <div className="options" onClick={() => auth.signOut()}>
                        Sign Out
                    </div>
                ):
                (
                    <Link className="options" to='/SignInOut'>Sign in</Link>
                )
            }
            </div>
    </div>
) 
const mapStateToProps = state =>({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header)
