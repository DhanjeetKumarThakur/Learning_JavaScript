//For better understanding console the below code in dev tool --> console tab you will see the ouput something 
//console.log(String.prototype);
//Output: You will see an entire method associated with String class ---> This is String class prototype
//There is something really interesting here if you notice at the bottom you wll see another prototype that is of Object class
//And if you trace again you will see at the end __proto__ with value null


const p1 = {
    xp1 : 'I am inside p1'
}

const p2 = {
    xp2: 'I am inside p2',
    __proto__: p1 
}

const p3 = {
    xp3: 'I am inside p3',
    __proto__ : p2
}

//Now can we access the p1 property ? yes we can
// console.log(p3.__proto__.xp1); //Output: I am inside p1
// console.log(p3.__proto__); //Output :  { xp2: 'I am inside p2 }
// console.log(p3.__proto__.__proto__) //Output: { xp1: 'I am inside p1 } ---> Here we just printed the parent chain proto


class Student {

    constructor() {
        this.name = 'Dhanjeet'
    }

    getName() {
        return this.name;
    }
}

const s1 = new Student();
//For better understanding if we console the below code in dev tool --> console tab you will see the ouput something 
console.log(s1.__proto__); //Output: {getName: getName(), [[prototype]]: Object }

/*
 conclusion : s1.__proto__ == Student.prototype 
*/

/*
    Q) What is difference between __proto__ and Prototype ? 
    Ans: Object's __proto__ points towards base class prototype 
*/

/*
 All Wrapper classes prototype is Object and Object prototype is null
 String.prototype will be pointing to Object.prototype and now Object.__proto__ = null 
 Number.prototype will be pointing to Object.prototype and now Object.__proto__ = null 
 Boolean.prototype will be pointing to Object.prototype and now Object.__proto__ = null 


 On that Note this is why we say eveything in javascript is Object.
*/

console.log(s1 instanceof Student); //Output : true
//console.log(p2 instanceof p1);  // TypeError: Right-hand side of 'instanceOf' is not callable
//console.log(p3 instanceof p1);  // TypeError: Right-hand side of 'instanceOf' is not callable
//Because instanceOf is to check whether the object is of class.

console.log(Number instanceof Object); //Output: true
console.log(String instanceof Object); //Output: true
console.log(Boolean instanceof Object); //Output: true
console.log(null instanceof Object); //Output: false.


