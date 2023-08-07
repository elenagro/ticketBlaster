import React, { useState } from "react";

import { Link } from "react-router-dom";
import axios from "axios";

import Title from "../../../shared/FormElements/Title";
import Input from "../../../shared/FormElements/Input";
import Button from "../../../shared/FormElements/Button";
import User from "../User/User";
import Form from "../../../shared/FormElements/Form";

const CreateAccount = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitted");
    const configuration = {
      method: "post",
      url: "http://localhost:5001/api/v1/auth/register",
      data: {
        full_name: name,
        email,
        password,
      },
    };
    axios(configuration)
      .then((result) => {
        setRegister(true);
      })
      .catch((error) => {
        error = new Error();
      });
  };

  return (
    <React.Fragment>
      {register ? (
        <User />
      ) : (
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Title title="Create Account" />
          <Input
            htmlFor="full_name"
            label="Full Name"
            id="full_name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <Input
            htmlFor="password2"
            label="Re-type Password"
            id="password2"
            type="password"
          />
          <Button type="submit" onClick={(e) => handleSubmit(e)}>
            Create Account
          </Button>
          <Link to="/log-in">
            <Button
              style={{
                backgroundColor: "#fff",
                border: "1px solid #ff48ab",
                color: "#000",
              }}
            >
              Already have an account?
            </Button>
          </Link>
        </Form>
      )}
    </React.Fragment>
  );
};

export default CreateAccount;
