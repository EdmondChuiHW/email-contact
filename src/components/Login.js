import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import useAuth from "../contexts/useAuth";

export default function Login() {
  const history = useHistory();
  const location = useLocation();
  const [authKey, signIn] = useAuth();

  const { from } = location.state || { from: { pathname: "/" } };

  useEffect(() => {
    if (!authKey) return;

    history.replace(from);
  }, [authKey, history, from]);

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={onLoginClick}>Log in</button>
    </div>
  );

  function onLoginClick() {
    signIn("aefwafew");
  }
}
