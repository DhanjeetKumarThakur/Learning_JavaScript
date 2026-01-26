# JSWorkspace_Codespace
A code repo to practice JavaScript using the codespaces

## To see the list of unclosed or running codespaces instances
- `https://github.com/codespaces` 

## The Golden Rules (memorize THESE)

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
# Arrays
- JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
- A `Shallow copy` of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. ***As a result, when you change either the source or the copy, you may also cause the other object to change too.***
That behavior contrasts with the behavior of a deep copy, in which the source and copy are completely independent

- A `Deep copy` is contrasts (complete opposite) to `Shallow copy`. A `Deep copy` of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. ***As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too.***

## Difference between Spread(...) Operator and Rest(...) Opeator ? And when to use what ?
- Great question—this trips up a lot of people at first because spread and rest use the same syntax (...) but do opposite jobs depending on where you use them.

Let’s break it down cleanly and intuitively.

## 1️⃣ Spread Operator 
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
## Objects
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

## 2️⃣ Rest Operator
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

Example 1: Object destructuring
```js
const user = { name: "Alex", age: 25 };

const { name, age } = user;

console.log(name); // Alex
console.log(age);  // 25
```
👉 Instead of user.name, you directly get name.
#
Example 2: Array destructuring
```js
const colors = ["red", "blue"];

const [first, second] = colors;

console.log(first);  // red
console.log(second); // blue
```
In one line:

Destructuring = unpacking values from arrays or objects into variables 👍

You can also rename a long object key while destructuring 
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


##  IIFE ()
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

## High Order Functions
### A higher-order function is a function that takes another function as a parameter or returns a function.

Example (takes a function):
```js
arr.forEach(printValue);
```
Here, `forEach` is a higher-order function because it takes printValue as axn argument.

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