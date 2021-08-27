import React, { Component } from 'react'
import './Css/signIn.styles.scss'
import CustomBtn from './Custom-button/customBtn';
import FormInput from './FormInput/FormInput';
import { signInWithGoogle } from "./Firebase/Firebase.utils";

export default class SignIn extends Component {
    constructor(props){
        super(props);
        this.state={
            email: '',
            password: ''
        }
    }
    handleSubmit = event  =>{
        event.preventDefault()
        this.setState({
            email: "",
            password: ""
        })
    }
    handleChange = event =>{
        const {value, name} = event.target
        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <div className="signInSection">
                <h2>I already have an account</h2>
                <span>Sign in with email and password</span>
    
            <form className="signInForm" onSubmit={this.handleSubmit}>
            <FormInput
                name = 'email'
                type = 'email'
                value = {this.state.email}
                handleChange = {this.handleChange}
                label = 'email'
                required
                />
                <FormInput
                name = 'password'
                type = 'password'
                value = {this.state.password}
                handleChange = {this.handleChange}
                label = 'password'
                required
                />
                    <div className="btnGroup">
                        <CustomBtn type="submit" > Submit</CustomBtn><br/>
                        <CustomBtn onClick={signInWithGoogle} isGoogleSignIn >Sign in with Google</CustomBtn>
                        
                    </div>
                </form>
            </div>
        )
    }
}
