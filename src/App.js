import React, { Component } from 'react'
import Header from './Component/Header'
import Homepage from "./Pages/Homepage/Homepage.jsx";
import Footer from "./Component/Footer";
import { Switch, Route } from "react-router-dom";
import ProductDetails from './Component/Directory/ProductDetails';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/:details' component={ProductDetails} />
        </Switch>
        <Footer/>
      </div>
    )
  }
}
