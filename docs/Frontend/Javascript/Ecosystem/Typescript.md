---
sidebar_position: 1
---

# TypeScript

## Table of Contents

- [Introduction](#introduction)
- [TypeScript Features](#typescript-features)
  - [Static Typing](#static-typing)
  - [Type Inference](#type-inference)
  - [Interfaces](#interfaces)
  - [Type Aliases](#type-aliases)
  - [Generics](#generics)
  - [Enums](#enums)
  - [Advanced Types](#advanced-types)
  - [Decorators](#decorators)
  - [Namespaces and Modules](#namespaces-and-modules)
  - [Type Guards](#type-guards)
- [JavaScript to TypeScript Conversion Exercises](#javascript-to-typescript-conversion-exercises)
- [TypeScript Implementation Exercises](#typescript-implementation-exercises)
- [Resources](#resources)

## Introduction

TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. It adds optional static typing and class-based object-oriented programming to JavaScript. TypeScript is designed for the development of large applications and transcompiles to JavaScript.

## TypeScript Features

### Static Typing

TypeScript adds static typing to JavaScript, allowing you to catch errors during development rather than at runtime.

```typescript
// Basic types
let name: string = "John";
let age: number = 30;
let isActive: boolean = true;
let numbers: number[] = [1, 2, 3];
let tuple: [string, number] = ["John", 30];

// Union types
let id: string | number = "123";
id = 123; // Also valid

// Any type (use sparingly)
let dynamic: any = "Hello";
dynamic = 42; // Valid but not recommended
```

### Type Inference

TypeScript can automatically infer types based on the values you assign.

```typescript
// TypeScript infers the type
let name = "John"; // Type is string
let age = 30; // Type is number
let isActive = true; // Type is boolean

// Array type inference
let numbers = [1, 2, 3]; // Type is number[]
```

### Interfaces

Interfaces define the structure of objects and can be used for type checking.

```typescript
interface User {
  name: string;
  age: number;
  email?: string; // Optional property
  readonly id: number; // Read-only property
}

const user: User = {
  name: "John",
  age: 30,
  id: 1,
};
```

### Type Aliases

Type aliases create new names for types.

```typescript
type Point = {
  x: number;
  y: number;
};

type ID = string | number;

type Callback = (data: string) => void;
```

### Generics

Generics provide a way to make components work with any data type while maintaining type safety.

```typescript
function identity<T>(arg: T): T {
  return arg;
}

// Generic interface
interface Container<T> {
  value: T;
  getValue(): T;
}

// Generic class
class Box<T> {
  private content: T;

  constructor(value: T) {
    this.content = value;
  }

  getValue(): T {
    return this.content;
  }
}
```

### Enums

Enums allow you to define a set of named constants.

```typescript
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

enum Status {
  Active = 1,
  Inactive = 0,
}
```

### Advanced Types

#### Union and Intersection Types

```typescript
// Union type
type StringOrNumber = string | number;

// Intersection type
type Employee = {
  name: string;
  id: number;
};

type Manager = {
  department: string;
};

type ManagerEmployee = Employee & Manager;
```

#### Mapped Types

```typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type Partial<T> = {
  [P in keyof T]?: T[P];
};
```

### Decorators

Decorators are a design pattern that allows you to add behavior to classes and methods.

```typescript
function log(target: any, key: string) {
  console.log(`Decorated ${key}`);
}

class Example {
  @log
  method() {
    // Method implementation
  }
}
```

### Namespaces and Modules

```typescript
// Namespace
namespace Validation {
  export interface StringValidator {
    isValid(s: string): boolean;
  }
}

// Module
export interface StringValidator {
  isValid(s: string): boolean;
}

export class EmailValidator implements StringValidator {
  isValid(s: string): boolean {
    return s.includes("@");
  }
}
```

### Type Guards

Type guards help narrow down types within conditional blocks.

```typescript
function isString(value: any): value is string {
  return typeof value === "string";
}

function processValue(value: string | number) {
  if (isString(value)) {
    // TypeScript knows value is string here
    console.log(value.toUpperCase());
  } else {
    // TypeScript knows value is number here
    console.log(value.toFixed(2));
  }
}
```

## Exercises

### JavaScript to TypeScript Conversion

1. Convert the following JavaScript object to TypeScript with proper types:

```javascript
const user = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Boston",
  },
};
```

```typescript
type User = {
  name: string;
  age: number,
  address {
    street: string,
    city: string,
  }
};
```

2. Convert this JavaScript function to TypeScript:

```javascript
function calculateTotal(items) {
  return items.reduce((total, item) => total + item.price, 0);
}
```

```typescript
type Item = {
  price: number;
};

function calculateTotal(items: Item[]): number {
  return items.reduce((total, item) => total + item.price, 0);
}
```

3. Convert this JavaScript class to TypeScript:

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, I'm ${this.name}`;
  }
}
```

```typescript
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return: `Hello, I'm ${this.name}`;
  }
}

// Usage
const Alice = new Person("Alice", 25);
Alice.greet();
```

4. Convert this JavaScript array method to TypeScript:

```javascript
function findUser(users, id) {
  return users.find((user) => user.id === id);
}
```

```typescript
const User = {
  id: number;
  name: string;
};

// avoid no user in users
function findUser(users: User[], id: number): User | undefiend {
    return users.find((user) => user.id === id);
}

// Usages
const users: User[] = [
    {id: 1, name: "John"},
    {id: 2, name: "Bob"},
]

const result = finUser(users, 2); //get {id: 2, name:"Bob"}
```

5. Convert this JavaScript event handler to TypeScript:

```javascript
function handleClick(event) {
  console.log(event.target.value);
}
```

```typescript
// React
function handleClick(event: React.MouseEvent<HTMLInputElement>) {
  console.log(event.target.value);
}

// HTML-Js
function handleClick(event: MouseEvent) {
  console.log(event.target.value);
}
```

6. Convert this JavaScript API call to TypeScript:

```javascript
async function fetchUser(id) {
  const response = await fetch(`/api/users/${id}`);
  return response.json();
}
```

7. Convert this JavaScript utility function to TypeScript:

```javascript
function formatDate(date) {
  return date.toLocaleDateString();
}
```

8. Convert this JavaScript configuration object to TypeScript:

```javascript
const config = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
  retries: 3,
};
```

9. Convert this JavaScript callback function to TypeScript:

```javascript
function processData(data, callback) {
  const result = data.map((item) => item * 2);
  callback(result);
}
```

10. Convert this JavaScript module to TypeScript:

```javascript
export function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validatePassword(password) {
  return password.length >= 8;
}
```

### TypeScript Implementation Exercises

1. Create a generic Stack class that can work with any data type:

```typescript
// Implement a Stack class with push, pop, and peek methods
```

2. Implement a type-safe event emitter:

```typescript
// Create an EventEmitter class that can handle different event types
```

3. Create a type-safe API client:

```typescript
// Implement a generic API client with proper error handling
```

4. Implement a type-safe state management system:

```typescript
// Create a simple state management system with actions and reducers
```

5. Create a type-safe form validation system:

```typescript
// Implement a form validation system with custom validators
```

6. Implement a type-safe dependency injection container:

```typescript
// Create a simple DI container that can resolve dependencies
```

7. Create a type-safe router:

```typescript
// Implement a simple router with type-safe route definitions
```

8. Implement a type-safe database query builder:

```typescript
// Create a query builder that ensures type safety
```

9. Create a type-safe configuration manager:

```typescript
// Implement a configuration system with type checking
```

10. Implement a type-safe testing framework:

```typescript
// Create a simple testing framework with type-safe assertions
```

## Resources

- [TypeScript Official Documentation](https://www.typescriptlang.org/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
- [TypeScript Design Patterns](https://github.com/torokmark/design_patterns_in_typescript)
