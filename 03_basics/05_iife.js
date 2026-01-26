//Immediately Invoke Function Expressions (IIFE)

(function chai(){
    console.log(`DB Connected...`);
})();

//Let's create an arrow function
(() => {
    console.log(`Hey Sonu`);
})();

/*
 Why we need IIFE (Immediately Invoke Function Expressions) ?
 An IIFE (Immediately Invoked Function Expression) is used to run a function right away and keep variables private. 

 Why we need it (simple):

✅ It avoids polluting the global scope

✅ Variables inside it can’t be accessed from outside

✅ Useful for one-time setup code
*/