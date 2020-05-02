import * as firebase from 'firebase';
// TODO pasar a env file
const firebaseConfig = {
  apiKey: 'AIzaSyDMIWf32L0Fw8S_h7RzHfuqE9hhBAajSKs',
  authDomain: 'react-native-test-c4988.firebaseapp.com',
  databaseURL: 'https://react-native-test-c4988.firebaseio.com',
  projectId: 'react-native-test-c4988',
  storageBucket: 'react-native-test-c4988.appspot.com',
  messagingSenderId: '259570739300',
  appId: '1:259570739300:web:c5d190f395a007f735d771',
  measurementId: 'G-9Z03L6F58H',
};
firebase.initializeApp(firebaseConfig);
export default firebase;
