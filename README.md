# Learning_Javascript
A code repo to practice JavaScript using the codespaces. 

## To see the list of unclosed or running codespaces instances
- [https://github.com/codespaces](https://github.com/codespaces)

## 📚 Table of Contents

- [Variables](#variables)
- [The Golden Rules](#the-golden-rules)
- [Arrays](#arrays)
- [Spread vs Rest Operator](#spread-vs-rest-operator)
- [Destructuring](#destructuring)
- [IIFE](#iife)
- [Callback Functions](#callback-functions)
- [Common Questions on Callback Function, Higher Order Function ](#common-question)
- [Higher Order Functions](#high-order-functions)
- [Closure](#closure)
- [Hoisting in JavaScript](#hoisting-in-javascript)
- [JavaScript Errors](#javascript-errors---quick-notes)
- [Interview Tip](#interview-tip)
- [call, apply & bind](#call-apply-and-bind)
- [Prototype, Inheritance in Java](#javascript-prototype)
- [Interview Questions](#interview-questions)
- [Other Important Links](#other-important-links)

## Variables
- In Javascript variables are declared in three ways ie. `let`, `const` & `var`. 
```javascript
const accountId = 1234;
let accountEmail = 'dhanjeet@google.com';
var accountPwd = "12345";
accountCity = "Hyderabad";
let accountState; //variable declared but not defined so if we console this ==> output : undefined


//accountId = 4  // Not allowed because const variables values cannot be changed after initialization. 
//TypeError: Assignment to constant variable
//console.log(accountId)

if(true) {
    var a = 12;
}
console.log(a); //Output: 12


if(true) {
    const a = 12;
    let b = 23;
}
console.log(a);  //Error
```
**Note:** Prefer not to use var because of issue in block and functional scope

## The Golden Rules

💡 Rule #1
- `+` with a string → string concatenation eg: "5"+2 //`output : "52"`

💡 Rule #2
- All other math operators → numeric conversion  
- Example1: `"5"-2 //output : 3` here the string will be converted to numeric i.e "5" becomes 5. `"5"-2 ---> 5-2` output: `3`
- Example2: `"5"*2 output: 10` 

conversion

💡 Rule #3
Only 7 falsy values (memorize them);
- Those are has below
```javascript
false
0
-0
0n
""
null
undefined
NaN
```
- Everything else is truly values
```
"0"       // true
"false"   // true
[]        // true
{}        // true
function(){} // true
```
- Example 
```
if ("") console.log("no");   // ❌ if check fails
if ([]) console.log("yes");  // ✅if check pass
```
## Arrays
- JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
- A `Shallow copy` of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made.<mark> ***As a result, when you change either the source or the copy, you may also cause the other object to change too.*** </mark>
That behavior contrasts with the behavior of a deep copy, in which the source and copy are completely independent

- A `Deep copy` is contrasts (complete opposite) to `Shallow copy`. A `Deep copy` of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. <mark>***As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too.***</mark>

In JavaScript, **most built-in copy operations create shallow copies**. Deep copying requires special functions or techniques.

## Shallow Copy Examples

These copy only the first level. Nested objects or arrays are still shared.

### 1. Spread operator (`...`)

```javascript
const original = {
  name: "John",
  address: {
    city: "New York"
  }
};

const copy = { ...original };

copy.name = "Mike";
copy.address.city = "Los Angeles";

console.log(original.name);          // John
console.log(original.address.city);  // Los Angeles (changed!)
```

## Deep Copy Examples

These create completely independent copies.

### 1. `structuredClone()` (Recommended)

Available in modern browsers and Node.js.

```javascript
const original = {
  name: "John",
  address: {
    city: "New York"
  }
};

const copy = structuredClone(original);

copy.address.city = "Chicago";

console.log(original.address.city); // New York
```

**Pros**

* Supports nested objects
* Supports arrays, Maps, Sets, Dates, etc.
* Official modern API

---

### 2. `JSON.parse(JSON.stringify())`

```javascript
const original = {
  name: "John",
  address: {
    city: "New York"
  }
};

const copy = JSON.parse(JSON.stringify(original));

copy.address.city = "Chicago";

console.log(original.address.city); // New York
```

**Limitations**

* Loses functions
* Loses `undefined`
* Converts `Date` objects to strings
* Doesn't support `Map`, `Set`, `BigInt`, etc.
---

### Rule of thumb

* Use **spread (`...`)** or **`Object.assign()`** for simple, one-level copies.
* Use **`structuredClone()`** when you need a true deep copy of supported JavaScript values.
* Use **`_.cloneDeep()`** if you're working with more complex objects or already using Lodash.

- For more details notes on Shallow and Deep Copy click on 👉 [Shallow vs Deepy Copy Notes](/02_basics/MyNotes.md)

## Spread vs Rest Operator
### Difference between Spread(...) Operator and Rest(...) Operator ? And when to use what ?
- Great question—this trips up a lot of people at first because spread and rest use the same syntax (...) but do opposite jobs depending on where you use them.

Let’s break it down cleanly and intuitively.

### 1️⃣ Spread Operator 
👉 Used when you want to expand an array, object, or iterable into individual elements. 
- Example : Arrays
```js
const nums = [1, 2, 3];
const copy = [...nums];

console.log(copy); // [1, 2, 3]
```
Without spread, you’d get a reference copy:
```js
const copy = nums; // same memory!
```
### Combine arrays
```js
const a = [1, 2];
const b = [3, 4];

const combined = [...a, ...b];
console.log(combined); // [1, 2, 3, 4]
```
### Objects
```js
const user = { name: "Alex", age: 25 };

const updatedUser = { ...user, age: 26 };

console.log(updatedUser);
```
Output: 
```js
{name: "Alex", age: 26}
```
This is huge in React and modern JS for immutability.

### 2️⃣ Rest Operator
👉 Used when you want to collect multiple values into a single array or object.

In function parameters
```js
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

sum(1, 2, 3, 4); // 10
```
Here: 
- `numbers` becomes `[1, 2, 3, 4]`

With Other Parameters
```
function greet(first, ...others) {
  console.log(first);
  console.log(others);
}

greet("Hi", "Alice", "Bob", "Charlie");
```
Output : 
```
Hi
["Alice", "Bob", "Charlie"]
```
**Object destructing**
```js
const user = { name: "Sam", age: 30, city: "NY" };

const { name, ...rest } = user;

console.log(name); // "Sam"
console.log(rest); // { age: 30, city: "NY" }
```

## Destructuring
**Destructuring** lets you **take values out of arrays or objects and store them in variables easily.**

### Example 1: Object destructuring
```js
const user = { name: "Alex", age: 25 };

const { name, age } = user;

console.log(name); // Alex
console.log(age);  // 25
```
👉 Instead of user.name, you directly get name.
### Example 2: Array destructuring
```js
const colors = ["red", "blue"];

const [first, second] = colors;

console.log(first);  // red
console.log(second); // blue
```
In one line:

Destructuring = unpacking values from arrays or objects into variables 👍

You can also rename a object key while destructuring 
```JavaScript
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

//const {courseInstructor} = course --> If you feel like 'courseInstructor' is very length key then you can give your own key name while destructing the object
const {courseInstructor: instructor} = course  // here 'instructor' is your own custom variable or key 

// console.log(courseInstructor); //Instead this we can use our custom variable --> 'instructor'
console.log(instructor);
```

Here
- We are not giving any new key instead we are giving new variable name for the value of that Key.
- **The original key stays the same in the object**
- The new name (`instructor`) is just a custom variable you choose.
- After destructuring, you must use the new variable name, not the original key.


## IIFE
 Why we need **IIFE (Immediately Invoke Function Expressions)** ?

- ***An IIFE (Immediately Invoked Function Expression) is used to run a function right away and keep variables private.***

#### Why we need it (simple):

- ✅ It avoids polluting the global scope

- ✅ Variables inside it can’t be accessed from outside

- ✅ Useful for one-time setup code. 
### Example :
```JavaScript
(function () {
  let secret = "hidden";
  console.log("Runs immediately!");
})();
```

## Callback Functions
### what is callback function?
A function that is passed as an argument to another function and is called (executed) later by that function.

It can be anonymous, but it doesn’t have to be.
```js
const arr = [5, 1, 7, 9, 6]

arr.forEach(function(item) {
  console.log(item);
});
```
Here, the function is the callback because forEach calls it for each element.

✅ Key points:

- Passed as an argument
- Executed later
- Can be named or anonymous

Yes! Here’s a simple example with a named callback function 👇
```js
function printValue(item) {
  console.log(item);
}

let arr = [1, 2, 3];

arr.forEach(printValue);
```
- 🔹 `printValue` is a named function
- 🔹 It’s passed to forEach as a callback
- 🔹 forEach calls it for each array element

So even though the function has a name, it’s still a callback function because it’s passed into another function 👍

## Common Question
### Why callback function is called as **"Callback function"** ? Why not just **"parameter function"**?

Because the important part is timing.  

Callback = "Don't run now. Run me back later when X happens.

So: **Callback = a function that gets called back by another function after some work is done.**

"Other patterns like this: Event listeners, setTimeout, Promise.then, array.forEach

The name comes from the pattern: **"Call me back when you're done".** 

### 3 Common Cases:
**1.Last line - after work is done.**
```javascript
function fetchData(url, callback) {
  const data = getDataFromAPI(url) // step 1
  process(data) // step 2
  callback(data) // step 3 - last line
}
```
Here yes, callback runs at the end.

**2.Multiple times - in the middle**
```javascript
function forEach(arr, callback) {
  for(let i = 0; i < arr.length; i++) {
    callback(arr[i]) // <-- called every loop, not last line
  }
  // some cleanup here
}
```
forEach, map, filter all do this.

**3.Maybe never called**
```javascript
function validate(input, onSuccess, onError) {
  if(input.valid) {
    onSuccess() // called
  } else {
    onError() // called instead
  }
}
```
Or in error handling, it might not run at all.

**4.Called first**
```javascript
function setup(callback) {
  callback() // run immediately
  console.log("setup done")
}
```

## **The real meaning of "callback"**

**"Callback" ≠ "last line"**

**"Callback" = "I will call this function back for you when I need to"**

___The HOF controls when and how many times it calls back.___

**Rule of thumb:**

- If it's async: usually at the end, after data comes back
- If it's sync like map/forEach: in the middle, many times

## High Order Functions
A higher-order function is a function that takes another function as a parameter or returns a function.

Example (takes a function):
```js
arr.forEach(printValue);
```
Here, `forEach` is a higher-order function because it takes printValue as an argument.

Example (returns a function):
```js
function multiply(factor) {
  return function (num) {
    return num * factor;
  };
}
```
Short version to remember:
#### **Higher-order function = uses functions as values**

## Closure 
A closure is a feature in JavaScript where an inner function retains access to the variables and scope of its outer function, even after that outer function has finished executing. 

> In simple terms **Closure**, the inner function retains the variables even after the outer function is executed.

Example Code: 
```js
function counter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

const c1 = counter();

console.log(c1());
console.log(c1());
console.log(c1());

Output:
1
2
3
```
**Why isn't count reset to 0?**

Because **c1 still holds the function()** in it we are using `count` variable (i.e count++ post increment) because of closure the the function is still have the access to count variable.

When counter() finishes, JavaScript would normally discard its local variables. However, because the returned function still references count, JavaScript keeps that lexical environment alive.

So count remains available as long as the returned function exists.

> A closure is a function together with the lexical environment in which it was created.
The phrase "lexical environment" may sound intimidating now, but it simply means:

> The function remembers the variables that were in scope when it was created.

That's why this works:
```js
function outer() {
    let x = 10;

    return function () {
        console.log(x);
    };
}

Output:
10
```
For more examples to understand Higher Order, Callback and Closure click on 👉[HOF, CBF & Closure](03_basics/HOF_CBF_Notes.md)
## Hoisting in Javascript.

**Hoisting** is the behavior where JavaScript processes declarations before executing code.

When JavaScript runs code, it creates an **Execution Context**. Every execution context has two phases:

### 1. Creation Phase (Memory Creation Phase)

JavaScript scans the code and allocates memory for variables and functions.

* `var` variables are initialized with `undefined`.
* Function declarations are stored completely in memory.
* `let` and `const` are also hoisted, but they remain **uninitialized** until their declaration is reached (Temporal Dead Zone).

### 2. Execution Phase

JavaScript executes the code **line by line**.

* Variable assignments happen when execution reaches those lines.
* Function calls are executed.
* When a function is called, a new Function Execution Context is created, executed, and then removed from the call stack after completion.

### Key Points

* Hoisting is about **declarations**, not assignments.
* `var` → hoisted and initialized to `undefined`.
* Function declarations → fully hoisted.
* `let` and `const` → hoisted but inaccessible before declaration (TDZ).
* Assignments happen during the execution phase, not during the creation phase.

Think: 

```JavaScript
Global Execution Context
│
├── Creation Phase
│   ├── var -> undefined
│   ├── function declaration -> full definition
│   └── let/const -> uninitialized (TDZ)
│
└── Execution Phase
    ├── execute code line by line
    ├── assign values
    ├── execute function calls
    └── create new execution contexts for functions
```

A quick interview-ready definition could be:

> Hoisting is JavaScript's behavior of processing variable and function declarations during the Creation Phase of an Execution Context before the code is executed. var is initialized to undefined, function declarations are fully available, and let/const remain uninitialized until their declaration is reached (Temporal Dead Zone).

> **TDZ (Temporal Dead Zone)** is the period between when a let or const variable is hoisted and when its declaration is executed.
> During this period, the variable exists, but it cannot be accessed. Attempting to do so throws a ReferenceError.

Example Code: 
```javascript
console.log(name); // ReferenceError

let name = "Hitesh";
```
For more examples to understand Hoisting click on 👉[Hoisting Notes](01_basics/MyNotes.md)

For more details notes on Shallow and Deep Copy refere 

## JavaScript Errors - Quick Notes

## 1. SyntaxError

**Definition:**
Occurs when the JavaScript code has invalid syntax. The JavaScript engine cannot parse the code, so execution never starts.

**Example 1: Missing parenthesis**

```javascript
if (true {
    console.log("Hello");
}
```

**Error:**

```
SyntaxError: Unexpected token '{'
```

**Example 2: Invalid variable declaration**

```javascript
const = 10;
```

**Error:**

```
SyntaxError: Unexpected token '='
```

**Java Analogy:**
Equivalent to a compile-time syntax error.

---

## 2. ReferenceError

**Definition:**
Occurs when trying to access a variable that has not been declared.

**Example 1**

```javascript
console.log(username);
```

**Error:**

```
ReferenceError: username is not defined
```

**Example 2**

```javascript
function greet() {
    let name = "John";
}

console.log(name);
```

**Error:**

```
ReferenceError: name is not defined
```

**Java Analogy:**
Similar to using an undeclared variable (Java catches this during compilation).

---

## 3. TypeError ⭐ (Most Common)

**Definition:**
Occurs when an operation is performed on a value of an inappropriate type.

### Example 1: Accessing property of null

```javascript
const user = null;

console.log(user.name);
```

**Error:**

```
TypeError: Cannot read properties of null
```

---

### Example 2: Calling a non-function

```javascript
const age = 25;

age();
```

**Error:**

```
TypeError: age is not a function
```

---

### Example 3: Calling a method that doesn't exist

```javascript
const num = 100;

num.toUpperCase();
```

**Error:**

```
TypeError: num.toUpperCase is not a function
```

**Java Analogy:**
Comparable to `NullPointerException` or invoking a method on an incompatible object.

---

## 4. RangeError

**Definition:**
Occurs when a value is outside the valid range.

### Example 1

```javascript
const arr = new Array(-5);
```

**Error:**

```
RangeError: Invalid array length
```

---

### Example 2

```javascript
const num = 1;

num.toFixed(200);
```

**Error:**

```
RangeError: toFixed() digits argument must be between 0 and 100
```

**Java Analogy:**
Similar to passing an invalid argument that falls outside the allowed range.

---

## 5. URIError

**Definition:**
Occurs when `encodeURI()`, `decodeURI()`, `encodeURIComponent()`, or `decodeURIComponent()` receives a malformed URI.

### Example 1

```javascript
decodeURIComponent("%");
```

**Error:**

```
URIError: URI malformed
```

### Example 2

```javascript
decodeURI("%E0%A4%A");
```

**Error:**

```
URIError: URI malformed
```

**Usage:**
Rarely encountered in everyday application development.

---

## 6. EvalError

**Definition:**
Historically related to improper use of `eval()`. It is now very rare and generally not encountered in modern JavaScript.

```javascript
eval("console.log('Hello')");
```

This works without throwing an `EvalError`.

**Note:**
Avoid using `eval()` because it can introduce security and performance issues.

---

## 7. Custom Error

**Definition:**
You can throw your own errors using the `Error` class.

### Example 1

```javascript
function withdraw(amount) {
    if (amount < 0) {
        throw new Error("Amount cannot be negative");
    }

    console.log("Withdrawal successful");
}

withdraw(-100);
```

**Output:**

```
Error: Amount cannot be negative
```

---

### Example 2

```javascript
function login(user) {
    if (!user) {
        throw new Error("User is required");
    }

    console.log("Login successful");
}
```

**Java Analogy:**

```java
throw new IllegalArgumentException("Amount cannot be negative");
```

---

## Summary Table

| Error Type     | When it Occurs                | Java Analogy                                         |
| -------------- | ----------------------------- | ---------------------------------------------------- |
| SyntaxError    | Invalid JavaScript syntax     | Compile-time syntax error                            |
| ReferenceError | Variable doesn't exist        | Undeclared variable                                  |
| TypeError      | Invalid operation on a value  | NullPointerException / Wrong method call             |
| RangeError     | Value outside allowed range   | IllegalArgumentException                             |
| URIError       | Invalid URI encoding/decoding | Invalid URL/URI processing                           |
| EvalError      | Related to `eval()` (rare)    | No common equivalent                                 |
| Error          | Custom application errors     | `throw new Exception()` / `IllegalArgumentException` |

## Interview Tip

If asked about JavaScript errors, mention these in order:

1. SyntaxError
2. ReferenceError
3. TypeError (Most Important)
4. RangeError
5. URIError
6. EvalError (Rare)
7. Custom Error using `throw new Error()`

For day-to-day JavaScript development, you'll mostly encounter **TypeError**, **ReferenceError**, **SyntaxError**, and **custom errors**.

## call(), apply() and bind()
All 3 are used to **explicitly set what `this` refers to** inside a function. They also let you "borrow" a function and use it on a different object.

### *The Problem They Solve*
By default, `this` depends on _how_ a function is called. Sometimes we want to force `this` to be a specific object.
```js
const user1 = { name: "Vishnu" }
const user2 = { name: "Riya" }

function greet() {
  console.log(`Hello, I'm ${this.name}`)
}

greet() // this.name is undefined
```
### *1. `call()` - Call immediately, arguments as a list*
**Syntax:** `function.call(thisArg, arg1, arg2, ...)`  
**What it does:** Calls the function right away. Sets `this` to `thisArg`. Pass arguments one by one.
```js
const person1 = { name: "Vishnu", age: 25 }
const person2 = { name: "Riya", age: 22 }

function introduce(city, country) {
  console.log(`Hi, I'm ${this.name}. I live in ${city}, ${country}`)
}

introduce.call(person1, "Chanda Nagar", "India")
// Output: Hi, I'm Vishnu. I live in Chanda Nagar, India

introduce.call(person2, "Hyderabad", "India") 
// Output: Hi, I'm Riya. I live in Hyderabad, India
```
We "borrowed" the `introduce` function and ran it with `person1` as `this`.

### *2. `apply()` - Call immediately, arguments as an array*
*Syntax:* `function.apply(thisArg, [arg1, arg2, ...])`  
*What it does:* Same as `call()`, but arguments must be in an array. 

Use this when you already have arguments in an array.
```js
const person1 = { name: "Vishnu" }

function introduce(city, country) {
  console.log(`Hi, I'm ${this.name}. I live in ${city}, ${country}`)
}

const details = ["Chanda Nagar", "India"]

introduce.apply(person1, details)
// Output: Hi, I'm Vishnu. I live in Chanda Nagar, India
```
**Classic use case:**
```js
const numbers = [5, 1, 9, 3]
console.log(Math.max.apply(null, numbers)) // 9
// Same as Math.max(5, 1, 9, 3)
```
### *3. `bind()` - Returns a new function*
**Syntax:** `const newFunc = function.bind(thisArg, arg1, arg2, ...)`  
**What it does:** Does NOT call the function. It returns a new function with `this` permanently bound to `thisArg`.

Use this when you want to call the function later.
```js
const person1 = { name: "Vishnu" }

function greet() {
  console.log(`Hello, I'm ${this.name}`)
}

const greetVishnu = greet.bind(person1) // create new function

greetVishnu() // call it later
// Output: Hello, I'm Vishnu
```

**Real example: Event handlers**
```js
const button = {
  label: "Click Me",
  click: function() {
    console.log(this.label)
  }
}

document.getElementById("btn").addEventListener("click", button.click.bind(button))
// Without bind, `this` would be the button element, not our `button` object
```
Still not clear then please refer Notes 👉[call, apply & bind](this_keyword/Notes.md)


### *Quick Summary Table*
|**Method** | **Executes Now?** | **Argument Style** | **Returns**|
|-----------|-------------------|-------------------|-------------|
|**call()** | Yes | Comma separated `a, b, c` | The function's return value|
|**apply()** | Yes | Array `[a, b, c]` | The function's return value|
|**bind()** | No | Comma separated `a, b, c` | A new function with `this` set|

### *Memory Trick*
`C` → *C*all → *C*omma separated  
`A` → *A*pply → *A*rray of arguments  
`B` → *B*ind → *B*uilds a new function

*In one line:*  
`call` and `apply` invoke the function immediately with a custom `this`.  
`bind` gives you a new function with `this` locked in for later.

## JavaScript Prototype
In JavaScript, a prototype is a <mark>**built-in mechanism that allows objects to inherit features, properties, and methods from one another.**</mark> Unlike class-based languages (like Java or C++), JavaScript uses a prototype-based inheritance mode

Every time you create an object or function in JavaScript, the engine automatically attaches hidden properties that handle this background link

### `prototype` vs `__proto__`
1. **`__proto__` (The Instance Link):** Every object has a `__proto__` property (conceptually known as [[Prototype]]). It points directly to the prototype object it inherits from.
2. **`prototype` (The Constructor Blueprint):** Only functions (and classes) have a .prototype property. This is not the prototype of the function itself; it is the blueprint that will become the __proto__ for any new objects created using that function with the new keyword.

Let's understand this through an example.

```js
const p1 = {
    actor_firstName: 'Ajay',
    actor_lastName: 'Devgan',

    getMovie() {
        return 'Drishyam 2'
    }
}
```

So here I have created a normal object `p1`.

Now let's create another object:

```js
const p2 = Object.create(p1);
```

At first, if I print `p2`:

```js
console.log(p2);
```

I get:

```text
{}
```

So it looks like `p2` is just an empty object.

But wait...

If `p2` is empty, then how is this working?

```js
console.log(p2.actor_firstName);
// Ajay

console.log(p2.getMovie());
// Drishyam 2
```

I never created `actor_firstName` inside `p2`.

I never created `getMovie()` inside `p2`.

So **how is `p2` able to access them?**

This is where **prototype** comes into the picture.

## So, What Actually Happened?

When I wrote:

```js
const p2 = Object.create(p1);
```

JavaScript created a new object and set `p1` as the prototype of that new object.

So conceptually, I can think of it like this:

```text
p2
 |
 | __proto__
 ↓
p1
```

Therefore, when I ask:

```js
p2.actor_firstName
```

JavaScript first checks:

> "Does `p2` itself have `actor_firstName`?"

No.

Then JavaScript checks its prototype:

> "Okay, does the object connected through `p2`'s prototype have `actor_firstName`?"

Yes — `p1` has it.

So JavaScript gives me:

```text
Ajay
```

The same thing happens with:

```js
p2.getMovie();
```

`getMovie()` is not inside `p2`.

JavaScript finds it in `p1` through the prototype relationship.

And **this is basically how inheritance works in JavaScript.**

---

## Then What is `__proto__`?

Now I can inspect this relationship using:

```js
console.log(p2.__proto__);
```

I will get `p1`.

So I can think of:

```js
p2.__proto__ === p1
```

as:

> "`p2`'s prototype is `p1`."

This `__proto__` is the prototype link of the object.

So whenever I see:

```js
p2.__proto__
```

I should think:

> **"Which object does `p2` inherit from?"**

In this case:

```text
p2.__proto__ → p1
```

---

### Let's Go One Step Further — Prototype Chain

Okay, now I know that one object can inherit from another object.

But what if the parent object itself has a parent?

Let's try that.

```js
const p1 = {
    xp1: 'I am inside p1'
}

const p2 = {
    xp2: 'I am inside p2',
    __proto__: p1
}

const p3 = {
    xp3: 'I am inside p3',
    __proto__: p2
}
```

Now look carefully at the relationship:

```text
p3
 ↓
p2
 ↓
p1
```

So can `p3` access a property from `p1`?

Yes.

```js
console.log(p3.xp1);
// I am inside p1
```

But `xp1` is not inside `p3`.

It is not even inside `p2`.

It is inside `p1`.

So JavaScript keeps going through the **prototype chain** until it finds the property.

👉 Refer Notes [Prototype & Inheritance in Java ](Prototype/Notes.md)

---
## Interview questions 


### Why `console.log([] == ![])` is `true` and `console.log([] == false)` is also `true`?

These are classic JavaScript gotchas that demonstrate how **loose equality (****`==`****)** works behind the scenes.

Let's understand the type coercion rules step by step.

### 1\. Why is `[] == false` true?

When you compare an object (like an array) with a boolean using `==`, JavaScript performs implicit type conversions.

### Step-by-step execution

**Step 1: Convert Boolean to Number**

When comparing a boolean with another value, JavaScript converts the boolean into a number.

javascript

```javascript
false -> 0
```

Now the expression becomes:

javascript

```javascript
[] == 0
```

**Step 2: Convert Array to Primitive**

An array is an object in JavaScript. When compared with a primitive value, JavaScript converts the object into a primitive.

An empty array converts to an empty string:

javascript

```javascript
[] -> ''
```

Now the expression becomes:

javascript

```javascript
'' == 0
```

**Step 3: Convert String to Number**

When comparing a string with a number, JavaScript converts the string into a number.

javascript

```javascript
Number('') -> 0
```

Now the expression becomes:

javascript

```javascript
0 == 0
```

**Step 4: Final Comparison**

javascript

```javascript
0 == 0 // true
```

Therefore:

javascript

```javascript
console.log([] == false); // true
```

---

### 2\. Why is `[] == ![]` true?

This one is slightly trickier because of the logical NOT (`!`) operator.

### Step-by-step execution

**Step 1: Understand the Logical NOT (****`!`****) Operator**

The `!` operator converts a value into a boolean and reverses it.

In JavaScript, all objects are truthy, including empty arrays (`[]`).

javascript

```javascript
Boolean([]); // true
![];         // false
```

Therefore, the expression:

javascript

```javascript
[] == ![]
```

Becomes:

javascript

```javascript
[] == false
```

**Step 2: Apply Loose Equality (****`==`****)**

As we already discussed in the previous example:

javascript

```javascript
[] == false
```

JavaScript performs the following conversions:

javascript

```javascript
[] == false
'' == 0
0 == 0
```

**Step 3: Final Comparison**

javascript

```javascript
console.log([] == ![]); // true
```

---

## 3\. Summary Table

| Conversion Step | `[] == false` | `[] == ![]` |
| --- | --- | --- |
| Initial Expression | `[] == false` | `[] == ![]` |
| Evaluate `!` | N/A | `[] == false` |
| Convert Boolean | `[] == 0` | `[] == 0` |
| Convert Array | `'' == 0` | `'' == 0` |
| Convert String to Number | `0 == 0` | `0 == 0` |
| Final Result | `true` | `true` |

---

## 4\. What Happens When We Use `===` Instead?

JavaScript provides two equality operators:

- `==` (Loose Equality): Performs type coercion before comparison when required.
- `===` (Strict Equality): Compares values without performing type coercion.

Let's see the difference:

javascript

```javascript
console.log([] == false);  // true
console.log([] === false); // false

console.log([] == ![]);    // true
console.log([] === ![]);   // false
```

Why?

Because:

- `[]` is an object.
- `false` is a boolean.
- `===` does not convert the array into a boolean or number to make the types match.

Therefore, both strict equality comparisons return `false`.

---

## 5\. Key Takeaways

1. **Empty arrays are truthy in JavaScript.**javascript
   ```javascript
   Boolean([]); // true
   ```
2. **The logical NOT (****`!`****) operator converts a value into a boolean and reverses it.**javascript
   ```javascript
   ![]; // false
   ```
3. **Loose equality (****`==`****) performs implicit type conversions.**javascript
   ```javascript
   [] == false; // true
   ```
4. **An empty array converts into an empty string when converted to a primitive.**javascript
   ```javascript
   String([]); // ''
   ```
5. **An empty string converts into zero when converted to a number.**javascript
   ```javascript
   Number(''); // 0
   ```
6. **Strict equality (****`===`****) avoids these implicit type conversions.**javascript
   ```javascript
   [] === false; // false
   ```

### Conclusion

The reason both expressions return `true` is JavaScript's **type coercion mechanism**.

When using `==`, JavaScript automatically converts values into compatible types before comparing them. These implicit conversions can sometimes produce unexpected results.

**Best Practice:** Prefer `===` (strict equality) over `==` in professional JavaScript development to avoid unexpected type coercion and improve code predictability.

---
```js
// Task 2: fix the label that treats 0 as not counted
//
// When count is null or undefined, return 'Not counted yet'.
// Otherwise return the count, a space and 'left'. It is broken
// now: a count of 0 shows 'Not counted yet'.
//
//   Export:   stockLabel(count)
//   Returns:  a string
//   Example:  stockLabel(12) gives '12 left'
//             stockLabel(0) gives '0 left'
//             stockLabel(undefined) gives 'Not counted yet'
//   Edge:     null gives 'Not counted yet' too
//
// Stuck? Press "What do I do next?" under this task. Fix the
// return line below.

export function stockLabel(count) {
  //return count != null ? `${count} left` : 'Not counted yet';
  return count != null && count != undefined ? `${count} left` : 'Not counted yet';
}
```

In the above code even the commented return statement will work fine. So which is better and why ?

Great observation! You are absolutely right—both versions work perfectly.

In JavaScript, `count != null` is a "loose inequality" check that specifically catches both null and undefined at the same time.

Which is better?

The commented version (`count != null`) is better.

Here is why:

1. __Conciseness:__ It is cleaner and more idiomatic. In JavaScript, `null` and `undefined` are "loosely equal" to each other (`null == undefined` is `true`). Because of this, checking `!= null` is a standard, widely-accepted shorthand for "is this value not null and not undefined?"

2. __Redundancy:__ Your second version (`count != null && count != undefined`) is technically redundant. Since `null == undefined` is true, if `count != null` is `true`, then `count != undefined` is guaranteed to be true as well. You are essentially checking the same thing twice.

__A note on "Best Practice"__ 

While `!= null` is very common, many professional teams prefer to be explicit about their intentions. If you want to be perfectly clear that you are checking for "missing" values, you can use:
```js
// This is very explicit and safe
return (count !== null && count !== undefined) ? `${count} left` : 'Not counted yet';
```
However, in the world of JavaScript, `count != null` is the "pro" way to write it because it leverages the language's built-in behavior to keep your code short and readable.

__Summary:__ Stick with the shorter version! It’s cleaner, does exactly the same thing, and is the standard way experienced developers handle this specific check.

---

```js
// Task 3 (interview question): NaN, isNaN and Object.is
//
// Predict what each expression below gives, and export the ten
// answers in this order. Nine are true or false, and the typeof
// one is text, written as a string. The check works out the
// same ten expressions and compares.
//
//   Export:   emptinessPredictions
//   Returns:  an array of ten values
//
//   NaN === NaN
//   Number.isNaN(NaN)
//   isNaN('chai')
//   Number.isNaN('chai')
//   Object.is(NaN, NaN)
//   typeof NaN
//   null == undefined
//   null === undefined
//   0 === -0
//   Object.is(0, -0)
//
// The interviewer will ask: what does each of isNaN and
// Number.isNaN check, and when can Object.is and === give
// different answers?
//
// Stuck? Press "What do I do next?" under this task. Write
// your ten answers between the square brackets.
export const emptinessPredictions = [
  false, true, true, false, true, 'number', true, false, true, false
];
```

### Other Important Links: 
- https://react.dev/reference/react
- Frontend coding standards: https://github.com/airbnb/javascript
