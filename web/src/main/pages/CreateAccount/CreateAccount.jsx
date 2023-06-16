import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

import Title from "../../../shared/components/FormElements/Title";
import Input from "../../../shared/components/FormElements/Input";
import Button from "../../../shared/components/FormElements/Button";
import Wrapper from "../../../shared/components/FormElements/Wrapper";

const CreateAccount = () => {
  return (
    <Wrapper>
      <Title title="Create Account" />
      <Input htmlFor="name" label="Full Name" id="name" type="text" />
      <Input htmlFor="email" label="E-mail" id="email" type="text" />
      <Input htmlFor="password" label="Password" id="password" type="text" />
      <Input
        htmlFor="password2"
        label="Re-type Password"
        id="password2"
        type="text"
      />
      <Button type="submit">Create Account</Button>
      <Link to="/log-in">
        <Button>Already have an account?</Button>
      </Link>
    </Wrapper>
  );
};

export default CreateAccount;
