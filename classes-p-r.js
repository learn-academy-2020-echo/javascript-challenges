//Priscilla & Ryan
class Coffee {
  constructor(type, cream, sugar){
    this.type = type.toLowerCase()
    this.cream = cream
    this.sugar = sugar
  }

  coffeeProfile(){
    return(`${this.type}: ${this.creams()}, ${this.sugars()}`)
  }

  creams(){
    if (this.cream > 1){
      return `${this.cream} creams`
    } else {
      return `${this.cream} cream`
    }
  }

  sugars(){
    if (this.sugar > 1){
      return `${this.sugar} sugars`
    } else {
      return `${this.sugar} sugar`
    }
  }
}
/* Write the code that makes a black coffee.
Write the code that makes a coffee with 1 cream and 2 sugars.
Write the code that makes a coffee with 2 sugars. Then write the code that outputs the coffee's profile.
*/
//Write the code that makes a black coffee.
//var called blackCoffee
var blackCoffee = new Coffee ("blackCoffee", 0, 0)
console.log(blackCoffee);
var soundsAboutWhite = new Coffee ("Cream & Sugar", 1, 2)
console.log(soundsAboutWhite);
var sugarRush = new Coffee ("2 Sugars", 0, 2)
console.log(sugarRush);
console.log(sugarRush.coffeeProfile());
console.log(soundsAboutWhite.coffeeProfile());
console.log(blackCoffee.coffeeProfile());

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
