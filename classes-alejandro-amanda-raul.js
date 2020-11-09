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
  return this.pi * this.radius * this.height
}


}





let cylinder1 = new Volume (5, 10)
console.log(cylinder1.calculateVolume());



// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)
//
// Write the code that creates three unique cylinder objects
