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
    room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'>'</h4>'";
message_with_tag="<h4 class='message_h4'>+message+</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button><hr>";
row=name_with_tag+sessage_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();

function send()
{
      msg=document.getElementById("message").value;
      firebase.database().ref(room_name).push({
            name:Username,
            message:msg,
            like:0
      });
      document.getElementById("message").value="";
}

function updateLike(message_id)
{
      console.log("clicked on like button-"+message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes
      });
}

function Logout()
{
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location="index.html";
}