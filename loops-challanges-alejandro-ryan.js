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


//Write a function named marco that returns "polo".
const marco = () => {
  return "Polo!"
}
//dont forget to use console.log(); to recieve a message in terminal
console.log(marco());

/*write a function named greeting that takes a name as an argument
and returns "Welcome, <person's name here>!" */
//write your constants
const greeting = (name1) => {
  //return the persons name
  return ` "Welcome, ${name1}!" `
}
//Give greeting names to use as console.log();
console.log(greeting("Ryan"));
console.log(greeting("Alejandro"));

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
const oddOrEven = (num) => {
  // if statement to say if it is to say even
  // else statement to say if is odd
  if(num % 2 === 0){
    return "Even"
  } else
  return "Odd"
}
console.log(oddOrEven(42));
console.log(oddOrEven(69));

//Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
const triple = (num) => {
  //multiple the return by 3
  return (num * 3)
}
console.log(triple(4));

//Write a function named multiply that takes two numbers as arguments and returns the result of one of the numbers multiplied by the other.

const multiply = (num1, num2) => {
  //these two arguments need to be multiplied by eachother
  return num1 * num2
}
console.log(multiply(4,4));

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".



//
