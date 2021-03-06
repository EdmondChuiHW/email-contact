import React from 'react';
import {
  HashRouter as Router, Redirect, Route, Switch,
} from 'react-router-dom';
import App from './App';
import Admin from './components/Admin';
import Login from './components/Login';
import { AuthProvider } from './contexts/AuthContext';
import useAuth from './contexts/useAuth';

export default function AdminApp() {
  return (
    <Router>
      <AuthProvider>
        <div>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/admin">
              <Admin />
            </PrivateRoute>
            <Route path="/">
              <App />
            </Route>
          </Switch>
        </div>
      </AuthProvider>
    </Router>
  );
}

function PrivateRoute({ children, ...rest }) {
  const [user] = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) => (user ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: location },
          }}
        />
      ))
      }
    />
  );
}
