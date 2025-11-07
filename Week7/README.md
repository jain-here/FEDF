# Week 7 - Modular JavaScript and Working with JSON (Online Bookstore)

**Author:** Atharva Jain - 2420030092

## Aim
Modular JavaScript and Working with JSON (Online Bookstore)

## Description
This project demonstrates:
1. Creating a JSON data file containing a list of books with properties: title, author, price, availability
2. Structuring code using JavaScript modules:
   - A module for displaying book listings
   - A module for managing the shopping cart (add, remove, calculate total)
   - A module for updating the UI dynamically
3. Using ES6 module syntax (import/export) to separate and reuse functionality across scripts
4. Implementing interactivity using event listeners:
   - Add event listeners for "Add to Cart" buttons
   - Handle removal of items from the cart
   - Dynamically update the UI when the cart is modified
5. Displaying cart contents and total price:
   - Show a summary of books in the cart
   - Allow users to remove items or proceed to a mock checkout view

## Files
- `index.html` - Main HTML file with styling
- `books.json` - JSON data file containing book information
- `books.js` - Module for fetching book data
- `cart.js` - Module for managing shopping cart operations
- `ui.js` - Module for updating the UI dynamically
- `main.js` - Main entry point that imports and initializes all modules

## Sample Output
- A list of books with title, author, price, and availability is displayed
- "Add to Cart" buttons are shown (disabled for out-of-stock books)
- Clicking "Add to Cart" updates the cart UI dynamically
- Cart section displays selected books, allows removal, and shows total price
- A mock checkout view can be added as an extension

## Questions & Answers

### 1. How is JSON data structured to represent a list of books with properties like title, author, price, and availability?

**Answer:** JSON data is structured as an array of objects. Each object represents a book and contains key–value pairs for properties such as title, author, price, and availability.

```json
[
  {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "price": 299,
    "availability": "In Stock"
  },
  {
    "title": "1984",
    "author": "George Orwell",
    "price": 400,
    "availability": "Out of Stock"
  }
]
```

### 2. What are JavaScript ES6 modules, and how do import and export help in organizing code?

**Answer:** ES6 modules allow splitting code into separate files for better organization and reusability. The `export` keyword makes variables or functions available outside the module, while `import` allows you to bring them into another file.

```javascript
// cart.js
export function addToCart(item) {
  console.log(item + " added!");
}

// main.js
import { addToCart } from "./cart.js";
addToCart("Book 1");
```

### 3. How would you use event listeners to handle "Add to Cart" functionality in a book listing application?

**Answer:** Event listeners detect when a button is clicked. By attaching a click listener to each 'Add to Cart' button, the corresponding book can be added to the cart.

```javascript
document.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON" && e.target.textContent === "Add to Cart") {
    const index = e.target.dataset.index;
    addToCart(books[index]);
    updateCartUI();
  }
});
```

### 4. What is the role of a shopping cart module in a modular JavaScript app, and what key functions should it contain?

**Answer:** The shopping cart module manages cart operations like adding, removing, and calculating totals. This keeps cart logic separate from UI code.

```javascript
export function addToCart(book) {}
export function removeFromCart(index) {}
export function calculateTotal() {}
export function getCart() {}
```

### 5. How can the DOM be dynamically updated to reflect changes in the cart, such as item removal or total price calculation?

**Answer:** The DOM can be updated by rebuilding the cart UI whenever items are added or removed. Methods like `innerHTML` and `textContent` are used to refresh the display.

```javascript
function updateCartUI() {
  const cartContainer = document.getElementById("cart");
  cartContainer.innerHTML = "";
  const cart = getCart();
  cart.forEach((book, index) => {
    const item = document.createElement("div");
    item.innerHTML = `${book.title} - ₹${book.price}
      <button data-index="${index}">Remove</button>`;
    cartContainer.appendChild(item);
  });
  document.getElementById("total").textContent = "Total: ₹" + calculateTotal();
}
```

## How to Run
1. Open the `index.html` file in a modern web browser
2. Note: Due to CORS restrictions, you may need to run a local server to fetch the JSON file
3. You can use VS Code's Live Server extension or run a simple HTTP server:
   ```bash
   python -m http.server 8000
   ```
4. Then navigate to `http://localhost:8000` in your browser
