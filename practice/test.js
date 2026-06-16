//console.log("Hello World");

if(true) {
    const a = 12;
    let b = 23;
//    console.log(typeof a === "number");
}
//console.log(a); //Error


function calculateDiscount(price, quantity, discount) {
    const isNumber = (typeof price === typeof quantity && typeof quantity == typeof discount && typeof price === 'number'); 

    if(isNumber) {
        let total = price * quantity; 
        let value =  (total * discount)/100;
        return (total - value);
    } else {
        return "Invalid Input";
    }
}

//console.log(calculateDiscount(100,'5',10));

//same above code in ES6 
const calculateTotal = (price, quantity, discount) => {
    const isNumber = (typeof price === typeof quantity && typeof quantity == typeof discount && typeof price === 'number'); 

    if(isNumber) {
        let total = price * quantity; 
        let value =  (total * discount)/100;
        return (total - value);
    } else {
        return "Invalid Input";
    }    
}

//console.log(calculateTotal(100, 5, 10));

/*
Write a function that:

Converts all values to numbers.
Calculates the total price.
Returns the average price.
*/
const prices = ["100", "200", "50", "150"];

function eeCommerce(prices) {
    const convertToNumber = (value) => Number(value);
    const totalPrice = prices.map((e) => convertToNumber(e)).reduce((a,b) => (a+b), 0);
    console.log(totalPrice);
    const averagePrice = totalPrice/prices.length;
    console.log(averagePrice);

    return {'total': totalPrice, 'average': averagePrice};
}

//console.log(eeCommerce(prices));

/* Day 2*/
const numbers = [1, 2, 3, 4];

const result = numbers.map((num) =>  num * num);

//console.log(result);

function createUser(name) {
    return function(task) {
        if(task === 'login') {
            console.log(`${name} performed login`);
        } else if (task === 'logout') {
            console.log(`${name} performed logout`);
        }
    }
}

const user = createUser("Dhanjeet");

user("login");
// "Dhanjeet performed login"

user("logout");
// "Dhanjeet performed logout"

const multiply = function (a,b) {
    return a*b;
}

const mult = (a,b) => (a*b);

console.log(multiply(2,3));
console.log(mult(2,4));