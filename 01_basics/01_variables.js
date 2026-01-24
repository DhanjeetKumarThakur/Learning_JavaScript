const accountId = 1234;
let accountEmail = 'dhanjeet@google.com';
var accountPwd = "12345";
accountCity = "Hyderabad";
let accountState; //variable declared but not defined so if we console this ==> output : undefined


//accountId = 4  // Not allowed
//TypeError: Assignment to constant variable
//console.log(accountId);

accountEmail = "sonu@google.com";
accountPwd = "password1";
accountCity = "Lucknow";

console.table([accountId, accountEmail, accountPwd, accountCity, accountState]);

/*
Notes: 
Prefer not to use 'var' because of issue in block and functional scope   

*/