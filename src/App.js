import React, { Component } from 'react'
import Header from './Component/Header'
import Homepage from "./Pages/Homepage/Homepage.jsx";
import Footer from "./Component/Footer";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Homepage/>
        <Footer/>
      </div>
    )
  }
}
