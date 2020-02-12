import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: 'AIzaSyCfcTnBK5zh_AOcAyjm6m8YdTePguXNll8',
    authDomain: 'todoist-app-5dae5.firebaseapp.com',
    databaseURL: 'https://todoist-app-5dae5.firebaseio.com',
    projectId: 'todoist-app-5dae5',
    storageBucket: 'todoist-app-5dae5.appspot.com',
    messagingSenderId: '521718973492',
    appId: '1:521718973492:web:d49620bfa474e9476af661'
});

export { firebaseConfig as firebase };
