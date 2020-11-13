// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired. Write the function that will make the test pass.

// describe('needCoffee', () => {
// 	test("Takes in a string arguments and returns back either 'drink coffee' or 'keep working'", () => {
// 		expect(needCoffee('tired')).toEqual('drink coffee')
// 		expect(needCoffee('not tired')).toEqual('keep coding')
// 	})
// })
//
// const needCoffee = (string) => {
// 	if (string === 'tired') {
// 		return 'drink coffee'
// 	} else if (string === 'not tired') {
// 		return 'keep coding'
// 	} else {
// 		return 'something went wrong'
// 	}
// }

//****************************

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed. Write the function that will make the test pass.

// describe("areStressed", () => {
// 	test("string argument and returns back 'relax' or 'keep going'", () =>{
// 		expect(areStressed("yes")).toEqual("relax")
// 		expect(areStressed("no")).toEqual("keep going")
// 	})
// })
//
// const areStressed = (string) => {
// 	if (string === "yes"){
// 		return "relax"
// 	} else if (string === "no") {
// 		return "keep going"
// 	}else {
// 		return "something went wrong"
// 	}
// }


// Write the test for a function that returns "in budget" if a price is lower than $300. Write the function that will make the test pass.

// describe("budget", () => {
// 	test("accepts a number argument if number is below $300 will return 'in budget'otherwise return over budget", () => {
// 		expect(budget(30)).toEqual("in budget")
// 		expect(budget(500)).toEqual("over budget")
// 		expect(budget(350)).toEqual("over budget")
// 		expect(budget("hello")).toEqual("error")
// 	})
// })

// const budget = (num) => {
// 	if(num < 300){
// 		return "in budget"
// 	} else if(num > 300){
// 		return "over budget"
// 	} else {
// 		return "error"
// 	}
// }



// Write the test for a function that takes in two arguments(numbers) and returns the smaller number. Write the function that will make the test pass.

describe("smallNum", () => {
	test("take in two numbers and return the small number", () =>{
		expect(smallNum(20, 30)).toEqual(20)
		expect(smallNum(100, 30)).toEqual(30)
		expect(smallNum(20, 20)).toEqual("equal")
	})
})

const smallNum = (num1, num2) => {
	if(num1 < num2){
		return num1
	}else if (num1 == num2){
		return "equal"
	}else{
		return num2
	}
}

// Write the test for a function that takes in one argument(number) and returns whether the number is odd. Write the function that will make the test pass.

// Write the test for a function that takes in a fruit and returns yellow if the argument is banana, red if apple and purple if grape. Write the function that will make the test pass.

// Write the test for a function called Rick that returns "Morty". Write the function that will make the test pass.

// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen. Write the function that will make the test pass.

// Write the test for a function called oddOrEven that takes an number as an argument and logs whether the number is odd or even. Write the function that will make the test pass.

// Write the test for a function called doubler that takes an number and returns the result of the number multiplied by 2. Write the function that will make the test pass.

// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other. Write the function that will make the test pass.

// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5". Write the function that will make the test pass.

// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'. Write the function that will make the test pass.

