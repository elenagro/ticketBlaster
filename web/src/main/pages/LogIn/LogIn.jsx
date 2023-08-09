import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../store/auth-context";

import Title from "../../../shared/FormElements/Title";
import Input from "../../../shared/FormElements/Input";
import Button from "../../../shared/FormElements/Button";
import Form from "../../../shared/FormElements/Form";
import User from "../User/User";

import styles from "./LogIn.module.css";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, setIsLoggedIn, isLoggedOut } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:5001/api/v1/auth/log-in", {
          email,
          password,
        })
        .then(() => {
          setIsLoggedIn(true);
        });
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <React.Fragment>
      {isLoggedIn && !isLoggedOut ? (
        <User />
      ) : (
        <Form onSubmit={(e) => handleLogin(e)}>
          <Title title="Log In" />

          <Input
            htmlFor="email"
            label="E-mail"
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            htmlFor="password"
            label="Password"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
              type="submit"
            >
              Don't have an account?
            </Button>
          </Link>
        </Form>
      )}
    </React.Fragment>
  );
};

export default LogIn;
