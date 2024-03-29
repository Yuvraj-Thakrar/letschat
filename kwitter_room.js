// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCLGpxZs2pD9mqZCrFwuOI0gYPdRWN5Ksw",
  authDomain: "kwitter-6abca.firebaseapp.com",
  databaseURL: "https://kwitter-6abca-default-rtdb.firebaseio.com",
  projectId: "kwitter-6abca",
  storageBucket: "kwitter-6abca.appspot.com",
  messagingSenderId: "231606977400",
  appId: "1:231606977400:web:d2d2878892c4b97584fe8d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



  user_name = localStorage.getItem("user_name");

document.getElementById("u1").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_message.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_names", name);
    window.location = "kwitter_message.html";
}

function logout() {
localStorage.removeItem("user");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
