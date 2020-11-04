// declaration
// arguments
// arrow syntax
// curly braces
// const nameOfFunction =() ==> {
// //  return: every function must have a return
// return "great function!"
// }
// // function invocation


// console.log(nameOfFunction())

// arguments
// const doMath = (num1, num2) => {
//     return num1 + num2
// }
// console.log(doMath(17, 3));

// const greeter = (name) => {
//     return `Hey, ${name}. How are you? `
// }
// console.log(greeter("Racheal"));
// console.log(greeter("Amanda"));
// console.log(greeter("Chris"));

// PSeudocode 
// const longerName = (name1, name2) => {
//     let name1length = name1.length 
//     let name2length = name2.length

//     if(name1length > name2length) {
//         return name1
//     } else if{name1length === name2length) {
//         return "names are the same length"
//     }
//         return name2
//     }
// }

var wordArray = ["Beans", "Apple", "Cat", "Alien", "Door"]
const findTheAs = (arr) => {
    let arrayOfAs = []
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].charAt(0) === "A") {
            arrayOfAs.push(arr[i])
        }
    }
    return arrayOfAs
}
console.log(findTheAs(wordArray));

// hello!!!