toLocaleDateString()

```js
const date = new Date();

// Default, based on browser locale
console.log(date.toLocaleDateString()); // "5/24/2025" (in US format)

// Force a specific locale:
console.log(date.toLocaleDateString("en-GB")); // "24/05/2025"
console.log(date.toLocaleDateString("ja-JP")); // "2025/05/24"

// With options:
console.log(
  date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  }),
); // "May 24, 2025"
```
