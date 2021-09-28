import React from 'react'
import './customBtn.styles.scss'

const CustomBtn = ({children, variant='', block=false, ...otherProps}) =>(

    <button
     className={`${variant} ${block&&'block'} customBtn `} {...otherProps}>
        {children}
    </button>
)
export default CustomBtn