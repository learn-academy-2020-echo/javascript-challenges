/*
var person = {
  firstName: "Arthur",
  lastName: "Dent"
}
Write the code that accesses the first name of the person object.
Write the code that accesses the last name of the person object.
Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
Update the person object with a method that logs "Arthur Dent is from planet Earth".
*/

var person = {
  firstName: "Arthur",
  lastName: "Dent",
  planet: "Earth",
  homePlanet: function () {
    return `${this.firstName} ${this.lastName} is from ${this.planet}`
  }
}

//const bios = (array) => {
  //  return `Good ol' ${value.person} is on the ${value.worth} dollar bill`
//}

console.log(person.homePlanet())
console.log(person.lastName);


var person = {
  name: "Alex Keaton",
  phone: 123456789,
  getData: function() {
    return `${this.name}'s phone number is ${this.phone}`
  }
}

console.log(person.getData())




// Write a function called describeProduct takes product as an argument and logs "The product is a chair. It costs $14.99".



var product = {
  name: "chair", price: 14.99
}


const describeProduct = (product) => {
  return `The prodcut is a ${product.name}. It costs ${product.price}`
}

console.log(describeProduct(product));
