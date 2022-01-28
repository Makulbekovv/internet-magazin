import React, { useContext, useState } from "react";
import { LoginContext } from "./contexts/LoginProvider";
const Signup = () => {
  const { user } = useContext(LoginContext);
  const [path, setPath] = React.useState(window.location.pathname);

  React.useEffect(() => {
    setPath(window.location.pathname);
  }, [window.location.pathname]);

  return (
    <div>
      <h2 style={{ color: path === "/" ? "white" : "grey", fontSize: "15px" }}>
        Sign up
      </h2>
      {user?.email}
    </div>
  );
};

export default Signup;
