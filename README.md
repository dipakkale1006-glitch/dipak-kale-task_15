# Task 15: JavaScript - Array Operations using Different Function Types

## About the Project
This project is created as part of the **MERN Stack Course**. The objective of this assignment is to create modular JavaScript functions that receive an array as an argument and perform key array operations:
1. **Find the Maximum Number** in an array.
2. **Calculate the Sum of All Elements** in an array.
3. **Count the Number of Odd Numbers** in an array.

As instructed, the project demonstrates **different types of JavaScript functions** (Named Function Declaration, Anonymous Function Expression, and Arrow Function), each taking an array parameter to complete its task.

---

## Functions Implemented & Syntax Variety

### 1. Named Function Declaration: `findMax(arr)`
Iterates through the array and returns the highest numerical value:
```javascript
function findMax(arr) {
    if (!arr || arr.length === 0) return null;
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
```

### 2. Anonymous Function Expression: `calculateSum(arr)`
Accumulates the sum of all elements:
```javascript
const calculateSum = function (arr) {
    if (!arr || arr.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};
```

### 3. Arrow Function: `countOddNumbers(arr)`
Uses modulo arithmetic (`num % 2 !== 0`) to count odd numbers:
```javascript
const countOddNumbers = (arr) => {
    if (!arr || arr.length === 0) return 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            count++;
        }
    }
    return count;
};
```

---

## Test Cases with Dummy Arrays

### Primary Test Array (from Assignment Prompt)
```javascript
const dummyArray = [4, 8, 2, 11, 6, 7, 10];
```
- **Maximum Number**: `11`
- **Sum of All Elements**: `4 + 8 + 2 + 11 + 6 + 7 + 10 = 48`
- **Count of Odd Numbers**: `2` (Odd numbers: `11, 7`)

### Secondary Test Array
```javascript
const dummyArray2 = [15, 22, 9, 34, 51, 8, 3];
```
- **Maximum Number**: `51`
- **Sum of All Elements**: `142`
- **Count of Odd Numbers**: `4` (Odd numbers: `15, 9, 51, 3`)

---

## Console Output Sample

When the script runs or the page is loaded in a browser, the following results are printed to the console:

```text
Ex Array:- [4, 8, 2, 11, 6, 7, 10]
Maximum number: 11
Sum of all elements: 48
Count of odd numbers: 2

Ex Array 2:- [15, 22, 9, 34, 51, 8, 3]
Maximum number: 51
Sum of all elements: 142
Count of odd numbers: 4
```

---

## Features

- **Multi-paradigm Functions**: Clearly demonstrates Named Functions, Anonymous Function Expressions, and ES6 Arrow Functions.
- **Interactive UI Dashboard**:
  - Enter custom comma-separated numbers or choose from quick preset buttons.
  - Visual element chips color-coded for even and odd numbers, highlighting the maximum element with a badge.
  - Calculation breakdowns showing the addition equation and odd numbers list.
  - Reset button to quickly restore defaults.
- **Reference Card**: Embedded code snippets explaining the function implementations on the webpage.
- **Responsive Design**: Custom CSS optimized for desktop, tablet, and mobile screens.

---

## Technologies Used

- **HTML5**: Semantic layout, form inputs, and preset buttons
- **CSS3**: Modern cards, responsive grids, chips, and color-coded tags
- **JavaScript (ES6)**: Functions (named, anonymous expression, arrow), arrays, loops, and DOM manipulation

---

## Project Structure

Inside the `DIPAK KALE Task_15` folder:
- `index.html` – Webpage layout, form controls, and results dashboard
- `style.css` – CSS styling and responsive rules
- `script.js` – 3 function implementations, console output, and interactive DOM events
- `README.md` – Project documentation, function explanations, and test instructions

---

## How to Run & Test

1. Navigate to the `DIPAK KALE Task_15` directory.
2. Double-click or open `index.html` in any web browser.
3. **To view console output**:
   - Press **F12** (or right-click $\to$ **Inspect**).
   - Select the **Console** tab to view the output for the dummy array.
4. **To test interactively**:
   - Enter comma-separated numbers (e.g., `4, 8, 2, 11, 6, 7, 10`) or click any **Quick Preset** button.
   - Click **Run Operations** to see real-time updates on screen.

---

**Author:** Dipak Kale  
**Course:** MERN Stack Course
