
if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
}

//console.log(a); //Runtime Error --> ReferenceError: a is not defined because it is declared inside if block and scope of the variable is within that block.
//conosole.log(b); //Runtime Error --> ReferenceError: a is not defined because it is declared inside if block and scope of the variable is within that block.
console.log(c); // 30 --> This is why 'var' is not recommended to use because it has issue with block scope 

/* Global and local Scope 
- If 'let' or 'const' varaibles which is declared inside any block it will have the scope of that block only this is called local scope and it cannot be used outside of that block. 
- If 'let' or 'const' varaibles which is declared outside of block it will have the scope of entire file is called Global scope and it can be used inside of any block.

*/

const name = 'Dhanjeet'; // This is Global variables it has global scope
let phoneNumber = 7418520963;  //Same Global scope variables 

if (true) {
    let rank = 4; //Local Scope variable
    console.log(name);
    console.log(phoneNumber);
    console.log(rank);
}
