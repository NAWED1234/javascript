const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

//accountId = 2 // not allowed

accountEmail = "hizbu@google.com"
accountPassword = "123456"
accountCity = "delhi"

console.log(accountId);

/*
prefered not be use to variable
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
