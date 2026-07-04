import React from "react";

function LoginButton({ login }) {
  return (
    <button onClick={login}>
      Login
    </button>
  );
}

export default LoginButton;