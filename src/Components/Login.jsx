import { Button } from "@mui/material";
import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="login_container">
        <img src="../favicon.ico" alt="Slack Logo" />
        <h1>Sign in to Web Genie</h1>
        <p>webgenie.slack.com</p>
        <Button>Sign in with Google</Button>
      </div>
    </div>
  );
};

export default Login;
