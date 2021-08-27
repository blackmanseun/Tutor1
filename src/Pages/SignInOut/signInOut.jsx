import React from 'react'
import CreateAccount from '../../Component/createAccount'
import SignIn from '../../Component/signIn'
import './signInOut.styles.scss'

const SignInOut =()=> (
    <div className="signInOutSection">
        <SignIn />
        <CreateAccount />
    </div>
)
export default SignInOut