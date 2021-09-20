import React from 'react'
import './card.component.styles.scss'
import { withRouter } from "react-router-dom";

const Card = ({item, history, match}) => (
    <div
    className={`${item?.size} inner`} onClick={()=> history.push(`${match.url}category/${item.id}`) }>
        <div className="backgroundImg" style={{
        backgroundImage: `url(${item.imgUrl})`,
    }}
        >

        </div>
            <div className="content">
                <h1>{item.title}</h1>
                <span>SHOP NOW</span>
            </div>
        </div>
)
export default withRouter(Card)