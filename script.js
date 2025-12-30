/*
  ---------------------------------------------------------
  WELCOME TO YOUR JAVASCRIPT!
  ---------------------------------------------------------
  
  This is where the magic happens. You need to write the logic 
  to make your To-Do list interactive.

  Here is your game plan (The Logic Flow):
  
  STEP 1: SELECTING ELEMENTS
  --------------------------
  You can't do anything with the HTML elements until you "grab" them 
  using JavaScript. 
  - How do you get the Input Box? (Hint: document.getElementById)
  - How do you get the Button?
  - How do you get the List (<ul>)?

  STEP 2: LISTENING FOR EVENTS
  ----------------------------
  When the user clicks the "Add" button, something needs to happen.
  - You need to add an "event listener" to your button.
  - The event type is 'click'.

  STEP 3: WRITING THE LOGIC (The Function)
  ----------------------------------------
  Inside that event listener (or a separate function), you need to do a few things:
  
  A. Get the text:
     - Look at the .value of your input box.
  
  B. Check validity:
     - If the text is empty, maybe don't do anything? Or alert the user?
  
  C. Create the new Task Item:
     - You need to create a new generic list item (<li>).
     - Inside that <li>, you need to put the text the user wrote.
     - You probably also want a "Delete" button inside that <li>.
  
  D. Add it to the page:
     - Take that beautiful new <li> you created and append it 
       to your main List (<ul>).
  
  E. Cleanup:
     - Clear out the input box so it's ready for the next task.

  EXTRA CHALLENGES (Once the above works):
  ----------------------------------------
  1. Can you make hitting "Enter" in the input box also add the task?
  2. How do you make the "Delete" button actually work? (Hint: The button is inside the <li>)
  3. How do you mark a task as "Done"? (Maybe click the text to cross it out?)

  Good luck! You got this.
*/
function getInputTask(){
   const input = document.getElementById("task-input").value;
   if(input === ""){
      alert("Please Enter a valid Task!")
      return;
   }
   const textSpan = document.createElement("span");
   textSpan.textContent = input;
   const list = document.getElementById("task-list");
   const li = document.createElement("li");
   li.className = "task-item";
   
   // -------------------------------------------------------------
   // CHALLENGE 1: CREATE A DELETE BUTTON
   // -------------------------------------------------------------
   // 1. Create a button element (document.createElement("button"))
   // 2. Set its text content to "X" or "Delete"
   // 3. Add the "delete-btn" class to it for style
   // 4. Add a click event listener to it:
   //    - Inside the function, remove the list item (li.remove())
   // 5. Append the button to the 'li' (li.appendChild(yourButton))

   // -------------------------------------------------------------
   // CHALLENGE 2: TOGGLE "COMPLETED" STATE
   // -------------------------------------------------------------
   // Add a click event listener to the 'li' itself:
   // - Inside the function, toggle the class "completed"
   //   (li.classList.toggle("completed"))
   const delBtn = document.createElement("button");
   delBtn.textContent = "X";
   delBtn.className = "delete-btn";
   delBtn.addEventListener("click", () => {
      li.remove();
      stopPropagation();
   })
   li.appendChild(textSpan);
   li.appendChild(delBtn);
   list.appendChild(li);
   document.getElementById("task-input").value = "";

   li.addEventListener("click", () => {
      li.classList.toggle("completed");
   })
}


document.getElementById("add-btn").addEventListener("click", getInputTask);
document.getElementById("task-input").addEventListener("keypress", (event) => {
   if(event.key === "Enter"){
      getInputTask()
   }
})
// -------------------------------------------------------------
// CHALLENGE 3: ENABLE "ENTER" KEY
// -------------------------------------------------------------
// Add an event listener to the input box ("task-input"):
// - Listen for the "keypress" event
// - Inside the function(event), check if event.key === "Enter"
// - If it is, call getInputTask()


// -------------------------------------------------------------
// CHALLENGE 4: FILTER TASKS
// -------------------------------------------------------------
// 1. Create a function called filterTasks(status)
//    - It should take one argument, 'status' (e.g., "all", "active", "completed")
//    - Get all 'li' elements from the list (document.querySelectorAll("#task-list li"))
//    - Loop through each 'li' using .forEach(task => {...})
//    - Inside the loop:
//      - Check if the task has the class "completed"
//      - If status === "all", show everything (task.style.display = "flex")
//      - If status === "completed", show only if it HAS "completed" class, else hide it (display = "none")
//      - If status === "active", show only if it does NOT have "completed" class, else hide
//
// 2. Add event listeners to your new buttons:
//    - document.getElementById("filter-all").addEventListener("click", () => filterTasks("all"))
//    - document.getElementById("filter-active").addEventListener("click", () => filterTasks("active"))
//    - document.getElementById("filter-completed").addEventListener("click", () => filterTasks("completed"))

function filterTasks(status){
   const list = document.querySelectorAll("#task-list li");
   list.forEach(task => {
      if(status === "all"){
         task.style.display = "flex";
      }
      if(status === "completed"){
         if(task.classList.contains("completed")){
            if(task.style.display === "none"){
               task.style.display = "flex";
            }
         }else{
            task.style.display = "none";
         }
      }
      else if(status === "active"){
         if(task.classList.contains("completed")){
            task.style.display = "none";
         }else{
            task.style.display = "flex";
         }
      }
   })
}

document.getElementById("filter-all").addEventListener("click", () => filterTasks("all"))
document.getElementById("filter-active").addEventListener("click", () => filterTasks("active"))
document.getElementById("filter-completed").addEventListener("click", () => filterTasks("completed"))




// ***************************************************

function saveTasks() {
   const tasks = [];
   
   // HINT: Loop through all li elements in task-list
   // For each task, get the text from the span and check if it has "completed" class
   // Push an object { text: "...", completed: true/false } into the tasks array
   
   // TODO: Select all li elements from #task-list
   // TODO: Loop with .forEach()
   // TODO: Get text with .querySelector("span").textContent
   // TODO: Check completed with .classList.contains("completed")

   const list = document.querySelectorAll("#task-list li");
   
   list.forEach(task => {
      const text = task.querySelector("span").textContent;
      const completed = task.classList.contains("completed");
      tasks.push({text, completed});
   })
   
   localStorage.setItem("tasks", JSON.stringify(tasks));
}



function loadTasks() {
   const saved = localStorage.getItem("tasks");
   if(!saved) return;
   
   const tasks = JSON.parse(saved);
   
   // HINT: Loop through each task object and recreate the li
   // Reuse the same logic from getInputTask() but use taskData.text instead of input
   // If taskData.completed is true, add the "completed" class
   
     


   tasks.forEach(taskData => {
      // TODO: Create li, span, delete button (same as getInputTask)
      // TODO: If taskData.completed, add "completed" class to li
      const list = document.getElementById("task-list");
      const li = document.createElement("li");
      li.className = "task-item";
      const textSpan = document.createElement("span");
      textSpan.textContent = taskData.text;
      const delBtn = document.createElement("button");
      delBtn.textContent = "X";
      delBtn.className = "delete-btn";
      delBtn.addEventListener("click", () => {
         li.remove();
         stopPropagation();
      })
      li.appendChild(textSpan);
      li.appendChild(delBtn);
      list.appendChild(li);
      document.getElementById("task-input").value = "";
      li.addEventListener("click", () => {
         li.classList.toggle("completed");
      })
   });
}