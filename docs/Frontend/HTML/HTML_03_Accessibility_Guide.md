# HTML Accessibility Guide

## Table of Contents

1. [Introduction to Web Accessibility](#introduction-to-web-accessibility)
2. [Semantic HTML](#semantic-html)
3. [ARIA Attributes](#aria-attributes)
4. [Keyboard Navigation](#keyboard-navigation)
5. [Forms and Inputs](#forms-and-inputs)
6. [Images and Media](#images-and-media)
7. [Tables](#tables)
8. [Dynamic Content](#dynamic-content)
9. [Testing and Validation](#testing-and-validation)
10. [Best Practices](#best-practices)

## Introduction to Web Accessibility

Web accessibility means that websites, tools, and technologies are designed and developed so that people with disabilities can use them. This includes:

- Visual impairments
- Hearing impairments
- Motor impairments
- Cognitive impairments

### Why Accessibility Matters

- Legal requirements in many countries
- Better user experience for all users
- Improved SEO
- Social responsibility
- Business benefits

## Semantic HTML

### Basic Structure

```html
<!-- Good: Using semantic elements -->
<header>
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <h1>Article Title</h1>
    <section>
      <h2>Section Title</h2>
      <p>Content goes here...</p>
    </section>
  </article>
</main>

<footer>
  <p>Copyright © 2024</p>
</footer>

<!-- Bad: Using divs for everything -->
<div class="header">
  <div class="nav">
    <div class="menu">
      <div class="item"><a href="#home">Home</a></div>
      <div class="item"><a href="#about">About</a></div>
    </div>
  </div>
</div>
```

### Common Semantic Elements

```html
<!-- Navigation -->
<nav>
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
  </ul>
</nav>

<!-- Main content -->
<main>
  <article>
    <h1>Article Title</h1>
    <p>Article content...</p>
  </article>
</main>

<!-- Sidebar -->
<aside>
  <h2>Related Content</h2>
  <ul>
    <li><a href="#link1">Link 1</a></li>
    <li><a href="#link2">Link 2</a></li>
  </ul>
</aside>

<!-- Footer -->
<footer>
  <p>Copyright information</p>
</footer>
```

## ARIA Attributes

### ARIA Roles and Attributes Reference Table

| Category               | Attribute/Role         | Description              | Example Usage                  |
| ---------------------- | ---------------------- | ------------------------ | ------------------------------ |
| **Landmark Roles**     | `role="banner"`        | Main site header         | `<header role="banner">`       |
|                        | `role="navigation"`    | Navigation menu          | `<nav role="navigation">`      |
|                        | `role="main"`          | Main content area        | `<main role="main">`           |
|                        | `role="complementary"` | Supporting content       | `<aside role="complementary">` |
|                        | `role="contentinfo"`   | Footer information       | `<footer role="contentinfo">`  |
|                        | `role="search"`        | Search functionality     | `<div role="search">`          |
| **Widget Roles**       | `role="button"`        | Clickable element        | `<div role="button">`          |
|                        | `role="checkbox"`      | Checkbox input           | `<div role="checkbox">`        |
|                        | `role="radio"`         | Radio button             | `<div role="radio">`           |
|                        | `role="textbox"`       | Text input               | `<div role="textbox">`         |
|                        | `role="listbox"`       | Selectable list          | `<div role="listbox">`         |
|                        | `role="option"`        | List option              | `<div role="option">`          |
| **Live Region Roles**  | `role="alert"`         | Important message        | `<div role="alert">`           |
|                        | `role="status"`        | Status update            | `<div role="status">`          |
|                        | `role="log"`           | Log updates              | `<div role="log">`             |
|                        | `role="timer"`         | Countdown timer          | `<div role="timer">`           |
| **Document Structure** | `role="article"`       | Article content          | `<article role="article">`     |
|                        | `role="section"`       | Section of content       | `<section role="section">`     |
|                        | `role="heading"`       | Heading element          | `<div role="heading">`         |
| **ARIA States**        | `aria-expanded`        | Expandable element state | `aria-expanded="true"`         |
|                        | `aria-hidden`          | Hide from screen readers | `aria-hidden="true"`           |
|                        | `aria-invalid`         | Invalid input state      | `aria-invalid="true"`          |
|                        | `aria-pressed`         | Button pressed state     | `aria-pressed="true"`          |
|                        | `aria-selected`        | Selected option state    | `aria-selected="true"`         |
| **ARIA Properties**    | `aria-label`           | Element label            | `aria-label="Close"`           |
|                        | `aria-labelledby`      | Reference to label       | `aria-labelledby="title"`      |
|                        | `aria-describedby`     | Reference to description | `aria-describedby="desc"`      |
|                        | `aria-controls`        | Controlled element       | `aria-controls="content"`      |
|                        | `aria-live`            | Live region priority     | `aria-live="polite"`           |

### Detailed ARIA Usage Examples

#### 1. Complex Interactive Components

```html
<!-- Custom Dropdown Menu -->
<div class="dropdown">
  <button aria-expanded="false" aria-controls="menu" aria-haspopup="true">
    Select Option
  </button>
  <ul id="menu" role="menu" aria-label="Options" aria-hidden="true">
    <li role="menuitem" tabindex="-1">Option 1</li>
    <li role="menuitem" tabindex="-1">Option 2</li>
  </ul>
</div>

<!-- Custom Tabs -->
<div role="tablist" aria-label="Product Information">
  <button role="tab" aria-selected="true" aria-controls="panel1" id="tab1">
    Description
  </button>
  <button role="tab" aria-selected="false" aria-controls="panel2" id="tab2">
    Specifications
  </button>
</div>
<div id="panel1" role="tabpanel" aria-labelledby="tab1">
  Product description content
</div>
<div id="panel2" role="tabpanel" aria-labelledby="tab2" hidden>
  Product specifications content
</div>
```

#### 2. Form Validation and Error Handling

```html
<!-- Form with Validation -->
<form>
  <div class="form-group">
    <label for="email">Email Address</label>
    <input
      type="email"
      id="email"
      aria-required="true"
      aria-invalid="false"
      aria-describedby="email-error email-hint"
    />
    <div id="email-hint">Enter a valid email address</div>
    <div id="email-error" role="alert" aria-live="polite"></div>
  </div>

  <div class="form-group">
    <label for="password">Password</label>
    <input
      type="password"
      id="password"
      aria-required="true"
      aria-invalid="false"
      aria-describedby="password-requirements"
    />
    <div id="password-requirements">
      Password must be at least 8 characters long and include:
      <ul>
        <li>One uppercase letter</li>
        <li>One number</li>
        <li>One special character</li>
      </ul>
    </div>
  </div>
</form>
```

#### 3. Dynamic Content Updates

```html
<!-- Progress Indicator -->
<div
  role="progressbar"
  aria-valuenow="75"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-valuetext="75 percent complete"
>
  <div class="progress-bar" style="width: 75%"></div>
</div>

<!-- Notification System -->
<div role="alert" aria-live="assertive">
  <h2>System Alert</h2>
  <p>Your session will expire in 5 minutes</p>
</div>

<div role="status" aria-live="polite">
  <p>Changes saved successfully</p>
</div>
```

#### 4. Complex Data Tables

```html
<!-- Data Table with Sorting -->
<table role="grid" aria-label="Employee Directory">
  <thead>
    <tr>
      <th
        role="columnheader"
        aria-sort="ascending"
        aria-label="Name, ascending"
      >
        Name
      </th>
      <th
        role="columnheader"
        aria-sort="none"
        aria-label="Department, unsorted"
      >
        Department
      </th>
    </tr>
  </thead>
  <tbody>
    <tr role="row">
      <td role="gridcell">John Doe</td>
      <td role="gridcell">Engineering</td>
    </tr>
  </tbody>
</table>
```

### Best Practices for ARIA Implementation

1. **Use Native HTML Elements When Possible**

   - Prefer semantic HTML elements over ARIA roles
   - Only use ARIA when native elements can't provide the needed functionality

2. **ARIA Role Hierarchy**

   - Maintain proper parent-child relationships
   - Ensure roles are used in appropriate contexts
   - Follow ARIA role inheritance rules

3. **State Management**

   - Keep ARIA states in sync with visual states
   - Update states dynamically with JavaScript
   - Handle state changes for all user interactions

4. **Live Region Updates**

   - Use appropriate live region roles
   - Set correct priority levels
   - Ensure updates are meaningful and not overwhelming

5. **Testing and Validation**
   - Test with multiple screen readers
   - Verify keyboard navigation
   - Check ARIA implementation with automated tools

## Keyboard Navigation

### Focus Management

```html
<!-- Skip link -->
<a href="#main-content" class="skip-link"> Skip to main content </a>

<!-- Focusable elements -->
<button tabindex="0">Click me</button>
<div tabindex="0">Focusable div</div>

<!-- Remove from tab order -->
<button tabindex="-1">Not focusable</button>

<!-- Focus trap -->
<div role="dialog" aria-modal="true">
  <button>Close</button>
  <div tabindex="0">Modal content</div>
</div>
```

### Interactive Elements

```html
<!-- Custom button -->
<div role="button" tabindex="0" onkeypress="handleKeyPress(event)">
  Custom Button
</div>

<!-- Custom checkbox -->
<div
  role="checkbox"
  aria-checked="false"
  tabindex="0"
  onkeypress="toggleCheckbox(event)"
>
  Custom Checkbox
</div>

<!-- Custom select -->
<div role="listbox" tabindex="0" aria-label="Select an option">
  <div role="option" aria-selected="false">Option 1</div>
  <div role="option" aria-selected="false">Option 2</div>
</div>
```

## Forms and Inputs

### Accessible Form Structure

```html
<form>
  <!-- Label association -->
  <div class="form-group">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required />
  </div>

  <!-- Error messages -->
  <div class="form-group">
    <label for="email">Email:</label>
    <input
      type="email"
      id="email"
      name="email"
      aria-invalid="true"
      aria-describedby="email-error"
      required
    />
    <div id="email-error" class="error-message">
      Please enter a valid email address
    </div>
  </div>

  <!-- Fieldset and legend -->
  <fieldset>
    <legend>Contact Preferences</legend>
    <div>
      <input type="checkbox" id="email-pref" name="pref" value="email" />
      <label for="email-pref">Email</label>
    </div>
    <div>
      <input type="checkbox" id="phone-pref" name="pref" value="phone" />
      <label for="phone-pref">Phone</label>
    </div>
  </fieldset>
</form>
```

### Form Validation

```html
<!-- Client-side validation -->
<input
  type="email"
  required
  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
  aria-describedby="email-hint"
/>
<div id="email-hint">Enter a valid email address</div>

<!-- Custom validation -->
<input
  type="text"
  id="username"
  aria-invalid="false"
  aria-describedby="username-error"
  onblur="validateUsername(this)"
/>
<div id="username-error" class="error-message"></div>
```

## Images and Media

### Accessible Images

```html
<!-- Decorative image -->
<img src="decorative.jpg" alt="" role="presentation" />

<!-- Informative image -->
<img src="chart.jpg" alt="Bar chart showing monthly sales data" />

<!-- Complex image -->
<figure>
  <img src="complex-chart.jpg" alt="" aria-labelledby="chart-description" />
  <figcaption id="chart-description">
    Detailed description of the complex chart
  </figcaption>
</figure>
```

### Accessible Media

```html
<!-- Video with captions -->
<video controls>
  <source src="video.mp4" type="video/mp4" />
  <track kind="captions" src="captions.vtt" srclang="en" label="English" />
  Your browser does not support the video tag.
</video>

<!-- Audio with transcript -->
<audio controls>
  <source src="audio.mp3" type="audio/mpeg" />
  <track
    kind="descriptions"
    src="transcript.vtt"
    srclang="en"
    label="English"
  />
</audio>
<div id="transcript">
  <h2>Transcript</h2>
  <p>Full transcript of the audio content...</p>
</div>
```

## Tables

### Accessible Tables

```html
<!-- Basic table -->
<table>
  <caption>
    Monthly Sales Data
  </caption>
  <thead>
    <tr>
      <th scope="col">Month</th>
      <th scope="col">Sales</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">January</th>
      <td>$1000</td>
    </tr>
  </tbody>
</table>

<!-- Complex table -->
<table>
  <caption>
    Employee Schedule
  </caption>
  <thead>
    <tr>
      <th scope="col">Employee</th>
      <th scope="col" colspan="2">Morning</th>
      <th scope="col" colspan="2">Afternoon</th>
    </tr>
    <tr>
      <th scope="col"></th>
      <th scope="col">Start</th>
      <th scope="col">End</th>
      <th scope="col">Start</th>
      <th scope="col">End</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">John Doe</th>
      <td>9:00</td>
      <td>12:00</td>
      <td>13:00</td>
      <td>17:00</td>
    </tr>
  </tbody>
</table>
```

## Dynamic Content

### Live Regions

```html
<!-- Alert live region -->
<div role="alert" aria-live="assertive">This is an important message</div>

<!-- Status live region -->
<div role="status" aria-live="polite">Loading...</div>

<!-- Log live region -->
<div role="log" aria-live="polite">
  <ul>
    <li>Action 1 completed</li>
    <li>Action 2 completed</li>
  </ul>
</div>
```

### Dynamic Updates

```html
<!-- Progress indicator -->
<div
  role="progressbar"
  aria-valuenow="75"
  aria-valuemin="0"
  aria-valuemax="100"
>
  75%
</div>

<!-- Timer -->
<div role="timer" aria-live="polite" aria-label="Countdown timer">10:00</div>

<!-- Search results -->
<div role="search">
  <input type="search" aria-label="Search" />
  <div role="status" aria-live="polite">Found 5 results</div>
</div>
```

## Testing and Validation

### Tools and Techniques

1. **Automated Testing**

   - WAVE
   - aXe
   - Lighthouse
   - HTML_CodeSniffer

2. **Manual Testing**

   - Keyboard navigation
   - Screen reader testing
   - Color contrast checking
   - Focus management

3. **User Testing**
   - Testing with real users
   - Feedback collection
   - Usability studies

## Best Practices

1. **Structure and Semantics**

   - Use semantic HTML elements
   - Maintain proper heading hierarchy
   - Include landmarks and regions
   - Provide skip links

2. **Navigation**

   - Ensure keyboard accessibility
   - Maintain focus order
   - Provide focus indicators
   - Include skip links

3. **Content**

   - Write clear and concise text
   - Use proper heading levels
   - Provide text alternatives
   - Ensure sufficient color contrast

4. **Forms**

   - Use proper labels
   - Provide error messages
   - Include help text
   - Ensure keyboard access

5. **Media**

   - Provide alt text
   - Include captions
   - Add transcripts
   - Ensure media controls

6. **Dynamic Content**

   - Use ARIA live regions
   - Manage focus
   - Provide status updates
   - Handle errors gracefully

7. **Testing**

   - Test with screen readers
   - Verify keyboard navigation
   - Check color contrast
   - Validate ARIA usage

8. **Documentation**
   - Document accessibility features
   - Provide usage guidelines
   - Include testing procedures
   - Maintain compliance records
