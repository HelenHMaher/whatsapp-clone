import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBg125A61MTyFfyQiVSQN99jJ2nhoq_RUg",
  authDomain: "whatsapp-clone-hm.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-hm.firebaseio.com",
  projectId: "whatsapp-clone-hm",
  storageBucket: "whatsapp-clone-hm.appspot.com",
  messagingSenderId: "483724861838",
  appId: "1:483724861838:web:e1a588cd8c11a366c504df",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
