import React, { Component } from 'react'
import ShopData from '../../Component/Api/ShopData';
import CollectionPreview from '../../Component/collection-preview';

export default class ShopPage extends Component {

    constructor(props){
        super(props);
        this.state ={
            ShopData: ShopData
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.ShopData.map(({id,...otherPreviewProps})=>(

                        <CollectionPreview
                         key={id} 
                         {...otherPreviewProps}/>

                    ))
                }
            </div>
        )
    }
}
