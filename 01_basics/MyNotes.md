# Hoisting in Javascript.
A quick interview-ready definition could be:

> Hoisting is JavaScript's behavior of processing variable and function declarations during the Creation Phase of an Execution Context before the code is executed. var is initialized to undefined, function declarations are fully available, and let/const remain uninitialized until their declaration is reached (Temporal Dead Zone).

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


### Few Examples  to understand Hoisting 
#### Creation Phase

JavaScript scans the code and allocates memory:

```javascript
var x = 10;

function greet() {
  console.log("Hello");
}
```
Memory roughly becomes:
```javascript
x: undefined
greet: function greet() { console.log("Hello"); }
```
No assignments have happened yet.

#### Execution Phase
In execution context all variables will be assigned their values.


Assignments happen line by line during the execution phase.

Example :
```javascript
var x = 10;
var y = 20;
```
Creation Phase:
```javascript
x: undefined
y: undefined
```
Execution Phase:
```javascript
x = 10; // first assignment
y = 20; // second assignment
``` 
So values are assigned as execution reaches those lines.

Example 1: (`var`)
```javascript
console.log(x);
var x = 10;
console.log(x);
```
Creation Phase: 
```javascript
x: undefined
``` 
Execution Phase: 
```javascript
console.log(x); // undefined

x = 10;

console.log(x); // 10
```
this is why people say "var is hoisted."

Example 2 (Function Declaration)
```javascript 
 greet();

function greet() {
  console.log("Hello!");
}
```
Creation Phase:
```javascript
greet: function greet() {
  console.log("Hello!");
}
```
Execution Phase:
```javascript
greet();
```
Since the entire function definition was stored during creation, it can be called before its declaration appears in the code.

Example 3 (let and const)
```javascript
console.log(a)

let a = 5
```
Conceptually:
```javascript
a: <uninitialized>
```
Execution Phase: 
```javascript
let a = 5;
```
causes: 
```javascript
ReferenceError
``` 
This inaccessible period is called the Temporal Dead Zone (TDZ).
After execution reaches:
```javascript
let a = 5;
```
the variable becomes initialized and usable.


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

