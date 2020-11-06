//Higher Functions with Filippo & Ryan !!



/* Write a function that takes in an array and returns a new array with all numbers multiplied by 3.
var testArr1 = [3, 9, 15, 4, 10] */

//define array
// var testArr1 = [3, 9, 15, 4, 10]
// //
// testArr1.map(value => {
//   return value * 3
// })
// // console.log(multiply);
// var testArr1 = [3, 9, 15, 4, 10].map(value => {
//   return value * 3
// })
// console.log(testArr1);
//
// // Write a function that takes in an array and returns a new array with only odd numbers.
// //var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
//
// //a function => return
// // var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// // const getOdds = testArr2.filter(value => {
// // return { value % 2 !== 0 }
// // })
// //
// // console.log(getOdds(testArr2));
//
// var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// const getOdds = (array) => {
//   return array.filter(value => {
//     return value % 2 !== 0
//   })
// }
// console.log(getOdds(testArr2));
// // declare an array
//define a const and define out .filter method
//both outcomes

// Write a function that takes in a string and returns a new string with every letter capitalized. HINT: you do not need arrays or loops.
//var myMessage = "Hello There"

//we have to .toUpperCase a string
//
// var myMessage = "Hello There"
// const upperCase = (string) => {
//   return string.toUpperCase(value => {
//
//   })
// }
//
// console.log(upperCase(myMessage));
//
//
// // Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method
// // var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"] Expected output --> "nicework"
//
//
// // declare my comboArrr variable
// // define constant and filtering method
//
// var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
//
//  const stringOnly = (string) => {
//    return string.typeof(value => {
//
//    })
//  }
//
// console.log(stringOnly(comboArr));

//Create a function that takes in a string and returns a new string with all the vowels removed.
//have an array of every letter in a single spot and returns
//only letters that are not vowels
var str = "javascript is awesome"

const vowel = (string) => {
let stringSplit = string.split("")
let filteredArray= stringSplit.filter(value => {
return  value !== "a" && value !== "e" && value !== "i" && value !== "o" && value !== "u"
})
return filteredArray.join("")
}
console.log(vowel(str));
