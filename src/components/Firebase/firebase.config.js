import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNaD2QdlD6udSqG5tq3SUGJzZlG-UCLXA",
  authDomain: "e-planner-6cf41.firebaseapp.com",
  projectId: "e-planner-6cf41",
  storageBucket: "e-planner-6cf41.appspot.com",
  messagingSenderId: "740989104783",
  appId: "1:740989104783:web:10bdf31c9fe851895ab6fa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
