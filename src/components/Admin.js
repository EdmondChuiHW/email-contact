import React from "react";
import useAuth from "../contexts/useAuth";

export default function Admin() {
  const [user, signOut] = useAuth();

  return <>
    <span>Admin, {user.email}</span>
    <button onClick={signOut}>sign out</button>
  </>;
}
