// DON'T FORGET TO PSEUDOCODE
//
// declare a function named marco that returns "polo".
// const marco = () => {
// // retun "polo"
//   return "polo"
// }
// // call function with console.console.log()
// console.log(marco())

// ``
// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
// declare a  function that takes in name as an argument
// const greeting = (name) => {
// //returns message "Welcome, <person's name here>!"
//  return `Welcome, ${name}!`
// }
// // call function with console.log()
// console.log(greeting("Amanda"))
//


// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
// declare the function that takes a number as an argument
// const oddOrEven = (num) => {
// // conditional that determines if its odd or even
// // return if number is oddOrEven
// if (num % 2 === 0){
//   return "even"
// } else {
//   return "odd"
// }

// }
// // call the function
// console.log(oddOrEven(35))
// console.log(oddOrEven(44))

// //
// // Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
// // Declare the function named triple with a number as an argument
// const triple = (num) => {
//   // Return the argument multiplied by 3
//   return num * 3
// }

// // Call the function
// console.log(triple(4))
// console.log(triple(5))
// console.log(triple(6))


//
// Write a function named multiply that takes two numbers as arguments and returns the result of one of the numbers multiplied by the other.
// Declare the function named multiply that takes two number arguments
// const multiply = (num1, num2) => {
// // Return number arguments multiplyed by each other
// return num1 * num2
// }
//
// // Call the function
// console.log(multiply(2, 3))
// console.log(multiply(5, 10))
// console.log(multiply(4, 2))





//
// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

// Declare the function divisibleBy that takes two numbers as arguments
const divisibleBy = (num1, num2) => {
// conditional to see if the first number is evenly divisble by the second
if ( num1 % num2 === 0){
// return a statement that says num1 is evenly divisible by num2
return `${num1} is evenly divisble by ${num2}`
}

}
// Call the function
console.log(divisibleBy(10, 5))




//
// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

// Declare function namedmassignGrade that takes a number as an arguments
const assignGrade = (score) => {
// Conditional to determine letter grade
if (score >= 90){
  return "A"
} else if (score >= 80){
  return "B"
} else if (score >= 70){
  return "C"
} else if (score >= 60){
  return "D"
} else if (score >= 59){
  return "F"
} else


  }
// return letter grade for the score
}

// call the function
