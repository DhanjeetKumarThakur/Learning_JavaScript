# JavaScript Prototype

In JavaScript, a prototype is a <mark>**built-in mechanism that allows objects to inherit features, properties, and methods from one another.**</mark>

Unlike class-based languages like Java or C++, JavaScript uses a **prototype-based inheritance model**.

Now instead of directly jumping into the definition, let's understand this by creating a few objects and seeing what JavaScript is actually doing behind the scenes.

---

## `prototype` vs `__proto__`

Before going further, there are two terms that we need to understand:

* `__proto__`
* `prototype`

They are related to each other, but they are **not the same thing**.

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

---

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

# Let's Go One Step Further — Prototype Chain

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

I can even manually trace this chain:

```js
console.log(p3.__proto__);
// p2

console.log(p3.__proto__.__proto__);
// p1
```

So whenever I see something like:

```js
p3.__proto__.__proto__
```

I should think:

> "Okay, first go from `p3` to its parent `p2`, and then from `p2` to its parent `p1`."

That's the **prototype chain**.

---

# Now Let's Bring Classes Into the Picture

So far I have used normal objects.

But JavaScript also has classes.

Let's create one:

```js
class Student {

    constructor() {
        this.name = 'Dhanjeet'
    }

    getName() {
        return this.name;
    }
}
```

Now I create an object:

```js
const s1 = new Student();
```

Obviously, I can do:

```js
console.log(s1.name);
// Dhanjeet

console.log(s1.getName());
// Dhanjeet
```

But now let's ask the same question again:

> **Where does `getName()` actually exist?**

I didn't create `getName()` inside `s1`.

So let's inspect:

```js
console.log(s1.__proto__);
```

I can see:

```text
{
    getName: getName(),
    [[Prototype]]: Object
}
```

Aha!

So `getName()` is available through the prototype.

And this gives me a very important relationship:

```js
s1.__proto__ === Student.prototype
// true
```

This is one of the most important things to remember from this topic.

---

# So What Is `prototype` Then?

Now we have seen `__proto__`.

But what exactly is this:

```js
Student.prototype
```

Remember:

`__proto__` is the prototype link **of an object**.

Whereas `prototype` is a property associated with the **constructor/class** that is used as the prototype for objects created from it.

So when I do:

```js
const s1 = new Student();
```

the relationship is:

```text
s1
 |
 | __proto__
 ↓
Student.prototype
 |
 | getName()
 ↓
Object.prototype
 ↓
null
```

Therefore:

```js
s1.__proto__ === Student.prototype
```

is `true`.

So the easiest way for me to remember the difference is:

> **`__proto__` → "Who is my prototype?"**

> **`prototype` → "What prototype will instances created from me use?"**

---

# Wait... What About a Simple String?

Now there is something interesting.

Suppose I write:

```js
let fname = 'Sonu';
```

That's just a string, right?

Now look at this:

```js
console.log(fname.at(2));
// n
```

But wait...

**Did I create the `at()` method?**

No.

Then where did this method come from?

Let's inspect:

```js
console.log(fname.__proto__);
```

I can see methods associated with `String`.

So now we have another prototype relationship:

```text
fname
 ↓
String.prototype
 ↓
Object.prototype
 ↓
null
```

This is why I can do:

```js
fname.at(2);
```

even though I didn't create the `at()` method myself.

The functionality comes through the prototype associated with strings.

I can also inspect:

```js
console.log(String.prototype);
```

and I will see many methods associated with strings.

And if I continue tracing the chain, I eventually reach:

```text
Object.prototype
 ↓
null
```

So the important relationship here is:

```js
fname.__proto__ === String.prototype
```

---

# One More Interesting Thing

If I inspect:

```js
String.prototype
```

I can see all those string-related methods.

But at the bottom, I can also see that its prototype is related to:

```text
Object.prototype
```

And if I continue further:

```text
String.prototype
        ↓
Object.prototype
        ↓
null
```

The same general idea applies to other built-in wrapper objects such as:

```text
Number
Boolean
```

Their prototype chains eventually lead to:

```text
Object.prototype
```

and finally:

```text
null
```

This is one reason I often hear the statement:

> **"Everything in JavaScript is an Object."**

The exact statement is a simplification, because JavaScript also has primitive values, but the prototype chain of many built-in objects ultimately leads to `Object.prototype`.

---

# Finally — `instanceof`

Now that I understand prototype chains, `instanceof` becomes easier to understand.

Let's take our `Student` example:

```js
const s1 = new Student();

console.log(s1 instanceof Student);
// true
```

Why is this `true`?

Because `s1` was created using `Student`, and:

```text
s1
 ↓
Student.prototype
```

So JavaScript can find `Student.prototype` in `s1`'s prototype chain.

That's what I should remember when I see:

```js
s1 instanceof Student
```

It is checking the **prototype chain**.

---

## But What If I Try This?

Remember our earlier objects:

```js
const p1 = {
    xp1: 'I am inside p1'
}

const p2 = {
    xp2: 'I am inside p2',
    __proto__: p1
}
```

Can I do:

```js
console.log(p2 instanceof p1);
```

No.

I get:

```text
TypeError: Right-hand side of 'instanceof' is not callable
```

Why?

Because `p1` is just an object.

It is not a constructor/class that can be used on the right side of `instanceof`.

So I should remember:

> `instanceof` works with a constructor/function/class on the right-hand side, and checks its `prototype` against the object's prototype chain.

---

# The Whole Thing in One Picture

After going through all of this, I can visualize the prototype concept like this:

```text
                         Object.prototype
                                ↑
                                |
                    ┌───────────┴───────────┐
                    |                       |
             String.prototype        Student.prototype
                    ↑                       ↑
                    |                       |
                  fname                     s1
```

And for my earlier object example:

```text
p3
 ↓
p2
 ↓
p1
 ↓
Object.prototype
 ↓
null
```

The most important relationships I should remember are:

```js
// Object.create()
p2.__proto__ === p1;

// Class + new
s1.__proto__ === Student.prototype;

// String
fname.__proto__ === String.prototype;

// End of the chain
Object.prototype.__proto__ === null;
```

If I understand these relationships, I understand the **core idea behind JavaScript prototypes and prototype-based inheritance**.
