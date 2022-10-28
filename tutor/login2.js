const loginform = document.querySelector('loginform');
loginform.addEventListener('submit', formsubmit);

function formsubmit(e) {
    e.preventDefault();

}

function validate() {
    var x = "please enter email";
    var y = "please enter password"
    var error = document.querySelector('.error');
    error.style.display = "block";

    var email = document.getElementById('email');
    var password = document.getElementById('password');
    if (email === "") {
        console.log("vr");
    } else {
        document.getElementById('error').innerHTML = x;
    }
}