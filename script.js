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
      $(".den").text("Đèn Khách Bật");
      $('input[name=foo1]').attr('checked', true);
    } else {
      $(".den").text("Đèn Khách Tắt");
      $('input[name=foo1]').attr('checked', false);
    }
  });

  $(".bt1").click(function () {
    var firebaseRef = firebase.database().ref().child("LED_STATUS");

    if (LED_STATUS == "1") {
      firebaseRef.set("0");
      LED_STATUS == "0";
    } else {
      firebaseRef.set("1");
      LED_STATUS = "1";
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
    if (FAN_STATUS == "1") {
      $(".quat").text("Bật Quạt");
      $('input[name=foo]').attr('checked', true);
    } else {
      $(".quat").text("Tắt Quạt");
      $('input[name=foo]').attr('checked', false);
    }


  });


  $(".bt").click(function () {
    var firebaseRef = firebase.database().ref().child("FAN_STATUS");

    if (FAN_STATUS == "1") {
      firebaseRef.set("0");
      FAN_STATUS = "0";
    } else {
      firebaseRef.set("1");
      FAN_STATUS = "1";
    }
  })
});
//=============Fan========================



//=============led2========================
$(document).ready(function () {
  var database = firebase.database();
  var LED_NGU;
  database.ref().on("value", function (snap) {
    LED_NGU = snap.val().LED_NGU;
    if (LED_NGU == 1) {
      $(".den2").text("Đèn Ngủ Bật");
      $('input[name=foo2]').attr('checked', true);
    } else {
      $(".den2").text("Đèn Ngủ Tắt");
      $('input[name=foo2]').attr('checked', false);
    }
  });

  $(".bt2").click(function () {
    var firebaseRef = firebase.database().ref().child("LED_NGU");

    if (LED_NGU == "1") {
      firebaseRef.set("0");
      LED_NGU == "0";
    } else {
      firebaseRef.set("1");
      LED_NGU = "1";
    }
  })
});
//=============led2========================

//=============Fan2========================
$(document).ready(function () {
  var database = firebase.database();
  var FAN_TOLET;
  database.ref().on("value", function (snap) {
    FAN_TOLET = snap.val().FAN_TOLET;
    if (FAN_TOLET == "1") {
      $(".quat3").text("Đèn Tắm Bật");
      $('input[name=foo3]').attr('checked', true);
    } else {
      $(".quat3").text("Đèn Tắm Tắt");
      $('input[name=foo3]').attr('checked', false);
    }


  });


  $(".bt3").click(function () {
    var firebaseRef = firebase.database().ref().child("FAN_TOLET");

    if (FAN_TOLET == "1") {
      firebaseRef.set("0");
      FAN_TOLET = "0";
    } else {
      firebaseRef.set("1");
      FAN_TOLET = "1";
    }
  })
});
//=============Fan2========================


//================== Nhiet Do ==============================
$(document).ready(function () {

  var database = firebase.database();
  var NHIET_DO;
  database.ref().on("value", function (snap) {
    NHIET_DO = snap.val().NHIET_DO;
    var progressbar = $('#progress_bar');
    value = progressbar.val();
    value = Number(NHIET_DO);

    addValue = progressbar.val(value);
    $('.progress-value').html(value + '%');
    var $ppc = $('.progress-pie-chart'),
      deg = 360 * value / 100;
    if (value > 50) {
      $ppc.addClass('gt-50');
    }
    $('.ppc-progress-fill').css('transform', 'rotate(' + deg + 'deg)');
    $('.ppc-percents .nhietdo2').html(value + 'kPa');

    if (value == max) {
      clearInterval(animate);
    }
  });
});


//================== Do Am ==============================
$(document).ready(function () {
  var database = firebase.database();
  var DO_AM;
  database.ref().on("value", function (snap) {
    DO_AM = snap.val().DO_AM;
    var progressbar2 = $('#progress_bar2');
    value2 = progressbar2.val();
    value2 = Number(DO_AM);
    addValue2 = progressbar2.val(value2);
    $('.progress-value2').html(value2 + '%');
    var $ppc2 = $('.progress-pie-chart2'),
      deg2 = 360 * value2 / 100;
    if (value2 > 50) {
      $ppc2.addClass('gt-50');
    }
    $('.ppc-progress-fill2').css('transform', 'rotate(' + deg2 + 'deg)');
    $('.ppc-percents2 .doam2').html(value2 + '%');

    if (value2 == max2) {
      clearInterval(animate);
    }
  });
});
//============muc nuoc====================
$(document).ready(function () {
  var MUC_NUOC;
  var database = firebase.database();
  database.ref().on("value", function (elem) {
    MUC_NUOC = elem.val().MUC_NUOC;
    $("#chumucnuoc").text(MUC_NUOC + "%");
    document.getElementById('myBar3').style.height = MUC_NUOC+'%';
 });
});

