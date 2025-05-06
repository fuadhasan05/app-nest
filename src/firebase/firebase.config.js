import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBBv3m5OibrsyLt3hgY67VpH5LZvoYTfZ8",
  authDomain: "apps-nest.firebaseapp.com",
  projectId: "apps-nest",
  storageBucket: "apps-nest.firebasestorage.app",
  messagingSenderId: "909065313002",
  appId: "1:909065313002:web:304fe267ecdab2b3f21593"
};


const app = initializeApp(firebaseConfig);
export default app;