//
//
// class Coffee {
//   constructor(type, cream, sugar){
//     this.type = type.toLowerCase()
//     this.cream = cream
//     this.sugar = sugar
//   }
//
//   coffeeProfile(){
//     return(`${this.type}: ${this.creams()}, ${this.sugars()}`)
//   }
//
//   creams(){
//     if (this.cream > 1){
//       return `${this.cream} creams`
//     } else {
//       return `${this.cream} cream`
//     }
//   }
//
//   sugars(){
//     if (this.sugar > 1){
//       return `${this.sugar} sugars`
//     } else {
//       return `${this.sugar} sugar`
//     }
//   }
// }
//
//
// var blackCoffee = new Coffee("black", 0,0)
//
// console.log(blackCoffee.coffeeProfile());
//
// var coffee2 = new Coffee("1cream 2sugars", 1,2)
// console.log(coffee2.coffeeProfile());
//
// // Write the code that makes a coffee with 2 sugars.
// // Then write the code that outputs the coffee's profile.
//
// var coffee3 = new Coffee("2sugars", 0,2)
// console.log(coffee3.coffeeProfile());

//2 Latte Maker
// Write a Latte class that receives a flavor, a milk type and a number of shots.
//
// Write a method for your Latte class that outputs the latte's profile.
//
// Write the code that makes a regular, single shot latte. Then, log the latte's profile.
//
// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.
//
class Latte {
  constructor(flavor, milkType, shots){
    this.flavor = flavor
    this.milkType = milkType
    this.shots = shots
  }

  latteProfile(){
    return (`flavor: ${this.flavor}, milk type: ${this.milkType}, shots: ${this.shots}`)
  }
  shots(){
    if (this.shots > 1){
      return `${this.shots} shots`
    } else {
      return `${this.shots} shot`
    }
  }
}


var regular = new Latte("plain", "whole",1)
console.log(regular.latteProfile());

var fancyLatte = new Latte("hazelnut", "almond",2)
console.log(fancyLatte.latteProfile());


// 3 Volume of a Cylinder
// Write a class that calculates the volume of a Cylinder to four decimal places.
// Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)

class Volcylinder {
  constructor(radius, height ){
    this.radius = radius
    this.height = height


  }

  volcylinderProfile(){
    return (Math.pow(this.radius, 2)*this.height*3.14159265359).toFixed([4])
  }
}

  var cyl1 = new Volcylinder(5, 10)
  console.log(cyl1.volcylinderProfile());

  console.log(25*10*3.14159265359);
