document.getElementById('loginform').addEventListener('submit', submitform);

function submitform(e) {
    e.preventDefault();

    var email = document.getInputVal('email');
    var password = document.getInputVal('password');

    console.log(email, password);
}

function getInputVal(id) {

    return document.getElementById(id).value;

}