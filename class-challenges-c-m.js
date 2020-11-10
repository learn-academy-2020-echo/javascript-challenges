//
// Write the code that makes a black coffee.
// Write the code that makes a coffee with 1 cream and 2 sugars.
//
// Write the code that makes a coffee with 2 sugars. Then write the code that outputs the coffee's profile.
// // Latte Maker
// // Write a Latte class that receives a flavor, a milk type and a number of shots.
class Latte {
  constructor(type, milk, shots){
    this.type = type.toLowerCase()
    this.milk = milk
    this.shots = shots
  }

  coffeeProfile(){
    return(`${this.type}: ${this.milkType()}, ${this.shotsAmount()}`)
  }

  milkType(){
    if (this.milk > 1){
      return `${this.milk} oz milk`
    } else {
      return `${this.milk} oz milk`
    }
  }

  shotsAmount(){
    if (this.shots > 1){
      return `${this.shots} shots`
    } else {
      return `${this.shots} shot`
    }
  }
}
var latteType = new Latte("chai", 1, 2)
console.log(latteType.coffeeProfile());

// Write a method for your Latte class that outputs the latte's profile.
//
// Write the code that makes a regular, single shot latte. Then, log the latte's profile.
//
// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.
//
// Volume of a Cylinder
// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)
//
// Write the code that creates three unique cylinder objects


class MyCar {
  constructor(model, year, wheels){
    this.model = model
    this.myCarYear = year
    this.wheels = wheels
  }
  carProfile(){
      return(`${this.model}: ${this.carYear()}, ${this.tireAmount()}`)
  }
  carYear(){
      return `${this.myCarYear}`
  }
  tireAmount(){
      return `${this.wheels}`
  }
}
class Tesla extends MyCar {
  constructor(){
    super()
    this.model = tesla
  }
}
class Toyota extends MyCar {
  constructor(){
    super()
    this.car =
  }
}    


var car = new MyCar ("tesla",2020,4)
var myToyota = new Toyota("toyota",1990, 4)
var myTesla = new Tesla("model X", 2012, 4)
console.log(car);
console.log(myToyota);
console.log(myTesla);


// if (this.car > 1){
//   return `${this.car} car`
// } else {
//   return `${this.car} car`
// }



// if (this. > 1){
//     return `${this.tires} tires`
//   } else {
//     return `${this.tires} tire`
// }
