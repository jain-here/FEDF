# Week 8 - To-Do List Application with React Hooks

**Author:** Atharva Jain - 2420030092

## Aim
To-Do List Application with React Hooks

## Description
The To-Do List Application is a simple yet powerful project built using React Hooks and a JSON Server backend to demonstrate full CRUD (Create, Read, Update, Delete) operations. The app allows users to manage their daily tasks efficiently by adding, viewing, updating, and deleting them through an intuitive user interface. It uses Axios to handle API requests between the React frontend and the local backend (http://localhost:5000/tasks), where all task data is stored in a JSON file. The project showcases key React concepts such as useState, useEffect, and event handling, while also emphasizing RESTful API communication. This setup makes it an excellent learning example for understanding modern front-end development, API integration, and basic backend data management using mock servers.

## Project Structure
```
Week8/
│
├── backend/
│   └── db.json                 # JSON Server database file (stores tasks)
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── TaskForm.jsx    # Component for adding and editing tasks
    │   │   ├── TaskList.jsx    # Component for rendering task list
    │   │   └── TaskItem.jsx    # Component for individual task items
    │   │
    │   ├── App.jsx             # Main App component (uses useState, useEffect)
    │   ├── App.css             # Styling for To-Do App
    │   ├── api.jsx             # Axios configuration (CRUD functions)
    │   ├── main.jsx            # Entry point
    │   └── index.css           # Global styles
    │
    ├── index.html              # HTML template
    ├── package.json            # Dependencies and scripts
    ├── vite.config.js          # Vite configuration
    └── eslint.config.js        # ESLint configuration
```

## Tasks
1. Create a functional React app with useState to manage the task list
2. Allow users to add new tasks via a controlled form
3. Implement list rendering to display tasks with keys
4. Enable task completion toggling and deletion using event handlers
5. Use conditional rendering to show a message when no tasks are present
6. Implement all CRUD operations using data stored in a JSON file

## Setup Instructions

### Prerequisites
- Node.js and npm installed on your system
- A code editor (VS Code recommended)

### Step 1: Install Dependencies

#### Backend Setup
```bash
cd Week8/backend
npm install -g json-server
```

#### Frontend Setup
```bash
cd Week8/frontend
npm install
```

This will install all required dependencies including:
- React
- React DOM
- Axios
- Vite
- ESLint

### Step 2: Run the Application

#### Terminal 1 - Start Backend (JSON Server)
```bash
cd Week8/backend
npx json-server --watch db.json --port 5000
```

The JSON server will start at: `http://localhost:5000`

#### Terminal 2 - Start Frontend (React App)
```bash
cd Week8/frontend
npm run dev
```

The React app will start at: `http://localhost:5173` (or another port if 5173 is busy)

### Step 3: Access the Application
Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

## API Endpoints

| Operation | HTTP Method | Endpoint URL | Description |
|-----------|-------------|--------------|-------------|
| Read (GET) | GET | http://localhost:5000/tasks | Fetches all tasks |
| Read (GET by ID) | GET | http://localhost:5000/tasks/1 | Fetches a single task (ID = 1) |
| Create (POST) | POST | http://localhost:5000/tasks | Adds a new task |
| Update (PUT) | PUT | http://localhost:5000/tasks/1 | Updates task with ID = 1 |
| Delete (DELETE) | DELETE | http://localhost:5000/tasks/1 | Deletes task with ID = 1 |

## Testing with Postman

### Create (POST)
- **URL:** `http://localhost:5000/tasks`
- **Method:** POST
- **Body (JSON):**
```json
{
  "title": "New Task",
  "completed": false
}
```

### Read (GET)
- **URL:** `http://localhost:5000/tasks`
- **Method:** GET

### Update (PUT)
- **URL:** `http://localhost:5000/tasks/1`
- **Method:** PUT
- **Body (JSON):**
```json
{
  "id": 1,
  "title": "Updated Task",
  "completed": true
}
```

### Delete (DELETE)
- **URL:** `http://localhost:5000/tasks/1`
- **Method:** DELETE

## Features

### Implemented Functionality
✅ **Add Tasks** - Users can add new tasks through a controlled form input  
✅ **View Tasks** - All tasks are displayed in a responsive list  
✅ **Toggle Completion** - Click on a task to mark it as completed/incomplete  
✅ **Delete Tasks** - Remove tasks with a delete button  
✅ **Empty State** - Shows a friendly message when no tasks exist  
✅ **Persistent Storage** - Tasks are saved in JSON file via backend  
✅ **Real-time Updates** - UI updates instantly on all operations  

## Key React Concepts Used

1. **useState Hook** - Managing component state
2. **useEffect Hook** - Side effects and data fetching
3. **Controlled Components** - Form input handling
4. **Event Handlers** - User interaction handling
5. **Conditional Rendering** - Dynamic UI based on state
6. **Props** - Component communication
7. **Component Composition** - Modular component structure
8. **Async/Await** - Asynchronous API calls

## Results
The result of the To-Do List Application is a fully functional and responsive task management system that successfully performs all CRUD operations — creating, reading, updating, and deleting tasks — using a React frontend and a JSON Server backend. Users can easily add new tasks, view their list in real time, mark tasks as completed, edit task details, and delete them as needed. All changes are instantly reflected in the interface and persisted in the backend JSON file via Axios API calls. The project demonstrates seamless communication between the frontend and backend, validating the correctness and efficiency of the implemented RESTful architecture, React Hooks usage, and API integration.

## VIVA Questions & Answers

### 1. How does the useState hook help in managing the state of a task list in a functional React component?

**Answer:** The useState hook helps in managing the state of a task list by allowing a React functional component to store and update the list dynamically. It keeps track of the current tasks and re-renders the component whenever the task list changes (e.g., adding or deleting a task).

**Example:**
```javascript
const [tasks, setTasks] = useState([]);
// tasks - current state value
// setTasks - function to update the state
```

### 2. What is a controlled component in React, and how is it used in forms to add new tasks?

**Answer:** A controlled component in React is a form element (like an input) whose value is controlled by React state. In a to-do app, it is used to manage the input field for adding new tasks by updating the state on every keystroke and submitting the value through an event handler.

**Example:**
```javascript
const [title, setTitle] = useState("");

<input
  value={title}
  onChange={(e) => setTitle(e.target.value)}
/>
```

### 3. Why is it important to use a unique key prop when rendering a list of tasks in React?

**Answer:** Using a unique key prop when rendering a list of tasks helps React identify which items have changed, been added, or removed. This improves rendering efficiency and prevents potential bugs during updates or re-renders.

**Example:**
```javascript
{tasks.map((task) => (
  <TaskItem key={task.id} task={task} />
))}
```

### 4. How can event handlers be used to toggle task completion status or delete a task in a React component?

**Answer:** Event handlers in React are used to perform actions such as toggling a task's completion status or deleting a task. For example, clicking a checkbox can trigger a function to update a task's "completed" state, while clicking a delete button can remove it from the task list.

**Example:**
```javascript
const toggleTaskCompletion = async (id) => {
  const task = tasks.find((t) => t.id === id);
  const updatedTask = { ...task, completed: !task.completed };
  await updateTask(id, updatedTask);
  setTasks(tasks.map((t) => (t.id === id ? updatedTask : t)));
};
```

### 5. What is conditional rendering in React, and how can it be used to display a message when the task list is empty?

**Answer:** Conditional rendering in React means displaying content based on certain conditions. In a to-do app, it can be used to show a message like "No tasks available" when the task list is empty, and otherwise display the list of tasks when items are present.

**Example:**
```javascript
{tasks.length === 0 ? (
  <p>No tasks yet! Add your first one below 👇</p>
) : (
  <TaskList tasks={tasks} />
)}
```

### 6. What is the purpose of useEffect hook in this application?

**Answer:** The useEffect hook is used to perform side effects in functional components. In this application, it fetches the tasks from the backend API when the component first mounts, ensuring the task list is loaded and displayed to the user.

**Example:**
```javascript
useEffect(() => {
  fetchTasks();
}, []); // Empty dependency array means run once on mount
```

### 7. How does Axios simplify HTTP requests compared to fetch API?

**Answer:** Axios automatically transforms JSON data, handles errors more gracefully, and provides a simpler API for making HTTP requests. Unlike fetch, Axios automatically throws errors for bad status codes and doesn't require manually parsing JSON responses.

### 8. What is the role of props in component communication?

**Answer:** Props (properties) are used to pass data from parent components to child components. In this app, props like `onAddTask`, `onDelete`, and `onToggle` are passed from the App component to child components, enabling upward communication through callback functions.

### 9. Explain the concept of lifting state up in React.

**Answer:** Lifting state up means moving state to the closest common ancestor of components that need to share that state. In this app, the tasks state is kept in the App component and passed down to child components, allowing multiple components to access and modify the same data.

### 10. What is JSON Server and why is it useful for development?

**Answer:** JSON Server is a simple tool that creates a full fake REST API from a JSON file. It's useful for rapid prototyping and development because it allows developers to test frontend applications without building a complete backend, supporting all CRUD operations with minimal setup.

## Troubleshooting

### CORS Issues
If you encounter CORS errors, ensure both servers (frontend and backend) are running on the specified ports.

### Port Already in Use
If port 5000 or 5173 is already in use:
- For backend: Change the port using `npx json-server --watch db.json --port 5001`
- For frontend: Vite will automatically suggest another port

### Module Not Found
If you get module errors, ensure you've run `npm install` in the frontend directory.

## Technologies Used
- **React 18.3** - UI library
- **Vite** - Build tool and dev server
- **Axios** - HTTP client
- **JSON Server** - Mock REST API
- **ESLint** - Code linting
- **CSS3** - Styling

## Learning Outcomes
1. Understanding React Hooks (useState, useEffect)
2. Working with RESTful APIs
3. Implementing CRUD operations
4. Managing component state and props
5. Event handling in React
6. Conditional rendering techniques
7. Working with Axios for API calls
8. Component-based architecture
9. Controlled form components
10. Modern React development with Vite
