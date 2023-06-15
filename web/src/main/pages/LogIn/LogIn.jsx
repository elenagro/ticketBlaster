import React from "react";

import Title from "../../../shared/components/UI/Title";
import Input from "../../../shared/components/UI/Input";
import Button from "../../../shared/components/UI/Button";

const LogIn = () => {
  return (
    <div>
      <Title title="Log in" />

      <Input htmlFor="email" label="E-mail" id="email" type="text" />
      <Input htmlFor="password" label="Password" id="password" type="text" />

      <Button type="submit">Log in</Button>
      <Button>Don't have an account?</Button>
    </div>
  );
};

export default LogIn;
