import React, { Component } from 'react'
import Header from './Component/Header'
import Homepage from "./Pages/Homepage/Homepage.jsx";
import Footer from "./Component/Footer";
import { Switch, Route } from "react-router-dom";
import ProductDetails from './Component/Directory/ProductDetails';
import ShopPage from './Pages/ShopPage/ShopPage.component';
import SignInOut from './Pages/SignInOut/signInOut';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/Shop' component={ShopPage} />
        <Route exact path='/signInOut' component={SignInOut} />
        <Route exact path='/category/:id' component={ProductDetails} />
        </Switch>
        <Footer/>
      </div>
    )
  }
}
