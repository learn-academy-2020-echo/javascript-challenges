// we are starting objects!

/* var person = {
  firstName: "Arthur",
  lastName: "Dent"
}
Write the code that accesses the first name of the person object.
Write the code that accesses the last name of the person object.
Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
Update the person object with a method that logs "Arthur Dent is from planet Earth".
*/

// declare our variable
// var person = {
//   firstName: "Arthur",
//   lastName: "Dent",
//   homePlanet: "Earth",
//   func: function() {
//     return `${this.firstName} ${this.lastName} is from planet ${this.homePlanet}`
//     //you can use THIS -- OR person... "this" helps with mulitple vars
//   }
// }
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.func());
// write function that grabs firstName.
//write function that grabs lastName.
//

/* var product = {
  name: "chair", price: 14.99
}
// Write a function called describeProduct takes product as an argument and logs "The product is a chair. It costs $14.99".
// */
// var product = {
//   name: "chair",
//   price: 14.99
// }
// const describeProduct = () => {
//   return `"The product is a ${product.name}. It cost $${product.price}."`
// }
// console.log(describeProduct(product));'
// //
/* var lunch = {
  name: "PB and Banana",
  type: "sandwich",
  ingredients: ["bread", "peanut butter", "banana"]
}
Write the code that accesses the ingredients property.
Write the code that access the 3rd ingredient of the lunch object.
Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
*/

// var lunch = {
//   name: "PB and Banana",
//   type: "sandwich",
//   ingredients: ["bread", "peanut butter", "banana"]
// }
// const sandwich = () => {
//   return `The ingredients for a ${lunch.name} ${lunch.type} are ${lunch.ingredients[0]}, ${lunch.ingredients[1]}, and ${lunch.ingredients[2]}.`
// }
// console.log(sandwich(lunch));
// console.log(lunch.ingredients);
// console.log(lunch.ingredients[2]);
//
/* let pokeOne = {
    species: "Charmandar",
    pokemon_type: "Fire"
}

let pokeTwo = {
    species: "Magikarp",
    pokemon_type: "Water"
}
Write a function called describePokemon() that take an object like the ones above and uses destructuring to return a description of the Pokemon such that:
console.log(describePokemon(pokeOne))
--> "Charmandar is a Fire pokemon"
console.log(describePokemon(pokeTwo))
--> "Magikarp is a Water pokemon"
*/
let {pokeOne, pokeTwo} =

let pokeOne = {
    species: "Charmandar",
    pokemon_type: "Fire"
}

let pokeTwo = {
    species: "Magikarp",
    pokemon_type: "Water"
}
const describePokemon = () => {
  return `"${species} is a ${pokemon_type} pokemon"`
}

console.log(describePokemon(pokeOne));
console.log(describePokemon(pokeTwo));
