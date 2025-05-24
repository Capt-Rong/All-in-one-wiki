---
sidebar_position: 2
---

# JavaScript Regular Expressions

## Table of Contents

- [Introduction](#introduction)
- [Basic Syntax](#basic-syntax)
- [Pattern Matching](#pattern-matching)
- [Character Classes](#character-classes)
- [Quantifiers](#quantifiers)
- [Anchors and Boundaries](#anchors-and-boundaries)
- [Groups and References](#groups-and-references)
- [Flags](#flags)
- [Common Use Cases](#common-use-cases)
- [Exercises](#exercises)
- [Resources](#resources)

## Introduction

Regular Expressions (RegEx) are powerful patterns used to match character combinations in strings. They are essential for string manipulation, validation, and search operations in JavaScript. This guide covers the fundamentals and advanced concepts of Regular Expressions.

## Basic Syntax

### Creating Regular Expressions

There are two ways to create a regular expression in JavaScript:

```javascript
// 1. Using literal notation (recommended)
const regex1 = /pattern/;

// 2. Using RegExp constructor
const regex2 = new RegExp("pattern");
```

### Basic Matching

```javascript
const text = "Hello, World!";
const pattern = /World/;

console.log(pattern.test(text)); // true
console.log(text.match(pattern)); // ["World"]
```

## Pattern Matching

### Literal Characters

```javascript
const text = "Hello, World!";

// Match exact string
console.log(/Hello/.test(text)); // true

// Case sensitive matching
console.log(/hello/.test(text)); // false
```

### Special Characters

```javascript
// Escape special characters with backslash
const text = "Hello. World!";
console.log(/\./.test(text)); // true (matches the dot)

// Common special characters that need escaping
// . * + ? ^ $ { } ( ) [ ] \ | /
```

## Character Classes

### Basic Character Classes

```javascript
// Match any digit
console.log(/\d/.test("123")); // true

// Match any word character
console.log(/\w/.test("abc")); // true

// Match any whitespace
console.log(/\s/.test(" ")); // true
```

### Custom Character Classes

```javascript
// Match vowels
console.log(/[aeiou]/.test("hello")); // true

// Match range of characters
console.log(/[a-z]/.test("hello")); // true

// Negated character class
console.log(/[^0-9]/.test("123")); // false
```

## Quantifiers

### Basic Quantifiers

```javascript
// Match zero or more
console.log(/a*/.test("")); // true

// Match one or more
console.log(/a+/.test("aaa")); // true

// Match zero or one
console.log(/a?/.test("")); // true
```

### Specific Quantifiers

```javascript
// Match exactly n times
console.log(/a{3}/.test("aaa")); // true

// Match n or more times
console.log(/a{3,}/.test("aaaa")); // true

// Match between n and m times
console.log(/a{2,4}/.test("aaa")); // true
```

## Anchors and Boundaries

### Line Anchors

```javascript
// Start of string
console.log(/^Hello/.test("Hello World")); // true

// End of string
console.log(/World$/.test("Hello World")); // true
```

### Word Boundaries

```javascript
// Word boundary
console.log(/\bword\b/.test("hello word world")); // true

// Non-word boundary
console.log(/\Bword\B/.test("password")); // true
```

## Groups and References

### Capturing Groups

```javascript
const text = "John Doe";
const pattern = /(\w+)\s(\w+)/;

const match = text.match(pattern);
console.log(match[1]); // "John"
console.log(match[2]); // "Doe"
```

### Non-capturing Groups

```javascript
// Using (?:) for non-capturing groups
const text = "hello world";
console.log(/(?:hello)\s(world)/.exec(text)[1]); // "world"
```

### Backreferences

```javascript
// Match repeated words
console.log(/(\w+)\s\1/.test("hello hello")); // true
```

## Flags

### Common Flags

```javascript
// Global flag
const text = "hello hello";
console.log(text.match(/hello/g)); // ["hello", "hello"]

// Case-insensitive flag
console.log(/hello/i.test("HELLO")); // true

// Multiline flag
const multiline = "hello\nworld";
console.log(/^world/m.test(multiline)); // true
```

## Common Use Cases

### Email Validation

```javascript
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
console.log(emailRegex.test("user@example.com")); // true

// Breakdown the emailRegex
// 1. /^ ... $/: start and end
// 2. Email = username + domain part + address
// Username [a-zA-Z0-9._%+-]: letters, digits, and special characters
// domain: @[a-zA-Z0-9.-] (ex: gmail, yahoo)
// address: \.
// [a-zA-z]{2,} at least 2 letters (ex: .com. .io)
```

### Phone Number Validation

```javascript
const phoneRegex = /^\+?[\d\s-]{10,}$/;
console.log(phoneRegex.test("+1 234 567 8900")); // true

// Breakdown
// \+? : + is optional
//[\d\s-]: \d = digit + \s = whitespace  + -
//{10,} ten digit
```

### Password Validation

```javascript
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
console.log(passwordRegex.test("Password123")); // true

//Breakdown
//(?=) Positive lookahead
// .* any number of character before letter
//(?=.*/d): at least one digit exist
```

## Exercises

### Beginner Level

1. **[Form Validation System]**

   📝 **Exercise**: Create a form validation system that validates user input in real-time.

   **🧠 What is it (Feynman)?**

   Think of this as building a smart form that checks user input as they type, like a helpful assistant that immediately tells you if something is wrong with what you've entered.

   **⭐️ Key Points**

   • Validate different input types
   • Provide immediate feedback
   • Handle edge cases
   • Create reusable validation patterns

   **💡 Hint**

   Consider creating separate validation functions for different types of inputs (email, phone, name, etc.).

   ```ts
   function validateEmail(email: string): boolean {
     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
     return emailRegex.test(email);
   }

   function validatePhone(phone: string | number): boolean {
     const phoneRegex = /^\+?[\d\s-]{10,}$/;
     return phoneRegex.test(phone);
   }

   function validatePassword(password: string): boolean {
     const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
     // at least one letter
     // at least one digit
     // at least 8 characters long
     // only contains letters and digits
     return passwordRegex.test(password);
   }
   ```

2. **[Search Filter Implementation]**

   📝 **Exercise**: Implement a search filter that can match partial words and handle special characters.

   **🧠 What is it (Feynman)?**

   This is like creating a smart search box that can find what users are looking for even if they don't type the exact words, similar to how Google's search works.

   **⭐️ Key Points**

   • Handle partial matches
   • Ignore case sensitivity
   • Support special characters
   • Provide relevant results

   **💡 Hint**

   Think about how to make the search flexible while still being accurate.

3. **[Input Masking System]**

   📝 **Exercise**: Create an input masking system for different types of data (phone numbers, credit cards, dates).

   **🧠 What is it (Feynman)?**

   This is like having a smart form that automatically formats what users type into the correct format, like automatically adding dashes to a phone number as they type.

   **⭐️ Key Points**

   • Format input in real-time
   • Handle different data types
   • Preserve cursor position
   • Validate input format

   **💡 Hint**

   Consider how to handle backspace and cursor movement while maintaining the mask.

### Intermediate Level

4. **[Password Policy Enforcer]**

   📝 **Exercise**: Implement a password policy system that enforces different security levels.

   **🧠 What is it (Feynman)?**

   This is like creating a security guard that checks if a password meets all the required security rules, like having a mix of letters, numbers, and special characters.

   **⭐️ Key Points**

   • Define security levels
   • Check multiple conditions
   • Provide clear feedback
   • Handle different policies

   **💡 Hint**

   Consider creating a configurable policy system that can be adjusted based on security requirements.

5. **[URL Parameter Parser]**

   📝 **Exercise**: Create a system to parse and validate URL parameters in a single-page application.

   **🧠 What is it (Feynman)?**

   This is like having a tool that can read and understand the different parts of a web address, similar to how a GPS understands different parts of an address.

   **⭐️ Key Points**

   • Parse query parameters
   • Validate parameter types
   • Handle special characters
   • Support multiple formats

   **💡 Hint**

   Think about how to handle different types of parameters and their encoding.

### Advanced Level

6. **[HTML Sanitizer]**

   📝 **Exercise**: Implement an HTML sanitizer that removes potentially dangerous content while preserving safe HTML.

   **🧠 What is it (Feynman)?**

   This is like having a security filter that removes harmful content from HTML while keeping the good parts, similar to how a water filter removes impurities while keeping the water.

   **⭐️ Key Points**

   • Identify safe HTML tags
   • Remove dangerous attributes
   • Handle nested elements
   • Preserve formatting

   **💡 Hint**

   Consider creating a whitelist of allowed tags and attributes.

7. **[Code Analysis Tool]**

   📝 **Exercise**: Create a tool that analyzes JavaScript code for potential issues and patterns.

   **🧠 What is it (Feynman)?**

   This is like having a code reviewer that can automatically find potential problems in code, similar to how a spell checker finds spelling mistakes.

   **⭐️ Key Points**

   • Identify code patterns
   • Find potential issues
   • Handle different syntax
   • Provide meaningful feedback

   **💡 Hint**

   Consider how to handle different coding styles and patterns.

## Resources

- [MDN Web Docs - Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
- [Regular Expressions.info](https://www.regular-expressions.info/)
- [RegExr - Learn Regular Expressions](https://regexr.com/)
- [JavaScript.info - Regular Expressions](https://javascript.info/regular-expressions)
