//Loops practice




// for (let index = 0; index < 20; index++) {
//     console.log(index);   
// }


// for (let index = 0; index < 20; index++) {
//     console.log(index * 3);   
// }

// var array = [4, 57, -9, 20, 67]

// for (let index = 0; index < array.length; index++) {
//     if(index % 2 == 0){
//         console.log(index)
//     } else {
//         console.log("Odd")
//     } 
// }

// var array = [3, 57, -9, 20, 67]
// var largest = 0;

//     for (i=0; i<array.length; i++) {
//         largest = array[i] % 2
//         console.log(largest);
//     }


// var array = [3, 57, -9, 20, 67]
// var largest = 0;
//    for (i=0; i<array.length; i++) {   
//        if (array[i]>largest) {        
//            largest = array[i];
//         }
//     }
//  console.log(largest);



// var array = [3, 57, -9, 20, 66]
// var remainder = 0;

//     for (i=0; i<array.length; i++) {
//         remainder = array[i] % 2
//         console.log(remainder);
//     }


var myString = "learn student"
var count = 0;

for (let index = 0; index < myString.length; index++) {
    if(myString[index] == 'e'){
        count++
    }    
}

console.log(count);




// var array = [3, 57, -9, 20, 67];
// var largest = 0;
// for (let i = 0; i < array.length; i++) {

//     if (array[i] > largest) {
//         largest = array[i];
//    }
//   }
// console.log(largest);


// var array = [3, 57, -9, 20, 67];
// var smallest = 0;
// for (let i = 0; i < array.length; i++) {

//     if (array[i] < smallest) {
//         smallest = array[i];
//    }
//   }
// console.log(smallest);

var array = [3, 57, -9, 20, 67];
var remainder = 0;
for(let i = 0; i < array.length; i++){
    remainder = array[i] % 2 
        console.log(remainder)
    
}

