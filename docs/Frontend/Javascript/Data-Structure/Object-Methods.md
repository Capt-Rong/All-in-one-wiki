---
sidebar_position: 2
---

# JavaScript Object - Methods

## Table of Contents

- [Introduction](#introduction)
- [Basic CRUD Operations](#basic-crud-operations)
  - [Create (Adding Properties)](#create-adding-properties)
  - [Read (Accessing Properties)](#read-accessing-properties)
  - [Update (Modifying Properties)](#update-modifying-properties)
  - [Delete (Removing Properties)](#delete-removing-properties)
- [Object Property Descriptors](#object-property-descriptors)
- [Object Methods for Property Management](#object-methods-for-property-management)
- [Object Transformation Methods](#object-transformation-methods)
- [Object Comparison and Equality](#object-comparison-and-equality)
- [Object Freezing and Sealing](#object-freezing-and-sealing)
- [Exercises](#exercises)
- [Resources](#resources)

## Introduction

Object methods in JavaScript provide powerful ways to manipulate and interact with objects. Understanding these methods is crucial for effective object-oriented programming in JavaScript. This guide covers the essential methods for creating, reading, updating, and deleting object properties, as well as advanced object manipulation techniques.

## Basic CRUD Operations

### Create (Adding Properties)

There are several ways to add properties to an object:

```javascript
// 1. Direct assignment
const person = {};
person.name = "John";

// 2. Object literal
const person = {
  name: "John",
  age: 30,
};

// 3. Object.defineProperty
Object.defineProperty(person, "name", {
  value: "John",
  writable: true,
  enumerable: true,
  configurable: true,
});

// 4. Object.defineProperties
Object.defineProperties(person, {
  name: {
    value: "John",
    writable: true,
  },
  age: {
    value: 30,
    writable: true,
  },
});
```

### Read (Accessing Properties)

Multiple ways to access object properties:

```javascript
const person = {
  name: "John",
  age: 30,
  "favorite-color": "blue",
};

// 1. Dot notation
console.log(person.name); // 'John'

// 2. Bracket notation
console.log(person["age"]); // 30
console.log(person["favorite-color"]); // 'blue'

// 3. Object destructuring
const { name, age } = person;
console.log(name, age); // 'John' 30

// 4. Object.values()
const values = Object.values(person);
console.log(values); // ['John', 30, 'blue']

// 5. Object.entries()
const entries = Object.entries(person);
console.log(entries); // [['name', 'John'], ['age', 30], ['favorite-color', 'blue']]
```

### Update (Modifying Properties)

Different methods to update object properties:

```javascript
const person = {
  name: "John",
  age: 30,
};

// 1. Direct assignment
person.age = 31;

// 2. Object.assign()
Object.assign(person, { age: 31, city: "New York" });

// 3. Spread operator
const updatedPerson = { ...person, age: 31, city: "New York" };

// 4. Object.defineProperty
Object.defineProperty(person, "age", {
  value: 31,
  writable: true,
});
```

### Delete (Removing Properties)

Ways to remove properties from objects:

```javascript
const person = {
  name: "John",
  age: 30,
  city: "New York",
};

// 1. delete operator
delete person.age;

// 2. Object destructuring with rest
const { age, ...personWithoutAge } = person;

// 3. Creating new object without specific properties
const newPerson = Object.fromEntries(
  Object.entries(person).filter(([key]) => key !== "age"),
);
```

## Object Property Descriptors

Property descriptors provide fine-grained control over object properties:

```javascript
const person = {};

Object.defineProperty(person, "name", {
  value: "John",
  writable: true, // Can be changed
  enumerable: true, // Shows up in for...in loops
  configurable: true, // Can be deleted or redefined
});

// Get property descriptor
const descriptor = Object.getOwnPropertyDescriptor(person, "name");
console.log(descriptor);
// {
//     value: 'John',
//     writable: true,
//     enumerable: true,
//     configurable: true
// }
```

## Object Methods for Property Management

### Object.keys()

Returns an array of a given object's own enumerable property names.

```javascript
const person = {
  name: "John",
  age: 30,
};

const keys = Object.keys(person);
console.log(keys); // ['name', 'age']
```

### Object.values()

Returns an array of a given object's own enumerable property values.

```javascript
const values = Object.values(person);
console.log(values); // ['John', 30]
```

### Object.entries()

Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.

```javascript
const entries = Object.entries(person);
console.log(entries); // [['name', 'John'], ['age', 30]]
```

### Object.fromEntries()

Transforms a list of key-value pairs into an object.

```javascript
const entries = [
  ["name", "John"],
  ["age", 30],
];
const person = Object.fromEntries(entries);
console.log(person); // { name: 'John', age: 30 }
```

## Object Transformation Methods

### Object.assign()

Copies the values of all enumerable own properties from one or more source objects to a target object.

```javascript
const target = { a: 1 };
const source1 = { b: 2 };
const source2 = { c: 3 };

Object.assign(target, source1, source2);
console.log(target); // { a: 1, b: 2, c: 3 }
```

### Spread Operator

Creates a new object by spreading the properties of existing objects.

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const combined = { ...obj1, ...obj2 };
console.log(combined); // { a: 1, b: 2, c: 3, d: 4 }
```

## Object Comparison and Equality

### Object.is()

Determines whether two values are the same value.

```javascript
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(+0, -0)); // false
console.log(Object.is(5, 5)); // true
```

### Deep Comparison

Custom function for deep object comparison:

```javascript
function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true;

  if (
    typeof obj1 !== "object" ||
    obj1 === null ||
    typeof obj2 !== "object" ||
    obj2 === null
  ) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  return keys1.every(
    (key) => keys2.includes(key) && deepEqual(obj1[key], obj2[key]),
  );
}
```

## Object Freezing and Sealing

### Object.freeze()

Freezes an object, making it immutable.

```javascript
const person = {
  name: "John",
  age: 30,
};

Object.freeze(person);
person.age = 31; // Fails silently in non-strict mode
console.log(person.age); // 30
```

### Object.seal()

Seals an object, preventing new properties from being added and marking all existing properties as non-configurable.

```javascript
const person = {
  name: "John",
  age: 30,
};

Object.seal(person);
person.city = "New York"; // Fails silently in non-strict mode
person.age = 31; // Works
console.log(person); // { name: 'John', age: 31 }
```

## Exercises

### Beginner Level

1. **[Object Property Creation]**

   📝 **Exercise**:

   Create an object and add three properties using different methods.

   **🧠 What is it (Feynman)?**

   Think of an object as a container where you can store different types of information. Adding properties is like putting labeled items into this container. There are multiple ways to do this, just like there are different ways to organize items in a box.

   **⭐️ Key Points**

   - Use direct assignment
   - Use object literal syntax
   - Use Object.defineProperty
   - Use Object.defineProperties

   **💡 Hint**

   Try using different methods for each property to demonstrate variety.

   **💻 Example:**

   ```javascript
   const person = {};

   // Method 1: Direct assignment
   person.name = "John";

   // Method 2: Object.defineProperty
   Object.defineProperty(person, "age", {
     value: 30,
     writable: true,
   });

   // Method 3: Object.defineProperties
   Object.defineProperties(person, {
     city: {
       value: "New York",
       writable: true,
     },
   });
   ```

   ```typescript
   interface Person {
     name: string;
     age: {
       value: number;
       writable: boolean;
     };
     city: {
       value: string;
       writable: boolean;
     };
   }

   const person: Person = {};

   // Method 1: Direct assignment
   person.name = "Jason";

   // Method 2: Object.defineProperty
   Object.defineProperty(person, "age", {
     value: 30,
     writable: true,
   });

   // Method 3: Object.defineProperties
   Object.defineProperties(person, {
     city: {
       value: "New York",
       writable: true,
     },
   });

   console.log(person);
   /* {
    name: "Jason",
    age: 30,
    city: "New York"
   } */
   ```

2. **[Property Names Collector]**

   📝 **Exercise**:

   Write a function that returns all property names of an object.

   **🧠 What is it (Feynman)?**

   Imagine you have a box with labeled compartments. This exercise is like creating a list of all the labels without looking at what's inside each compartment.

   **⭐️ Key Points**

   - Use Object.keys()
   - Handle non-enumerable properties
   - Consider prototype chain

   **💡 Hint**

   Think about whether you want to include inherited properties or just own properties.

   **💻 Example:**

   ```typescript
   function getAllPropertyNames(obj: object): string[] {
     // Get own property names
     const ownProps: string[] = Object.keys(obj);

     // Get prototype property names
     const protoProps: string[] = Object.keys(Object.getPrototypeOf(obj));

     return [...ownProps, ...protoProps];
   }
   ```

3. **[Bulk Property Updater]**

   📝 **Exercise**:

   Create a function that updates multiple properties of an object at once.

   **🧠 What is it (Feynman)?**

   This is like having a form where you can update multiple fields at once, rather than changing them one by one. It's more efficient and ensures all changes happen together.

   **⭐️ Key Points**

   • Use Object.assign()
   • Use spread operator
   • Handle nested updates
   • Preserve existing properties

   **💡 Hint**

   Consider whether you want to modify the original object or create a new one.

   **💻 Example:**

   ```typescript
   function updateProperties<T extends object>(obj: T, updates: Partial<T>): T {
     // Method 1: Modify original
     Object.assign(obj, updates);

     // Method 2: Create new object
     return { ...obj, ...updates };
   }
   ```

4. **[Property Remover]**

   📝 **Exercise**: Implement a function that removes a property from an object.

   **🧠 What is it (Feynman)?**

   Think of this as removing a labeled compartment from your container. You need to make sure you remove it completely without affecting other compartments.

   **⭐️ Key Points**

   • Use delete operator
   • Use object destructuring
   • Handle non-configurable properties
   • Consider immutability

   **💡 Hint**

   Think about whether you want to modify the original object or return a new one without the property.

   **💻 Example:**

   ```javascript
   function removeProperty(obj, prop) {
     // Method 1: Delete operator
     delete obj[prop];

     // Method 2: Destructuring
     const { [prop]: removed, ...rest } = obj;
     return rest;
   }
   ```

5. **[Property Checker]**

   📝 **Exercise**: Write a function that checks if an object has a specific property.

   **🧠 What is it (Feynman)?**

   This is like checking if a specific labeled compartment exists in your container. You need to look for the label, not what's inside.

   **⭐️ Key Points**

   • Use hasOwnProperty()
   • Use in operator
   • Check enumerable properties
   • Consider prototype chain

   **💡 Hint**

   Think about whether you want to check for own properties only or include inherited ones.

   **💻 Example:**

   ```javascript
   function hasProperty(obj, prop) {
     // Method 1: hasOwnProperty
     return obj.hasOwnProperty(prop);

     // Method 2: in operator
     return prop in obj;

     // Method 3: Object.hasOwn
     return Object.hasOwn(obj, prop);
   }
   ```

### Intermediate Level

6. **[Deep Cloner]**

   📝 **Exercise**: Create a function that deep clones an object with nested properties.

   **🧠 What is it (Feynman)?**

   This is like creating a complete copy of a container, including all nested containers inside it. When you modify the copy, the original remains unchanged.

   **⭐️ Key Points**

   • Handle nested objects
   • Handle arrays
   • Handle circular references
   • Preserve object types

   **💡 Hint**

   Use recursion to handle nested structures and a Map to handle circular references.

   **💻 Example:**

   ```javascript
   function deepClone(obj, hash = new Map()) {
     if (hash.has(obj)) return hash.get(obj);

     if (typeof obj !== "object" || obj === null) return obj;

     const clone = Array.isArray(obj) ? [] : {};
     hash.set(obj, clone);

     for (let key in obj) {
       clone[key] = deepClone(obj[key], hash);
     }

     return clone;
   }
   ```

7. **[Object Merger]**

   📝 **Exercise**: Implement a function that merges two objects without modifying the originals.

   **🧠 What is it (Feynman)?**

   This is like combining two containers into a new one, making sure not to damage the original containers. It's like creating a new container that has all the items from both containers.

   **⭐️ Key Points**

   • Create new object
   • Handle nested properties
   • Handle property conflicts
   • Preserve object types

   **💡 Hint**

   Consider using the spread operator or Object.assign() with an empty object as the target.

   **💻 Example:**

   ```javascript
   function mergeObjects(obj1, obj2) {
     // Method 1: Spread operator
     return { ...obj1, ...obj2 };

     // Method 2: Object.assign
     return Object.assign({}, obj1, obj2);

     // Method 3: Deep merge
     return deepMerge({}, obj1, obj2);
   }
   ```

8. **[Object to Array Converter]**

   📝 **Exercise**: Write a function that converts an object to an array of [key, value] pairs.

   **🧠 What is it (Feynman)?**

   This is like taking all the labeled compartments from your container and arranging them in a list, where each item shows both the label and what's inside.

   **⭐️ Key Points**

   • Use Object.entries()
   • Handle non-enumerable properties
   • Preserve order
   • Handle nested objects

   **💡 Hint**

   Consider whether you want to flatten nested objects or keep them as is.

   **💻 Example:**

   ```javascript
   function objectToArray(obj) {
     // Method 1: Object.entries
     return Object.entries(obj);

     // Method 2: Manual conversion
     return Object.keys(obj).map((key) => [key, obj[key]]);
   }
   ```

9. **[Property Filter]**

   📝 **Exercise**: Create a function that filters object properties based on a condition.

   **🧠 What is it (Feynman)?**

   This is like going through your container and keeping only the compartments that meet certain criteria. It's like sorting items based on a rule.

   **⭐️ Key Points**

   • Use Object.entries()
   • Use filter()
   • Handle nested properties
   • Preserve object structure

   **💡 Hint**

   Consider whether the condition should apply to keys, values, or both.

   **💻 Example:**

   ```javascript
   function filterProperties(obj, condition) {
     return Object.fromEntries(
       Object.entries(obj).filter(([key, value]) => condition(key, value)),
     );
   }
   ```

10. **[Value Transformer]**

    📝 **Exercise**: Implement a function that transforms object values using a callback.

    **🧠 What is it (Feynman)?**

    This is like having a machine that can modify the contents of each compartment in your container according to specific rules.

    **⭐️ Key Points**

    • Use Object.entries()
    • Use map()
    • Handle nested values
    • Preserve keys

    **💡 Hint**

    Consider whether the transformation should be applied recursively to nested objects.

    **💻 Example:**

    ```javascript
    function transformValues(obj, transformer) {
      return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [
          key,
          typeof value === "object" && value !== null
            ? transformValues(value, transformer)
            : transformer(value),
        ]),
      );
    }
    ```

### Advanced Level

11. **[Property Validator]**

    📝 **Exercise**: Create a function that implements object property validation.

    **🧠 What is it (Feynman)?**

    This is like having a security guard that checks if each item being added to your container meets certain requirements before allowing it in.

    **⭐️ Key Points**

    • Define validation rules
    • Handle nested properties
    • Provide error messages
    • Support custom validators

    **💡 Hint**

    Consider using a schema-like structure to define validation rules.

    **💻 Example:**

    ```javascript
    function createValidator(schema) {
      return function validate(obj) {
        const errors = [];

        for (const [key, rules] of Object.entries(schema)) {
          if (rules.required && !(key in obj)) {
            errors.push(`${key} is required`);
          }
          if (key in obj && rules.type && typeof obj[key] !== rules.type) {
            errors.push(`${key} must be of type ${rules.type}`);
          }
        }

        return errors;
      };
    }
    ```

12. **[Change Tracker]**

    📝 **Exercise**: Implement a function that tracks changes to an object's properties.

    **🧠 What is it (Feynman)?**

    This is like having a security camera that records every time someone adds, removes, or modifies items in your container.

    **⭐️ Key Points**

    • Use Proxy
    • Track property changes
    • Store change history
    • Handle nested changes

    **💡 Hint**

    Consider using a Proxy to intercept property access and modifications.

    **💻 Example:**

    ```javascript
    function createChangeTracker(obj) {
      const changes = [];

      return new Proxy(obj, {
        set(target, prop, value) {
          changes.push({
            property: prop,
            oldValue: target[prop],
            newValue: value,
            timestamp: new Date(),
          });
          target[prop] = value;
          return true;
        },
        get(target, prop) {
          if (prop === "getChanges") {
            return () => changes;
          }
          return target[prop];
        },
      });
    }
    ```

13. **[Immutable Object with History]**

    📝 **Exercise**: Write a function that creates an immutable object with a history of changes.

    **🧠 What is it (Feynman)?**

    This is like having a container that creates a new copy every time you want to change something, keeping track of all previous versions.

    **⭐️ Key Points**

    • Use Object.freeze()
    • Store version history
    • Implement undo/redo
    • Handle nested immutability

    **💡 Hint**

    Consider using a version control system-like approach to track changes.

    **💻 Example:**

    ```javascript
    function createImmutableObject(initialState) {
      let history = [Object.freeze({ ...initialState })];
      let currentVersion = 0;

      return {
        get current() {
          return history[currentVersion];
        },
        update(updater) {
          const newState = Object.freeze({
            ...history[currentVersion],
            ...updater(history[currentVersion]),
          });
          history = history.slice(0, currentVersion + 1);
          history.push(newState);
          currentVersion++;
          return newState;
        },
        undo() {
          if (currentVersion > 0) {
            currentVersion--;
            return history[currentVersion];
          }
        },
        redo() {
          if (currentVersion < history.length - 1) {
            currentVersion++;
            return history[currentVersion];
          }
        },
      };
    }
    ```

14. **[Dependency Tracker]**

    📝 **Exercise**: Create a function that implements object property dependency tracking.

    **🧠 What is it (Feynman)?**

    This is like having a system that knows when one item in your container depends on another, and automatically updates related items when one changes.

    **⭐️ Key Points**

    • Define dependencies
    • Track changes
    • Update dependent properties
    • Handle circular dependencies

    **💡 Hint**

    Consider using a directed graph to represent dependencies between properties.

    **💻 Example:**

    ```javascript
    function createDependencyTracker(obj, dependencies) {
      const proxy = new Proxy(obj, {
        set(target, prop, value) {
          target[prop] = value;
          if (dependencies[prop]) {
            dependencies[prop].forEach((dep) => {
              if (typeof dep === "function") {
                target[dep] = dep(target);
              }
            });
          }
          return true;
        },
      });

      return proxy;
    }
    ```

15. **[Property Access Proxy]**

    📝 **Exercise**: Implement a function that creates a proxy for object property access.

    **🧠 What is it (Feynman)?**

    This is like having a security guard that controls who can access what in your container, and can modify or validate access attempts.

    **⭐️ Key Points**

    • Use Proxy
    • Control property access
    • Add access logging
    • Implement access control

    **💡 Hint**

    Consider implementing different access levels for different properties.

    **💻 Example:**

    ```javascript
    function createAccessProxy(obj, accessControl) {
      return new Proxy(obj, {
        get(target, prop) {
          if (accessControl[prop]?.readable) {
            return target[prop];
          }
          throw new Error(`Property ${prop} is not readable`);
        },
        set(target, prop, value) {
          if (accessControl[prop]?.writable) {
            target[prop] = value;
            return true;
          }
          throw new Error(`Property ${prop} is not writable`);
        },
      });
    }
    ```

### Expert Level

16. **[Property Versioning]**

    📝 **Exercise**: Create a function that implements object property versioning.

    **🧠 What is it (Feynman)?**

    This is like having a time machine for your container, where you can see how each item looked at different points in time.

    **⭐️ Key Points**

    • Track property versions
    • Store version history
    • Support version comparison
    • Handle version conflicts

    **💡 Hint**

    Consider using a version control system-like approach for individual properties.

    **💻 Example:**

    ```javascript
    function createVersionedObject(initialState) {
      const versions = new Map();
      let currentVersion = 0;

      function saveVersion(obj) {
        versions.set(currentVersion, JSON.parse(JSON.stringify(obj)));
        currentVersion++;
      }

      saveVersion(initialState);

      return {
        get current() {
          return versions.get(currentVersion - 1);
        },
        getVersion(version) {
          return versions.get(version);
        },
        update(updater) {
          const newState = {
            ...versions.get(currentVersion - 1),
            ...updater(versions.get(currentVersion - 1)),
          };
          saveVersion(newState);
          return newState;
        },
      };
    }
    ```

17. **[Computed Properties]**

    📝 **Exercise**: Implement a function that creates an object with computed properties.

    **🧠 What is it (Feynman)?**

    This is like having a container where some compartments automatically calculate their contents based on other compartments.

    **⭐️ Key Points**

    • Define computed properties
    • Handle dependencies
    • Cache computed values
    • Update on dependency change

    **💡 Hint**

    Consider using getters and setters with a dependency tracking system.

    **💻 Example:**

    ```javascript
    function createComputedObject(base, computed) {
      const cache = new Map();

      return new Proxy(base, {
        get(target, prop) {
          if (prop in computed) {
            if (!cache.has(prop)) {
              cache.set(prop, computed[prop](target));
            }
            return cache.get(prop);
          }
          return target[prop];
        },
        set(target, prop, value) {
          target[prop] = value;
          cache.clear();
          return true;
        },
      });
    }
    ```

18. **[Access Control]**

    📝 **Exercise**: Write a function that implements object property access control.

    **🧠 What is it (Feynman)?**

    This is like having a security system that controls who can access what in your container, with different levels of access for different users.

    **⭐️ Key Points**

    • Define access levels
    • Implement role-based access
    • Handle nested properties
    • Log access attempts

    **💡 Hint**

    Consider implementing a role-based access control (RBAC) system.

    **💻 Example:**

    ```javascript
    function createAccessControlledObject(obj, accessControl) {
      return new Proxy(obj, {
        get(target, prop) {
          const user = accessControl.currentUser;
          const permissions = accessControl.permissions[user];

          if (!permissions?.read?.includes(prop)) {
            throw new Error(`User ${user} cannot read ${prop}`);
          }

          return target[prop];
        },
        set(target, prop, value) {
          const user = accessControl.currentUser;
          const permissions = accessControl.permissions[user];

          if (!permissions?.write?.includes(prop)) {
            throw new Error(`User ${user} cannot write ${prop}`);
          }

          target[prop] = value;
          return true;
        },
      });
    }
    ```

19. **[Change Notifications]**

    📝 **Exercise**: Create a function that implements object property change notifications.

    **🧠 What is it (Feynman)?**

    This is like having a notification system that alerts interested parties whenever something changes in your container.

    **⭐️ Key Points**

    • Implement observer pattern
    • Support multiple subscribers
    • Handle nested changes
    • Provide change details

    **💡 Hint**

    Consider combining the observer pattern with a Proxy.

    **💻 Example:**

    ```javascript
    function createObservableObject(obj) {
      const observers = new Map();

      return new Proxy(obj, {
        set(target, prop, value) {
          const oldValue = target[prop];
          target[prop] = value;

          if (observers.has(prop)) {
            observers.get(prop).forEach((callback) => {
              callback(value, oldValue);
            });
          }

          return true;
        },
        get(target, prop) {
          if (prop === "subscribe") {
            return (property, callback) => {
              if (!observers.has(property)) {
                observers.set(property, new Set());
              }
              observers.get(property).add(callback);
            };
          }
          if (prop === "unsubscribe") {
            return (property, callback) => {
              if (observers.has(property)) {
                observers.get(property).delete(callback);
              }
            };
          }
          return target[prop];
        },
      });
    }
    ```

20. **[Validation and Transformation]**

    📝 **Exercise**: Implement a function that creates an object with property validation and transformation.

    **🧠 What is it (Feynman)?**

    This is like having a system that not only checks if items meet certain requirements before going into your container, but also automatically transforms them into the correct format.

    **⭐️ Key Points**

    • Define validation rules
    • Implement transformers
    • Handle nested properties
    • Provide error messages

    **💡 Hint**

    Consider creating a schema-like system that combines validation and transformation rules.

    **💻 Example:**

    ```javascript
    function createValidatedObject(schema) {
      return new Proxy(
        {},
        {
          set(target, prop, value) {
            if (!schema[prop]) {
              throw new Error(`Property ${prop} is not defined in schema`);
            }

            const { validate, transform } = schema[prop];

            if (validate && !validate(value)) {
              throw new Error(`Invalid value for ${prop}`);
            }

            target[prop] = transform ? transform(value) : value;
            return true;
          },
          get(target, prop) {
            return target[prop];
          },
        },
      );
    }
    ```

## Resources

- [MDN Web Docs - Object Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [JavaScript.info - Object Methods](https://javascript.info/object-methods)
- [Eloquent JavaScript - Objects](https://eloquentjavascript.net/06_object.html)
