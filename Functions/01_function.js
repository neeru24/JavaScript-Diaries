function sayMyName(){
    console.log("N");
    console.log("E");
    console.log("E");
    console.log("R");
    console.log("U");
}

sayMyName()

function addTwoNumbers(number1, number2){

    console.log(number1 + number2);
}

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

console.log("Result: ", result);


function loginUserMessage(username = "Anonymous"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Neeru"))