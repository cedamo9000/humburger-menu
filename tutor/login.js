const firebaseConfig = {
    apiKey: "AIzaSyB7Uh0N3WkLkcUN5PQKiXnVKNf3_4JxXa4",
    authDomain: "flipflop-faac3.firebaseapp.com",
    projectId: "flipflop-faac3",
    storageBucket: "flipflop-faac3.appspot.com",
    messagingSenderId: "82173479146",
    appId: "1:82173479146:web:b073124e8afa836f2a2f93",
    measurementId: "G-WWKF30340X"
};
//initialize firebaseapp
firebase.initializeApp(firebaseConfig);
//reference
const loginform = firebase.database().ref('flipflop');
document.getElementById('loginform').addEventListener('submit', submitform);

function submitform(e) {
    e.preventDefault();
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    console.log(email, password);
}
const getElementVal = (id) => {
    return document.getElementById(id).value;
}