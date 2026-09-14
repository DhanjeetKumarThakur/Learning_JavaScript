const o1 = {
    fname: 'Dhanjeet',
    lname: 'Thakur',
    getFullName() {
        return `${this.fname} ${this.lname}`;
    }
}

const o2 = { ...o1 } //spread operator --> extracted the elements from object

//console.log("o2 ", o2);
//That is normal right, to extract a value and remember spread is a shallow copy of object
//and in nested level they still share the same object 


const p1 = {
    actor_firstName: 'Ajay',
    actor_lastName: 'Devgan',
    getMovie() {
        return 'Drishyam 2'
    }
}

const p2 = Object.create(p1);

// console.log("P2 ", p2); 
/*
Output : 
P2 {}  --> Empty object 
*/

//But......
// console.log(p2.actor_firstName); //Output : Ajay
// console.log(p2.getMovie()); //Output: Drishyam 3

//How ??
/*
This is prototype in javascript

p1 = {
    actor_firstName: 'Ajay',
    actor_lastName: 'Devgan'
}
In every object there is one more key '__proto__' which is to inherit it's parent property
For better understanding if we console the p1 object in dev tool --> console tab you will see the ouput something 

p1
{                                               {              
    actor_firstName: 'Ajay',                         actor_firstName: 'Ajay',
    actor_lastName: 'Devgan',      ==>               actor_lastName: 'Devgan',
    [[prototype]] : Object                           __proto__ : {}
}                                                }


So when we creted an p2 object following syntax : const p2 = Object.create(p1);
We actually created an empty object with setting the _proto__ value as p1 

p2 = {
    __proto__ : p1 
}

*/

//Let's try to change the values of p1 using p2

p2.__proto__.actor_firstName = 'Akshaye'
p2.__proto__.actor_lastName = 'Khana'

// console.log(p1.actor_firstName);
/*
Isn't it looks like inheritance ?.... 
Actually it is a Inheritance in javascript.
*/


//We are saying the key is __proto__ but when we created p2 we have used Object.create(p1)
//but to update those parent property we are using __proto__
//Then can't we directly use the same  key and set the value as p1 ?
//Yes we can

const p3 = {
    __proto__ : p1 
}

// console.log(p3.getMovie()); //Output : Drishyam 2

//--------------------------------------------------------------------------------------------------


let fname = 'Sonu';
console.log(fname); //Output : Sonu
console.log(fname.at(2)); //Output : n --> because at index 2 it is 'n' but did i created this function/method ? No right
//So how we are getting this method ??


//For better understanding if we console the below code in dev tool --> console tab you will see the ouput something 
console.log(fname.__proto__);  //Output: String { at: at(), anchor: anchor(), charAt: charAt().....}

/*
So actually when we create a variable of primitive type --> String, Number, Boolean 
In javascript, Actually those are the object of it's wrapper class ---> String, Number, Boolean 
And that's why we can access those class methods so to summaries when we create 

let fname = 'Sonu'  ----> let fname = new String('Sonu') 
fname.__proto__ is pointing to String class
*/

//For better understanding console the below code in dev tool --> console tab you will see the ouput something 
console.log(String.prototype);
//Output: You will see an entire method associated with String class ---> This is String class prototype
//There is something really interesting here if you notice at the bottom you wll see another prototype that is of Object class
//And if you trace again you will see at the end __proto__ with value null

//So to conclude `fname.__proto__ = String.prototype` --> So every functionality of String class will be available to it's objects

