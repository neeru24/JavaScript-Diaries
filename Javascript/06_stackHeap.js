// Stack -> Primitive 
// Heap -> Non - Primitive 

let name =  "neeru"

let anothername = name
anothername = "fateh" 

console.log(name);
console.log(anothername); // why the change is not done?? COPY IS MADE AND CHANGES ARE DONE IN THAT NOT IN THE ORIGINAL VARIABLE


//Heap

let userOne = {
    id: 34343,
    name: "abc"
}

let usertwo = userOne

usertwo.id = 23232

console.log(userOne);
console.log(usertwo);

console.log("Note both are changed");

console.log(userOne.id);
console.log(usertwo.id);








