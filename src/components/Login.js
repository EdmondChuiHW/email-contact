import firebase from 'firebase';
import React, { useEffect } from "react";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { useHistory, useLocation } from "react-router-dom";
import useAuth from "../contexts/useAuth";

const uiConfig = {
  signInFlow: 'redirect',
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,
    }
  ],
};

export default function Login() {
  const history = useHistory();
  const location = useLocation();
  const [user] = useAuth();

  const { from } = location.state || { from: { pathname: "/admin" } };

  useEffect(() => {
    if (!user) return;

    history.replace(from);
  }, [user, history, from]);

  return (
    <div>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}
