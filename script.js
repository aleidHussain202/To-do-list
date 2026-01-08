/**
 * To-Do List Application Logic
 * Handles task creation, modification, filtering, and local storage persistence.
 */





function getInputTask(){
   const input = document.getElementById("task-input").value;
   if(input === ""){
      alert("Please Enter a valid Task!")
      return;
   }
   addTask(input, false);
   document.getElementById("task-input").value = "";
}




function addTask(text, isCompleted){

   const textSpan = document.createElement("span");
   textSpan.textContent = text;
   const list = document.getElementById("task-list");
   const li = document.createElement("li");
   li.className = "task-item";

   textSpan.addEventListener("dblclick", () => {
      editTask(textSpan);
   });
   textSpan.addEventListener("click", (e) => {
      e.stopPropagation();
   })

   const delBtn = document.createElement("button");
   delBtn.textContent = "X";
   delBtn.className = "delete-btn";
   delBtn.addEventListener("click", (e) => {
      li.remove();
      saveTasks();
      e.stopPropagation();
   })
   li.appendChild(textSpan);
   li.appendChild(delBtn);
   list.appendChild(li);
   if (isCompleted) { li.classList.add("completed"); }
   saveTasks();
   

   li.addEventListener("click", () => {
      li.classList.toggle("completed");
      saveTasks();
   })
}

function editTask(textSpan){
         const input = document.createElement("input");
         input.classList.add("edit-input");
         input.value = textSpan.textContent;
         textSpan.replaceWith(input);
         input.focus(); 
         
         input.addEventListener("click", (e) => {
            e.stopPropagation();
         })
         
         // Save on 'Enter' key press or 'Blur' event
         input.addEventListener("keypress", (e) => {
            if(e.key === "Enter"){
               saveEdit(input);
            }
         })
         input.addEventListener("blur", () => {
            saveEdit(input);
         })
}



      function saveEdit(input) {
         // Create new span with updated value and swap it back
         const span = document.createElement("span");
         span.textContent = input.value;
         input.replaceWith(span);
         span.addEventListener("dblclick", () => {
            editTask(span);
         })
         span.addEventListener("click", (e) => {
            e.stopPropagation();
         })
         saveTasks();
      }

document.getElementById("add-btn").addEventListener("click", getInputTask);
document.getElementById("task-input").addEventListener("keypress", (event) => {
   if(event.key === "Enter"){
      getInputTask()
   }
})



/**
 * Filters the displayed tasks based on the selected status.
 * @param {string} status - 'all', 'active', or 'completed'
 */

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

// Attach event listeners to filter buttons
document.getElementById("filter-all").addEventListener("click", (e) => handleFilterClick(e, "all"))
document.getElementById("filter-active").addEventListener("click", (e) => handleFilterClick(e, "active"))
document.getElementById("filter-completed").addEventListener("click", (e) => handleFilterClick(e, "completed"))

/**
 * Handles clicks on filter buttons to update UI state and filter tasks.
 */
function handleFilterClick(event, status){
   document.querySelectorAll(".filters button").forEach(btn => btn.classList.remove("active"));
   event.target.classList.add("active");
   filterTasks(status);
}







   
    // --- Persistence Logic ---


function saveTasks() {
   const tasks = [];

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
   const tasks = JSON.parse(saved);
   if(!saved) return;

   tasks.forEach(taskData => {
      // Re-add tasks from storage
      addTask(taskData.text, taskData.completed);
   })
}




function clearCompleted(){
   const list = document.querySelectorAll("#task-list li.completed");
   list.forEach(task => {
      task.remove();
   })
   saveTasks();
}




window.addEventListener("DOMContentLoaded", loadTasks);
document.getElementById("clear-completed").addEventListener("click", clearCompleted);




