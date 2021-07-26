import React from 'react'
import {withRouter} from 'react-router-dom'
import './collection-preview.styles.scss'


const CollectionPreview = ({ title, items, history}) => (
    <div className="collection">
        <h1 className="shopTitle" onClick ={()=> history.push(`/category/${title}`)}>{title.toUpperCase()}</h1>
        <div className="gridView">
            {
                items.filter((item, idx) => idx < 4).map(({name, imgUrl, price}) => (
                    <div className="preview">
                        <div 
                        style={{
                            backgroundImage: `url(${imgUrl})`
                        }} className="previewImg">
                            <div className="hiddenArea">
                            <button>
                                Add to cart
                            </button>
                            </div>
                        </div>
                        <div className="spanArea">
                            <span>
                                {name}
                            </span>
                            <span>
                                {price}
                            </span>
                        </div>
                    </div>
                ))
            }

        </div>
    </div>
)
export default withRouter(CollectionPreview)