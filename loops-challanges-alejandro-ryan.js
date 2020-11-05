/* ready to
rock :) */
//
// for (let i = 0; i <= 20; i++){
//   console.log(i);
// }
// for (let i = 0; i <= 20; i++){
//   console.log(i * 3);
// // }
// for (let i = 0; i <= 20; i++){
//     // console.log(i);
//
//   if((i % 2 !== 0))
//     console.log("odd");
//     else(console.log(i))
//   }
// // hoorrah!!!
// // var nums = [3, 57, -9, 20, 67]
//
// for(let i = 0; i < nums.length; i++){
// console.log(Math.max[i])
  // if(nums > largest){
  //   largest = nums[i]
  // }
// //}
// var nums = [3, 57, -9, 20, 67] 
// var high = nums[0]
// // 3
// //high is now equal to 57
// //high is 67
// for(let i=0; i < nums.length; i++){ 
//   if(nums[i] > high){
//     high = nums[i]
//   }
// } 
// console.log(high);
//
// var low = nums[0]
//
// for(let i=0; i < nums.length; i++){ 
//   if(nums[i] < low){
//     low = nums[i]
//   }
// } 
// console.log(low);

//
// //Write a function named marco that returns "polo".
// const marco = () => {
//   return "Polo!"
// }
// //dont forget to use console.log(); to recieve a message in terminal
// console.log(marco());
//
// /*write a function named greeting that takes a name as an argument
// and returns "Welcome, <person's name here>!" */
// //write your constants
// const greeting = (name1) => {
//   //return the persons name
//   return ` "Welcome, ${name1}!" `
// }
// //Give greeting names to use as console.log();
// console.log(greeting("Ryan"));
// console.log(greeting("Alejandro"));
//
// // Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
// const oddOrEven = (num) => {
//   // if statement to say if it is to say even
//   // else statement to say if is odd
//   if(num % 2 === 0){
//     return "Even"
//   } else
//   return "Odd"
// }
// console.log(oddOrEven(42));
// console.log(oddOrEven(69));
//
// //Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
// const triple = (num) => {
//   //multiple the return by 3
//   return (num * 3)
// }
// console.log(triple(4));
//
// //Write a function named multiply that takes two numbers as arguments and returns the result of one of the numbers multiplied by the other.
//
// const multiply = (num1, num2) => {
//   //these two arguments need to be multiplied by eachother
//   return num1 * num2
// }
// console.log(multiply(4,4));

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".



//Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".



const divisibleBy = (num1, num2) => {
  //write an if statment in order to determine outcomes
  if(num1 % num2 === 0){
    //use interpolation to have both of the arguments to appear
  return `${num1 } is evenly divisible by ${num2}`
  // must use else statment to catch the rest of possiblities
} else {
  return `${ num1 } is not evenly divisible by ${num2}`
}
}

console.log(divisibleBy(10,5));
console.log(divisibleBy(10,3));


//Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

const assignGrade = (grade) => {
  //must create if statments to differenitate between letter grades
  //must set ranges and make sure to close your if with an else
  if(grade >= 90){
    return "You got an A"
  } else if (grade >= 80 && grade < 90) {
    return "You got a B"
  } else if (grade >= 70 && grade < 80) {
    return "Cs get degrees"
  } else if (grade >= 60 && grade < 70) {
    return "You almost passed, good effort"
  } else {
    return "You suck"
  }
}

console.log(assignGrade(92));
console.log(assignGrade(89));
console.log(assignGrade(70));
console.log(assignGrade(66));
console.log(assignGrade(3));
console.log(assignGrade(1000));

/* some strech challanges completed last night
DM me the secret code of "Pineapples" if you end up seeing this secret note :) */

//What number's bigger: Write a function named greaterNum that takes 2 arguments, both numbers and returns whichever number is the greater (higher) number
const greaterNum = (num1, num2) => {
  //must create and if/else statement for both outcomes
  if(num1>num2){
    return num1
  }else(num1<num2)
    return num2
  }
/*I am starting to catch my mistakes before I write them, i seem to add
a lot of extra curly braces for no reason XD */
console.log(greaterNum(10,5));
console.log(greaterNum(15,800));

//The World Translator: Write a function named helloWorld that takes 1 argument, a language code (e.g. "es", "de", "en") and returns "Hello, World" for the given language, for at least 3 languages (it should default to returning English)

const helloWorld = (Nederlands) => {
  
}
