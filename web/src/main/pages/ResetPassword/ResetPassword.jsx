import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

import Wrapper from "../../../shared/components/FormElements/Wrapper";
import Form from "../../../shared/components/FormElements/Form";
import Title from "../../../shared/components/FormElements/Title";
import Input from "../../../shared/components/FormElements/Input";
import Button from "../../../shared/components/FormElements/Button";

const ResetPassword = () => {
  return (
    <Wrapper>
      <Form>
        <Title title="Reset Password" />
        <Input htmlFor="password" label="Password" id="password" type="text" />
        <Input
          htmlFor="password2"
          label="Password"
          id="password2"
          type="text"
        />
        <Button type="submit">Reset Password</Button>
        <Link to="/log-in">
          <Button>Back to log in</Button>
        </Link>
      </Form>
    </Wrapper>
  );
};

export default ResetPassword;