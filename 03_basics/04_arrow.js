const user = {
    userName: 'Dhanjeet',
    price: 777,
    welcomeMessage : function() {
        console.log(`${this.userName}, welcome to wbsite`);
        console.log(this); //here 'this' refer to the current object 
    }
};

//user.welcomeMessage();
user.userName = 'Sam'; //here we are changing the value of the object so we will see userName as 'Sam' not 'Dhanjeet'
//user.welcomeMessage();
//console.log(this); // Output : {} 

// If we console 'this' in any bowser we will see output as window object because window object is the global object

//Can we console 'this' inside function ?
//Let's try 
function chai() {
    console.log(this);
}

// chai();

/* Output :
<ref *1> Object [global] {
  global: [Circular *1],
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  structuredClone: [Function: structuredClone],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 33.07905299961567,
      nodeStart: 2.8421360002830625,
      v8Start: 5.3260239996016026,
      bootstrapComplete: 26.228749999776483,
      environment: 13.828885999508202,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1769423278953.769
  },
  fetch: [AsyncFunction: fetch]
}

*/

//The Output is just Global Object of Node 

function chai2() {
    const username = 'Dhanjeet';
    console.log(this.username);// Output : undefined --> So 'this' is not referring the function scope varaible.
    console.log(username); // Output : Dhanjeet --> function scope variables can directly access we don't need to use 'this' key for it. 
}

chai2(); 


/* 
 Before we jump into Arrow function let's quickly summaries what we learnt around functions. 
 1. Normal function
 syntax: function f1() {
            some statements or logic
        }

 2. function expression 
 syntax : const a = function() {
                    some statements or logic
            }
 3. We cannot use 'this' key to refer the local variables inside function.
*/


// ++++++++ Arrow Function +++++++++++++

//Actually Arrow function is similar to function expression  in fact it is same just we don't use function keyword. Let's see with example. 

const demo = function () {
    let userName = 'Dhanjeet';
    console.log(userName);
}

demo();

