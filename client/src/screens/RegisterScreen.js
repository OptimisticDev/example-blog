import React, { useState } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";

const RegisterScreen = () => {
  const [username, setUserName] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [success, setSuccess] = useState("");

  const [username_error, setUserNameError] = useState("");
  const [first_name_error, setFirstNameError] = useState("");
  const [last_name_error, setLastNameError] = useState("");
  const [email_error, setEmailError] = useState("");
  const [password_error, setPasswordError] = useState("");

  const createUser = async () => {
    const newUser = {
      username,
      first_name,
      last_name,
      email,
      password,
    };
    // console.log(newUser);
    try {
      const res = await axios.post(
        `https://grayspaceapp.herokuapp.com/api/auth/register/`,
        newUser
      );
      setSuccess("User created successfully");
      setUserNameError("");
      setFirstNameError("");
      setLastNameError("");
      setEmailError("");
      setPasswordError("");
    } catch (error) {
      // console.log(error?.response?.data);
      setSuccess("");
      if (error?.response?.data?.username)
        setUserNameError(error?.response?.data?.username[0]);
      else setUserNameError("");

      if (error?.response?.data?.first_name)
        setFirstNameError(error?.response?.data?.first_name[0]);
      else setFirstNameError("");

      if (error?.response?.data?.last_name)
        setLastNameError(error?.response?.data?.last_name[0]);
      else setLastNameError("");

      if (error?.response?.data?.email)
        setEmailError(error?.response?.data?.email[0]);
      else setEmailError("");

      if (error?.response?.data?.password)
        setPasswordError(error?.response?.data?.password[0]);
      else setPasswordError("");
    }
    setUserName("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <Form.Group
        controlId="exampleForm.ControlInput122"
        onChange={({ target: { value } }) => {
          console.log(value);
          setUserName(value);
        }}
      >
        <Form.Label>User Name*</Form.Label>
        <Form.Control
          type="text"
          value={username}
          placeholder="Enter your user name..."
        />
        <div className="error">{username_error}</div>
      </Form.Group>

      <Form.Group
        controlId="exampleForm.ControlInput1"
        onChange={({ target: { value } }) => {
          console.log(value);
          setFirstName(value);
        }}
      >
        <Form.Label>First Name*</Form.Label>
        <Form.Control
          type="text"
          value={first_name}
          placeholder="Enter your first name..."
        />
        <div className="error">{first_name_error}</div>
      </Form.Group>
      <Form.Group
        controlId="exampleForm.ControlInput1"
        onChange={({ target: { value } }) => {
          console.log(value);
          setLastName(value);
        }}
      >
        <Form.Label>Last Name*</Form.Label>
        <Form.Control
          type="text"
          value={last_name}
          placeholder="Enter your last name..."
        />
        <div className="error">{last_name_error}</div>
      </Form.Group>
      <Form.Group
        controlId="exampleForm.ControlInput1"
        onChange={({ target: { value } }) => {
          console.log(value);
          setEmail(value);
        }}
      >
        <Form.Label>Email*</Form.Label>
        <Form.Control
          type="email"
          value={email}
          placeholder="name@example.com"
        />
      </Form.Group>
      <div className="error">{email_error}</div>
      <Form.Group
        controlId="exampleForm.ControlInput1"
        onChange={({ target: { value } }) => {
          console.log(value);
          setPassword(value);
        }}
      >
        <Form.Label>Password*</Form.Label>
        <Form.Control type="password" value={password} />
        <div className="error">{password_error}</div>
      </Form.Group>
      <div className="success">{success}</div>
      <button
        type="submit"
        class="btn btn-primary"
        id="login-btn2"
        onClick={createUser}
      >
        Register
      </button>
    </div>
  );
};

export default RegisterScreen;
