# My To-Do List 📝

A simple, interactive to-do list web application built with vanilla HTML, CSS, and JavaScript. This project allows users to add, complete, delete, and filter tasks with persistent storage using localStorage.

![To-Do List App](https://img.shields.io/badge/Status-Complete-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

- **Add Tasks**: Quickly add new tasks using the input field and "Add" button
- **Mark as Complete**: Click on any task to toggle its completion status (strikethrough)
- **Delete Tasks**: Remove tasks with the "X" button
- **Filter Tasks**: View all tasks, only active tasks, or only completed tasks
- **Keyboard Support**: Press Enter in the input field to add tasks
- **Persistent Storage**: Tasks are automatically saved to localStorage and restored on page reload

## 🚀 Getting Started

### Prerequisites

No special requirements! Just a modern web browser (Chrome, Firefox, Safari, Edge, etc.)

### Installation

1. Clone or download this repository
2. Navigate to the project folder
3. Open `index.html` in your web browser

That's it! No build process or dependencies required.

## 📁 Project Structure

```
To do list/
│
├── index.html          # Main HTML structure
├── style.css           # Styling and layout
├── script.js           # JavaScript logic and interactivity
└── README.md           # This file
```

## 🎯 How to Use

1. **Adding a Task**:

   - Type your task in the input field
   - Click the "Add" button or press Enter
   - The task will appear in the list below

2. **Completing a Task**:

   - Click anywhere on the task text
   - The task will be crossed out to indicate completion
   - Click again to mark it as active

3. **Deleting a Task**:

   - Click the "X" button on the right side of any task
   - The task will be permanently removed

4. **Filtering Tasks**:
   - Click "All" to see all tasks
   - Click "Active" to see only incomplete tasks
   - Click "Completed" to see only finished tasks

## 🛠️ Technical Details

### HTML Structure

- Semantic HTML5 markup
- Container-based layout
- Input group for task entry
- Filter buttons for task management
- Unordered list for task display

### CSS Styling

- Flexbox layout for responsive design
- Custom color scheme with green accents
- Hover effects for better UX
- Completed task styling with strikethrough

### JavaScript Functionality

- DOM manipulation for dynamic task creation
- Event listeners for user interactions
- LocalStorage API for data persistence
- Filter logic for task categorization

## 🎨 Customization

You can easily customize the appearance by modifying `style.css`:

- **Colors**: Change the background colors in the `body` and `.container` selectors
- **Fonts**: Add a Google Font link in `index.html` and update the `font-family` in CSS
- **Sizes**: Adjust padding, margins, and widths to your preference

## 📝 Code Highlights

### Task Creation

```javascript
function getInputTask() {
  const input = document.getElementById("task-input").value;
  if (input === "") {
    alert("Please Enter a valid Task!");
    return;
  }
  // Creates task element with delete button and event listeners
}
```

### Task Filtering

```javascript
function filterTasks(status) {
  const list = document.querySelectorAll("#task-list li");
  list.forEach((task) => {
    // Shows/hides tasks based on completion status
  });
}
```

### Local Storage

```javascript
function saveTasks() {
  // Saves all tasks to localStorage as JSON
}

function loadTasks() {
  // Restores tasks from localStorage on page load
}
```

## 🐛 Known Issues

- The `stopPropagation()` call in the delete button event listener should be `event.stopPropagation()` to prevent the click from bubbling to the parent `li` element

## 🔮 Future Enhancements

- [ ] Add task editing functionality
- [ ] Implement task priorities (high, medium, low)
- [ ] Add due dates and reminders
- [ ] Include task categories/tags
- [ ] Add dark mode toggle
- [ ] Implement drag-and-drop reordering
- [ ] Add task search functionality
- [ ] Export/import tasks as JSON

## 📄 License

This project is open source and available for personal and educational use.

## 👨‍💻 Author

Created as a learning project to practice HTML, CSS, and JavaScript fundamentals.

---

**Happy Task Managing! 🎉**
