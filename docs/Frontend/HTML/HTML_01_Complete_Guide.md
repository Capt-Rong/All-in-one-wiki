# Complete HTML Guides

## Table of Contents

1. [Introduction to HTML](#introduction-to-html)
2. [Basic HTML Structure](#basic-html-structure)
3. [Text Formatting Tags](#text-formatting-tags)
4. [Lists](#lists)
5. [Links and Navigation](#links-and-navigation)
6. [Images and Media](#images-and-media)
7. [Tables](#tables)
8. [Forms and Input](#forms-and-input)
9. [Semantic HTML](#semantic-html)
10. [HTML5 Features](#html5-features)
11. [Best Practices](#best-practices)
12. [Practical Test Questions](#practical-test-questions)

## Introduction to HTML

HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a web page and consists of a series of elements that tell the browser how to display the content.

### What is HTML?

- HTML stands for HyperText Markup Language
- It is the standard markup language for creating web pages
- HTML elements are the building blocks of HTML pages
- HTML elements are represented by tags

## Basic HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <!-- Content goes here -->
  </body>
</html>
```

### Essential Tags

- `<!DOCTYPE html>`: Declares the document type
- `<html>`: Root element
- `<head>`: Contains metadata
- `<body>`: Contains visible content
- `<meta>`: Provides metadata about the document
- `<title>`: Sets the page title

## Text Formatting Tags

### Headings

```html
<h1>Main Heading</h1>
<h2>Subheading</h2>
<h3>Section Heading</h3>
<h4>Subsection Heading</h4>
<h5>Minor Heading</h5>
<h6>Smallest Heading</h6>
```

### Text Styling

```html
<p>This is a paragraph</p>
<strong>Bold text</strong>
<em>Italic text</em>
<mark>Highlighted text</mark>
<small>Small text</small>
<del>Deleted text</del>
<ins>Inserted text</ins>
<sub>Subscript</sub>
<sup>Superscript</sup>
```

## Lists

### Unordered List

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

### Ordered List

```html
<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>
```

### Description List

```html
<dl>
  <dt>Term</dt>
  <dd>Definition</dd>
</dl>
```

## Links and Navigation

```html
<!-- Basic link -->
<a href="https://example.com">Visit Example</a>

<!-- Link with target -->
<a href="https://example.com" target="_blank">Open in new tab</a>

<!-- Email link -->
<a href="mailto:email@example.com">Send email</a>

<!-- Phone link -->
<a href="tel:+1234567890">Call us</a>
```

## Images and Media

```html
<!-- Basic image -->
<img src="image.jpg" alt="Description" />

<!-- Image with dimensions -->
<img src="image.jpg" alt="Description" width="300" height="200" />

<!-- Video -->
<video controls>
  <source src="video.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

<!-- Audio -->
<audio controls>
  <source src="audio.mp3" type="audio/mpeg" />
  Your browser does not support the audio tag.
</audio>
```

## Tables ⭐️

```html
<table>
  <thead>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data 1</td>
      <td>Data 2</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Footer 1</td>
      <td>Footer 2</td>
    </tr>
  </tfoot>
</table>
```

## Forms and Input ⭐️

```html
<form action="/submit" method="post">
  <!-- Text input -->
  <input type="text" name="username" placeholder="Username" />

  <!-- Password input -->
  <input type="password" name="password" placeholder="Password" />

  <!-- Email input -->
  <input type="email" name="email" placeholder="Email" />

  <!-- Number input -->
  <input type="number" name="age" min="0" max="120" />

  <!-- Checkbox -->
  <input type="checkbox" name="subscribe" id="subscribe" />
  <label for="subscribe">Subscribe to newsletter</label>

  <!-- Radio buttons -->
  <input type="radio" name="gender" value="male" id="male" />
  <label for="male">Male</label>
  <input type="radio" name="gender" value="female" id="female" />
  <label for="female">Female</label>

  <!-- Select dropdown -->
  <select name="country">
    <option value="us">United States</option>
    <option value="ca">Canada</option>
    <option value="uk">United Kingdom</option>
  </select>

  <!-- Textarea -->
  <textarea name="message" rows="4" cols="50"></textarea>

  <!-- Submit button -->
  <button type="submit">Submit</button>
</form>
```

## Semantic HTML

```html
<header>
  <nav>
    <!-- Navigation content -->
  </nav>
</header>

<main>
  <article>
    <section>
      <!-- Section content -->
    </section>
  </article>

  <aside>
    <!-- Sidebar content -->
  </aside>
</main>

<footer>
  <!-- Footer content -->
</footer>
```

## HTML5 Features

- Canvas for drawing
- SVG for vector graphics
- Geolocation
- Local Storage
- Web Workers
- WebSocket
- Drag and Drop
- Audio/Video

## Best Practices

1. Use semantic HTML elements
2. Always include alt text for images
3. Keep HTML structure clean and organized
4. Use proper indentation
5. Validate your HTML
6. Ensure accessibility
7. Optimize for performance
8. Use comments appropriately

## Practical Test Questions

### Question 1: Form Validation

Create a registration form with the following requirements:

- Username (required, min 3 characters)
- Email (required, valid email format)
- Password (required, min 8 characters)
- Confirm Password (must match password)
- Terms and Conditions checkbox (required)
- Submit button

### Question 2: Responsive Table

Create a responsive table that:

- Shows all columns on desktop
- Shows only essential columns on mobile
- Has alternating row colors
- Includes a search filter
- Has sortable columns

### Question 3: Navigation Menu

Create a navigation menu that:

- Is responsive (hamburger menu on mobile)
- Has dropdown submenus
- Shows active page
- Is accessible
- Has smooth transitions

### Question 4: Image Gallery

Create an image gallery that:

- Shows images in a grid
- Has lightbox functionality
- Is responsive
- Has lazy loading
- Includes image captions

### Question 5: Contact Form

Create a contact form that:

- Has client-side validation
- Shows real-time validation feedback
- Prevents multiple submissions
- Has a loading state
- Shows success/error messages

### Solutions and Tips

For each question, consider:

1. HTML structure
2. Accessibility
3. Performance
4. User experience
5. Browser compatibility

Remember to:

- Use semantic HTML
- Include proper ARIA attributes
- Test across different devices
- Validate your code
- Follow best practices
