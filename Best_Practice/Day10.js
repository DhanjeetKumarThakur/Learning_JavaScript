// Chapter 10: Arrays
//
// Five tasks, one function each. Write each function in place
// of its throw line, then press Check. The menu below is sample
// data you can try your functions on.

export const menu = ['Masala chai', 'Cutting chai', 'Bun maska', 'Parle-G', 'Vada pav'];

// Task 1: the first item, the last and the count
//
// Return an object with the first item, the last item and how
// many items there are. Do not change the array you are given.
//
//   Export:   menuEnds(items)
//   Returns:  { first, last, count }
//   Example:  menuEnds(menu) gives
//             { first: 'Masala chai', last: 'Vada pav',
//               count: 5 }
//   Edge:     one item is both first and last, and an empty
//             menu gives
//             { first: undefined, last: undefined, count: 0 }
//
// Stuck? Press "What do I do next?" under this task. Write
// your code in place of the throw line.
export function menuEnds(items) {
  return {
    first: items[0],
    last: items[items.length - 1],
    count: items.length   
  };
}

// Task 2: the kitchen queue through a rush
//
// Start with an empty queue and go through the events in order:
//   { type: 'order', item }   the item joins the back
//   { type: 'urgent', item }  the item jumps to the front
//   { type: 'serve' }         the front item leaves the queue
//                             and is served
//   { type: 'cancel' }        the back item is dropped, and is
//                             not served
// Serve and cancel do nothing when the queue is empty. Return
// the served items in the order they were served, and what is
// still waiting, front first. Do not change the events array.
//
//   Export:   runQueue(events)
//   Returns:  { served, waiting }
//   Example:  runQueue([{ type: 'order', item: 'chai' },
//             { type: 'urgent', item: 'bun' },
//             { type: 'serve' }]) gives
//             { served: ['bun'], waiting: ['chai'] }
//   Edge:     no events gives { served: [], waiting: [] }
//
// Careful: every call starts with an empty queue, and serving
// from an empty queue must not add anything to served.
//
// Stuck? Press "What do I do next?" under this task. Write
// your code in place of the throw line.
export function runQueue(events) {
  //throw new Error('Not implemented');
  const served = [];
  const waiting = [];
  for (const event of events) {
    if (event.type === 'order') {
      waiting.push(event.item);
    } else if (event.type === 'urgent') {
      waiting.unshift(event.item);
    } else if (event.type === 'serve') {
      if (waiting.length > 0) served.push(waiting.shift()); 
    } else if (event.type === 'cancel') {
      waiting.pop();
    }
   }
  return { served, waiting };
}

// Task 3: one page of the menu
//
// Pages are numbered from 1 and hold size items each, in menu
// order. Return a new array with the items on that page. The
// menu must not change.
//
//   Export:   menuPage(items, page, size)
//   Returns:  an array of strings
//   Example:  menuPage(menu, 2, 2) gives
//             ['Bun maska', 'Parle-G']
//             menuPage(menu, 3, 2) gives ['Vada pav']
//   Edge:     a page past the end gives []
//
// Stuck? Press "What do I do next?" under this task. Write
// your code in place of the throw line.
export function menuPage(items, page, size) {
  const start = (page - 1) * size;
  return items.slice(start, start + size);
}

// Task 4: swap a sold-out item in place
//
// Change the menu array itself, not a copy. Put the replacement
// in the sold-out item's position, or, when no replacement is
// given, remove the sold-out item so nothing is left in its
// place. Return the removed item (a string, not an array).
//
//   Export:   swapSoldOut(items, soldOut, replacement)
//   Returns:  the removed item, or null
//   Example:  with m = ['Masala chai', 'Bun maska', 'Parle-G'],
//             swapSoldOut(m, 'Bun maska', 'Vada pav') gives
//             'Bun maska', and m becomes
//             ['Masala chai', 'Vada pav', 'Parle-G']
//   Edge:     an item not on the menu gives null, and the menu
//             does not change
//
// Careful: with no replacement, nothing may be left in the
// gap, not even undefined.
//
// Stuck? Press "What do I do next?" under this task. Write
// your code in place of the throw line.
export function swapSoldOut(items, soldOut, replacement) {
  let index = items.indexOf(soldOut);
  if (index === -1) return null;
  if (replacement !== undefined) {
    items[index] = replacement;
  } else {
    items.splice(index, 1);
  }
  return soldOut;
}

// Task 5 (interview question): each order once
//
// Return a new array with each order once, in the order it was
// first seen. Two orders are the same only when they are
// exactly equal, so 'masala chai' and 'Masala chai' are two
// different orders. Do not change the array you are given.
//
//   Export:   uniqueOrders(orders)
//   Returns:  a new array of strings
//   Example:  uniqueOrders(['chai', 'bun', 'chai', 'Parle-G',
//             'bun']) gives ['chai', 'bun', 'Parle-G']
//   Edge:     an empty list gives []
//
// The interviewer will ask: how do you keep the first of each,
// and how do you know you have seen an order before?
//
// Stuck? Press "What do I do next?" under this task. Write
// your code in place of the throw line.
export function uniqueOrders(orders) {
  let result = [];
  for (const order of orders) {
    if (!result.includes(order)) {
      result.push(order);
    }
  }
  return result;
}
