# CTEC3905
##Front-end web development

<div class="flex-center intro">
  <img src="images/html.svg" alt="html logo">
  <img src="images/css.svg" alt="css logo">
  <img src="images/js.svg" alt="js logo">
</div>

## Interacting with JSON APIs

-----

## APIs

The ideal API for our purposes uses the **JSON** format to transfer data and should have good **documentation**.

A few examples:

- [The Star Wars API](https://swapi.dev/documentation)
- [github](https://docs.github.com/en/rest)
- [The Metropolitan Museum of Art](https://metmuseum.github.io/) (used in this weeks lab)
- [wikipedia search API](https://www.mediawiki.org/wiki/API:Search)
- [The Guardian](https://open-platform.theguardian.com/documentation/search)

Some systems require authentication and some are not really very useful.

<div class="smaller"></div>

>In particular, we are interested in a type of API architecture known as *Representative State Transfer* (also knowns as RESTful APIs).

-----

## Understanding API documentation

The [github API](https://docs.github.com/en/rest) is very powerful.
It allows you to do almost anything you can do via the github website, programmatically.
The [github documentation](https://docs.github.com/en/rest/overview/resources-in-the-rest-api#schema) states:

>All API access is over HTTPS, and accessed from [https://api.github.com](https://api.github.com). All data is sent and received as JSON.

It goes on to define *endpoints* for various resources, for example [users](https://docs.github.com/en/rest/reference/users#get-a-user)

```http
GET /users/{username}
```

Piecing it together, the url for a user can be found at:

```http
https://api.github.com/users/{username}
```

Where `{username}` should be replaced by an actual github username.

-----

## JSON

So, we can access [my user record](https://api.github.com/users/ggstuart), or [Dave's](https://api.github.com/users/DaveEveritt).
You should be able to find yours easily enough.

<div class="smaller"></div>

```json
{
  "login": "ggstuart",
  "id": 266805,
  "node_id": "MDQ6VXNlcjI2NjgwNQ==",
  "avatar_url": "https://avatars.githubusercontent.com/u/266805?v=4",
  "html_url": "https://github.com/ggstuart",
  "repos_url": "https://api.github.com/users/ggstuart/repos",
  "type": "User",
  "site_admin": false,
  "name": "Graeme Stuart",
  "company": "@IESD, De Montfort University",
  "location": "Leicester, UK",
  "public_repos": 41,
  "public_gists": 3,
  "followers": 27,
  "following": 9,
  "created_at": "2010-05-06T18:51:06Z",
  "updated_at": "2021-03-09T15:26:35Z"
}
```

The above has been shortened to fit on the slide.

-----

## Using JavaScript

We can get the data using `fetch`.
This code involved resolving two *promises*.

```js
"use strict";

function getUser(username) {
  fetch(`https://api.github.com/users/${username}`).then(response => {
    return response.json();
  }).then(obj => {
    const img = document.createElement('img');
    img.src = obj.avatar_url;
    img.alt = `${obj.login}'s avatar`;
    document.body.appendChild(img);
  });
}

getUser("ggstuart")
getUser("DaveEveritt")

```

Amongst other things, this allows the requests to be made in parallel.

-----

## Using the fetch API

The [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) issues HTTP [requests](https://developer.mozilla.org/en-US/docs/Web/API/Request) and handles HTTP [responses](https://developer.mozilla.org/en-US/docs/Web/API/Response).
The [fetch method](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch) takes one mandatory argument, the path to the resource you want to fetch.
It returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that resolves to a [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) object.

```js
const myPromise = fetch(`https://api.github.com/users/ggstuart`);
// code here continues whilst the request is made
// we don't need to wait for the response
// We can just add handlers using promise.then(), a bit like event listeners
```

Once the response is received, it has methods we can call.
In particular, we are interested in calling the [response.json()](https://developer.mozilla.org/en-US/docs/Web/API/Body/json) method.

Calling `response.json()` also returns a `Promise`.
So its pretty important to understand what a `Promise` is.

-----

## Promises

A [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) represents an asynchronous operation (such as an HTTP request/response).

```js
const myPromise = new Promise((resolve, reject) => {
  if(Math.random() > 0.5)
    resolve("everything is awesome");
  } else {
    reject("can I get an 'f' in the chat");
  }
});
```
A promise will either be *pending*, *resolved* or *rejected*.

But we don't really need to know how to create promises, we need to know how to work with promises.

-----

## Promises manage asynchronous processes

Promises are good for handling asynchronous actions because we can add handlers which are called at an appropriate time, they wait until the task is complete (or fails).

Handlers can be added using the [`then`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) (for success) and [`catch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) (for failure) methods of the `Promise`.

```js
myPromise.then(output => {
  console.log(output);
}).catch(error => {
  console.warn(error);
  console.log("f");
  console.log("f");
});

```

The handlers associated with the promise will not be called until the promise is either resolved or rejected (e.g. the HTTP request returns a response).
Other code can run in the mean time.

-----

## Async/await

The `async` and `await` keywords were added in ECMAScript 2017 to make working with promises a bit easier.
Functions declared as `async` will **always** return a promise.
This means, if we want to access the result, we need to add `then` handlers

```js
async function SumTwoNumbers(a, b) {
  return a + b;
}
SumTwoNumbers(123, 321).then(console.log)
```

*BUT* it also means that we can use the `await` keyword within the function.

```js
async function getUser(username) {
  response = await fetch(`https://api.github.com/users/${username}`);
  return response.json();
}
```

-----

## General patterns

Web APIs allow us to access functionality within external programmable systems by making HTTP requests via JavaScript.

```js
async function getJSON(url) {
  const response = await fetch(url);
  return response.json();
}

async function getObjects() {
  const myList = await getJSON("https://path/to/list/of/things");
  for (const thingId of myList.thingIDs) {
    const thing = await getJSON(`https://path/to/thing/${thingId}`);
    console.log(thing.someProperty);
  });
}

```


-----



## Discovering APIs

<div class="larger"></div>

There are now many, many APIs available on the web and they can be discovered relatively easily if you know what you are looking for.

Try searching for the following:

- "Museum API"
- "Pokemon API"
- "Art gallery API"
- "Weather API"

-----

<div class="center hero">
  <h2>Interacting with JSON APIs</h2>

  <div class="flex-center intro">
    <img src="images/html.svg" alt="html logo">
    <img src="images/css.svg" alt="css logo">
    <img src="images/js.svg" alt="js logo">
  </div>

  <p>Share your questions in lab sessions.</p>
  <h3>Dr Graeme Stuart</h3>
  <h4>gstuart@dmu.ac.uk</h4>
</div>
