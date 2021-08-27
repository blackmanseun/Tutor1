import React from 'react'
import './customBtn.styles.scss'

const CustomBtn = ({children, isGoogleSignIn, ...otherProps}) =>(

    <button
     className={`${isGoogleSignIn ? 'googleBtn' : ''} customBtn `} {...otherProps}>
        {children}
    </button>
)
export default CustomBtn