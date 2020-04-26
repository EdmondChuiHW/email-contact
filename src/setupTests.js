/* eslint-disable import/no-extraneous-dependencies */
const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockAuthentication();
const mockdatabase = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();
const mockstorage = new firebasemock.MockStorage();
const mockmessaging = new firebasemock.MockMessaging();
const mockSdk = new firebasemock.MockFirebaseSdk(
  path => (path ? mockdatabase.child(path) : mockdatabase),
  () => mockauth,
  () => mockfirestore,
  () => mockstorage,
  () => mockmessaging,
);

jest.mock('firebase', () => mockSdk);


// mockSdk.firestore().flush();
