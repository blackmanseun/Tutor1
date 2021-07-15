import React, { Component } from 'react'
import CardsApi from '../Api/Card.api.jsx'
import Card from '../Cards/Card.jsx'


export default class Directory extends Component {
constructor(){
    super();
    this.state ={
        section: CardsApi
    }
}

    render() {
        return (
            <div className="section"> 
              {
                  this.state.section.map(({id, imgUrl, title, size}) =>(
                      <Card
                      title ={title}
                      key ={id}
                      imgUrl={imgUrl}
                      size={size}
                      />
                  ))
              }  
            </div>
        )
    }
}
