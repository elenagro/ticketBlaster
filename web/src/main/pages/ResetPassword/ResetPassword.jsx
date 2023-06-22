import React from "react";
import { Link } from "react-router-dom";

import Form from "../../../shared/FormElements/Form";
import Wrapper from "../../../shared/FormElements/Wrapper";
import Title from "../../../shared/FormElements/Title";
import Input from "../../../shared/FormElements/Input";
import Button from "../../../shared/FormElements/Button";

const ResetPassword = () => {
  return (
    <Wrapper>
      <Form>
        <Title title="Reset Password" />
        <Input
          htmlFor="password"
          label="Password"
          id="password"
          type="password"
        />
        <Input
          htmlFor="password2"
          label="Password"
          id="password2"
          type="password"
        />
        <Button type="submit">Reset Password</Button>
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
    </Wrapper>
  );
};

export default ResetPassword;
