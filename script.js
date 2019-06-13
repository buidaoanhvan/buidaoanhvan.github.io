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

//=============led========================
$(document).ready(function () {
  var database = firebase.database();
  var LED_STATUS;
  database.ref().on("value", function (snap) {
    LED_STATUS = snap.val().LED_STATUS;
    if (LED_STATUS == 1) {
      $(".den").text("Bật Đèn");
    } else {
      $(".den").text("Tắt Đèn");
    }
  });

  $(".led").click(function(){
    var firebaseRef = firebase.database().ref().child("LED_STATUS");

      if (LED_STATUS == 1){
        firebaseRef.set(0);
        LED_STATUS = 0;
      }else{
        firebaseRef.set(1);
        LED_STATUS=1;
      }
  })
});
//=============led========================

//=============Fan========================
$(document).ready(function () {
  var database = firebase.database();
  var FAN_STATUS;
  database.ref().on("value", function (snap) {
    FAN_STATUS = snap.val().FAN_STATUS;
    if (FAN_STATUS == 1) {
      $(".quat").text("Bật Quạt");
    } else {
      $(".quat").text("Tắt Quạt");
    }
  });

  $(".fan").click(function(){
    var firebaseRef = firebase.database().ref().child("FAN_STATUS");

      if (FAN_STATUS == 1){
        firebaseRef.set(0);
        FAN_STATUS = 0;
      }else{
        firebaseRef.set(1);
        FAN_STATUS=1;
      }
  })
});
//=============Fan========================