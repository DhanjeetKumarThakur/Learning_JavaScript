function one() {
    const name = 'Dhanjeet'; //Local variable function block scope, it will act has Global variable inside this function block.

    function two() {
        const email = 'dhanjeet@google.com';
        console.log(name); //Yes it is accessable bze for this function name is a Global variable right.
    }
    
    //console.log(email); // Runtime Error has excepted --> ReferenceError: email is not defined. 
    two();
}
one();


// +++++++++ Interesting Topic +++++++++++++

function addOne(num) {
    return  num + 1;
} 

//What is the above code ? --> It is a simple function declared using function key. To execute this we need to call it. eg: addOne(4); --> output : 5 
console.log(addOne(5));


const addTwo = function(num) {
    return num + 2; 
};
//Note : Varaibles are very strong it can hold anything from values to object and even a function.
// what is the above code? --> there is a variable which holds the defination of function, to execute this we need to call it by using variableName followed by paranthesis. eg: addTwo(4) --> Output: 6
//The above function is also called has function expression

console.log(addTwo(4));


// Let's me show you one more important thing will not distrub the above code instead we will create new one Yehhhhh

// Can we call and excute a function even before its declaration ? --> let's try and see 

hello('dhanjeet'); //It worked --> Output : Hello dhanjeet

function hello(name) {
    console.log(`Hello ${name}`);
}

//goodMorning(); // Runtime Error -->ReferenceError: Cannot access 'goodMorning' before initialization 
//Why ?? --> Because the function was different here the variable goodMorning holds the defination it is not a normal function. So it is always depends on how you declare a function.

// To understand in depth we should know something called hosting. We will learn in sometime Okay.

const goodMorning = function() {
    console.log(`Good Morning!!`);
}; 