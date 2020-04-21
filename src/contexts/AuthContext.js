import React, { useReducer } from "react";

const AuthContext = React.createContext({});
export default AuthContext;

export function AuthProvider({ children }) {
  const stateAndDispatch = useReducer(authReducer, { authKey: "" });

  return <AuthContext.Provider value={stateAndDispatch}>
    {children}
  </AuthContext.Provider>
}

function authReducer(prevState, action) {
  switch (action.type) {
    case "signIn":
      return { authKey: action.authKey };
    case "signOut":
      return { authKey: "" };
    default:
      return prevState;
  }
}
