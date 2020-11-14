import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Form } from "react-bootstrap";

const LoginScreen = () => {
  let history = useHistory();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState({});
  const [error, setError] = useState("");

  const loginUser = async () => {
    const logUser = {
      username,
      password,
    };
    try {
      const res = await axios.post(
        `https://grayspaceapp.herokuapp.com/api/auth/login/`,
        logUser
      );
      console.log(res);
      localStorage.setItem("credentials", res.data.token);
      setError("");

      history.push("/posts");
    } catch (error) {
      console.log(error.response.data);
      setError(error.response.data.details);
    }

    setUserName("");
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
      </Form.Group>
      <Form.Group
        controlId="exampleForm.ControlInput1"
        onChange={({ target: { value } }) => {
          console.log(value);
          setPassword(value);
        }}
      >
        <Form.Label>Password*</Form.Label>
        <Form.Control type="password" value={password} />
      </Form.Group>
      <div className="login_error">{error}</div>
      <button
        type="submit"
        class="btn btn-primary"
        id="login-btn2"
        onClick={loginUser}
      >
        Register
      </button>
    </div>
  );
};

export default LoginScreen;
