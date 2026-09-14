## JavaScript Prototype
In JavaScript, a prototype is a <mark>**built-in mechanism that allows objects to inherit features, properties, and methods from one another.**</mark> Unlike class-based languages (like Java or C++), JavaScript uses a prototype-based inheritance mode

Every time you create an object or function in JavaScript, the engine automatically attaches hidden properties that handle this background link

### `prototype` vs `__proto__`
1. **`__proto__` (The Instance Link):** Every object has a `__proto__` property (conceptually known as [[Prototype]]). It points directly to the prototype object it inherits from.
2. **`prototype` (The Constructor Blueprint):** Only functions (and classes) have a .prototype property. This is not the prototype of the function itself; it is the blueprint that will become the __proto__ for any new objects created using that function with the new keyword.


```js
const p1 = {
    actor_firstName: 'Ajay',
    actor_lastName: 'Devgan',
    getMovie() {
        return 'Drishyam 2'
    }
}

const p2 = Object.create(p1);

console.log("P2 ", p2); 
/*
Output : 
P2 {}  --> Empty object 
*/

//But......
console.log(p2.actor_firstName); //Output : Ajay
console.log(p2.getMovie()); //Output: Drishyam 2
```

