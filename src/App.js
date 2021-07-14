import React, { Component } from 'react'
import Header from './Component/Header'
import Section from "./Component/Section";
import Footer from "./Component/Footer";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Section/>
        <Footer/>
      </div>
    )
  }
}
