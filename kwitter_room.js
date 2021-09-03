var firebaseConfig = {
      apiKey: "AIzaSyDkvJXD2NUrCSMeEhPdtCdfwQscjlG_z6M",
      authDomain: "project-94-587d2.firebaseapp.com",
      databaseURL: "https://project-94-587d2-default-rtdb.firebaseio.com",
      projectId: "project-94-587d2",
      storageBucket: "project-94-587d2.appspot.com",
      messagingSenderId: "569665836440",
      appId: "1:569665836440:web:40fdc5d50a1492a2ce07ed",
      measurementId: "G-B3E6KEJ9MM"
    };
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function addRoom(){
      room_name = document.getElementById("room_name").value 

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem

      window.location = "kwitter_page.html"
}


function getData() {
  firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
              Room_names = childKey;
              console.log("Room Name - " + Room_names);

              row = "<div class = 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names+"</div>"

              document.getElementById("output").innerHTML += row;
  });});}


getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
