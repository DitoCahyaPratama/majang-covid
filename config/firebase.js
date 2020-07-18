import * as firebase from 'firebase'
import '@firebase/auth'
import '@firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBniwBsH0kFqDkCLif3LhSYAUseh0yEBtY',
  authDomain: 'majang-covid.firebaseapp.com',
  databaseURL: 'https://majang-covid.firebaseio.com',
  projectId: 'majang-covid',
  storageBucket: 'majang-covid.appspot.com',
  messagingSenderId: '983448027872',
  appId: '1:983448027872:android:31779238ad53a915e9c685',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };