## Callback Function vs Higher Order Function
A **Callback Function** is a function which is passed as an argument in another function. 

A **Higher Order Function** is a function which accept another function as an argument. Higher Order Function can return function as value. 

Let's understand this by example. 
```js
function greeting(message) {
    return function(name) {
        return `${message}, ${name}!`;
    };
}

const sayHello = greeting("Hello");
const sayWelcome = greeting("Welcome");

console.log(sayHello("John"));
console.log(sayWelcome("Alice"));


Output:
Hello, John!
Welcome, Alice!
```
In the above code `greeting` is a higher order function and it is returning another function as value.

Example 2: Predict the output
```js
function process(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

console.log(process(10, 20, add));
console.log(process(10, 20, multiply));


Output:
30
200
```
#### Which function is the Higher-Order Function? 
#### `process` is the Higher-order function, because it is taking another function has argument. 

#### Which functions are callback functions?
#### `add` and `multiply` are the callback functions because those references are sent as function argument.

### Higher Order Functions 
A higher-order function is one that:

- accepts one or more functions as arguments, or
- returns a function.
- **The higher-order function controls the execution of the callback.**

### The higher-order function controls the execution of the callback functions. 

Let's understand this by one of the questions. 
#### Q1 Complete the below function.
```js
function executeTask(taskName, callback) {
    console.log(`Starting ${taskName}`);

    // Call the callback

    console.log(`Finished ${taskName}`);
}
```
Expected Output:
```js
Starting Download

Downloading...

Finished Download
```
When called like this.
```js
executeTask("Download", function() {
    console.log("Downloading...");
});
```
My answer :
```js
function executeTask(taskName, callback) {
    console.log(`Starting ${taskName}`);

    callback();

    console.log(`Finished ${taskName}`);
}

executeTask("Download", function() {
    console.log("Downloading...");
});
```
Output:
```js
Starting Download

Downloading...

Finished Download
```
Observe the above code, We have passed an function expression as parameters in the function call. 

### Why do we pass a function instead of calling it immediately?
 > That is callback function, it will be called back by higher order function. ___Higher Order function will control the execution of callback function and it's completely depends on scenario___ 
 >> For example in the above code **the callback function is executed in between the two console statement**. Because that's how we wanted the output, first we wanted to display **"Starting Download"** which is the first console statment then our callback function to be executed so that it will console **"Downloading..."** and then last statement which is another console statement to print **"Finished Download"**.
---

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

### Q) Predict the Output
```js
function counter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

const c1 = counter();
const c2 = counter();

console.log(c1()); 
console.log(c1());

console.log(c2());

console.log(c1());

console.log(c2());
```
My answer:
```
1
2
1
3
2
```
### Why don't c1 and c2 affect each other?
Because both are two different variables holding two different function object. In javascript funtion is also an object. Both c1 and c2 holding the same function as value but both are not same.

Each call to `counter()` creates a new lexical environment with its own count variable.

So:
```js
const c1 = counter();
```
creates one private `count`

And
```js
const c2 = counter();
```
creates another completely separate private `count`.

That's why they don't affect each other.


Let's see one more example which covers all Higher Order Function, Callback function and Closure.

### Q5 Write a function
```markdown
createBankAccount(initialBalance)
```
Requirement:
```js
const account = createBankAccount(1000);

account("deposit", 500);
// 1500

account("withdraw", 200);
// 1300

account("withdraw", 2000);
// "Insufficient Balance"

account("balance");
// 1300
```
My answer:
```js
function createBankAccount(initialBalance) {
    let currentBalance = initialBalance;
    return function (task, amount) {
        if (task === "deposit") {
            currentBalance  += amount;
        } else if (task === "withdraw") {
            if (currentBalance > amount) {
                currentBalance -= amount;
            } else {
                return "Insufficient Balance";
            }
        }
        return currentBalance;  //This will work for all task even if user want to check balance. i.e task=== "balance"
    }
}
```
- **Higher Order Function** : `function createBankAccount() { ...}`
- **Closure**: The inner function is using the `currentBalance`, `initialBalance` variables even after `createdBankAccount()` function execution is done.
- **Callback function**: There is no function is passed as argument. So  Callback function in the above code. 