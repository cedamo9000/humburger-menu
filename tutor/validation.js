function validate() {
    let x = "plz fill the required space";
    let y = "u can continue";
    let z = "character  must be at least 6 digit and above";
    let text = document.getElementById("text").value;
    if (text === "") {
        document.getElementById("paragraph").innerHTML = x;
    } else {
        document.getElementById("paragraph").innerHTML = y;
    }

}