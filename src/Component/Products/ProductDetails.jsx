import React, { Component } from 'react'
import { useParams } from 'react-router-dom';
import ShopData from '../Api/ShopData';
import Product from './Product';


export default function ProductDetails({history}) {
    const  { id } = useParams();
    const category = ShopData.find( cat =>{
        return `${cat.id}` === id
    })
    console.log(category)
    return (
        <div>
            {
                category.items.map(i =>(
                    <Product
                    key ={i.id}
                     product = {i}
                    />
                ))
            }
            
        </div>
    )
}
