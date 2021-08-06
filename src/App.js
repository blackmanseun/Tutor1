import React, { Component } from 'react'
import Header from './Component/Header'
import Homepage from "./Pages/Homepage/Homepage.jsx";
import Footer from "./Component/Footer";
import { Switch, Route } from "react-router-dom";
import ProductDetails from './Component/Directory/ProductDetails';
import ShopPage from './Pages/ShopPage/ShopPage.component';
import SignInOut from './Pages/SignInOut/signInOut';
import {auth} from './Component/Firebase/Firebase.utils'

export default class App extends Component {
 constructor(){
   super();
   this.state={
     currentUser: null
   }
 }
 unsubscribeFromAuth = null

 componentDidMount(){
  this.unsubscribeFromAuth = auth.onAuthStateChanged(user=>{
     this.setState({currentUser: user})
   })
 }
 componentWillUnmount(){
   this.unsubscribeFromAuth()
 }


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
