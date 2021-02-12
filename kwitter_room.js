var firebaseConfig = {
    apiKey: "AIzaSyDpVVIwbDeF2p9r9EZJ6u8OrnoSKDvv9GY",
    authDomain: "lets-chat-ab508.firebaseapp.com",
    projectId: "lets-chat-ab508",
    storageBucket: "lets-chat-ab508.appspot.com",
    messagingSenderId: "557200526585",
    appId: "1:557200526585:web:8be8bd74d37753f4cce628"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

document.getElementById("username").innerHTML=localStorage.getItem("user=")