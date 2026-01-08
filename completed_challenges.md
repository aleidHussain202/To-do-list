# JavaScript Learning Log & Finished Challenges

## Introduction & Game Plan

/\*

---

WELCOME TO YOUR JAVASCRIPT!

---

This is where the magic happens. You need to write the logic
to make your To-Do list interactive.

Here is your game plan (The Logic Flow):

STEP 1: SELECTING ELEMENTS

---

You can't do anything with the HTML elements until you "grab" them
using JavaScript.

- How do you get the Input Box? (Hint: document.getElementById)
- How do you get the Button?
- How do you get the List (<ul>)?

STEP 2: LISTENING FOR EVENTS

---

When the user clicks the "Add" button, something needs to happen.

- You need to add an "event listener" to your button.
- The event type is 'click'.

STEP 3: WRITING THE LOGIC (The Function)

---

Inside that event listener (or a separate function), you need to do a few things:

A. Get the text: - Look at the .value of your input box.

B. Check validity: - If the text is empty, maybe don't do anything? Or alert the user?

C. Create the new Task Item: - You need to create a new generic list item (<li>). - Inside that <li>, you need to put the text the user wrote. - You probably also want a "Delete" button inside that <li>.

D. Add it to the page: - Take that beautiful new <li> you created and append it
to your main List (<ul>).

E. Cleanup: - Clear out the input box so it's ready for the next task.

EXTRA CHALLENGES (Twist & Turns):

---

1. Can you make hitting "Enter" in the input box also add the task?
2. How do you make the "Delete" button actually work? (Hint: The button is inside the <li>)
3. How do you mark a task as "Done"? (Maybe click the text to cross it out?)
   \*/

## Challenge 1: Create a Delete Button

// -------------------------------------------------------------
// CHALLENGE 1: CREATE A DELETE BUTTON
// -------------------------------------------------------------
// 1. Create a button element (document.createElement("button"))
// 2. Set its text content to "X" or "Delete"
// 3. Add the "delete-btn" class to it for style
// 4. Add a click event listener to it:
// - Inside the function, remove the list item (li.remove())
// 5. Append the button to the 'li' (li.appendChild(yourButton))

## Challenge 2: Toggle "Completed" State

// -------------------------------------------------------------
// CHALLENGE 2: TOGGLE "COMPLETED" STATE
// -------------------------------------------------------------
// Add a click event listener to the 'li' itself:
// - Inside the function, toggle the class "completed"
// (li.classList.toggle("completed"))

## Challenge 3: Enable "Enter" Key

// -------------------------------------------------------------
// CHALLENGE 3: ENABLE "ENTER" KEY
// -------------------------------------------------------------
// Add an event listener to the input box ("task-input"):
// - Listen for the "keypress" event
// - Inside the function(event), check if event.key === "Enter"
// - If it is, call getInputTask()

## Challenge 4: Filter Tasks

// -------------------------------------------------------------
// CHALLENGE 4: FILTER TASKS
// -------------------------------------------------------------
// 1. Create a function called filterTasks(status)
// - It should take one argument, 'status' (e.g., "all", "active", "completed")
// - Get all 'li' elements from the list (document.querySelectorAll("#task-list li"))
// - Loop through each 'li' using .forEach(task => {...})
// - Inside the loop:
// - Check if the task has the class "completed"
// - If status === "all", show everything (task.style.display = "flex")
// - If status === "completed", show only if it HAS "completed" class, else hide it (display = "none")
// - If status === "active", show only if it does NOT have "completed" class, else hide
//
// 2. Add event listeners to your new buttons:
// - document.getElementById("filter-all").addEventListener("click", () => filterTasks("all"))
// - document.getElementById("filter-active").addEventListener("click", () => filterTasks("active"))
// - document.getElementById("filter-completed").addEventListener("click", () => filterTasks("completed"))

## Extra Notes (Persistence)

// HINT: Loop through all li elements in task-list
// For each task, get the text from the span and check if it has "completed" class
// Push an object { text: "...", completed: true/false } into the tasks array

// TODO: Select all li elements from #task-list
// TODO: Loop with .forEach()
// TODO: Get text with .querySelector("span").textContent
// TODO: Check completed with .classList.contains("completed")

// TODO: Call loadTasks() when page loads
// HINT: Use window.addEventListener("DOMContentLoaded", ...)
// TODO: Call saveTasks() after:
// - Adding a new task (end of getInputTask)
// - Toggling completed
// - Deleting a task

# HTML Structure Log (Finished)

## Step 1: Create the Main Container

<!--
  STEP 1: Create the Main Container
  - Add a div with class "container" to hold everything.
  - Inside it, add a Header (h1) for your title.
-->

## Step 2: Create the Input Section

<!--
  STEP 2: Create the Input Section
  - Add a div with class "input-group".
  - Inside it, add an <input> tag with id="task-input".
  - Add a <button> tag with id="add-btn".
-->

## Step 3: Create the Filter Buttons

<!--
  STEP 3: Create the Filter Buttons (Optional)
  - Add a div with class "filters".
  - Add buttons for "All", "Active", and "Completed".
-->

## Step 4: Create the Task List

<!--
  STEP 4: Create the Task List
  - Add a <ul> (unordered list) with id="task-list".
  - This will be empty for now. JavaScript will add items here later!
-->

# CSS Styling Log (Finished)

## Step 1: Basic Setup

/\*
STEP 1: Basic setup

- Reset margins/paddings
- Set a font family
  \*/

## Step 2: Main Container

/_
STEP 2: Main Container
_/

## Step 3: Input Section

/\*
STEP 3: Input Section

- Style the input-group to layout the input and button
  \*/

## Step 4: Task List

/\*
STEP 4: Task List

- Remove default list bullets
  \*/

## Step 5: Individual Task Items

/\*
STEP 5: Individual Task Items

- How should each row look?
  \*/
