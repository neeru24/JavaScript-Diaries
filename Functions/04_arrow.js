const user = {
    username: "neeru",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
 
user.welcomeMessage()
user.username = "sanchit"
user.welcomeMessage()

console.log(this);


function myFun(){
    let username = "neeru"
    console.log(this.username);
}

myFun()



const newFun = function () {
    let username = "neeru"
    console.log(this.username);
}

const myFunc =  () => {
    let username = "neeru"
    console.log(this);
}

myFunc()



// ARROW FUNCTIONS 


const addTwo = (num1, num2) => {
    return num1 + num2
}

const addTtwo = (num1, num2) =>  num1 + num2

// const addtwo = (num1, num2) => ( num1 + num2 )

// const adddTwo = (num1, num2) => ({username: "neeru"})



console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// // myArray.forEach()