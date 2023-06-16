import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import styles from "./LogIn.module.css";

import Title from "../../../shared/components/FormElements/Title";
import Input from "../../../shared/components/FormElements/Input";
import Button from "../../../shared/components/FormElements/Button";
import Wrapper from "../../../shared/components/FormElements/Wrapper";
import Form from "../../../shared/components/FormElements/Form";
import ForgotPassword from "../ForgotPassword/ForgotPassword";

const LogIn = () => {
  return (
    <Wrapper>
      <Form>
        <Title title="Log in" />

        <Input htmlFor="email" label="E-mail" id="email" type="text" />
        <Input htmlFor="password" label="Password" id="password" type="text" />
        <div className={styles["forgot-login"]}>
          <Link to="/forgot-password" className={styles["forgot-pass"]}>
            Forgot Password?
          </Link>

          <Button type="submit" style={{ width: "128px" }}>
            Log in
          </Button>
        </div>
        <Link to="/register">
          <Button>Don't have an account?</Button>
        </Link>
      </Form>
    </Wrapper>
  );
};

export default LogIn;
