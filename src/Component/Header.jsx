import React from 'react'
import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/Cart'>Cart</Link>
            <Link to='/Contact'>Contact</Link>
        </div>
    )
}

export default Header
