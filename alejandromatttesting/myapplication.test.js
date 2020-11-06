// // describe("hello", () =>{
// //   test("returns a string that says hi", () => {
// //     expect(hello()).toEqual("hi")
// //   })
// // })
// //
// //
// // const hello = () => {
// //   return "hi"
// // }
//
//
// var myName = "Andee"
//
// describe("greeter", () => {
//   test("takes in an argument and returns back Hello, name", () => {
//     expect(greeter(myName)).toEqual("Hello, Andee")
//     expect(greeter("Andee")).toEqual("Hello, Andee")
//   })
// })
//
//
// const greeter = (name) => {
//   return `Hello, ${name}`
// }
//
//
// describe("trafficLight", () => {
//   test("it takes in an argument of a traffic light color and returns the appropriate traffic action", () => {
//     expect(trafficLight("green")).toEqual("GO")
//     expect(trafficLight("yellow")).toEqual("Slow or Go")
//     expect(trafficLight("red")).toEqual("Stop")
//     expect(trafficLight(true)).toEqual("Something went wrong, perhaps try a color")
//   })
// })
//
// const trafficLight = (color) => {
//   if(color === "green"){
//     return "GO"
//   } else if(color === "yellow"){
//     return "Slow or Go"
//   }else if (color === "red"){
//     return "Stop"
//   } else{
//     return "Something went wrong, perhaps try a color"
//   }
// }
//
//


//Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired. Write the function that will make the test pass.

describe("coffee1", () => {
  test("It takes in an argument of tiredness and returns if coffee is necessary", () => {
    expect(coffee1("Tired")).toEqual("Drink Coffee")
    expect(coffee1("Not Tired")).toEqual("Keep Working")
  })
})



const coffee1 = (energy) => {
  if(energy === "Tired"){
    return "Drink Coffee"
  } else if(energy === "Not Tired"){
    return "Keep Working"
  }
}


//Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed. Write the function that will make the test pass.

describe("stressing", () => {
  test("it takes the argument of being stressed and returns that you should relax", () => {
    expect(stressing("stressed")).toEqual("Take a breath")
    expect(stressing("relaxed")).toEqual("Keep on keeping on")
  }
)
}
)


const stressing = (energy) => {
  if(energy === "stressed"){
    return "Take a breath"
  } else if(energy === "relaxed"){
    return "Keep on keeping on"
  }
}

// Write the test for a function that returns "in budget" if a price is lower than $300. Write the function that will make the test pass.


describe("budget", () =>{
  test("if an item is in our budget of $300", () => {
    // need to know if item is in the budget and what it equals too
    // EXPECTING IS        NOT DEFINED
  var over = 301
  var under = 280
  var onPoint = 300
    expect(budget(onPoint)).toEqual("Bought it")
    // need what is over budget,
    // EXPECTING IS       NOT DEFINED
    expect(budget(over)).toEqual("naw, go home")
    // need to add when we have it right on the 300
    expect(budget(under)).toEqual("Bought it")
  })
})
const budget = (money) => {
  if (money <= 300){
    return "Bought it"
  }else if (money > 300) {
      return "naw, go home"
    }
  }


// Write the test for a function called Rick that returns "Morty". Write the function that will make the test pass.

describe("rick", () =>{
  test("rick returns morty back home", () =>{
    expect(rick()).toEqual("morty is home")
  })
})

const rick = () =>{
  return "morty is home"
}
