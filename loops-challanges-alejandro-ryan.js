/* ready to
rock :) */
//
// for (let i = 0; i <= 20; i++){
//   console.log(i);
// }
// for (let i = 0; i <= 20; i++){
//   console.log(i * 3);
// }
for (let i = 0; i <= 20; i++){
    // console.log(i);

  if((i % 2 !== 0))
    console.log("odd");
    else(console.log(i))
  }
// hoorrah!!!
// var nums = [3, 57, -9, 20, 67]
//
// for(let i = 0; i < nums.length; i++){
// console.log(Math.max[i])
  // if(nums > largest){
  //   largest = nums[i]
  // }
//}
var nums = [3, 57, -9, 20, 67] 
var high = nums[0]
// 3
//high is now equal to 57
//high is 67
for(let i=0; i < nums.length; i++){ 
  if(nums[i] > high){
    high = nums[i]
  }
} 
console.log(high);

var low = nums[0]

for(let i=0; i < nums.length; i++){ 
  if(nums[i] < low){
    low = nums[i]
  }
} 
console.log(low);
