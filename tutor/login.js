import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyB7Uh0N3WkLkcUN5PQKiXnVKNf3_4JxXa4",
    authDomain: "flipflop-faac3.firebaseapp.com",
    databaseURL: "https://flipflop-faac3-default-rtdb.firebaseio.com",
    projectId: "flipflop-faac3",
    storageBucket: "flipflop-faac3.appspot.com",
    messagingSenderId: "82173479146",
    appId: "1:82173479146:web:064eb6789fb925252a2f93",
    measurementId: "G-B3DQCK8GW1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const submit = document.querySelector('loginform');

submit.addEventListener('click', (e) => {
    var email = document.getElementById('email');
    var password = document.getElementById('password');

    set(ref(database, 'users/' + usersLogin), {
            useremail: email,
            password: password
        }).then(() => {
            alert('Data saved successfully!');
        })
        .catch((error) => {
            alert(' The write failed...');
        });

});