import React from "react";

import Title from "../../../shared/components/UI/Title";
import Input from "../../../shared/components/UI/Input";
import Button from "../../../shared/components/UI/Button";

const CreateAccount = () => {
  return (
    <div>
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
      <Button>Already have an account?</Button>
    </div>
  );
};

export default CreateAccount;
