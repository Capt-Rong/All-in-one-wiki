---
sidebar_position: 1
---

# JavaScript Objects - Guide

## Table of Contents

- [Introduction](#introduction)
- [Creating Objects](#creating-objects)
  - [Object Literal Syntax](#object-literal-syntax)
  - [Constructor Function](#constructor-function)
  - [Object.create()](#objectcreate)
- [Object Properties](#object-properties)
  - [Property Access](#property-access)
  - [Property Descriptors](#property-descriptors)
- [Object Methods](#object-methods)
- [Prototypes and Inheritance](#prototypes-and-inheritance)
  - [Prototype Chain](#prototype-chain)
  - [Modern Class Syntax](#modern-class-syntax)
- [Object Best Practices](#object-best-practices)
- [Common Patterns](#common-patterns)
- [Performance Considerations](#performance-considerations)
- [Common Pitfalls](#common-pitfalls)
- [Exercises](#exercises)
- [Resources](#resources)

## Introduction

Objects are the cornerstone of JavaScript programming. They serve as the primary mechanism for organizing and structuring data in JavaScript applications. At their core, objects are collections of key-value pairs, where each key (also called a property) is a string or Symbol, and each value can be any valid JavaScript data type, including other objects.

The power of objects lies in their flexibility and versatility. They can represent real-world entities, store configuration data, manage application state, and even serve as namespaces for organizing code. Understanding objects is crucial because they form the foundation of many advanced JavaScript concepts, including prototypes, inheritance, and object-oriented programming patterns.

## Creating Objects

### Object Literal Syntax

The object literal syntax is the most straightforward and commonly used way to create objects in JavaScript. It's perfect for creating single instances of objects with predefined properties and methods. The syntax is clean and readable, making it ideal for configuration objects, data transfer objects, and simple data structures.

```javascript
const person = {
  name: "John",
  age: 30,
  isStudent: false,
  address: {
    street: "123 Main St",
    city: "Boston",
  },
  sayHello: function () {
    console.log("Hello!");
  },
};
```

### Constructor Function

Constructor functions are used when you need to create multiple objects with the same structure and behavior. They serve as templates for creating objects and are a fundamental part of JavaScript's object-oriented programming capabilities. When you use the `new` keyword with a constructor function, JavaScript creates a new object and sets its prototype to the constructor's prototype.

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("John", 30);
```

### Object.create()

`Object.create()` provides a more explicit way to create objects with a specific prototype. This method is particularly useful when you want to create objects that inherit from a specific prototype without using constructor functions. It's also the foundation of the prototype chain in JavaScript.

```javascript
const personPrototype = {
  sayHello() {
    console.log("Hello!");
  },
};

const person = Object.create(personPrototype);
person.name = "John";
```

## Object Properties

### Property Access

JavaScript provides two ways to access object properties: dot notation and bracket notation. Dot notation is more concise and commonly used when you know the property name at coding time. Bracket notation is more flexible as it allows you to use variables or expressions to specify the property name.

```javascript
// Dot notation
console.log(person.name);

// Bracket notation
console.log(person["name"]);

// Dynamic property access
const propertyName = "name";
console.log(person[propertyName]);
```

### Property Descriptors

Property descriptors give you fine-grained control over how properties behave. They allow you to define whether a property is writable, enumerable, or configurable. This is particularly useful when creating APIs or when you need to ensure certain properties can't be modified.

```javascript
const obj = {};

Object.defineProperty(obj, "readOnly", {
  value: 42,
  writable: false,
  enumerable: true,
  configurable: false,
});
```

## Object Methods

JavaScript provides several built-in methods for working with objects. These methods make it easier to manipulate objects and their properties.

### Object.keys()

Returns an array of a given object's own enumerable property names.

```javascript
const person = { name: "John", age: 30 };
const keys = Object.keys(person); // ['name', 'age']
```

### Object.values()

Returns an array of a given object's own enumerable property values.

**Usage**

```javascript
const values = Object.values(person); // ['John', 30]
```

**Defintion**

```javascript
// Get all values from an object and return them as an array
function getValues(obj) {
  const values = [];
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      // Check if the property belongs directly to the object (not inherited from prototype)
      values.push(obj[key]);
    }
  }
  return values;
}
```

### Object.entries()

Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.

**Usage**

```javascript
const entries = Object.entries(person); // [['name', 'John'], ['age', 30]]
```

**Definition**

```js
function getEntries(obj) {
  const entries = [];
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      entries.push([key, obj[key]]);
    }
  }
  return entries;
}
```

### Object.assign()

Copies the values of all enumerable own properties from one or more source objects to a target object.

```javascript
const target = { a: 1 };
const source = { b: 2 };
Object.assign(target, source); // { a: 1, b: 2 }
```

## Prototypes and Inheritance

### Prototype Chain

The prototype chain is JavaScript's mechanism for implementing inheritance. When you try to access a property on an object, JavaScript first looks for the property on the object itself. If it's not found, it looks at the object's prototype, and so on up the chain until it either finds the property or reaches the end of the chain.

```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound.`);
};

function Dog(name) {
  Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function () {
  console.log(`${this.name} barks!`);
};
```

### Modern Class Syntax

ES6 introduced the `class` keyword, which provides a more familiar syntax for creating objects and implementing inheritance. Under the hood, classes still use the prototype system, but the syntax is more intuitive for developers coming from other object-oriented languages.

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks!`);
  }
}
```

## Object Best Practices

1. **Use Object Literals for Simple Objects**

   - Prefer object literals for simple data structures
   - Use constructor functions or classes for complex objects with behavior

2. **Property Naming**

   - Use camelCase for property names
   - Use meaningful and descriptive names
   - Consider using Symbols for private properties

3. **Immutability**

   - Use `Object.freeze()` for immutable objects
   - Consider using spread operator for object copies

   ```javascript
   const newObj = { ...originalObj };
   ```

4. **Destructuring**
   ```javascript
   const { name, age } = person;
   ```

## Common Patterns

### Factory Functions

Factory functions are functions that return objects. They're useful when you need to create multiple objects with similar structure but don't want to use constructor functions or classes.

```javascript
function createPerson(name, age) {
  return {
    name,
    age,
    sayHello() {
      console.log(`Hello, I'm ${this.name}`);
    },
  };
}
```

### Module Pattern

The module pattern is a way to create private and public members in an object. It's particularly useful for creating APIs and managing state.

```javascript
const counter = (function () {
  let count = 0;

  return {
    increment() {
      count++;
    },
    getCount() {
      return count;
    },
  };
})();
```

## Performance Considerations

1. **Property Access**

   - Dot notation is slightly faster than bracket notation
   - Cache frequently accessed properties in variables

2. **Object Creation**

   - Use object literals for simple objects
   - Use constructor functions for multiple instances
   - Consider object pooling for frequently created objects

3. **Memory Management**
   - Be aware of circular references
   - Use WeakMap for object metadata
   - Clear object references when no longer needed

## Common Pitfalls

1. **Reference vs Value**

   ```javascript
   const obj1 = { a: 1 };
   const obj2 = obj1; // Reference, not copy
   obj2.a = 2; // Changes obj1.a as well
   ```

2. **this Context**

   ```javascript
   const person = {
     name: "John",
     sayHello: function () {
       console.log(this.name); // 'John'
     },
     sayHelloArrow: () => {
       console.log(this.name); // undefined
     },
   };
   ```

3. **Property Enumeration**
   ```javascript
   // Some properties might not be enumerable
   const obj = Object.create(null, {
     a: { value: 1, enumerable: true },
     b: { value: 2, enumerable: false },
   });
   ```

## Exercises

### Beginner Level

---

1. **[Book Object]**

   📝 **Exercise**: Create an object representing a book with properties for title, author, and year published.

   **🧠 What is it (Feynman)?**

   Creating an object is like creating a box with labeled compartments (properties) for data. Each property stores something specific — like a title or author.

   **⭐️ Key Points**

   • Use object literal syntax `{}`
   • Properties are key-value pairs
   • Easy to structure related data

   **💻 Example:**

   ```typescript
   interface Book {
     title: string;
     author: string;
     publishedYear: number;
   }

   const book: BOOK = {
     title: "An excellent book",
     author: "Adam",
     publishedYear: 2008,
   };
   ```

---

2. **[Get Object Values]**

   📝 **Exercise**: Write a function that takes an object and returns an array of its values.

   **🧠 What is it (Feynman)?**

   You want to collect all the values from a box (object) and look at them. JavaScript gives you `Object.values()` — it peeks inside and gives you a list of all the values.

   **⭐️ Key Points**

   • Use built-in `Object.values()`
   • Works only on enumerable properties

   **💻 Example:**

   ```typescript
   function getObjectValue(obj: Record<string, any>): any[] {
     return Object.values(obj);
   }
   ```

---

3. **[Object with `this` keyword]**

   📝 **Exercise**: Create an object with a method that uses the `this` keyword.

   **🧠 What is it (Feynman)?**

   `this` is a reference to the object currently running the code. Inside a method, `this` lets you talk about other parts of the same object.

   **⭐️ Key Points**

   • `this` in regular functions refers to the surrounding object
   • In arrow functions, `this` does **not** work the same

   **💻 Example:**

   ```ts
   interface Person {
     name: string;
     age: number;
     greeting: () => string;
   }

   const person: Person = {
     name: "Jason",
     age: 18,
     greeting() {
       return `I'm ${this.name}, and I'm ${this.age} years old`;
     },
   };
   ```

   ```ts
   interface Calculator {
     num1: number;
     num2: number;
     getSum: () => number;
     getDiff: () => number;
   }

   const calculator = {
     num1: 10,
     num2: 20,
     getSum() {
       return this.num1 + this.num2;
     },
     getDiff() {
       return this.num1 - this.num2;
     },
   };
   ```

---

4. **[Object with Getter/Setter]**

   📝 **Exercise**: Implement a simple object with getter and setter methods.

   **🧠 What is it (Feynman)?**

   Getters and setters are like doors to a house. You can control who enters or leaves (access/modify) a value. You can add validation or convert units on the fly.

   **⭐️ Key Points**

   • Use `get` to read a computed or private value
   • Use `set` to apply validation before updating

   **💻 Example:**

   ```js
   const temperature = {
     _celsius: 0,
     // 1. Private properties in JavaScript are properties that are intended to be accessed only within the class or object they belong to.
     // 2. While JavaScript doesn't have built-in private properties, developers use naming conventions (like the underscore prefix) or modern features like private class fields (#) to indicate that a property should not be accessed directly from outside the object.

     // Getter for celsius
     get celsius() {
       return this._celsius;
     },

     // Setter for celsius with validation
     set celsius(value) {
       if (value <= 0) {
         throw new Error("Current Temperature is below zero");
       }
       this._celsius = value;
     },
     // Getter for fahrenheit
     get fahrenheit() {
       return (this._celsius * 9) / 5 + 32;
     },
     // Setter for fahrenheit
     set fahrenheit(value) {
       this.celsius = ((value - 32) * 5) / 9;
     },
   };

   temperature.celsius = 30; // set the celsius
   console.log(temperature.celsius); // get the celsius
   console.log(temperature.fahrenheit); // get the fahrenheit
   ```

---

5. **[Computed Property Names]**

   📝 **Exercise**: Create an object that uses computed property names.

   **🧠 What is it (Feynman)?**

   Sometimes, you don’t know the property name in advance. You want to calculate it based on a variable or expression — that's where computed property names come in.

   **⭐️ Key Points**

   • Wrap the key in `[]` inside an object literal
   • You can use variables or expressions to build keys

   **💻 Example:**

   ```js
   // Example 1: Using variables as property names (color)
   const propName = "color";
   const value = "red";

   const palette = {
     [propName]: value,
     [`${propName}Code`]: "FF0000",
   };
   console.log(palette.color); // red
   console.log(palette.colorCode); // FF0000

   // Example 2: Using expressions
   const prefix = "user";
   const user = {
     [`${prefix}Name`]: "John",
     [`${prefix}Age`]: 30,
     [`${prefix}${"Role".toUpperCase()}`]: "Admin", //Role -> ROLE
     [`${prefix}Salary`]() {
       const salary = 300;
       const duration = 25;
       return salary * duration;
     },
   };
   console.log(user.userName); // John
   console.log(user.userAge); // 30
   console.log(user.userROLE); // Admin
   console.log(user.userSalary()); // 7500

   // Example 3: Using method names
   const methodName = "calculate";
   const calculator = {
     [methodName](x, y) {
       return x + y;
     },
   };
   console.log(calculator.calculate(5, 3)); // 8
   ```

   > **What are computed property names?**
   > They let you use a variable or expression as a property name inside an object literal. Just wrap the expression in square brackets `[]`. This is valid JavaScript and works in all modern browsers.

---

### Intermediate Level

6. **[Factory Function with Validation]**

   📝 **Exercise**: Implement a factory function that creates user objects with validation.

   Implement a factory function that creates user objects with validation.

   **🧠 What is it (Feynman)?**

   A factory function is like a machine that builds a new object every time you use it. It returns the object it makes.
   You can put rules (validation) inside to make sure the parts are correct before returning it.

   **⭐️ Key points**

   • No new keyword needed
   • Easily add input validation
   • Return object with methods

   **💡 Hint**

   Use closures and helper functions inside the factory to keep logic organized.

   **💻 Examples:**

   ```js
   function createUser({ username, email }) {
     // helper function to valid email
     function isValidEmail(email) {
       return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
     }

     // validate the user data
     if (!username || !email || !isValidEmail(email)) {
       throw new Error("Invalid user data");
     }

     return {
       username,
       email,
       greet() {
         console.log(`Hi, I'm ${this.username}`);
       },
     };
   }
   ```

7. **[Module Pattern - Private Counter]**

   📝 **Exercise**: Create an object that uses the module pattern to implement a private counter.

   Create an object that uses the module pattern to implement a private counter.

   **🧠 What is it (Feynman)?**

   A module is like a toolbox with tools (functions) that you can use, but you can also **keep some tools hidden (private)**. You use **closures** to create this privacy.

   **⭐️ Key points**

   • Use **IIFE (Immediately Invoked Function Expression)**
   • Private variables inside closure
   • Public methods returned

   **💡 Hint**

   Define private variables inside the function, expose only what you want using return object.

   **💻 Example**

   ```js
   const counter = function () {
     let count = 0; //closure

     return {
       increment() {
         count++;
       },
       getCount() {
         return count;
       },
     };
   };
   ```

8. **[Deep Clone]**

   📝 **Exercise**: Write a function that deep clones an object with nested properties.

   Write a function that deep clones an object with nested properties.

   **🧠 What is it (Feynman)?**

   Cloning an object is like **copying all its properties.** Deep clone means you also copy nested objects, not just the outer layer.
   So changing one **won't affect the other.**

   **⭐️ Key points**

   • Use **recursion** to copy nested objects
   • Handle arrays and objects
   • **Avoid JSON.parse(JSON.stringify(...))** for complex structures (functions, Dates, etc.)

   **💡 Hint**

   Use a helper function to recursively clone each property.

   **💻 Example**

   ```js
   function deepClone(obj) {
     // validate object type and value
     if (typeof obj !== "object" || obj === null) return obj;

     // use a new array to receive data
     const result = Array.isArray(obj) ? [] : {};

     for (let key in obj) {
       result[key] = deepClone(obj[key]);
     }

     return result;
   }
   ```

9. **[Observer Pattern]**

   📝 **Exercise**: Implement an object that uses the observer pattern to notify subscribers of changes.

   Implement an object that uses the observer pattern to notify subscribers of changes.

   **🧠 What is it (Feynman)?**

   Think of it like a newsletter. People (subscribers) sign up. When something changes (event), you notify all of them. It's a way for objects to "talk" without being tightly connected.

   **⭐️ Key points**

   • Store a list of functions (subscribers)
   • Use .subscribe(), .unsubscribe(), .notify()

   **💡 Hint**

   Create an object that manages a list of callbacks and provides methods to manage them.

   **💻 Example**

   ```js
   function createObservable() {
     const observers = [];

     return {
       subscribe(fn) {
         observers.push(fn);
       },

       unsubscribe(fn) {
         const index = observers.indexOf(fn);
         if (index > -1) observers.splice(index, 1);
         //If you don't check this and index is -1
         //you'll remove the last item in the array by mistake (because splice(-1, 1) removes the last element).
       },

       notify(data) {
         observers.forEach((fn) => fn(data)); //go through every subscriber
       },
     };
   }
   // Usage
   const news = createObservable();
   news.subscribe((msg) => console.log(`Subscriber 1: ${msg}`));
   news.notify("New article published!");
   ```

10. **[Singleton Pattern]**

    📝 **Exercise**: Create an object that implements the singleton pattern.

    Create an object that implements the singleton pattern.

    **🧠 What is it (Feynman)?**

    A singleton is like a captain's logbook. No matter how many times you try to get a logbook, there's only ever one.
    It gives the same copy every time.
    • Avoid creating multiple database connections
    • Share state globally without re-instantiating

    **⭐️ Key points**

    • Only one instance exists
    • Use closure or class static properties

    **💡 Hint**

    Create a function or class that checks if an instance already exists before creating a new one.

    **💻 Example (Function Closure)**

    ```js
    const Singleton = (function () {
      // Instance holds the "one-and-only" object
      let instance;

      function createInstance() {
        return { id: Math.random() };
      }
      return {
        getInstance() {
          if (!instance) instance = createInstance();
          return instance;
        },
      };
    })();

    const a = Singleton.getInstance();
    const b = Singleton.getInstance();
    console.log(a === b); //both are the same object (unique)
    ```

### Advanced Level

11. Implement a custom object that acts like an array but with additional methods.
12. Create an object that uses the proxy pattern to implement validation.
13. Implement an object that uses the decorator pattern to add functionality.
14. Create an object that implements the command pattern for undo/redo functionality.
15. Implement an object that uses the strategy pattern for different algorithms.

### Expert Level

16. Create an object that implements the state pattern for a complex state machine.
17. Implement an object that uses the flyweight pattern for memory optimization.
18. Create an object that implements the mediator pattern for complex communication.
19. Implement an object that uses the chain of responsibility pattern.
20. Create an object that implements the template method pattern with hooks.

## Resources

- [MDN Web Docs - Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [JavaScript.info - Objects](https://javascript.info/object)
- [Eloquent JavaScript - Objects](https://eloquentjavascript.net/06_object.html)

```

```
