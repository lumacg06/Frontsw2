import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCikAgzlvjkSId88OWmoGg6_c61wwCqpGE",
  authDomain: "frontsw2.firebaseapp.com",
  projectId: "frontsw2",
  storageBucket: "frontsw2.appspot.com",
  messagingSenderId: "544019325375",
  appId: "1:544019325375:web:111878ebdaf48eba6a810a"
};

export const firebaseApp = initializeApp(firebaseConfig);