// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA3cKdagLv8NViZ3pAwIe1QAmh7g6BbQ3w",
    authDomain: "fir-b3df2.firebaseapp.com",
    databaseURL: "https://fir-b3df2.firebaseio.com",
    projectId: "fir-b3df2",
    storageBucket: "fir-b3df2.appspot.com",
    messagingSenderId: "296445494510",
    appId: "1:296445494510:web:5423d6a60caa0ffc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  $(document).ready(function(){
      var database = firebase.database();
      var ledStatus;

      database.ref().on("value", function(snap){
          ledStatus = snap.val().ledStatus;
          if(ledStatus ==1){
              $(".lightStatus").text("Bat Den");
          }else{
            $(".lightStatus").text("Tat Den");
          }

      })
  })