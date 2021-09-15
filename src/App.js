import React, { Component } from "react";
import Header from "./Component/Header";
import Homepage from "./Pages/Homepage/Homepage.jsx";
import Footer from "./Component/Footer";
import { Switch, Route } from "react-router-dom";
import ProductDetails from "./Component/Directory/ProductDetails";
import ShopPage from "./Pages/ShopPage/ShopPage.component";
import SignInOut from "./Pages/SignInOut/signInOut";
import {
  auth,
  createUserProfileDocument,
} from "./Component/Firebase/Firebase.utils";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot =>{
          this.setState({
            currentUser:{
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }
      this.setState({ currentUser: userAuth })
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/Shop" component={ShopPage} />
          <Route exact path="/signInOut" component={SignInOut} />
          <Route exact path="/category/:id" component={ProductDetails} />
        </Switch>
        <Footer />
      </div>
    );
  }
}
