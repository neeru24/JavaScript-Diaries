const names = ["neeru", "dimp", "grace"]
const cartoon = ["shinchan", "doremon", "nobita"]

//push
names.push(cartoon) 

console.log(names);
console.log(names[3][1]);


//concat
const allcartoon = names.concat(cartoon)
console.log(allcartoon);


//spread
const all_new_heros = [...names, ...cartoon]
console.log(all_new_heros);


//flat
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


//isArray
console.log(Array.isArray("neeru"))


//Array.from
console.log(Array.from("neeru"))
console.log(Array.from({name: "neeru"}))       // []


//Array.of
let a = 100
let b = 200
let c = 300

console.log(Array.of(a, b, c));