// array

const myArr = [0, 1, 2, 3, 4, 5]
const names = ["neeru", "gangarh"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

// Array methods

myArr.push(6) //add new elements
myArr.push(7)
myArr.pop() //last element of the array delete

myArr.unshift(9)  //insert new elements at the beginning of the array
myArr.shift()     // deletes the first element

console.log(myArr.includes(9)); //search for a element
console.log(myArr.indexOf(3));

const newArr = myArr.join()   //add elements into a string

console.log(myArr);
console.log( newArr);


// slice, splice


//slice: nooriginal array modify
//splice: original array manipulate 


console.log("Before ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("After ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("Splice ", myArr);
console.log(myn2);
