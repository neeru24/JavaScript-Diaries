// Immediately Invoked Function Expressions (IIFE)

// named IIFE
(function database(){
    console.log(`DB CONNECTED to the server`);
})();


//Unnamed IIFE 
( () => {
    console.log(`DB CONNECTED TWO`);
} )();


//With parameters 
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('neeru')
