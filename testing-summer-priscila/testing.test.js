// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired. Write the function that will make the test pass.

describe("shouldIDrinkCoffee" , () => {
    test("return a string that says whether you should drink coffee" , () => {
        expect(shouldIDrinkCoffee("Not tired")).toEqual("Keep working")
        expect(shouldIDrinkCoffee("tired")).toEqual("drink coffee")
        expect(shouldIDrinkCoffee(true)).toEqual("something went wrong")
        
    })
})


const shouldIDrinkCoffee = (energy) => {
    if (energy === "Not tired") {
        return "Keep working"
} else if (energy === "tired") {
    return "drink coffee"
} else (energy === true) 
    return "something went wrong"
}
