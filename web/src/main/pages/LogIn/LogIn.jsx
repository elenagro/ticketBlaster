import React from "react";
import { Link } from "react-router-dom";
import styles from "./LogIn.module.css";

import Title from "../../../shared/FormElements/Title";
import Input from "../../../shared/FormElements/Input";
import Button from "../../../shared/FormElements/Button";

import Form from "../../../shared/FormElements/Form";

const LogIn = () => {
  return (
    <Form>
      <Title title="Log In" />

      <Input htmlFor="email" label="E-mail" id="email" type="text" />
      <Input
        htmlFor="password"
        label="Password"
        id="password"
        type="password"
      />
      <div className={styles["forgot-login"]}>
        <Link to="/forgot-password" className={styles["forgot-pass"]}>
          Forgot Password?
        </Link>

        <Button type="submit" style={{ width: "128px" }}>
          Log in
        </Button>
      </div>
      <Link to="/register">
        <Button
          style={{
            backgroundColor: "#fff",
            border: "1px solid #ff48ab",
            color: "#000",
          }}
        >
          Don't have an account?
        </Button>
      </Link>
    </Form>
  );
};

export default LogIn;
