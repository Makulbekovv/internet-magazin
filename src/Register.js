import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "./contexts/LoginProvider";

const Register = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = useContext(LoginContext);
  return (
    <div className="login">
      <div className="loginContainer">
        <label>userName</label>
        <input
          type="text"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="errorMsg">{emailError}</p>
        <label>password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="btnContainer">
          <button>Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
