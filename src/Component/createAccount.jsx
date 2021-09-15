import React, { Component } from "react";
import CustomBtn from "./Custom-button/customBtn";
// import { auth } from "./Firebase/Firebase.utils";
import FormInput from "./FormInput/FormInput";
import "./Css/createAccount.styles.scss";
import { auth, createUserProfileDocument } from "./Firebase/Firebase.utils";

export default class CreateAccount extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password != confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
     catch (error) {
      console.log(error);
    }
  };
  
  handleChange = event => {
      const { value, name } = event.target;
      this.setState({
          [name]: value
      })
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="signUpSection">
        <h2>I don't have an acoount</h2>
        <span>Sign up with email and password</span>
        <form className="signUpForm">
          <FormInput
            name="displayName"
            type="text"
            value={displayName}
            handleChange = {this.handleChange}
            label="Username"
            required
          />

          <FormInput
            name="email"
            type="text"
            value={email}
            handleChange = {this.handleChange}
            label="email"
            required
          />

          <FormInput
            name="password"
            type="password"
            value={password}
            handleChange = {this.handleChange}
            label="password"
            required
          />

          <FormInput
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            handleChange = {this.handleChange}
            label="Confirm Password"
            required
          />

          <div className="btnGroup">
            <CustomBtn type="submit"> Create Account </CustomBtn>
          </div>
        </form>
      </div>
    );
  }
}
