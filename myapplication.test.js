












// describe("greeter", () => {
//     test("takes in an argument and returns back hello, name",() => {
//             expect(greeter("Andee")).toEqual("Hello Andee")
//     })
// })

// const greeter = (name) => {
//     return `Hello ${name}`
// }



// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired. Write the function that will make the test pass.

describe("mood", () => {
    test("testing to see if you are tired or not and drink or not", () =>{
            expect(mood("tired")).toEqual("drink coffee")
            expect(mood("not tired")).toEqual("keep working")
            expect(mood("anything")).toEqual("something is not working")
    })
})

const mood = (muud) => {
    if(muud === "tired") {
       return "drink coffee" 
    } else if (muud === "not tired"){ 
    return "keep working"
    } else {
        return "something is not working"
    }
}

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed. Write the function that will make the test pass.

describe("feel", () => {
    test("testing to see if you are tired or not and drink or not", () =>{
            expect(feel("stressed")).toEqual("relax")
            expect(feel("chill")).toEqual("keep going")
            expect(feel("anything")).toEqual("something is not working")
    })
})

const feel = (muud) => {
    if(muud === "stressed") {
       return "relax" 
    } else if (muud === "chill"){ 
    return "keep going"
    } else {
        return "something is not working"
    }
}
