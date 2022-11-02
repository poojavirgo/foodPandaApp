# CTEC3905
##Front-end web development

<div class="flex-center intro">
  <img src="images/html.svg" alt="html logo">
  <img src="images/css.svg" alt="css logo">
  <img src="images/js.svg" alt="js logo">
</div>

## Introduction to Javascript

-----

## Javascript **is nothing to do with** Java


- The *LiveScript* scripting language was added to Netscape Navigator in 1995.
- It was renamed to **Javascript** to sound a bit like Java, as a marketing ploy.

> ### "*Java* is to *JavaScript* as *car* is to *carpet*" - Chris Heilmann  

- Internet Explorer shipped with a reverse-engineered equivalent *JScript* in 1996
- *JScript* and *Javascript* were incompatible, obviously.
- Netscape submitted JavaScript to *ECMA International* in November 1996.
- ECMAScript specification released June 1997

> ### "*ECMAScript* was always an unwanted trade name that sounds like a skin disease." - Brendan Eich

- We will mostly use ECMAScript 2015 (also known as ES6) (>97% coverage)
- Also a few bits from ECMAScript 2016
- Latest release is ECMAScript 2020 (~80% coverage)

-----

## We will be learning *vanilla javascript*.

It's important to understand the underlying language.
This module aims to provide the foundations of javascript.
The Javascript ecosystem is highly dynamic and evolves quickly.
We will not be learning the current trending JS technology.

<div class="flex j-around">

<figure>
  <img src="images/js.svg" alt="javascript logo">
  <figcaption>Javascript is powerful without libraries</figcaption>
</figure>

<div class="large"></div>

<ul>
  <li>no general purpose libraries such as <em>JQuery</em></li>
  <li>no frameworks such as <em>react</em>, <em>vue</em> or <em>ember</em>.</li>
  <li>no cool libraries such as <em>moment.js</em> or <em>D3.js</em></li>
</ul>

</div>

-----

## Linking to a script

In HTML it is possible to include a `<script>` element in your document.
This can go in the `<head>` or the `<body>` and there are reasons you might choose either.
In this module we will be advocating for inserting the `<script>` element as the last element within the `<body>`.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Page with a script</title>
  </head>
  <body>
    <!-- your page content is here -->
    <script src="scripts.js"></script>
  </body>
</html>
```

We also recommend **only** using linked scripts.
Use the `scr` attribute to point to a file where the code lives.
There should be no code placed inside the actual element.
-----

## Hello World


Logging to the console.
```js
console.log("Hello World");
```
Alert with an annoying popup dialogue.
```js
alert("Hello World");
```

<div class="smaller"></div>
An element in the DOM with an `id` attribute.

```html
<span id="message-box"></span>
```

Use Javascript to update the DOM.

```js
const messageBox = document.getElementById('message-box');
messageBox.textContent = "Hello World";
```

-----

## Dynamic typing

Variables can be assigned (and re-assigned) values of all types:

```js
let foo = 42;               // foo is now a number
foo = 'bar';                // foo is now a string
foo = true;                 // foo is now a boolean
foo = ['hello', 'world'];   // foo is now an Array
foo = {'hello': 'world'};   // foo is now an Object
foo = (a, b) => { a + b; }; // foo is now a function
foo = undefined;            // foo is now undefined
foo = null;                 // foo is now null
```

-----

## Variable declaration, three ways.

Always use `const` by default.

```js
// Variables declared as const must be initialised with a value.
const foo = "hello world";

// cannot be reassigned.
foo = "something else"; // Uncaught TypeError: Assignment to constant variable.
```

If your variable needs to be reassigned, use `let`.

```js
// Variables declared as let can be initialised without a value.
let foo;

// or with one
let foo = "hello world";

// they can be reassigned.
foo = "something else";

```

-----

## Basically, **never** use `var`

Since the introduction of `let` and `const` (2015), there is no longer any reason to use the old `var`.

The difference is that `let` is tied to a tighter scope.

```js
{
  let x = 1;
}

console.log(x); // Uncaught ReferenceError: x is not defined
```

This is a good thing and helps avoid confusion and clashes, especially in long code.

```js
{
  var x = 1;
}

console.log(x); // no problem, possible cause of confusion
```

-----

## Numbers

All numbers are floating point.
Maths is pretty easy and obvious.

```js

1 + 2 + 3;   // 6
1 * 2 * 3;   // 6
1 / 2 / 3;   // 0.166666666666
1 - (2 - 3); // 2

```

The [Math object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) allows you to do more complicated stuff.

```js
Math.PI;            // 3.141592653589793
Math.round(4.7);    // 5
Math.round(4.4);    // 4
Math.sqrt(81);      // 9
Math.abs(-100);     // 100
Math.ceil(1.001);   // 2
Math.floor(1.999);  // 1
```
See also: `Math.min`, `Math.max`, `Math.pow`, `Math.trunc`, `Math.sin`, `Math.cos`, `Math.sign`, `Math.random` and many more...
-----

## Strings

String `literals` are specified by single or double quotes.

```js
const s = "string";
```

Basic string manipulation is intuitive, once you understand the syntax.
*Template literals* are defined using **backticks**.

```js
const oldWay = "concatenation";
const newWay = "interpolation";

// String concatenation is annoying, especially the spaces.
a = s + " " + oldWay + " is annoying, especially the spaces.";

// String interpolation is intuitive and elegant.
b = `${s} ${newWay} is intuitive and elegant.`;

```

String interpolation with **template literals** is faster and better, so **use it**.

-----

## Basic control flow

`if` statements

```js
if(value < maxValue) {
  value += 1;
}
```

`if-else` statements.

```js
if(value < maxValue) {
  value += 1;
} else {
  console.log(`reached maximum value (${value})`);
}
```
-----
## Switch

`switch` statements are good when there are many options.

```js
switch(x) {
  case 1:
    console.log("x is 1");
    break;
  case 2:
    console.log("x is 2");
    break;
  case 3:
    console.log("x is 3");
    break;
  default:
    console.log("x is something else");
}
```

-----

## Basic loops

<div class="small"></div>

Similar to Java or C, `for` loops allow things to be repeated a number of times.

```js
for(let i=0; i<10; i++) {
	console.log(i);
}
```

A `while` loop will only execute *while* a condition is met.

```js
s = "hello world"
while(s.length < 10) {
  s = `${s}!` // this is never executed, the string is left unchanged
}
```

A `do...while` loop will always execute once before the condition is checked.

```js
s = "hello world"
do {
  s = `${s}!`           // we add one exclamation mark
} while (s.length < 10) // and the condition fails first time
```

-----

## Functions

Don't repeat yourself.

```js
`${1} + ${1} = ${1 + 1}`;   // "1 + 1 = 2"
`${2} + ${2} = ${2 + 2}`;   // "2 + 2 = 4"
`${4} + ${11} = ${4 + 11}`; // "4 + 11 = 15"
```

Functions can help to avoid repetition and make code more readable and more maintainable.

```js
function sumAsString(a, b) {
  return `${a} + ${b} = ${a + b}`;
}
sumAsString(1, 1);  // "1 + 1 = 2"
sumAsString(2, 2);  // "2 + 2 = 4"
sumAsString(4, 11); // "4 + 11 = 15"
```
A newer syntax (ECMAScript 2015) for more compact functions using arrow (`=>`) notation.
```js
const sumAsString = (a, b) => `${a} + ${b} = ${a + b}`;

```
-----

## Accessing the DOM

Most of your code will want to interface with **the DOM** at some point.
The browser context includes the [`document`](https://developer.mozilla.org/en-US/docs/Web/API/Document) object.

Individual elements ([`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element) objects) and lists of elements (either [`NodeList`](https://developer.mozilla.org/en-US/docs/Web/API/NodeList) or [`HTMLCollection`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection) objects) can be accessed using some key methods of the `document` object.

```js
// Individual Elements
let myNode = document.getElementById('message');
myNode = document.querySelector('#message');

// NodeLists (and HTMLCollections)
let myNodes = document.getElementsByClassName('clickable');
myNodes = document.getElementsByTagName('button');
myNodes = document.querySelectorAll('button.clickable');

```

-----


## classList API

The `class` attribute of elements can be accessed directly via the [`className`](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) property.

```js
let myNode = document.getElementById('message');
myNode.className = "warning highlight";
```

Every element has a read-only [`classList`](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) property which simplifies working with classes.

```js
myNode.classList.add("warning");           // class="warning"
myNode.classList.remove("warning");        // class=""
myNode.classList.toggle("warning");        // class="warning"
myNode.classList.toggle("error");          // class="warning error"
myNode.classList.toggle("warning");        // class="error"
myNode.classList.replace("error", "info"); // class="info"
```

See [documentation](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) on MDN

-----

## Arrays

Arrays are list-like objects with built-in methods for traversal and mutation operations.
They are indexed with integers (beginning with zero) and can contain anything.

```js
const technologies = ["HTML", "CSS"];

technologies.length; // 2
technologies[0];     // "HTML"

technologies.push('JS');
technologies.length; // 3
```

Functions such as `map` and `forEach` take callbacks.
```js
technologies.map(s => s.toLowerCase())  // ["html", "css", "js"]

```

-----


## Looping over iterables

It's fine to use the forEach method on arrays and array-like objects.

```js
["HTML", "CSS", "JS"].forEach((item, index) => {            // 1: learn html
  console.log(`${index + 1}: learn ${item.toLowerCase()}`); // 2: learn css
});                                                         // 3: learn js
```

But we can also iterate over a variety of *iterable* objects using [`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) statements.

```js
const elements = document.getElementsByClassName('highlight');

for (const element of elements) {
    element.className = "";
}
```

-----

## Objects

JavaScript is a **prototype-based** language.
Objects are more complicated than they first seem.
However, we will not be covering the gory details in this module.

```js

let article = {
  title: "My article title",
  imageUrl: "images/article1.png",
  text: "Lorem ipsum dolor sit amet, incididunt ut labore et dolore magna aliqua."
}
console.log(article["text"]);
```
Dot notation makes things easier, but imposes some restrictions.

```js
console.log(article.title); // "My article title"

article.newKey = 12;

article['awkward key'] = "allowed, but awkward";
```

-----

## Events

Event-driven code is perfect for developing user interfaces.
Key events (such as `click` and `dblclick`) are triggered on all HTML elements through user interaction.
**Event handlers** are functions that are connected to these events.

Event handlers are just functions that take an **Event** object as an argument.

```js
const toggleHighlighted = (ev) => {
  ev.target.classList.toggle("highlighted");
}
```

To handle an event, the event handler must be registered, usually on an element.

```js
myElement.addEventListener('click', toggleHighlighted);
```

The above pattern is **extremely useful** for triggering interaction using JavaScript.

-----

## Useful references

<div class="flex-list"></div>

- [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
- [Data types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- [JavaScript console](https://developer.mozilla.org/en-US/docs/Web/API/console)
- [alert()](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert)
- [Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
- [Template literals/String interpolation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [if...else and switch](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)
- [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)
- [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)
- [classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
- [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [AddEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [List of common events](https://developer.mozilla.org/en-US/docs/Web/Events)

-----


<div class="center hero">
	<h2>Introduction to JS</h2>

	<div class="flex-center intro">
		<img src="images/html.svg" alt="html logo">
		<img src="images/css.svg" alt="css logo">
		<img src="images/js.svg" alt="js logo">
	</div>

	<p>Share your questions in lab sessions.</p>
	<h3>Dr Graeme Stuart</h3>
	<h4>gstuart@dmu.ac.uk</h4>
</div>
