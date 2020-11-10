// //Priscilla & Ryan
// class Coffee {
//   constructor(type, cream, sugar){
//     this.type = type.toLowerCase()
//     this.cream = cream
//     this.sugar = sugar
//   }

//   coffeeProfile(){
//     return(`${this.type}: ${this.creams()}, ${this.sugars()}`)
//   }

//   creams(){
//     if (this.cream > 1){
//       return `${this.cream} creams`
//     } else {
//       return `${this.cream} cream`
//     }
//   }

//   sugars(){
//     if (this.sugar > 1){
//       return `${this.sugar} sugars`
//     } else {
//       return `${this.sugar} sugar`
//     }
//   }
// }
/* Write the code that makes a black coffee.
Write the code that makes a coffee with 1 cream and 2 sugars.
Write the code that makes a coffee with 2 sugars. Then write the code that outputs the coffee's profile.
*/
//Write the code that makes a black coffee.
//var called blackCoffee
// var blackCoffee = new Coffee ("blackCoffee", 0, 0)
// console.log(blackCoffee);
// var soundsAboutWhite = new Coffee ("Cream & Sugar", 1, 2)
// console.log(soundsAboutWhite);
// var sugarRush = new Coffee ("2 Sugars", 0, 2)
// console.log(sugarRush);
// console.log(sugarRush.coffeeProfile());
// console.log(soundsAboutWhite.coffeeProfile());
// console.log(blackCoffee.coffeeProfile());

//to create outputs, we build a var to see each output
// var currentCoffee = []
// currentCoffee.push(blackCoffee)
// currentCoffee.push(soundsAboutWhite)
// currentCoffee.push(sugarRush)
//
//
// var showInfo = currentCoffee.map(value => {
//   return `${value.type}`
// })
// console.log(showInfo);

// Latte Maker
// Write a Latte class that receives a flavor, a milk type and a number of shots.

// Write a method for your Latte class that outputs the latte's profile.

// Write the code that makes a regular, single shot latte. Then, log the latte's profile.

// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.
//
// class LatteMaker {
//   constructor(flavor, milkType, shots) {
//     this.flavors = flavor
//     this.milkTypes = milkType
//     this.shots = shots
//   }
//   latteProfile() {
//     return (`${this.flavors}: ${this.milkTypes}: ${this.shots}`)
//   }
//      flavorTypes() {
//       if(this.flavors = "" ) {
//         return `${this.flavors}`
//       }
//   }
//   milkTypes() {
//     if(this.milkType = "" ) {
//       return `${this.milkTypes}`
//     }
//   }
//     numShots() {
//       if(this.shots > 1) {
//         return `${this.shots} shots`
//
//       } else {
//         return `${this.shots} shot`
//       }
//     }
//   }
//
//
// var hazelnut = new LatteMaker("hazelnut", "almond milk", 2)
//
// console.log(hazelnut);
// we built a model for an engine
class Car {
  constructor(){
    this.model = "generic car"
    this.year = "myCar year"
    this.oilLevel = 100
    this.rpm = 0
  }

  start(){
    this.rpm = 500
  }

  stop(){
    this.rpm = 0
  }

  wheels(){
    return 4
  }
}

class Tesla extends Car {
  constructor(){
    super()
    //we can now model a tesla how we want!

  }
}
// class Maserati extends Car {
//   constructor(){
//     super()
//   }
// }
var myCar = new Car()
var teslaCar = new Tesla
console.log(teslaCar)
console.log(myCar);


// let engine = new Engine()
//
// console.log("rpm:", engine.rpm)
// console.log();
// // call the method start on the engine object variable to alter the rpm
// engine.start()
// console.log("rpm:", engine.rpm)
//
// engine.stop()
// console.log("rpm:", engine.rpm)
