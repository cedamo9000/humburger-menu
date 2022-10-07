function validate() {
    var y = 2022;
    var x = document.getElementById("text").value;
    if (x === "NaN") {
        console.log("plz fil in order to know ur bday");
    } else {
        console.log(`your ${y - x} years old`);

    }
}