import React from 'react'
import { useHistory } from 'react-router'
import './card.component.styles.scss'

const Card = ({item, match}) => {
    const history = useHistory()
    console.log(history)
    return (
        <div
            className={`${item?.size} inner`} onClick={() => history.push(`/category/${item.id}`)}>
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
}
export default Card