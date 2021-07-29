import React, { Component } from 'react'
import './Css/signIn.styles.scss'
import FormInput from './FormInput/FormInput';

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
                    <div>
                        <button className="sign-in-button" type="submit">Submit form</button>
                        {/* <button className="sign-in-button google-button" type="submit">Submit form</button> */}

                    </div>
                </form>
            </div>
        )
    }
}
