const accountId = 1553
let accountEmail = "neeru@google.com"
var accountPassword = "12345"
accountCity = "Ludhiana"
let accountState;

// accountId = 2 // not allowed


accountEmail = "ng@ng.com"
accountPassword = "21212121"
accountCity = "LDH"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])