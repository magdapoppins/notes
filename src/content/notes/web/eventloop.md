# JS in the browser

## Shortly about JS

- JS is executed in the browser by the V8 chrome runtime
- It is a single threaded language - only one thing can happen in one call stack at a time
- It is non-blocking - implemented by callbacks
- It is concurrent - enabled by WebAPIs
- It is asynchronous

## What happens in the browser

### The V8 runtime

#### The call stack

- Defined what to do one step at a time
- Things are pushed unto the call stack in the order they are read in the code and popped off as they are executed
- Last thing to be added is the first thing to be executed, so if a function calls another function, it is popped before it's calling function is popped
- When an error is thrown in the browser, you can view it's stack trace (the state of the stack as it was when the error was thrown) in the console
- If there are things on the call stack, the browser is stuck (e.g. slow synchronous requests) - this is solved by asynchronous callbacks

#### A memory heap

- A heap for memory allocation in V8

### WebAPIs

- DOM and it's methods like setTimeout, setInterval...
- The browsers built-in XMLHttpRequest object (allowing AJAX)
- For example async things happen here

### The task queue

- Things returned from the above mentioned web APIs are pushed here to wait until the call stack is empty

### The event loop

- When the call stack is empty the event loop runs and pushes things from the callback queue and pushes them unto the stack in the order they were added to the task queue

Based on this, we now understand for example why someone would use this kind of code

```js
setTimeout(() => console.log("hello"), 0);
console.log("I go first!");
```

in order to do something only after the call stack has cleared.
