# CTEC3905
##Front-end web development

<div class="flex-center intro">
  <img src="images/html.svg" alt="html logo">
  <img src="images/css.svg" alt="css logo">
  <img src="images/js.svg" alt="js logo">
</div>

## Getting user input

-----

## The `<input>` element


Getting user input is largely handled by the `<input>` element.
`<input>` elements are **inline** and **void** (i.e. they have no content and don't need closing tags).
The `<input>` element is extremely versatile, we will only cover some of the basics.
The element attributes are used to change its behaviour.

<div class="large"></div>

The default `<input>` is a text input like this: <input>
```html
<input>
```

Adding placeholder text is easy: <input placeholder="enter your name">

```html
<input placeholder="enter your name">
```

-----

## The `<label>` element

For accessibility, `<input>` elements should have an associated `<label>` element.

```html
<label for="username">User name:</label>
<input id="username">
```
<label for="username">User name:</label>
<input id="username">

In some use cases, you may not want/need a visible `<label>`.
In this case, you can use an `aria-label` attribute.

```html
<input type="text" aria-label="search" placeholder="search">
<button type="submit">Search</button>
```
<input aria-label="search" placeholder="search">
<button>Search</button>

Make sure you handle accessibility, this is part of the marking criteria.

-----

## Input types

By default `<input>` elements are generic text fields but they can be modified with the `type` attribute.
There are many input field types available. Some of these were introduced with HTML5.

```html
<label for="default">default: </label> <input id="default"><br>
<label for="number">number: </label> <input id="number" type="number"><br>
<label for="range">range: </label> <input id="range" type="range"><br>
<label for="color">color: </label> <input id="color" type="color"><br>
```

<div class="large"></div>

<label for="default">default: </label> <input id="default"><br>
<label for="number">number: </label> <input id="number" type="number"><br>
<label for="range">range: </label> <input id="range" type="range"><br>
<label for="color">color: </label> <input id="color" type="color"><br>

-----

## The `value` attribute

Some input field types have a default value, others don't.
For most input types, setting the `value` attribute will initialise the input field with data.

```html
<label for="input1">A text input: </label>
<input id="input1" value="with a default value"><br>
<label for="input2">A color input: </label>
<input id="input2" value="#dd3399" type="color"><br>
<label for="input3">A date input: </label>
<input id="input3" value="2021-01-01" type="date"><br>
```
<label for="input1">A text input: </label>
<input id="input1" value="with a default value"><br>
<label for="input2">A color input: </label>
<input id="input2" value="#33dd99" type="color"><br>
<label for="input3">A date input: </label>
<input id="input3" value="2021-01-01" type="date"><br>


-----


## Forms and fieldsets

Though not obligatory, `<input>` elements are often found nested inside `<form>` elements.
`<form>` elements are most commonly used to submit data to a server via HTTP.
As such they are not covered in detail in this module.
We can use `<fieldset>` elements to organise `<inputs>` into groups.

```html
<form action="login.html" method="post">
  <fieldset>
    <legend>Sign in</legend>
    <label for="username">Username: </label>
    <input id="username" name="username" required>
    <label for="password">Password: </label>
    <input id="password" name="password" type="password" required>
    <input type="submit">
  </fieldset>
</form>
```
<form action="login.html" method="post">
  <fieldset>
    <legend>Sign in</legend>
    <label for="username">Username: </label>
    <input id="username" name="username" required>
    <label for="password">Password: </label>
    <input id="password" name="password" type="password" required>
    <input type="submit">
  </fieldset>
</form>
</form>

-----


## More input types

Getting dates and times.

```html
<label for="date">date: </label> <input id="date" type="date"><br>
<label for="time">time: </label> <input id="time" type="time"><br>
<label for="datetime-local">datetime-local: </label> <input id="datetime-local" type="datetime-local"><br>
<label for="month">month: </label> <input id="month" type="month"><br>
```

<div class="large"></div>

<label for="date">date: </label> <input id="date" type="date"><br>
<label for="time">time: </label> <input id="time" type="time"><br>
<label for="datetime-local">datetime-local: </label> <input id="datetime-local" type="datetime-local"><br>
<label for="month">month: </label> <input id="month" type="month"><br>

-----

## Boolean data

Use checkboxes for boolean data.
Initialise the checkbox value in the `checked` attribute (0 by default).

```html
<label for="a">Option A:</label> <input id="a" type="checkbox"><br>
<label for="b">Option B:</label> <input id="b" type="checkbox"><br>
<label for="c">Option C:</label> <input id="c" type="checkbox" checked="1"><br>
<label for="d">Option D:</label> <input id="d" type="checkbox">
```
<div class="large"></div>

<label for="a">Option A:</label> <input id="a" type="checkbox"><br>
<label for="b">Option B:</label> <input id="b" type="checkbox"><br>
<label for="c">Option C:</label> <input id="c" type="checkbox" checked="1"><br>
<label for="d">Option D:</label> <input id="d" type="checkbox">

-----

## Categorical data

Radio buttons need to be grouped using the `name` attribute.

```html
<label for="e">Option E:</label> <input id="e" name="options" type="radio"><br>
<label for="f">Option F:</label> <input id="f" name="options" type="radio"><br>
<label for="g">Option G:</label> <input id="g" name="options" type="radio" checked="1"><br>
<label for="h">Option H:</label> <input id="h" name="options" type="radio">
```
<div class="large"></div>
<label for="e">Option E:</label> <input id="e" name="options" type="radio"><br>
<label for="f">Option F:</label> <input id="f" name="options" type="radio"><br>
<label for="g">Option G:</label> <input id="g" name="options" type="radio" checked="1"><br>
<label for="h">Option H:</label> <input id="h" name="options" type="radio">


-----

## Input validation

Validation used to be really annoying, now its easy.

Inputs with `type="tel"`, `type="url"` and `type="email"` provide basic checking which is detected by the pseudo-classes `:valid` and `:invalid`.

```html
<label for="phone">Enter your phone number:</label>
<input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"><br>
<label for="email">email: </label>
<input id="email" type="email">
```

We can also add the `required` attribute to activate the `:invalid` state on empty values.

<form class="validation-demo">
  <label for="phone">Tel:</label>
  <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}">
  <input type="submit">
</form>
<form class="validation-demo">
  <label for="email">email: </label>
  <input id="email" type="email">
  <input type="submit">
</form>

Forms will only submit when all inputs are valid.
They also have the same pseudo-classes so can also be styled.

-----

## Accessing input data with JavaScript

Given input elements in the page, you will often want to access the user input via javascript.

```html
<label for="myInput">Input: </label> <input id="myInput" value="some value">
<label for="myCheckbox1">Option A: </label> <input id="myCheckbox1" type="checkbox" checked="1">
<label for="myCheckbox2">Option A: </label> <input id="myCheckbox2" type="checkbox">
```

<label for="myInput">Input: </label> <input id="myInput" value="some value">
<label for="myCheckbox1">Option A: </label> <input id="myCheckbox1" type="checkbox" checked="1">
<label for="myCheckbox2">Option B: </label> <input id="myCheckbox2" type="checkbox">

For most cases you will only need to access the `value` property or the `checked` property.
These can be easily accessed and set with JavaScript.


```js
console.log(myInput.value);       // "some value"
console.log(myCheckbox1.checked); // true
console.log(myCheckbox2.checked); // false
```

-----

## Events

The most important events to remember are:


<label for="myInputInput">Data: </label> <input type="range" id="myInputInput">

The `input` event is triggered when user interacts with an input element <span id="myInputOutput">50</span><br>
```js
// update on every keypress
myInput.addEventListener('input', ev => {
  myInputOutput.textContent = myInput.value;
});
```

The `change` event is triggered when focus moves away and a new value is set <span id="myChangeOutput">50</span>
```js
// update when finished editing
myInput.addEventListener('change', ev => {
  myChangeOutput.textContent = myInput.value;
});
```


-----


<div class="center hero">
  <h2>Getting user input</h2>

  <div class="flex-center intro">
    <img src="images/html.svg" alt="html logo">
    <img src="images/css.svg" alt="css logo">
    <img src="images/js.svg" alt="js logo">
  </div>

  <p>Share your questions in lab sessions.</p>
  <h3>Dr Graeme Stuart</h3>
  <h4>gstuart@dmu.ac.uk</h4>
</div>
