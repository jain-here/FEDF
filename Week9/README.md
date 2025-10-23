# Week 9 - Book Explorer with React Router and Props

## Aim
Book Explorer with React Router and Props

## Description
The Book Explorer project is an interactive web application developed using modern frontend technologies like Vite, React, and Node.js. Its primary goal is to provide users with an efficient and visually appealing platform to explore books, view detailed information, and manage reading preferences. The project emphasizes fast loading times, modular design, and smooth navigation using React's component-based architecture. Vite serves as the build tool, offering lightning-fast server startup and optimized production builds. The development environment is designed for scalability, supporting future integration of APIs for book data retrieval and personalized recommendations.

## Project Structure
```
book-explorer/
├── /src
│   ├── main.jsx
│   ├── App.jsx
│   ├── /components
│   │   ├── BookCard.jsx
│   │   └── BookDetail.jsx
│   ├── /pages
│   │   └── BookList.jsx
│   └── /data
│       └── booksData.js
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── .gitignore
```

## Tasks
1. **Set up routing with React Router:**
   - Define two main routes:
     - `/` for displaying the book list
     - `/book/:id` for viewing detailed information about a selected book

2. **Create a parent component** to manage the list of books using useState

3. **Use props** to pass book data from the parent to:
   - A reusable BookCard component (for the list view)
   - A BookDetail component (for the detail view)

4. **Implement dynamic routing:**
   - Use the `useParams()` hook from react-router-dom to retrieve the book ID from the URL and display corresponding details

5. **Create reusable components:**
   - **BookCard**: Displays basic info (title, author) in the list
   - **BookDetail**: Displays title, author, description, and rating

6. **(Optional)** Simulate an API fetch using useEffect to load book data on initial render

## Setup Instructions

### Step 1: Create the Project
```bash
npm create vite@latest book-explorer
cd book-explorer
```

### Step 2: Install Dependencies
```bash
npm install
npm install react-router-dom
```

### Step 3: Run the Project
```bash
npm run dev
```

The application will start at `http://localhost:5173`

## Features

### Implemented Functionality
✅ **React Router Integration** - Client-side routing for seamless navigation  
✅ **Dynamic Routes** - URL parameters for book-specific pages  
✅ **Component Reusability** - Modular BookCard and BookDetail components  
✅ **Props Data Passing** - Parent-to-child data flow  
✅ **useState Hook** - State management for book list  
✅ **useEffect Hook** - Simulated API data fetching  
✅ **useParams Hook** - Dynamic URL parameter extraction  
✅ **Loading State** - User feedback during data loading  
✅ **Navigation Links** - Smooth transitions between views  

## Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | BookList | Displays all available books in a grid |
| `/book/:id` | BookDetail | Shows detailed information for a specific book |

## Components Overview

### 1. Main.jsx
- Entry point of the application
- Wraps the App component with BrowserRouter
- Renders the root React component

### 2. App.jsx
- Main application component
- Defines routing structure using Routes and Route
- Renders the header and navigation container

### 3. BookCard.jsx (Component)
- **Props:** `book` object containing id, title, and author
- **Purpose:** Display book summary in the list view
- **Features:** 
  - Shows book title and author
  - Link to detailed view using React Router's Link component

### 4. BookDetail.jsx (Component)
- **Props:** None (uses useParams to get book ID from URL)
- **Purpose:** Display complete book information
- **Features:**
  - Uses useParams hook to extract book ID from URL
  - Finds book data from booksData array
  - Displays title, author, description, and rating
  - Back navigation link to return to list

### 5. BookList.jsx (Page)
- **State:** Books array managed with useState
- **Purpose:** Display all books in a grid layout
- **Features:**
  - Simulates API call with useEffect and setTimeout
  - Shows loading message while data loads
  - Maps through books and renders BookCard for each
  - Responsive flex layout

### 6. booksData.js (Data)
- Static book data array
- Contains 3 sample books with:
  - id, title, author, description, rating

## Key React Concepts Used

### 1. React Router Hooks
- **BrowserRouter** - Provides routing context
- **Routes & Route** - Define route configuration
- **Link** - Navigation without page reload
- **useParams** - Access URL parameters

### 2. React Hooks
- **useState** - Manage component state
- **useEffect** - Side effects and data loading

### 3. Component Patterns
- **Props drilling** - Pass data from parent to child
- **Conditional rendering** - Show loading state
- **Component composition** - Build UI from smaller components

## Sample Outputs

### Home Page (/)
```
📚 Book Explorer
Available Books
Loading books...
```

After loading:
```
📚 Book Explorer
Available Books

[Card 1]              [Card 2]              [Card 3]
Full Stack Web        Deep Work             The Alchemist
Development
By Stepen Roy         By Cal Newport        By Paulo Coelho
View Details →        View Details →        View Details →
```

### Detail Page (/book/2)
```
📚 Book Explorer

Deep Work
By Cal Newport

Rules for focused success in a distracted world.

⭐ Rating: 4.5

← Back to List
```

## Results
The Book Explorer application successfully compiled and launched using the Vite development server. The local server started without dependency errors, confirming proper compatibility with the latest toolchain. The user interface loaded efficiently in the browser, demonstrating Vite's performance benefits — such as instant updates on code changes and optimized asset handling. The final outcome validated the stability and responsiveness of the project, ensuring it meets modern web performance and usability standards.

## VIVA Questions & Answers

### 1. What is the purpose of using useParams() in React Router, and how does it help in dynamic routing?

**Answer:** The `useParams()` hook is used to access dynamic URL parameters in React Router. It helps in dynamic routing by retrieving values like book IDs from the URL, allowing components such as BookDetail to display specific data based on the selected item.

**Example:**
```javascript
const { id } = useParams(); // Extracts 'id' from URL like /book/2
const book = booksData.find((b) => b.id === parseInt(id));
```

### 2. How do you define and configure routes using react-router-dom for both list and detail views of books?

**Answer:** Routes are defined using `<Routes>` and `<Route>` from react-router-dom. For example, `/` shows the book list, and `/book/:id` displays details of a selected book, enabling smooth navigation between list and detail views.

**Example:**
```javascript
<Routes>
  <Route path="/" element={<BookList />} />
  <Route path="/book/:id" element={<BookDetail />} />
</Routes>
```

### 3. How can props be used to pass book data from a parent component to a child like BookCard or BookDetail?

**Answer:** Props allow data to be passed from a parent component (like BookList) to child components (BookCard or BookDetail). This enables each child component to display dynamic content, such as book titles or authors, based on the parent's data.

**Example:**
```javascript
// Parent (BookList)
<BookCard book={book} />

// Child (BookCard)
const BookCard = ({ book }) => {
  return <h3>{book.title}</h3>
}
```

### 4. What is the role of the useState and useEffect hooks in managing and loading book data in a React app?

**Answer:** `useState` manages the state of books in the app, while `useEffect` is used to load or fetch book data when the component first renders. Together, they ensure the book list updates automatically when data changes.

**Example:**
```javascript
const [books, setBooks] = useState([]);

useEffect(() => {
  setTimeout(() => {
    setBooks(booksData); // Simulates API call
  }, 500);
}, []); // Empty array means run once on mount
```

### 5. Why should we use reusable components like BookCard and BookDetail in a React application, and what are the benefits?

**Answer:** Reusable components improve code organization and reduce redundancy. Components like BookCard and BookDetail can be reused with different data, making the React app more maintainable, modular, and scalable.

**Benefits:**
- **Code Reusability** - Write once, use multiple times
- **Maintainability** - Easier to update and debug
- **Separation of Concerns** - Each component has a single responsibility
- **Scalability** - Easy to add new features
- **Testing** - Easier to test isolated components

### 6. What is the difference between Link and anchor tags (<a>) in React Router?

**Answer:** The `Link` component from React Router prevents full page reloads and enables client-side navigation, maintaining application state. Traditional anchor tags (`<a>`) cause a full page refresh, losing all application state.

**Example:**
```javascript
// React Router Link (Recommended)
<Link to="/book/1">View Book</Link>

// Traditional anchor (Avoid in SPAs)
<a href="/book/1">View Book</a>
```

### 7. How does BrowserRouter enable routing in a React application?

**Answer:** `BrowserRouter` is a component that provides routing context to the entire application. It uses the HTML5 history API to keep the UI in sync with the URL, enabling navigation without page reloads.

### 8. What is the purpose of the key prop when rendering lists in React?

**Answer:** The `key` prop helps React identify which items in a list have changed, been added, or removed. It optimizes rendering performance and prevents bugs during updates.

**Example:**
```javascript
{books.map((book) => (
  <BookCard key={book.id} book={book} />
))}
```

### 9. How does conditional rendering work in the BookList component?

**Answer:** Conditional rendering uses JavaScript conditional operators to display different UI based on state. In BookList, it shows a loading message when the books array is empty and the book grid when data is available.

**Example:**
```javascript
{books.length === 0 ? (
  <p>Loading books...</p>
) : (
  <div>{/* Book grid */}</div>
)}
```

### 10. What is Vite and why is it used in this project?

**Answer:** Vite is a modern build tool and development server that provides instant server start, lightning-fast Hot Module Replacement (HMR), and optimized production builds. It's used in this project for superior development experience and performance compared to traditional bundlers.

## Technologies Used
- **React 18.3** - UI library
- **React Router DOM 6.20** - Client-side routing
- **Vite 5.4** - Build tool and dev server
- **ESLint** - Code linting
- **HTML5 & CSS3** - Structure and styling

## Troubleshooting

### Module Not Found Errors
Ensure you've installed dependencies:
```bash
npm install
npm install react-router-dom
```

### Port Already in Use
Vite will automatically suggest another port if 5173 is busy.

### Routing Not Working
Make sure your App is wrapped with `<BrowserRouter>` in main.jsx.

## Future Enhancements
- Add search functionality
- Implement filtering by author/rating
- Add book categories
- Integrate with real book API (Google Books API)
- Add favorites/bookmarks feature
- Implement authentication
- Add book reviews and comments

## Learning Outcomes
1. Understanding React Router for single-page applications
2. Working with dynamic routes and URL parameters
3. Using useParams hook for route parameters
4. Component props and data flow
5. State management with useState
6. Side effects with useEffect
7. Creating reusable components
8. Conditional rendering techniques
9. Modern React development with Vite
10. Client-side navigation without page reloads
