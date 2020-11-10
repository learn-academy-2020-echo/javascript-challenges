// Coffee Maker
// class Coffee {
//   constructor(type, cream, sugar){
//     this.type = type
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
// var coffeeBlack = new Coffee(this.black)
//
// coffeeBlack.type = "black"
// coffeeBlack.cream ="1"
// coffeeBlack.sugar = "2"
//
// console.log(coffeeBlack);
// var secondCoffee = new Coffee()
//   secondCoffee.sugar = 2
//   console.log(secondCoffee);


// Write the code that makes a black coffee.
//
// Write the code that makes a coffee with 1 cream and 2 sugars.
//
// Write the code that makes a coffee with 2 sugars. Then write the code that outputs the coffee's profile.
//
// Latte Maker
// Write a Latte class that receives a flavor, a milk type and a number of shots.
// class Latte {
//   constructor(flavor, milk, shots){
//     this.flavor = flavor
//     this.milk = milk
//     this.shots = shots
//   }
//   latteProfile(){
//     return (`${this.flavor}: ${this.milk}: ${this.shots}`)
//   }
// }
//
//
// var newLatte = new Latte
// newLatte.flavor = "regular"
// newLatte.milk = "almond"
// newLatte.shots = "double hazelnut"
// console.log(newLatte);
//
//



// Write a method for your Latte class that outputs the latte's profile.
//
// Write the code that makes a regular, single shot latte. Then, log the latte's profile.
//
// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.
//




// Volume of a Cylinder


// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder :
// V = πr2h (r is the radius and h is the height of the cylinder)
// Write the code that creates three unique cylinder objects

// class Cyclinder {
//     constructor(radius, height){
//         this.radius = radius
//         this.height = height
//     }
//     cylinderProfile(){
//         return `The cylinder volume is equal to ${(this.radius * this.height * 3.14).toFixed(4)}`
//     }
// }


// var cylinder1 = new Cyclinder(2,3)
// var cylinder2 = new Cyclinder(4,5)
// var cylinder3 = new Cyclinder(6,7)

// console.log(cylinder1.cylinderProfile());
// console.log(cylinder2.cylinderProfile());
// console.log(cylinder3.cylinderProfile());

//*********************************************************************************************** */
//CLASS INHERITANCE

// Story: As a programmer, I can make a car.
// Write a variable called myCar which is an instance of the class Car
// Story: As a programmer, I can give my car a model on initialization.
// The model for the car class can be "generic car"
// Story: As a programmer, I can give my car a year on initialization.
// The year for the car class can be "myCar year"
// Story: As a programmer, I can tell how many wheels myCar has.
// Calling the method wheels will return 4
// Story: As a programmer, I can make a Tesla car.
// class Tesla inherits from class Car
// Create an object called myTesla which is a instance of class Tesla
// Story: As a programmer, I can give my Tesla a model on initialization.
// The model can be inherited from the parent class Car by passing the model 
//through the constructor() and super() on the child class


class Car {
    constructor(model, year, wheels){
        this.model = model
        this.year = year
        this.wheels = wheels
    }
    carProfile(){
        return `This is a ${this.model} car it was made in ${this.year} and it has ${this.wheels} wheels`
    }
    carWheels(){
        return `This car has ${this.wheels}`
    }
}

class Tesla extends Car{
    constructor(model, year, wheels){
        super()
        this.model = model
        this.year = year
        this.wheels = wheels
    }

    fuel(){
        return `${this.model} has clean fuel`
    }
}



var myCar = new Car('generic', 2010, 10)
console.log(myCar.carProfile());


var myTesla = new Tesla('model-x', 2020, 4)
console.log(myTesla.carProfile())






