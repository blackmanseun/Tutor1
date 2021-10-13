import React, { useState } from 'react'
import './Css/signIn.styles.scss'
import CustomBtn from './Custom-button/customBtn';
import FormInput from './FormInput/FormInput';
import { auth, signInWithGoogle } from "./Firebase/Firebase.utils";

const SignIn = () =>{
 const [values, setValues] = useState({email:'', password:''})
  
 const handleSubmit = async event  =>{
        event.preventDefault();
        
        try{
            await auth.signInWithEmailAndPassword(values.email, values.password);
            setValues({
                email: "",
                password: ""
            })
        }
        catch(error){
            alert(error.message)
        }
    }
   const handleChange = event =>{
        const {value, name} = event.target
        setValues({
            ...values,
            [name]: value
        })
    }
    return (
        <div className="signInSection">
            <h2>I already have an account</h2>
            <span>Sign in with email and password</span>

        <form className="signInForm" onSubmit={handleSubmit}>
        <FormInput
            name = 'email'
            type = 'email'
            value = {values.email}
            handleChange = {handleChange}
            label = 'email'
            required
            />
            <FormInput
            name = 'password'
            type = 'password'
            value = {values.password}
            handleChange = {handleChange}
            label = 'password'
            required
            />
                <div className="btnGroup">
                    <CustomBtn type="submit" > Submit</CustomBtn><br/>
                    <CustomBtn onClick={signInWithGoogle} variant="blue" >Sign in with Google</CustomBtn>
                    
                </div>
            </form>
        </div>
    )

} 
    export default SignIn