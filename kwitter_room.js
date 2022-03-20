
var firebaseConfig = {
      apiKey: "AIzaSyCmsthtwND9BiKWAC5opoKed2udp7imFBk",
      authDomain: "kwitter-89b59.firebaseapp.com",
      databaseURL: "https://kwitter-89b59-default-rtdb.firebaseio.com",
      projectId: "kwitter-89b59",
      storageBucket: "kwitter-89b59.appspot.com",
      messagingSenderId: "996801738734",
      appId: "1:996801738734:web:e1ba0278442fdcdec540ff"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
Username = localStorage.getItem("Username");
document.getElementById("user_name").innerHTML="Welcome "+Username+"!";

function AddRoom()
{
      room_name = document.getElementById("room_name").Value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding Room Name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room name-"+Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+=row;
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function Logout()
{
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location="index.html";
}