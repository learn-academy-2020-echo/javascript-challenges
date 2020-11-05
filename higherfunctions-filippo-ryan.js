//Higher Functions with Filippo & Ryan !!



/* Write a function that takes in an array and returns a new array with all numbers multiplied by 3.
var testArr1 = [3, 9, 15, 4, 10] */

//define array
// var testArr1 = [3, 9, 15, 4, 10]
// //
// testArr1.map(value => {
//   return value * 3
// })
// console.log(multiply);
var testArr1 = [3, 9, 15, 4, 10].map(value => {
  return value * 3
})
console.log(testArr1);

// Write a function that takes in an array and returns a new array with only odd numbers.
//var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]

//a function => return
// var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// const getOdds = testArr2.filter(value => {
// return { value % 2 !== 0 }
// })
//
// console.log(getOdds(testArr2));

var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
const getOdds = (array) => {
  return array.filter(value => {
    return value % 2 !== 0
  })
}
console.log(getOdds(testArr2));
// declare an array
//define a const and define out .filter method
//both outcomes

// Write a function that takes in a string and returns a new string with every letter capitalized. HINT: you do not need arrays or loops.
//var myMessage = "Hello There"

//we have to .toUpperCase a string

var myMessage = "Hello There"
const upperCase = (string) => {
  return string.toUpperCase(value => {

  })
}

console.log(upperCase(myMessage));
