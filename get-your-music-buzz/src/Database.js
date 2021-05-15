// import { app } from './App.js';
import firebase from "firebase";
import 'firebase/firestore';

// create a web app in fireabse 
// then get your app config object from firebase console -> settings
const firebaseConfig = {
    apiKey: "AIzaSyC5oQeYNUJkgjH3pBmaSuZYCFJsbIs46jQ",
    authDomain: "getyourmusicbuzz.firebaseapp.com",
    projectId: "getyourmusicbuzz",
    storageBucket: "getyourmusicbuzz.appspot.com",
    messagingSenderId: "241260358676",
    appId: "1:241260358676:web:6d587d07288357f9414b01",
    measurementId: "G-63GCSKHK7D"
  };
  
//   export const app = firebase.initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig)
var db = firebase.firestore();

function SingleAdd() {
    db.collection("training_data").add({
        red: 0,
        orange: 0,
        yellow: 0,
        green: 0,
        blue: 1,
        indigo: 0,
        violet: 0,
        happiness: 7,
        meat: 1,
        fish: 1,
        veggies: 1,
        nothing: 0,
        elephant: 0,
        fish: 0,
        turtle: 0,
        fox: 1,
        cow: 1,
        dog: 1,
        cat: 1,
        StarWars: 1,
        Frozen: 0,
        Moana: 1,
        Hercules: 1,
        Rava: 0,
        Aladdin: 1,
        sleep: 7,
        fun: 1,
        productive: 1,
        public: 0
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}

export default function Player() {
    const AddData = () => {
        SingleAdd();
      };
    
    return (
        <div>
            <button onClick={AddData}> Sign In</button>
        </div>
    )
}