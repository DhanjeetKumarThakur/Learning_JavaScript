const user_details = {
    name : "Dhanjeet",
    "full name" : "Dhanjeet Kumar Thakur",
    phone : 7417441774,
    email : "dhanjeet@google.com"
};

//console.log(user_details.name); // you can access via Object.key it is the best practise.
//console.log(user_details["full name"]); // But you can also use Object["key"] bze behind the scene, in object every key is store as string in JS.

//console.log(user_details["email"]);


// How do you create a symbol in js
const mySmb = Symbol("key1");
//console.log(typeof mySmb); //Output: symbol


// How to use symbol has key in object ?
const userDetails = {
    name : "Dhanjeet",
    "full name" : "Dhanjeet Kumar Thakur",
    phone : 7417441774,
    email : "dhanjeet@google.com",
    [mySmb] : "key1"
};

//console.log(userDetails[mySmb]);
//console.log(typeof userDetails[mySmb]);

//console.log(userDetails);
/*

{
  name: 'Dhanjeet',
  'full name': 'Dhanjeet Kumar Thakur',
  phone: 7417441774,
  email: 'dhanjeet@google.com',
  [Symbol(key1)]: 'key1'
}
*/

//If you want to restrict the object update --> you don't want to update anything after the object declaration then you could do that using Object.freeze(objName)

//Example
Object.freeze(userDetails);

userDetails["email"] = "dhanjeet@chatgpt.com";
//console.log(userDetails["email"]); //though it didn't thrown error at compile time but you could see the update didn't happen because object is freeze 


//You can alway value funciton as value in Object 
//Let's see that and here we will use user_details object has userDetails is freeze 
user_details.greeting = function() {
    console.log("Hello JS User");
}

console.log(user_details.greeting); //Output: [Function (anonymous)] --> returning Function object
console.log(user_details.greeting()); //Output: undefined --> because greeting function displaying a console and here we calling the fucntion inside console ===> console inside a console ===>> undefined

user_details.greeting(); // Output: Hello JS User 

user_details.greetingTwo = function() {
    console.log(`Hello ${this.name}`); // we are using 'this' keyword to use the key of same object.
}

user_details.greetingTwo();