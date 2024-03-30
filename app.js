//Q1

var roundedNumber = Math.round(yourNumber);

//Q2

var origNum = 2.5;
var roundNum = Math.ceil(origNum);

//q3

var roundNum = Math.floor(0.5);

//Q4

var originalNumber = 3.7; 
var roundedNumber = Math.round(originalNumber);

//Random Numbers

//Q1

var randomNumber = Math.random();

var scaledNumber = Math.floor(randomNumber * 50) + 1;

console.log(scaledNumber);


//Q2


function rollDice() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
}
var diceResult = rollDice();
console.log("You rolled:", diceResult);

//Q3

function tossCoin() {
    // Generate a random number between 0 and 1
    var randomNumber = Math.random();
    
    // If the random number is less than 0.5, it's heads, otherwise tails
    if (randomNumber < 0.5) {
        return "Heads";
    } else {
        return "Tails";
    }
}

// Example usage
var result = tossCoin();
console.log("The result of the coin toss is:", result);

//Converting String

//Q1
var str = "42"; 
var num = Number(str);
console.log(num); // Output: 42

//Q2

var str = "123";
var integer = stringToInteger(str);
console.log(integer);

//Q3

var num = 123; 
var str = num.toString();
console.log(str); // Output: "123"

//Controlling the length of  decimals)

//Q1

var num = 10.123456789; 
var newNum = num.toFixed(4).toString();
//Q2

if (num.toFixed(2).toString().length > 4) {
    
}







