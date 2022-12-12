import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyChE5rl_7yeRs214GT0hRPgswF9DZW4OE4",
  authDomain: "table-278bb.firebaseapp.com",
  databaseURL: "https://table-278bb-default-rtdb.firebaseio.com",
  projectId: "table-278bb",
  storageBucket: "table-278bb.appspot.com",
  messagingSenderId: "123191920390",
  appId: "1:123191920390:web:644026c81d3e208b438087"
};
const app = initializeApp(firebaseConfig);
const db= getDatabase();

export {app, db};