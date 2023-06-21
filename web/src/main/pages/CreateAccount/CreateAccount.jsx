import React from "react";
import { Link } from "react-router-dom";

import Title from "../../../shared/components/FormElements/Title";
import Input from "../../../shared/components/FormElements/Input";
import Button from "../../../shared/components/FormElements/Button";

import Form from "../../../shared/components/FormElements/Form";

const CreateAccount = () => {
  return (
    <Form>
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
