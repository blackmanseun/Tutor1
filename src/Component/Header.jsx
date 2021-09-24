import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Css/Header.styles.scss";
import { auth } from "./Firebase/Firebase.utils";
import { connect } from "react-redux";
import CartIcon from "./cart-icon/CartIcon";
import CartDropdown from "./cart-dropdown/cart-dropdown.component";

const Header = ({ currentUser }) => {
  const [showCart, setShowCart] = useState(false);
  return (
    <div className="headerContainer">
      <Link to="/">
        <div className="logo">
          <img src="/Images/logo-shortcut.png" alt="logo" />
        </div>
      </Link>

      <div className="linkMenu">
        <Link to="/">Home</Link>
        <Link to="/Shop">Shop</Link>
        {currentUser ? (
          <div className="options" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link className="options" to="/SignInOut">
            Sign in
          </Link>
        )}
        <div
          onClick={() => setShowCart((v) => !v)}
          className="dropdown-trigger"
        >
          <CartIcon />
        </div>
        <div className={`dropdown ${showCart?'show': ''}`}>
          <CartDropdown />
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
