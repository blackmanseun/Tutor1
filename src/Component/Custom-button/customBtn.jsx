import React from 'react'
import './customBtn.styles.scss'

const CustomBtn = ({children, ...otherProps}) =>(

    <button className="customBtn" {...otherProps}>
        {children}
    </button>
)
export default CustomBtn