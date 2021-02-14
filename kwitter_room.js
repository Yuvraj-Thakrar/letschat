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
  
  username=localStorage.getItem("user=");

 document.getElementById("user").innerHTML="Welcome "+username+"!";

function addRoom(){
roomname=document.getElementById("room").value;
localStorage.setItem("roomname",roomname)
firebase.database().ref("/").child(roomname).update({purpose:"adding room names"});
window.location="kwitter_message.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
 Room_names = childKey;
 //Start code
 div="<div class='room_name' id="+Room_names+" onclick='redirectToRoomname (this.id)'>#"+Room_names+"</div> <hr>";
 //End code
 });});}
getData();