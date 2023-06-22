import React from "react";
import { Link } from "react-router-dom";

import Form from "../../../shared/FormElements/Form";
import Title from "../../../shared/FormElements/Title";
import Input from "../../../shared/FormElements/Input";
import Button from "../../../shared/FormElements/Button";

const ForgotPassword = () => {
  return (
    <Form>
      <Title title="Forgot Password" />

      <Input htmlFor="email" label="E-mail" id="email" type="text" />
      <Button>Send password reset e-mail</Button>
      <Link to="/log-in">
        <Button
          style={{
            backgroundColor: "#fff",
            border: "1px solid #ff48ab",
            color: "#000",
          }}
        >
          Back to log in
        </Button>
      </Link>
    </Form>
  );
};

export default ForgotPassword;
