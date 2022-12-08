import firebase from 'firebase';
  
const firebaseConfig = {
  apiKey: "AIzaSyC5CdDYtA0s1bHv3Sl1q6N7vy3mNKnP3aE",
  authDomain: "table-52692.firebaseapp.com",
  projectId: "table-52692",
  storageBucket: "table-52692.appspot.com",
  messagingSenderId: "480565591024",
  appId: "1:480565591024:web:82090b347d10bdf1277b35"
};
    
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
  
export default database.ref();