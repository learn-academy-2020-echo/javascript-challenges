//1.Coffee Maker
class Coffee {
	constructor(type, cream, sugar) {
		this.type = type.toLowerCase()
		this.cream = cream
		this.sugar = sugar
	}

	coffeeProfile() {
		return `${this.type}: ${this.creams()}, ${this.sugars()}`
	}

	creams() {
		if (this.cream > 1) {
			return `${this.cream} creams`
		} else {
			return `${this.cream} cream`
		}
	}

	sugars() {
		if (this.sugar > 1) {
			return `${this.sugar} sugars`
		} else {
			return `${this.sugar} sugar`
		}
	}
}
// Write the code that makes a black coffee.
//

var blackCoffee = new Coffee('Black', 0, 0)
console.log(blackCoffee.coffeeProfile())

// Write the code that makes a coffee with 1 cream and 2 sugars.
//

var coffee1 = new Coffee('Regualr', 1, 2)
console.log(coffee1.coffeeProfile())

// Write the code that makes a coffee with 2 sugars. Then write the code that outputs the coffee's profile.

var coffee2 = new Coffee('Sweet', 0, 2)
console.log(coffee2.coffeeProfile())

//
// 2.Latte Maker
// Write a Latte class that receives a flavor, a milk type and a number of shots.

class Latte {
	constructor(flavor, milk, shots) {
		this.flavor = flavor.toLowerCase()
		this.milk = milk
		this.shots = shots
	}

	latteProfile() {
		// Write a method for your Latte class that outputs the latte's profile.
		return `${this.flavor} latte with ${
			this.milk
		} milk and ${this.shotQuantity()}`
	}

	shotQuantity() {
		if (this.shots > 1) {
			return `${this.shots} shots`
		} else {
			return `${this.shots} shot`
		}
	}
}

// Write the code that makes a regular, single shot latte. Then, log the latte's profile.

let latte1 = new Latte('regular', 'whole', 1)
console.log(latte1.latteProfile())

// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.

let latte2 = new Latte('hazelhut', 'almond', 2)
console.log(latte2.latteProfile())

// 3.Volume of a Cylinder



class Volume {
  constructor (radius, height){
    this.radius = radius * radius
    this.height = height
    this.pi = Math.PI
  }

calculateVolume() {
  return (this.pi * this.radius * this.height).toFixed(4)
}


}

let cylinder1 = new Volume (5, 10)
console.log(cylinder1.calculateVolume());

let cylinder2 = new Volume (7, 11)
console.log(cylinder2.calculateVolume());

let cylinder3 = new Volume (8, 12)
console.log(cylinder3.calculateVolume());



// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)
//
// Write the code that creates three unique cylinder objects


// Story: As a programmer, I can make a car.
// Write a variable called myCar which is an instance of the class Car

class Car {
	constructor(model, year) {
		this.model = model
		this.year = year

	}
wheels() {
	return 4
}
}

let myCar = new Car("toyota", 2020)
console.log(myCar.wheels())

// Story: As a programmer, I can give my car a model on initialization.
// The model for the car class can be "generic car"
// Story: As a programmer, I can give my car a year on initialization.
// The year for the car class can be "myCar year"
// Story: As a programmer, I can tell how many wheels myCar has.
// Calling the method wheels will return 4

class Tesla extends Car {
	constructor(model, year){
		super(model, year)
	}
}

let myTesla = new Tesla("model x", 2020 )
console.log(myTesla)








// Story: As a programmer, I can make a Tesla car.
// class Tesla inherits from class Car
// Create an object called myTesla which is a instance of class Tesla
// Story: As a programmer, I can give my Tesla a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Tesla a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
// Story: As a programmer, I can make a Toyota car.
// class Toyota inherits from class Car
// create an object called myToyota which is a instance of class Toyota
// Story: As a programmer, I can give my Toyota a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Toyota a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
// Story: As a programmer, I can make a Volkswagen car.
// class Volkswagen inherits from class Car
// create an object called myVolkswagen which is a instance of class Volkswagen
// Story: As a programmer, I can give my Volkswagen a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Volkswagen a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
// Story: As a programmer, I can give all my cars a lights property. Lights start in the off position.
//
// Story: As a programmer, I can turn the lights in all my cars on and off.
//
// Story: As a programmer, I can give all my cars a signal property. Turn signal starts in the off position.
//
// Story: As a programmer, I can determine the speed of a car. Speed starts at 0 mph.
//
// Story: As a programmer, I can speed my Tesla up by 10 per acceleration.
//
// Story: As a programmer, I can slow my Tesla down by 7 per braking.
//
// Story: As a programmer, I can speed my Toyota up by 5 per acceleration.
//
// Story: As a programmer, I can slow my Toyota down by 2 per braking.
//
// Story: As a programmer, I can speed my Volkswagen up by 7 per acceleration.
//
// Story: As a programmer, I can slow my Volkswagen down by 5 per braking.
//
// Story: As a programmer, I can call upon a carInfo method that will tell me all the information about a car.
//
// The method can be created in the parent class and accessed by all child classes
