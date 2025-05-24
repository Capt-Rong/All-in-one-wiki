---
sidebar_position: 1
---

# JavaScript Objects

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

```javascript
const values = Object.values(person); // ['John', 30]
```

### Object.entries()

Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.

```javascript
const entries = Object.entries(person); // [['name', 'John'], ['age', 30]]
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

1. Create an object representing a book with properties for title, author, and year published.
   ```js
   const book = {
     title: "An excellent book",
     author: "Adam",
     publishedYear: 2008,
   };
   ```
2. Write a function that takes an object and returns an array of its values.

   ```js
   function getObjectValue(obj) {
       return(object.value();)
   }
   ```

3. Create an object with a method that uses the `this` keyword.

   > The `this` keyword in JavaScript refers to the object that is currently executing the code.
   > In object methods, **`this`** refers to **the object that owns the method.**
   > This is particularly useful for accessing other properties and methods **within the same object.**

   ```js
   const person = {
     name: "Jason",
     age: 18,
     greeting() {
       return `I'm ${this.name}, and I'm ${this.age} years old`;
     },
   };

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

4. Implement a simple object with getter and setter methods.

   > `Getters` and `setters` are special methods that allow you to define how a property is **accessed (get) or modified (set).**
   > They provide a way to control **access to object properties** and can **add validation or computed values.**

   ```js
   const temperature = {
     _celsius: 0,
     // 1. Private properties in JavaScript are properties that are intended to be accessed only within the class or object they belong to.
     // 2. While JavaScript doesn't have built-in private properties, developers use naming conventions (like the underscore prefix) or modern features like private class fields (#) to indicate that a property should not be accessed directly from outside the object.

     // Getter for celsius
     get celsius() {
       return this.celsius;
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

   temparture.celsius = 30; //set the celsius
   console.log(temparture.celsius); //get the celsius
   console.log(temparture.fahrenheit); //get the fahrenheit
   ```

5. Create an object that uses computed property names.

   > Computed property names allow you to **use expressions as property names** in object literals.
   > They are useful when you need to create property names dynamically or use variables as keys.

   ```js
   // Example 1: Using variables as property names (color)
   const propName = "color";
   const value = "red";

   const palette = {
     [propName]: value,
     [`${propName}Code`]: "FF0000",
   };
   console.log(palette.color);
   console.log(palette.colorCode);

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
   console.log(user.userName);
   console.log(user.userAge);
   console.log(user.userROLE);
   console.log(user.userSalary());

   // Example 3: Using method names
   const methodName = "calculate";
   const calculator = {
     [methodName](x, y) {
       return x + y;
     },
   };
   console.log(calculator.calculate(5, 3)); // 8
   ```

### Intermediate Level

6. Implement a factory function that creates user objects with validation.
7. Create an object that uses the module pattern to implement a private counter.
8. Write a function that deep clones an object with nested properties.
9. Implement an object that uses the observer pattern to notify subscribers of changes.
10. Create an object that implements the singleton pattern.

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
