import React from 'react'
import { useParams } from 'react-router-dom';
import ShopData from '../Api/ShopData';
import Product from './Product';
import './productDetails.styles.scss'

 function ProductDetails({history}) {
    const  { id } = useParams();
    const category = ShopData.find( cat =>{
        return `${cat.id}` === id
    })
    // console.log(category)
    return (
        <div className="product-wrap">
        <h1>{category.title.toUpperCase()}</h1>
            <div className="productItems">
            {
                category.items.map(i =>(
                    <Product
                    key ={i.id}
                     product = {i}
                    />
                ))
            }
            
        </div>
        </div>
    )
}
export default ProductDetails