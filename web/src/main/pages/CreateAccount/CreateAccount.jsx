import React from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import Title from "../../../shared/FormElements/Title";
import Input from "../../../shared/FormElements/Input";
import Button from "../../../shared/FormElements/Button";

import Form from "../../../shared/FormElements/Form";
import User from "../User/User";

const CreateAccount = () => {
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const password2 = e.target.password2.value;

    if (!name || !email || !password || !password2) {
      console.log("Please fill in all the fields.");
      return;
    }

    if (password !== password2) {
      console.log("Check your password again.");
      return;
    }

    const userData = {
      name,
      email,
      password,
    };

    try {
      const response = await axios.post("api/v1/auth/register", userData);

      if (response.data.success) {
        history.push(`/user/${response.data.userId}`);
      } else {
        console.log("Creating a new account failed!");
      }
    } catch (error) {
      console.error("Error registering a new user", error.message);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title title="Create Account" />
      <Input htmlFor="name" label="Full Name" id="name" type="text" />
      <Input htmlFor="email" label="E-mail" id="email" type="text" />
      <Input
        htmlFor="password"
        label="Password"
        id="password"
        type="password"
      />
      <Input
        htmlFor="password2"
        label="Re-type Password"
        id="password2"
        type="password"
      />
      <Button type="submit">Create Account</Button>
      <Link to="/log-in">
        <Button
          style={{
            backgroundColor: "#fff",
            border: "1px solid #ff48ab",
            color: "#000",
          }}
        >
          Already have an account?
        </Button>
      </Link>
    </Form>
  );
};

export default CreateAccount;
