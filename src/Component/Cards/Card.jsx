import React from 'react'
import './card.component.styles.scss'

const Card = ({title, imgUrl, size}) => (
    <div
    className={`${size} inner`}>
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
export default Card