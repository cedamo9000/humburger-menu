let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnerAge = 18;
//prints registration number
if (runnerAge && registeredEarly === true) {
    raceNumber += 1000;
    console.log(raceNumber);
}
//early adults
if (runnerAge > 18 && registeredEarly === true) {
    console.log('you will race at  9:30 am.');
    raceNumber += 1000;
    console.log(raceNumber);
}
//late adults
else if (runnerAge > 18 && registeredEarly === false) {
    console.log('you will start at 11:00 am. ')
    console.log(raceNumber);
} else if (runnerAge < 18) {
    console.log('you will start at 12:30 pm.');
    console.log(raceNumber);
} else {
    console.log('see the registration desk.');
}