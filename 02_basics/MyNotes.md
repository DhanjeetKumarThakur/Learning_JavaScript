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

---

### 2. `Object.assign()`

```javascript
const original = {
  a: 1,
  b: {
    c: 2
  }
};

const copy = Object.assign({}, original);

copy.b.c = 100;

console.log(original.b.c); // 100
```

---

### 3. `Array.prototype.slice()`

```javascript
const original = [
  { name: "Alice" },
  { name: "Bob" }
];

const copy = original.slice();

copy[0].name = "Charlie";

console.log(original[0].name); // Charlie
```

---

### 4. `Array.from()`

```javascript
const original = [
  { x: 1 },
  { x: 2 }
];

const copy = Array.from(original);

copy[0].x = 99;

console.log(original[0].x); // 99
```

---

### 5. Array spread (`...`)

```javascript
const original = [
  { id: 1 },
  { id: 2 }
];

const copy = [...original];

copy[0].id = 100;

console.log(original[0].id); // 100
```

---

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

### 3. Lodash `_.cloneDeep()`

```javascript
import _ from "lodash";

const original = {
  name: "John",
  address: {
    city: "New York"
  }
};

const copy = _.cloneDeep(original);

copy.address.city = "Chicago";

console.log(original.address.city); // New York
```

Works with many complex JavaScript objects.

---

### 4. Custom recursive deep copy

```javascript
function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(deepCopy);
  }

  const copy = {};

  for (const key in obj) {
    copy[key] = deepCopy(obj[key]);
  }

  return copy;
}

const original = {
  person: {
    name: "Alice"
  }
};

const copy = deepCopy(original);

copy.person.name = "Bob";

console.log(original.person.name); // Alice
```

---

## Summary

| Function/Method                | Shallow or Deep?        | Notes                                                                               |
| ------------------------------ | ----------------------- | ----------------------------------------------------------------------------------- |
| `{ ...obj }`                   | Shallow                 | Copies only first-level properties                                                  |
| `[...arr]`                     | Shallow                 | Nested objects are shared                                                           |
| `Object.assign()`              | Shallow                 | Copies enumerable own properties                                                    |
| `Array.slice()`                | Shallow                 | Creates a new array, shares nested objects                                          |
| `Array.from()`                 | Shallow                 | Same behavior as `slice()` for object elements                                      |
| `structuredClone()`            | Deep                    | Modern, recommended built-in deep copy                                              |
| `JSON.parse(JSON.stringify())` | Deep (with limitations) | Simple but loses some data types                                                    |
| `_.cloneDeep()`                | Deep                    | Robust third-party solution                                                         |
| Custom recursive function      | Deep                    | Can be tailored, but needs extra handling for special types and circular references |
