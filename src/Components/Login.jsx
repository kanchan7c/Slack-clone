import { Button } from "@mui/material";
import React from "react";
import "./login.css";
import { auth, provider } from "../firebase";

const Login = () => {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login_container">
        <img src="../favicon.ico" alt="Slack Logo" />
        <h1>Sign in to Web Genie</h1>
        <p>webgenie.slack.com</p>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
};

export default Login;
