# Week 6 - Weather Application

## Aim
To develop a weather application using HTML, CSS, and JavaScript that fetches and displays real-time weather data based on user input, while also utilizing localStorage to save the last searched city.

## Features Implemented

1. **Simple UI Design**
   - Input field for city name
   - Button to fetch weather details
   - Section to display weather output
   - Clean and responsive styling

2. **Weather API Integration**
   - Uses wttr.in API to fetch real-time weather data
   - Implements proper error handling for invalid cities
   - Displays temperature, condition, humidity, wind speed, and feels-like temperature

3. **Asynchronous Operations**
   - Uses async/await syntax for clean asynchronous code
   - Implements try...catch for proper error handling
   - Shows loading state while fetching data

4. **Dynamic DOM Updates**
   - Updates weather information dynamically
   - Displays error messages for user feedback
   - Shows loading states during API calls

5. **Local Storage Integration**
   - Saves the last searched city
   - Automatically loads last searched city on page reload
   - Provides user feedback when showing cached city

## Technical Implementation

### Key JavaScript Features Used:
- **Fetch API**: For making HTTP requests to the weather API
- **Async/Await**: For handling asynchronous operations
- **LocalStorage**: For persisting user data
- **DOM Manipulation**: For updating the user interface
- **Event Listeners**: For handling user interactions

### Error Handling:
- Invalid city names
- Network failures
- API errors
- Empty input validation

## How to Use

1. Open `index.html` in a web browser
2. Enter a city name in the input field
3. Click "Get Weather" or press Enter
4. View the weather information displayed
5. Reload the page to see the last searched city automatically loaded

## VIVA Questions Covered

1. **Fetch API Usage**: Demonstrated with proper async/await implementation
2. **Async/Await vs .then()**: Clean, readable asynchronous code structure
3. **DOM Updates**: Dynamic content updates using innerHTML and proper element selection
4. **LocalStorage**: Persistent data storage for user preferences
5. **Error Handling**: Graceful error management with try...catch blocks

## Files Structure
```
Week6/
├── index.html (Main application file)
└── README.md (This documentation)
```

## Browser Compatibility
- Works in all modern browsers that support:
  - Fetch API
  - LocalStorage
  - Async/Await
  - ES6+ JavaScript features