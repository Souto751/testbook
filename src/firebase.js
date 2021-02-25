import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
    apiKey: "AIzaSyBCYP-K0VNG8SIBanVquD6kCnwWzKAuNU8",
    authDomain: "testbook-bd5cc.firebaseapp.com",
    projectId: "testbook-bd5cc",
    storageBucket: "testbook-bd5cc.appspot.com",
    messagingSenderId: 782586454896,
    appId: "1:782586454896:web:31ee41a261ff7ed745a5b5"
});

export const auth = app.auth(); 
export default app;