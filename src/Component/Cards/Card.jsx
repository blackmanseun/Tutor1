import React from 'react'
import './card.component.styles.scss'
import { withRouter } from "react-router-dom";

const Card = ({title, imgUrl, size, history, linkUrl, match}) => (
    <div
    className={`${size} inner`} onClick={()=> history.push(`${match.url}${linkUrl}`) }>
        <div className="backgroundImg" style={{
        backgroundImage: `url(${imgUrl})`,
    }}
        >

        </div>
            <div className="content">
                <h1>{title}</h1>
                <span>SHOP NOW</span>
            </div>
        </div>
)
export default withRouter(Card)