// User login status and other variables
const isUserLoggedIn = true; // Indicates if the user is logged in
const temperature = 41; // Current temperature

// If statement to check temperature
// This demonstrates the use of if-else statements

if ( temperature === 40 ){ // Checks if temperature is exactly 40
    console.log("less than 50"); // Logs if condition is true
} else {
    console.log("temperature is greater than 50"); // Logs if condition is false
}


// Logging execution statement
console.log("Execute"); // This executes regardless of conditions

// Comparison operators used for various conditions: <, >, <=, >=, ==, !=, ===, !==

// Score variable and check
const score = 200; // User's score

// If statement to check score
// This demonstrates block scope with 'let'

if (score > 100) { 
    let power = "fly"; // Local variable within the if block
    console.log(`User power: ${power}`); // Logs the user's power
}

// Attempting to access 'power' outside its block scope will result in an error
// console.log(`User power: ${power}`); // Uncommenting this will cause a ReferenceError

// Balance variable
const balance = 1000; // User's balance

// Simple if statement with single-line execution
if (balance > 500) console.log("test"), console.log("test2"); // Logs both statements if true


// Detailed balance checks using if-else if-else
// This demonstrates multiple condition checks

if (balance < 500) {
    console.log("less than 500"); 
} else if (balance < 750) {
    console.log("less than 750"); 
} else if (balance < 900) {
    console.log("less than 900"); 
    console.log("greater than or equal to 900"); 
}


// User login status variables
const userLoggedIn = true; 
const debitCard = true; 
const loggedInFromGoogle = false; 
const loggedInFromEmail = true; 


// Logical AND operator used to check multiple conditions
if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy course"); // This will not execute as 2==3 is false
}

// Logical OR operator used to check if user is logged in from either Google or Email
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in"); // Logs if at least one condition is true
}
