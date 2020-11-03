// Arithmetic Challenges

// Add 34 and 71 
// console.log(34 + 71)
// // Subtract 67 from 123
// console.log(123 - 67);
// // Multiply 56 and 23
// console.log(56 * 23);
// // Divide 45 by 5
// console.log(45 / 5);
// // Calculate 5 to the power of 7
// console.log(5*5*5*5*5*5*5*5);

// // Find the remainder of 33/6
// console.log(33%6);


// String Challenges

// Find the length of a string containing your name
console.log('priscila'.length)
// Does your string include the letter "e"?
console.log('priscila'.includes('e'))


// Boolean Challenges (return true or false)

// Is 34 divided by 3 greater than 67 divided by 2?
console.log((34/3) > (67/2))

// Does 5 evaluate to the same as "5"?
console.log(5 == "5")

// Does 5 strictly equal "5"?
console.log(5 === "5")
// Does !3 strictly equal 3?
console.log(!3 === 3)
// Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?
// Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?


// Variables Challenges

// Set a variable called favNum equal to your favorite number
// Log your favorite number divided by 2
// Set another variable called otherNum equal to 13
// What is favNum divided by otherNum?
// Save a string as a variable
// Find the length of the string
// Use the method charAt() to find what letter is at the 3rd index


// ******************Conditionals****************


// Make sure you try different options and change the variables to ensure properly working code.

// Write an if/else statement that takes a variable of item and logs "in budget" if a price is $100 or less.
var budget = 100
var item = 150

if(item > budget) {
    console.log('This item is over budget!')
} else {
    console.log('In budget')
}


// Write an if/else statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
var hungry = false

if(hungry) {
    console.log('Eat food!')
} else {
    console.log('Keep Coding')
}

// Write an if/else statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.

// Write an if/else statement that takes two variables of numbers and outputs the larger number, or logs equal if the numbers are the same.

// Write an if/else statement that takes a variable of a number and logs whether the number is odd, even, or zero.

// STRETCH Challenges

// Write an if/else statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."

// Write an if/else statement that takes a variable of a boolean, number, or string datatype and logs the data type of the variable HINT: use the JS operator typeof.

// Create a password checker using a single if/else statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.