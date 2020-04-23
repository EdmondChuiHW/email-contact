import 'core-js';
import firebase from 'firebase';
import React from 'react';
import ReactDOM from 'react-dom';
import AdminApp from './AdminApp';
import './index.css';
import * as serviceWorker from './serviceWorker';

const config = {
  apiKey: "AIzaSyCnK8Xx45B2IoKySAMpT4KKxZzTM39U7XM",
  authDomain: "email-contact-6bf7d.firebaseapp.com",
  databaseURL: "https://email-contact-6bf7d.firebaseio.com",
  projectId: "email-contact-6bf7d",
  storageBucket: "email-contact-6bf7d.appspot.com",
  messagingSenderId: "414763126743",
  appId: "1:414763126743:web:33459f34cf73e670934592",
  measurementId: "G-7B7J7X44VR"
};
firebase.initializeApp(config);

ReactDOM.render(<AdminApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register();
serviceWorker.unregister();
