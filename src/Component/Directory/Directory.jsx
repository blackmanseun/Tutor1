import React from 'react'
import ShopData from '../Api/ShopData.jsx';
import Card from '../Cards/Card.jsx'


const Directory = () => {
    return (
        <div className="section"> 
          {
              ShopData.map((item) =>(
                  <Card
                  key ={item.id}
                  item = {item}
                  />
              ))
          }  
        </div>
    )
}
export default Directory