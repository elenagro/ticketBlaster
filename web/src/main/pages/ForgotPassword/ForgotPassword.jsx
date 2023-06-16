import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

import Wrapper from "../../../shared/components/FormElements/Wrapper";
import Form from "../../../shared/components/FormElements/Form";
import Title from "../../../shared/components/FormElements/Title";
import Input from "../../../shared/components/FormElements/Input";
import Button from "../../../shared/components/FormElements/Button";

const ForgotPassword = () => {
  return (
    <Wrapper>
      <Form>
        <Title title="Forgot Password" />

        <Input htmlFor="email" label="E-mail" id="email" type="text" />
        <Button>Send password reset e-mail</Button>
        <Link to="/log-in">
          <Button>Back to log in</Button>
        </Link>
      </Form>
    </Wrapper>
  );
};

export default ForgotPassword;
