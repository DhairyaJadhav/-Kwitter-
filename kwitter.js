function addUser()
{
    Username = document.getElementById("user_name").value;
    localStorage.setItem("Username", Username);
    window.location="kwitter_room.html";
}