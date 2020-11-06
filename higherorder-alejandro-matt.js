// Use .map() or .filter() to complete the following exercises:
//
// Write a function that takes in an array and returns a new array with all numbers multiplied by 10.
//
// var arr1 = [3, 9, 15, 4, 10].map(value =>{
//       return value * 10
//
// })
// //
// // const multiple = (value => {
// //     return arr1.map(value * 2)
// //
// // }
//     console.log(arr1);
// // //
// // // Expected output --> [30, 90, 150, 40, 100]


//
// Write a function that takes in an array and returns a new array with only odd numbers.
// var arr2 = [2, 7, 3, 5, 8, 10, 13].map(value =>{
//   if (value % 2 === 0) {
//     return "even"
//   }else {
//     return "odd"
//   }
//
// })
// console.log(arr2);
// // Expected output --> [7, 3, 5, 13]

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method
//
// var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
//
const getWords = (letters) =>{
  // filter out anything that is not a string
  return letters.filter(value =>{
    // want to join array that says "nice work"
    if (typeof value === "string") {
      return value
    }
    }
).join("")
}
console.log(getWords(comboArr));







//
// Expected output --> "nicework"
//
