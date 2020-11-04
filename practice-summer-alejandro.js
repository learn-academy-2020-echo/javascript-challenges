// Hi Alejandro!
//Hey Summer

//arithmetic questions
console.log(34 + 71)
console.log(123 - 67);
console.log(56 * 23);
console.log(45 / 5);
console.log(Math.pow(5,7));
console.log(33 % 6);
//string challenges
var name = "Summer"
console.log(name.length)
console.log(name.includes("e"))
//boolean challenges
console.log(34/3 > 67/2)
console.log(5 == "5")
console.log(!3 === 3)
console.log("LEARN".length === 5 && "Student".length === 7)
//variable Challenges
var favNum = 14
console.log(14/2)
var otherNum = 13
console.log(favNum / otherNum)
var string = "string"
console.log(string.length);
console.log(string.charAt(3))



//Conditonals Practice

var price = 150

if(price <= 100) {
  console.log("In budget");
} else {console.log("You broke");
}

var number = 41
if(number % 2 === 0){
  console.log("It's even")
} else {console.log("It ain't even")
}



var password = "123665436523423!"

if (password.length >= 12 && password.includes("!")) {
  console.log("Thats a mighty strong password")
}
else if (password.length >= 8 || password.includes("!")) {
  console.log("This password is strong enough");
}
else {console.log("That is not a valid password");

}

// Array Challenges
  var groceryList = ["chips", "dip", "cookies"]
  groceryList.push("soda")
  console.log(groceryList);

  var groceryList2 = ["granola"]
  var groceryList3 = groceryList.concat(groceryList2)
  console.log(groceryList3)


  var numbers = [2, 4, 6, 8, 10]
  numbers.unshift(0)
  console.log(numbers);

  numbers.push(12)
  console.log(numbers);

  numbers.shift()
  console.log(numbers);

  let numbers1 = [0]
  let numbers3 = numbers1.concat(numbers)
  console.log(numbers3);

  var numSet = [2, 13, 6, 8, 4, 2]
  console.log(numSet.indexOf(2));

  console.log(numSet.lastIndexOf(2));



   var chars = ["y", "a", "r", "r", "a"]

   var chars2 = chars.join("")
   console.log(chars2)
