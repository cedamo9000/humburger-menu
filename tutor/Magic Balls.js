let userName = "Castro";

userName ? console.log(`welcome ${userName}`) :

    console.log('sorry i didnt recognize you');

let userQuestion = 'how old am I';
console.log(`${userName} said  ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);


let eightBalls = '';

switch (randomNumber) {
    case 0:
        eightBalls = 23;
        break;
    case 1:
        eightBalls = 56;
        break;
    case 2:
        eightBalls = 16;
        break;
    case 3:
        eightBalls = 2;
        break;
    case 4:
        eightBalls = 10;
        break;
    case 5:
        eightBalls = 78;
        break;
    case 6:
        eightBalls = 90;
        break;
    case 7:
        eightBalls = 3;
        break;
}
console.log(`Magic Balls says ${eightBalls}`);