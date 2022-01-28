import { Logout } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./contexts/AuthProvider";
import { ClientContext } from "./contexts/ClientProvider";
import { LoginContext } from "./contexts/LoginProvider";
import "./styles/base.css";
const Login = (props) => {
  const { cartCount } = React.useContext(ClientContext);
  const { logout } = React.useContext(LoginContext);
  const { authWithGoogle, user } = React.useContext(AuthContext);

  const [path, setPath] = React.useState(window.location.pathname);
  React.useEffect(() => {
    setPath(window.location.pathname);
  }, [window.location.pathname]);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
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
          {hasAccount ? (
            <>
              <Link to="/register">
                <button onClick={handleLogin}>Sign in</button>
              </Link>

              <p>
                Don't have an account?
                <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
              </p>
            </>
          ) : (
            <>
              <Link to="/">
                <button onClick={handleSignup}>Sign up</button>
              </Link>

              <p>
                <Link to="/">
                  <span onClick={() => setHasAccount(!hasAccount)}>
                    {user ? (
                      <>
                        <IconButton size="small" color="inherit">
                          {user.displayName}
                        </IconButton>
                        <IconButton sx={{ p: 0 }}>
                          <Avatar alt={user.displayName} src={user.photoURL} />
                        </IconButton>
                        <IconButton
                          onClick={logout}
                          size="large"
                          color="inherit"
                        >
                          <Logout />
                        </IconButton>
                      </>
                    ) : (
                      <IconButton
                        onClick={authWithGoogle}
                        size="small"
                        color="inherit"
                      >
                        Sign in
                      </IconButton>
                    )}
                  </span>
                </Link>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
