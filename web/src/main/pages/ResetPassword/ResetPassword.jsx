import React from "react";
import { Link } from "react-router-dom";

import Form from "../../../shared/components/FormElements/Form";
import Wrapper from "../../../shared/components/FormElements/Wrapper";
import Title from "../../../shared/components/FormElements/Title";
import Input from "../../../shared/components/FormElements/Input";
import Button from "../../../shared/components/FormElements/Button";

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
