---
sidebar_position: 1
---

# JavaScript Array - Methods

## Table of Contents

- [Introduction](#introduction)
- [Basic Array Operations](#basic-array-operations)
  - [Create (Array Creation)](#create-array-creation)
  - [Read (Accessing Elements)](#read-accessing-elements)
  - [Update (Modifying Elements)](#update-modifying-elements)
  - [Delete (Removing Elements)](#delete-removing-elements)
- [Array Iteration Methods](#array-iteration-methods)
- [Array Transformation Methods](#array-transformation-methods)
- [Array Search and Filter Methods](#array-search-and-filter-methods)
- [Array Reduction Methods](#array-reduction-methods)
- [Array Sorting and Reordering](#array-sorting-and-reordering)
- [Exercises](#exercises)
- [Resources](#resources)

## Introduction

Arrays in JavaScript are powerful data structures that provide a wide range of methods for manipulating and transforming data. Understanding these methods is crucial for effective data handling in JavaScript. This guide covers essential array operations, iteration methods, transformation techniques, and more.

## Basic Array Operations

### Create (Array Creation)

There are several ways to create arrays in JavaScript:

```javascript
// 1. Array literal
const numbers = [1, 2, 3, 4, 5];

// 2. Array constructor
const fruits = new Array("apple", "banana", "orange");

// 3. Array.of()
const singleElement = Array.of(7);

// 4. Array.from()
const chars = Array.from("hello");
const doubled = Array.from([1, 2, 3], (x) => x * 2);
```

### Read (Accessing Elements)

Multiple ways to access array elements:

```javascript
const numbers = [1, 2, 3, 4, 5];

// 1. Index access
console.log(numbers[0]); // 1

// 2. Array destructuring
const [first, second] = numbers;
console.log(first, second); // 1 2

// 3. Array.slice()
const subArray = numbers.slice(1, 3);
console.log(subArray); // [2, 3]

// 4. Array.at()
console.log(numbers.at(-1)); // 5 (last element)
```

### Update (Modifying Elements)

Different methods to update array elements:

```javascript
const numbers = [1, 2, 3, 4, 5];

// 1. Direct index assignment
numbers[0] = 10;

// 2. Array.splice()
numbers.splice(1, 1, 20); // Replace one element at index 1

// 3. Array.fill()
numbers.fill(0, 2, 4); // Fill with 0 from index 2 to 4

// 4. Array.copyWithin()
numbers.copyWithin(0, 3, 5); // Copy elements from index 3-4 to start
```

### Delete (Removing Elements)

Ways to remove elements from arrays:

```javascript
const numbers = [1, 2, 3, 4, 5];

// 1. Array.splice()
numbers.splice(2, 1); // Remove one element at index 2

// 2. Array.pop() and Array.shift()
numbers.pop(); // Remove last element
numbers.shift(); // Remove first element

// 3. Array.filter()
const filtered = numbers.filter((n) => n !== 3);

// 4. Array.slice() with spread
const [removed, ...rest] = numbers;
```

## Array Iteration Methods

### forEach()

Executes a function for each element in the array:

```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number, index, array) => {
  console.log(`Element ${number} at index ${index}`);
});
```

### map()

Creates a new array with the results of calling a function for every array element:

```javascript
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((number) => number * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
```

### filter()

Creates a new array with all elements that pass a test:

```javascript
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // [2, 4]
```

## Array Transformation Methods

### flat()

Creates a new array with all sub-array elements concatenated:

```javascript
const nested = [1, 2, [3, 4, [5, 6]]];

console.log(nested.flat()); // [1, 2, 3, 4, [5, 6]]
console.log(nested.flat(2)); // [1, 2, 3, 4, 5, 6]
```

### flatMap()

Maps each element using a mapping function, then flattens the result:

```javascript
const sentences = ["Hello world", "How are you"];

const words = sentences.flatMap((sentence) => sentence.split(" "));
console.log(words); // ["Hello", "world", "How", "are", "you"]
```

## Array Search and Filter Methods

### find()

Returns the first element that passes a test:

```javascript
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Bob" },
];

const user = users.find((user) => user.id === 2);
console.log(user); // { id: 2, name: "Jane" }
```

### findIndex()

Returns the index of the first element that passes a test:

```javascript
const numbers = [1, 2, 3, 4, 5];

const index = numbers.findIndex((number) => number > 3);
console.log(index); // 3
```

## Array Reduction Methods

### reduce()

Reduces an array to a single value:

```javascript
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // 15
```

### reduceRight()

Reduces an array from right to left:

```javascript
const numbers = [1, 2, 3, 4, 5];

const result = numbers.reduceRight((acc, curr) => acc - curr);
console.log(result); // -5
```

## Array Sorting and Reordering

### sort()

Sorts the elements of an array:

```javascript
const fruits = ["banana", "apple", "orange"];

fruits.sort();
console.log(fruits); // ["apple", "banana", "orange"]

// With custom comparison
const numbers = [10, 5, 8, 1, 7];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 5, 7, 8, 10]
```

### reverse()

Reverses the order of elements in an array:

```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.reverse();
console.log(numbers); // [5, 4, 3, 2, 1]
```

## Exercises

### Beginner Level

1. **[Array Creation and Basic Operations]**

   📝 **Exercise**:

   Create an array and perform basic operations (add, read, update, delete elements).

   **🧠 What is it (Feynman)?**

   Think of an array as a numbered list where each position can hold any type of data. It's like a row of boxes, each with a number, where you can put things in, take things out, or change what's inside.

   **⭐️ Key Points**

   • Use array literals
   • Use array methods
   • Handle array indices
   • Understand array length

   **💡 Hint**

   Try using different methods for each operation to understand their differences.

   **💻 Example:**

   ```ts
   // Create array
   const fruits: string[] = ["apple", "banana", "orange"];

   // Read element
   console.log(fruits[0]); // 'apple'

   // Update element
   fruits[1] = "grape";

   // Delete element
   fruits.splice(2, 1);
   ```

2. **[Array Iteration]**

   📝 **Exercise**: Write a function that iterates over an array using different methods.

   **🧠 What is it (Feynman)?**

   This is like going through each item in your list one by one, either to look at it, change it, or do something with it. It's like reading through a checklist.

   **⭐️ Key Points**

   • Use forEach()
   • Use for...of loop
   • Use map()
   • Use filter()

   **💡 Hint**

   Consider which method is best for your specific use case.

   **💻 Example:**

   ```ts
   const numbers: number[] = [1, 2, 3, 4, 5];

   // Using forEach
   numbers.forEach((number) => console.log(number));

   // Using map
   const doubled: number[] = numbers.map((num) => num * 2);

   // Using filter
   const evenNumbers: number[] = numbers.filter((num) => num % 2 === 0);

   // filter will create a new array, which use under conditions (userId === id)
   // map will create a new array, which use in iterate a array in React
   // forEach will not create a new array, which use in render or update UI
   ```

3. **[Array Transformation]**

   📝 **Exercise**: Create a function that transforms array elements.

   **🧠 What is it (Feynman)?**

   This is like having a machine that can change each item in your list into something else, like turning apples into apple pies.

   **⭐️ Key Points**

   • Use map()
   • Use flatMap()
   • Handle nested arrays
   • Preserve array structure

   **💡 Hint**

   Consider whether you need to flatten the result or keep the structure.

   **💻 Example:**

   ```javascript
   const numbers = [1, 2, 3];

   // Transform to strings
   const strings = numbers.map((num) => num.toString());

   // Transform to objects
   const objects = numbers.map((num) => ({ value: num, doubled: num * 2 }));

   // Transform and filter in one operation
   const evenDoubled = numbers
     .map((num) => num * 2)
     .filter((num) => num % 2 === 0);

   // Transform nested arrays
   const nested = [
     [1, 2],
     [3, 4],
     [5, 6],
   ];
   const flattened = nested.flatMap((arr) => arr.map((num) => num * 2));

   // Transform with index
   const withIndex = numbers.map((num, index) => ({
     value: num,
     position: index,
     isEven: num % 2 === 0,
   }));

   // Transform to different types
   const mixed = numbers.map((num) =>
     num % 2 === 0 ? num.toString() : { number: num },
   );
   ```

4. **[Array Search]**

   📝 **Exercise**: Implement a function that searches for elements in an array.

   **🧠 What is it (Feynman)?**

   This is like looking for a specific item in your list, like finding a particular book in a library.

   **⭐️ Key Points**

   • Use find()
   • Use findIndex()
   • Use includes()
   • Use indexOf()

   **💡 Hint**

   Consider whether you need the element or its position.

   **💻 Example:**

   ```ts
   const users = [
     { id: 1, name: "John" },
     { id: 2, name: "Jane" },
   ];

   // Find by condition
   const user = users.find((user) => user.id === 2);

   // Find index
   const index = users.findIndex((user) => user.name === "Jane");
   ```

5. **[Array Reduction]**

   📝 **Exercise**: Write a function that reduces an array to a single value.

   **🧠 What is it (Feynman)?**

   This is like combining all items in your list into one final result, like adding up all the numbers or combining all the ingredients.

   **⭐️ Key Points**

   • Use reduce()
   • Use reduceRight()
   • Handle initial value
   • Accumulate results

   **💡 Hint**

   Think about what the initial value should be and how to combine elements.

   **💻 Example:**

   ```javascript
   const numbers = [1, 2, 3, 4, 5];

   // Sum all numbers
   const sum = numbers.reduce((acc, curr) => acc + curr, 0);
   //acc = accumulator, curr = current value, 0: initial value

   // Create object from array
   const obj = numbers.reduce((acc, curr) => {
     acc[curr] = curr * 2;
     return acc;
   }, {});
   ```

   **Explanation**

   | Step | acc | curr | acc + curr |
   | ---- | --- | ---- | ---------- |
   | 1    | 0   | 1    | 1          |
   | 2    | 1   | 2    | 3          |
   | 3    | 3   | 3    | 6          |
   | 4    | 6   | 4    | 10         |
   | 5    | 10  | 5    | 15         |

### Intermediate Level

6. **[Array Chaining]**

   📝 **Exercise**: Create a function that chains multiple array methods.

   **🧠 What is it (Feynman)?**

   This is like having a production line where each step transforms the items in a specific way, like a factory assembly line.

   **⭐️ Key Points**

   • Chain map(), filter(), reduce()
   • Handle method order
   • Optimize performance
   • Maintain readability

   **💡 Hint**

   Consider the order of operations and how each step affects the next.

   **💻 Example:**

   ```ts
   const numbers: number[] = [1, 2, 3, 4, 5];

   const result: number = numbers
     .filter((n) => n % 2 === 0) // get [2,4]
     .map((n) => n * 2) // get [4,8]
     .reduce((acc, curr) => acc + curr, 0); // get 12
   ```

   ```ts
   //You have a list of user objects with isActive and name.
   // Return an array of names of active users.

   // Input
   const users = [
     { name: "Alice", isActive: true },
     { name: "Bob", isActive: false },
     { name: "Carol", isActive: true },
   ];

   const activeUser: string[] = users
     .filter((user) => user.isActive === true)
     .map();
   ```

   ```ts
   // Given a shopping cart array with price and quantity, calculate the total price.
   type Cart = {
     name: string;
     price: number;
     quantity: number;
   }[];

   const cart: Cart = [
     { name: "Book", price: 10, quantity: 2 },
     { name: "Pen", price: 2, quantity: 5 },
   ];

   const totalPrice = cart.reduce(
     (total, item) => total + item.price * item.quantity,
     0,
   );
   ```

   ```ts
   // Given an array of strings (user input),
   // return an array of lowercase, trimmed, non-empty strings.

   const input = ["  Hello ", "", " JavaScript ", "   "];
   const sortedInput = input
     .map((item) => item.trim().toLowerCase())
     .filter((item) => item !== "") // Remove empty strings
     .join(""); // Join strings with no separator

   console.log(sortedInput);
   ```

7. **[Array Grouping]**

📝 **Exercise**:

Implement a function that groups array elements.

**🧠 What is it (Feynman)?**

This is like sorting items into different categories, like organizing books by genre or clothes by type.

**⭐️ Key Points**

• Use reduce()
• Create groups
• Handle multiple categories
• Preserve data structure

**💡 Hint**

Consider using an object to store the groups.

**💻 Example:**

```javascript
const items = [
  { type: "fruit", name: "apple" },
  { type: "vegetable", name: "carrot" },
  { type: "fruit", name: "banana" },
];

const groups = items.reduce((acc, item) => {
  if (!acc[item.type]) {
    acc[item.type] = [];
  }
  acc[item.type].push(item);
  return acc;
}, {});
```

8. **[Array Flattening]**

   📝 **Exercise**: Write a function that flattens nested arrays.

   **🧠 What is it (Feynman)?**

   This is like taking a stack of boxes and putting all the items in one big box, making everything accessible at the same level.

   **⭐️ Key Points**

   • Use flat()
   • Use flatMap()
   • Handle multiple levels
   • Preserve data types

   **💡 Hint**

   Consider how deep the nesting is and whether you need to preserve any structure.

   **💻 Example:**

   ```javascript
   const nested = [1, [2, 3], [4, [5, 6]]];

   // Flatten one level
   const flat1 = nested.flat();

   // Flatten all levels
   const flatAll = nested.flat(Infinity);
   ```

9. **[Array Deduplication]**

   📝 **Exercise**: Create a function that removes duplicate elements from an array.

   **🧠 What is it (Feynman)?**

   This is like having a list with some items appearing multiple times, and you want to keep only one copy of each item.

   **⭐️ Key Points**

   • Use Set
   • Use filter()
   • Handle object duplicates
   • Preserve order

   **💡 Hint**

   Consider whether you need to handle complex objects or just primitive values.

   **💻 Example:**

   ```javascript
   const numbers = [1, 2, 2, 3, 3, 4];

   // Using Set
   const unique = [...new Set(numbers)];

   // Using filter
   const unique2 = numbers.filter(
     (item, index) => numbers.indexOf(item) === index,
   );
   ```

10. **[Array Partitioning]**

    📝 **Exercise**: Implement a function that partitions an array based on a condition.

    **🧠 What is it (Feynman)?**

    This is like sorting items into two different boxes based on whether they meet a certain condition.

    **⭐️ Key Points**

    • Use reduce()
    • Create two arrays
    • Handle edge cases
    • Maintain order

    **💡 Hint**

    Consider using an object with two arrays to store the partitions.

    **💻 Example:**

    ```javascript
    const numbers = [1, 2, 3, 4, 5];

    const { even, odd } = numbers.reduce(
      (acc, num) => {
        if (num % 2 === 0) {
          acc.even.push(num);
        } else {
          acc.odd.push(num);
        }
        return acc;
      },
      { even: [], odd: [] },
    );
    ```

### Advanced Level

11. **[Array Rotation]**

    📝 **Exercise**: Create a function that rotates array elements.

    **🧠 What is it (Feynman)?**

    This is like taking a row of items and moving them all to the right or left, with the items that fall off one end appearing at the other end.

    **⭐️ Key Points**

    • Handle positive/negative rotation
    • Preserve array length
    • Optimize performance
    • Handle edge cases

    **💡 Hint**

    Consider using slice() and concat() or splice().

    **💻 Example:**

    ```javascript
    function rotateArray(arr, n) {
      const len = arr.length;
      const rotation = ((n % len) + len) % len;
      return [...arr.slice(rotation), ...arr.slice(0, rotation)];
    }
    ```

12. **[Array Shuffling]**

    📝 **Exercise**: Implement a function that randomly shuffles array elements.

    **🧠 What is it (Feynman)?**

    This is like taking a deck of cards and mixing them up randomly, ensuring each card has an equal chance of ending up in any position.

    **⭐️ Key Points**

    • Use Fisher-Yates algorithm
    • Ensure randomness
    • Preserve all elements
    • Handle edge cases

    **💡 Hint**

    Consider using the Fisher-Yates shuffle algorithm for true randomness.

    **💻 Example:**

    ```javascript
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
    ```

13. **[Array Intersection]**

    📝 **Exercise**: Write a function that finds common elements between arrays.

    **🧠 What is it (Feynman)?**

    This is like finding items that appear in multiple lists, like finding friends that are in both your and your sibling's contact lists.

    **⭐️ Key Points**

    • Use Set
    • Use filter()
    • Handle duplicates
    • Optimize performance

    **💡 Hint**

    Consider using Set for better performance with large arrays.

    **💻 Example:**

    ```javascript
    function findIntersection(...arrays) {
      return arrays.reduce((acc, curr) => {
        return acc.filter((x) => curr.includes(x));
      });
    }
    ```

14. **[Array Difference]**

    📝 **Exercise**: Create a function that finds elements unique to each array.

    **🧠 What is it (Feynman)?**

    This is like finding items that are in one list but not in another, like finding books that are in your collection but not in your friend's.

    **⭐️ Key Points**

    • Use Set
    • Use filter()
    • Handle duplicates
    • Preserve order

    **💡 Hint**

    Consider using Set operations for better performance.

    **💻 Example:**

    ```javascript
    function findDifference(arr1, arr2) {
      const set1 = new Set(arr1);
      const set2 = new Set(arr2);
      return [...arr1.filter((x) => !set2.has(x))];
    }
    ```

15. **[Array Permutations]**

    📝 **Exercise**: Implement a function that generates all possible permutations of array elements.

    **🧠 What is it (Feynman)?**

    This is like finding all possible ways to arrange a set of items, like finding all possible orders of books on a shelf.

    **⭐️ Key Points**

    • Use recursion
    • Handle duplicates
    • Optimize performance
    • Generate all combinations

    **💡 Hint**

    Consider using a recursive approach with backtracking.

    **💻 Example:**

    ```javascript
    function getPermutations(array) {
      if (array.length <= 1) return [array];

      const result = [];
      for (let i = 0; i < array.length; i++) {
        const current = array[i];
        const remaining = [...array.slice(0, i), ...array.slice(i + 1)];
        const permutations = getPermutations(remaining);

        for (const perm of permutations) {
          result.push([current, ...perm]);
        }
      }
      return result;
    }
    ```

### Expert Level

16. **[Array Memoization]**

    📝 **Exercise**: Create a function that implements memoization for array operations.

    **🧠 What is it (Feynman)?**

    This is like having a notebook where you write down the results of calculations, so you don't have to do them again if you need the same result.

    **⭐️ Key Points**

    • Use Map/WeakMap
    • Cache results
    • Handle complex keys
    • Clear cache

    **💡 Hint**

    Consider using a Map to store computed results.

    **💻 Example:**

    ```javascript
    function memoizeArrayOperation(operation) {
      const cache = new Map();

      return function (array, ...args) {
        const key = JSON.stringify([array, ...args]);
        if (cache.has(key)) {
          return cache.get(key);
        }

        const result = operation(array, ...args);
        cache.set(key, result);
        return result;
      };
    }
    ```

17. **[Array Lazy Evaluation]**

    📝 **Exercise**: Implement a function that performs lazy evaluation on arrays.

    **🧠 What is it (Feynman)?**

    This is like having a recipe where you only prepare each step when you need it, rather than preparing everything at once.

    **⭐️ Key Points**

    • Use generators
    • Handle infinite sequences
    • Chain operations
    • Optimize memory

    **💡 Hint**

    Consider using generator functions for lazy evaluation.

    **💻 Example:**

    ```javascript
    function* lazyMap(array, fn) {
      for (const item of array) {
        yield fn(item);
      }
    }

    function* lazyFilter(array, predicate) {
      for (const item of array) {
        if (predicate(item)) {
          yield item;
        }
      }
    }
    ```

18. **[Array Virtualization]**

    📝 **Exercise**: Create a function that implements virtual scrolling for large arrays.

    **🧠 What is it (Feynman)?**

    This is like having a window that shows only a small part of a very long list, and the window moves as you scroll, showing different parts of the list.

    **⭐️ Key Points**

    • Handle window size
    • Calculate visible items
    • Optimize rendering
    • Handle scrolling

    **💡 Hint**

    Consider using a window of items and updating it based on scroll position.

    **💻 Example:**

    ```javascript
    class VirtualArray {
      constructor(array, windowSize) {
        this.array = array;
        this.windowSize = windowSize;
        this.startIndex = 0;
      }

      getVisibleItems() {
        return this.array.slice(
          this.startIndex,
          this.startIndex + this.windowSize,
        );
      }

      scroll(offset) {
        this.startIndex = Math.max(
          0,
          Math.min(
            this.array.length - this.windowSize,
            this.startIndex + offset,
          ),
        );
      }
    }
    ```

19. **[Array Diffing]**

    📝 **Exercise**: Implement a function that finds the differences between two arrays.

    **🧠 What is it (Feynman)?**

    This is like comparing two versions of a document and highlighting what has been added, removed, or changed.

    **⭐️ Key Points**

    • Find additions
    • Find removals
    • Find changes
    • Handle nested structures

    **💡 Hint**

    Consider using a Map to track elements and their positions.

    **💻 Example:**

    ```javascript
    function findArrayDiff(oldArray, newArray) {
      const added = newArray.filter((x) => !oldArray.includes(x));
      const removed = oldArray.filter((x) => !newArray.includes(x));
      const changed = newArray.filter(
        (x, i) =>
          oldArray[i] !== x && !added.includes(x) && !removed.includes(x),
      );

      return { added, removed, changed };
    }
    ```

20. **[Array Compression]**

    📝 **Exercise**: Create a function that compresses and decompresses arrays.

    **🧠 What is it (Feynman)?**

    This is like finding patterns in your list and using shortcuts to represent them, like using "3 apples" instead of writing "apple, apple, apple".

    **⭐️ Key Points**

    • Find patterns
    • Create compression rules
    • Handle edge cases
    • Optimize compression ratio

    **💡 Hint**

    Consider using run-length encoding or other compression algorithms.

    **💻 Example:**

    ```javascript
    function compressArray(array) {
      return array.reduce((acc, curr, i) => {
        if (i === 0 || curr !== array[i - 1]) {
          acc.push({ value: curr, count: 1 });
        } else {
          acc[acc.length - 1].count++;
        }
        return acc;
      }, []);
    }

    function decompressArray(compressed) {
      return compressed.flatMap(({ value, count }) => Array(count).fill(value));
    }
    ```

## Resources

- [MDN Web Docs - Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [JavaScript.info - Array Methods](https://javascript.info/array-methods)
- [Eloquent JavaScript - Data Structures](https://eloquentjavascript.net/04_data.html)
