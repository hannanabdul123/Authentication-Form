import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDFJyyI5fs_mSPnypV3TruQXtvUqWcVyx8",
    authDomain: "authentication-form-23d1e.firebaseapp.com",
    databaseURL: "https://authentication-form-23d1e-default-rtdb.firebaseio.com",
    projectId: "authentication-form-23d1e",
    storageBucket: "authentication-form-23d1e.appspot.com",
    messagingSenderId: "282434900404",
    appId: "1:282434900404:web:17310c02bc245cac0922e1",
    measurementId: "G-GEMKK1WC8R"
  };

firebase.initializeApp(firebaseConfig);
var contactFormDB=firebase.database().ref("authentication-form");
document.getElementById("registrationform").addEventListener("submit",registerUser
);
function registerUser(e) {  
    console.log("abdul");
    e.preventDefault();
    var username = document.getElementById('username').value;
    var email = document.getElementById("email").value;
        
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;

    // Add your validation logic here

    saveMessage(username, email, password, confirm_password);
    // document.querySelector(".alert").style.display="block";

}

function saveMessage(username, email, password, confirm_password) {
    const newContactForm = contactFormDB.push();
    newContactForm.set({
        username: username,
        email: email,
        password: password,
        confirm_password: confirm_password
    }).then(() => {
        //Show Alert Message(5)
     document.querySelector('successAlert').style.display = 'block';
      //Hide Alert Message After Seven Seconds(6)
     setTimeout(function () {
     document.querySelector('successAlert').style.display = 'none';
     }, 7000);
     document.getElementById('registrationform').reset();
    }).catch((error) => {
      alert(error.message);
    })
  }


  