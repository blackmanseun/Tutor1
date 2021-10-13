import React, { Component } from "react";
import Header from "./Component/Header";
import Homepage from "./Pages/Homepage/Homepage.jsx";
import Footer from "./Component/Footer";
import { Switch, Route, Redirect } from "react-router-dom";
import ProductDetails from "./Component/Products/ProductDetails";
import ShopPage from "./Pages/ShopPage/ShopPage.component";
import SignInOut from "./Pages/SignInOut/signInOut";
import {
  auth,
  createUserProfileDocument,
} from "./Component/Firebase/Firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./Component/Redux/User/user.actions";
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from "./Component/Redux/User/user.selectors";
import checkout from "./Component/checkout/checkout";
class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    console.log("works");
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          console.log("works", userAuth);
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <main className="main">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/Shop" component={ShopPage} />
          <Route exact path="/signInOut" render={() => this.props.currentUser ?(<Redirect to ="/"/>): (<SignInOut/>)} />
          <Route exact path="/category/:id" component={ProductDetails} />
          <Route exact path="/checkout" component={checkout}/>
        </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
