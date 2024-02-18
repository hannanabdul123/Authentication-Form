import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDFJyyI5fs_mSPnypV3TruQXtvUqWcVyx8",
    authDomain: "authentication-form-23d1e.firebaseapp.com",
    projectId: "authentication-form-23d1e",
    storageBucket: "authentication-form-23d1e.appspot.com",
    messagingSenderId: "282434900404",
    appId: "1:282434900404:web:17310c02bc245cac0922e1",
    measurementId: "G-GEMKK1WC8R"
  };
  function uploadImage() {
    const ref = firebase.storage().ref();
    const file = document.querySelector("#photo").files[0];
    const name = +new Date() + "-" + file.name;
    const metadata = {
        contentType: file.type
    };
    const task = ref.child(name).put(file, metadata);
    task.then(snapshot => snapshot.ref.getDownloadURL())
        .then(url => {
            console.log(url);
            alert('Image uploaded successfully');
            document.querySelector("#image").src = url;
        })
        .catch(console.error);
}

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);
// const analytics = getAnalytics(app);

// const auth = getAuth();
// const storage = getStorage(app);






// // Image upload form submission event
// document.getElementById('myForm').addEventListener('submit', (e) => {
//     e.preventDefault();
//     const file = document.getElementById('myFile').files[0];
//     const storageRef = storage.ref(`files/${file.name}`);
//     storageRef.put(file).then((snapshot) => {
//         console.log('Image uploaded successfully:', snapshot);
//         // Handle success
//     }).catch((error) => {
//         console.error('Image upload error:', error);
//         // Handle error
//     });
// });

// Logout button click event
// document.getElementById('logoutButton').addEventListener('click', () => {
//     firebase.auth().signOut().then(() => {
//         // Redirect to login page
//         window.location.href = 'login.html';
//     }).catch((error) => {
//         console.error('Logout error:', error);
//     });
// });

// //Register Information

// function registerUser() {
//     const username = document.getElementById('username').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     const confirmPassword = document.getElementById('confirm_password').value;

//     // Perform password validation
//     if (password !== confirmPassword) {
//         alert("Passwords do not match");
//         return;
//     }

//     // Register user in Firebase database
//     firebase.database().ref('users/' + username).set({
//         email: email,
//         password: password
//     }).then(() => {
//         alert("User registered successfully");
//         // You can add redirection or any other logic here after successful registration
//     }).catch((error) => {
//         console.error("Error registering user: ", error);
//     });
// }

