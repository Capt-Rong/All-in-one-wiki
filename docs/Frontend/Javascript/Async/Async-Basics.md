---
sidebar_position: 1
---

# JavaScript Asynchronous Programming Basics

## Table of Contents

- [Introduction](#introduction)
- [Understanding Synchronous vs Asynchronous](#understanding-synchronous-vs-asynchronous)
- [setTimeout](#settimeout)
- [setInterval](#setinterval)
- [Event Loop Basics](#event-loop-basics)
- [Common Use Cases](#common-use-cases)
- [Exercises](#exercises)
- [Resources](#resources)

## Introduction

Asynchronous programming is a fundamental concept in JavaScript that allows code to run without blocking the main thread. This is crucial for handling operations that take time, such as network requests, file operations, or user interactions. Understanding the basics of asynchronous programming is essential for building responsive web applications.

## Understanding Synchronous vs Asynchronous

### Synchronous Code

```javascript
console.log("First");
console.log("Second");
console.log("Third");
// Output:
// First
// Second
// Third
```

### Asynchronous Code

```javascript
console.log("First");
setTimeout(() => {
  console.log("Second");
}, 1000);
console.log("Third");
// Output:
// First
// Third
// Second (after 1 second)
```

## setTimeout

`setTimeout` is a fundamental asynchronous function that executes a callback function after a specified delay.

### Basic Syntax

```javascript
setTimeout(callback, delay, ...args);
```

### Examples

```javascript
// Basic usage
setTimeout(() => {
  console.log("Hello after 2 seconds");
}, 2000);

// With arguments
setTimeout(
  (name, age) => {
    console.log(`Hello ${name}, you are ${age} years old`);
  },
  1000,
  "John",
  30,
);

// Clearing a timeout
const timeoutId = setTimeout(() => {
  console.log("This won't run");
}, 2000);
clearTimeout(timeoutId);
```

## setInterval

`setInterval` repeatedly executes a callback function at specified time intervals.

### Basic Syntax

```javascript
setInterval(callback, delay, ...args);
```

### Examples

```javascript
// Basic usage
const intervalId = setInterval(() => {
  console.log("Tick");
}, 1000);

// Stop after 5 seconds
setTimeout(() => {
  clearInterval(intervalId);
}, 5000);

// With arguments
setInterval(
  (name) => {
    console.log(`Hello ${name}`);
  },
  1000,
  "John",
);
```

## Event Loop Basics

The Event Loop is JavaScript's mechanism for handling asynchronous operations. It's crucial to understand how it works to write efficient asynchronous code.

### How it Works

1. JavaScript is single-threaded
2. Asynchronous operations are handled by the browser/Node.js
3. Callbacks are queued and executed when the main thread is free

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");
}, 0);

console.log("Middle");

setTimeout(() => {
  console.log("Timeout 2");
}, 0);

console.log("End");

// Output:
// Start
// Middle
// End
// Timeout 1
// Timeout 2
```

## Common Use Cases

### 1. Debouncing

```javascript
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Usage
const debouncedSearch = debounce((query) => {
  console.log(`Searching for: ${query}`);
}, 300);
```

### 2. Throttling

```javascript
function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Usage
const throttledScroll = throttle(() => {
  console.log("Scroll event");
}, 1000);
```

### 3. Animation

```javascript
function animate(element, duration) {
  const start = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - start;
    const progress = Math.min(elapsed / duration, 1);

    element.style.opacity = progress;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}
```

## Exercises

### Beginner Level

1. **[Basic Timer]**

   📝 **Exercise**:

   Create a countdown timer that counts from 10 to 0.

   **🧠 What is it (Feynman)?**

   Think of this as creating a digital countdown clock that updates every second, like a rocket launch countdown.

   **⭐️ Key Points**

   • Use setInterval
   • Handle timer completion
   • Update display
   • Clear interval when done

   **💡 Hint**

   Consider using a variable to track the current count and clear the interval when it reaches zero.

   ```ts
   function countdown(start: number): void {
     let count: number = start;
     let timer: NodeJS.Timeout;

     timer = setInterval((): void => {
       console.log(count);
       count--;

       if (count < 0) {
         clearInterval(timer);
         console.log("Time's up!");
       }
     }, 1000);
   }
   ```

2. **[Delayed Message]**

   📝 **Exercise**:

   Create a function that displays a message after a random delay.

   **🧠 What is it (Feynman)?**

   This is like setting up a surprise message that appears at an unpredictable time, similar to a pop-up notification.

   **⭐️ Key Points**

   • Use setTimeout
   • Generate random delay
   • Handle multiple messages
   • Clear timeouts if needed

   **💡 Hint**

   Consider using Math.random() to generate the delay time.

   ```typescript
   function getDelayedMessage(message: string = "Hello!"): void {
     const randomDelay = Math.floor(Math.random() * 3000); // Random delay between 0-3 seconds

     console.log(`Message will appear in ${randomDelay}ms`);

     const timeoutId = setTimeout(() => {
       console.log(message);
     }, randomDelay);

     return timeoutId; // Return timeout ID for potential cleanup
   }

   // Example usage:
   const timeoutId = getDelayedMessage("Surprise!");
   // To cancel the message:
   // clearTimeout(timeoutId);
   ```

### Intermediate Level

3. **[Stopwatch]**

   📝 **Exercise**: Implement a stopwatch with start, stop, and reset functionality.

   **🧠 What is it (Feynman)?**

   This is like creating a digital stopwatch that can track time precisely, with controls to start, stop, and reset the timer.

   **⭐️ Key Points**

   • Track elapsed time
   • Handle state changes
   • Format time display
   • Manage intervals

   **💡 Hint**

   Consider using a class to manage the stopwatch state and methods.

   ```ts
   class Stopwatch {
     constructor() {
       this.startTime = 0;
       this.elpasedTime = 0;
       this.timer = null;
     }
     start() {
       this.startTime = Date.now() - this.elpasedTime; //reset
       this.timer = setInterval(() => {
         this.elpasedTime = Date.now() - this.startTime;
         console.log(this.formatTime(this.elapasedTime));
       }, 10);
     }
     stop() {
       clearInterval(this.timer);
     }
     reset() {
       clearInterval(this.timer);
       this.elpasedTime = 0;
       console.log(this.formatTime(0));
     }
     formatTime(ms) {
       const minutes = Math.floor(ms / 60000);
       const seconds = Math.floor((ms % 60000) / 1000);
       const milliseconds = Math.floor((ms % 60000) / 10);
       return `${minutes}min:${seconds}sec:${milliseconds}ms`;
     }
   }
   ```

## Resources

- [MDN Web Docs - setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)
- [MDN Web Docs - setInterval](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)
- [JavaScript.info - Event Loop](https://javascript.info/event-loop)
- [Philip Roberts: What the heck is the event loop anyway?](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
