// Chapter 8: Truthy and falsy
//
// Five tasks, one export each. Write each function in place of
// its throw line (tasks 2 and 3 are bugs to fix, and task 5 is
// an array you fill in), then press Check.

// Task 1: Guest when the name is blank
//
// Return the name when there is one, and 'Guest' when the name
// is empty text, undefined or null.
//
//   Export:   displayName(name)
//   Returns:  a string
//   Example:  displayName('Anjali') gives 'Anjali'
//             displayName('') gives 'Guest'
//   Edge:     undefined and null give 'Guest' too
//
// Stuck? Press "What do I do next?" under this task. Write
// your code in place of the throw line.
export function displayName(name) {
  //return name.length>0? name: 'Guest'  //My approach
  return name || 'Guest'; //Better approach bze above we wrote terinary operator which could be replaced with this. Here it checks if left side has a value is yes then return has it is, if NO value present in left side then right side is returned has value.
}

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

  //Here the first appraoch is better count!=null is the standard, widely-accepted shorthand for "is this value not null and not undefined?"
}

// Task 3: fix the check that never says empty
//
// The cart is always an array of item names. Return true when
// it has no items, and false when it has one or more. It is
// broken now: it never says true, not even for an empty cart.
//
//   Export:   isEmptyCart(cart)
//   Returns:  true or false
//   Example:  isEmptyCart([]) gives true
//             isEmptyCart(['masala chai']) gives false
//
// Stuck? Press "What do I do next?" under this task. Fix the
// return line below.
export function isEmptyCart(cart) {
  return cart.length === 0;
}

// Task 4: the coupon in capitals, or nothing
//
// The customer has a name and maybe a coupon. Return the coupon
// in capitals, or '' when there is no coupon: the coupon key
// is missing, or it is empty text or null.
//
//   Export:   couponCode(customer)
//   Returns:  a string
//   Example:  couponCode({ name: 'Ravi', coupon: 'chai10' })
//             gives 'CHAI10'
//             couponCode({ name: 'Ravi' }) gives ''
//   Edge:     a coupon of '' or null gives '' too
//
// Careful: return '', never undefined or null.
//
// Stuck? Press "What do I do next?" under this task. Write
// your code in place of the throw line.
export function couponCode(customer) {
  //return (customer.coupon || '').toUpperCase();
  return customer.coupon ? customer.coupon.toUpperCase() : '';
//Here the first approach is better because why use terinary when we could do it in single line of code.
}

// Task 5 (interview question): which values are truthy
//
// Predict what Boolean(value) gives for each value below, and
// export the twelve answers (true or false) in this order. The
// check runs Boolean on the same twelve values and compares.
//
//   Export:   truthyPredictions
//   Returns:  an array of twelve booleans
//
//   0, '0', '', ' ', [], {}, null, NaN, 'false', -1,
//   undefined, 0n
//
// The interviewer will ask: which eight values are falsy, and
// which of the twelve above surprise people?
//
// Stuck? Press "What do I do next?" under this task. Write
// your twelve answers between the square brackets.
export const truthyPredictions = [false, true, false, true, true, true, false, false, true, true, false, false];
