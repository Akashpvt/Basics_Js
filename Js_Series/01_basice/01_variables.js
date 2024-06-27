const accountId = 12345
let accountEmail = "Ak@.com"
var accountPasswaord = "1243"
accountCity = "Bihar"

// accountId = 2 // not allowed

accountEmail = "apx@.com"
accountPasswaord = "12345"
accountCity ="Delhi"

console.log(accountId);

/*
prefer not to use var
bacause of issue in block scope and functional scope
*/

console.table([accountEmail, accountPasswaord, accountCity])
