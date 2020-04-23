import firebase from 'firebase';
import React, { useEffect, useReducer } from "react";

const AuthContext = React.createContext({});
export default AuthContext;

export function AuthProvider({ children }) {
  const stateAndDispatch = useReducer(authReducer, { status: "signedOut" });
  const [state, dispatch] = stateAndDispatch;

  useEffect(() => {
    const unsub = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch({ type: "signInCompleted", user });
      } else {
        dispatch({ type: "signOutCompleted" });
      }
    });

    return () => unsub();
  }, [dispatch]);

  useEffect(() => {
    if (state.status !== "signingOut") return;

    firebase.auth().signOut();
  }, [state.status]);

  return <AuthContext.Provider value={stateAndDispatch}>
    {children}
  </AuthContext.Provider>
}

function authReducer(prevState, action) {
  switch (action.type) {
    case "signInCompleted":
      return { ...prevState, status: "signedIn", user: action.user };
    case "signOut":
      return { ...prevState, status: "signingOut" };
    case "signOutCompleted":
      return { ...prevState, status: "signedOut", user: undefined };
    default:
      return prevState;
  }
}
