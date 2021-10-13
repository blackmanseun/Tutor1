import React, { useState } from "react";
import CustomBtn from "./Custom-button/customBtn";
// import { auth } from "./Firebase/Firebase.utils";
import FormInput from "./FormInput/FormInput";
import "./Css/createAccount.styles.scss";
import { auth, createUserProfileDocument } from "./Firebase/Firebase.utils";

const CreateAccount = () => {
  const [values, setValues] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (values.password !== values.confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        values.email,
        values.password
      );
      await createUserProfileDocument(user, {
        displayName: values.displayName,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  return (
    <div className="signUpSection">
      <h2>I don't have an acoount</h2>
      <span>Sign up with email and password</span>
      <form className="signUpForm" onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          type="text"
          value={values.displayName}
          handleChange={handleChange}
          label="Username"
          required
        />

        <FormInput
          name="email"
          type="text"
          value={values.email}
          handleChange={handleChange}
          label="email"
          required
        />

        <FormInput
          name="password"
          type="password"
          value={values.password}
          handleChange={handleChange}
          label="password"
          required
        />

        <FormInput
          name="confirmPassword"
          type="password"
          value={values.confirmPassword}
          handleChange={handleChange}
          label="Confirm Password"
          required
        />

        <div className="btnGroup">
          <CustomBtn type="submit"> Create Account </CustomBtn>
        </div>
      </form>
    </div>
  );
};
export default CreateAccount;
