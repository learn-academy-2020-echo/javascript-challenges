// DON'T FORGET TO PSEUDO CODE

// Use .map() or .filter() to complete the following exercises:

// Write a function that takes in an array and returns a new array with all numbers multiplied by 10.
// Expected output --> [30, 90, 150, 40, 100]

// let arr1 = [3, 9, 15, 4, 10]

// // create a function that takes an array of numbers
// const multiplied = (array) => {
// 	// returns a new array with all numbers multiplied by 10
// 	let newArray = array.map((value) => {
// 		return value * 10
// 	})
// 	return newArray
// }
// // call the function
// console.log(multiplied(arr1))

// ************************************************************************************

// Write a function that takes in an array and returns a new array with only odd numbers.
// var arr2 = [2, 7, 3, 5, 8, 10, 13]

// Expected output --> [7, 3, 5, 13]

// let arr2 = [2, 7, 3, 5, 8, 10, 13]

// // create a function that takes an array of numbers
// const oddNum = (array) => {
// // create new "let" to hold filtered array
// let oddArray = array.filter(value => {
// 	return value % 2 == 0
// })
// // use filter in order to determine what numbers in array are odd
// // return new filtered array
// return oddArray
	
// }

// // call function
// console.log(oddNum(arr2));


// ************************************************************************************




// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method
// var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"] Expected output --> "nicework"

let comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]

// create function that takes in an array that contains letters and numbers.
const stringFinder = (array) => {
	// typeOf
	// create new var that contains function
	let stringArray = array.filter(value => {
		return typeof value === 'string'
	})
	// inside function use filter to go thru array to find if element is string using typeOf
	// create new var to hold new filtered array
	// run filter method on given array and check if value is typeOf = string
	// need to loop thru the given array and return any value that is a string
	// return the variable that holds newly filtered array
	return stringArray.join("-")
}

//call function
console.log(stringFinder(comboArr));

// var theSelection = ['Acid', 'str', 0.123545, 'Bristol'];
// var result = theSelection.filter(d => typeof d === 'string');
// for (var i = 0; i < result.length; i++) {
//   console.log(result[i]);
// }


// ************************************************************************************




// STRETCH Challenges
// Create a function that takes in a string and returns a new string with all the vowels removed.
// var str = "javascript is awesome"

// Expected output --> "jvscrpt s wsm"

// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// var arr1 = [3, 7, 10, 5, 4, 3]

// var arr2 = [7, 8, 2, 1, 5, 4]

// Expected output -> [3, 7, 10, 5, 4, 8, 2, 1]
