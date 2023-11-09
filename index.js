document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");
    
    // Function to add a new task
    function addNewTask() {
        const taskText = taskInput.value.trim();
        
        if (taskText === "") {
            return;
        }
        
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${taskText}</span>
           <div>
           <button class="edit-button hover-button-2">Edit</button>
           <button class="delete-button hover-button-1">Delete</button>
           </div>
        `;
        
        taskList.appendChild(listItem);
        
        // Clear the input field
        taskInput.value = "";


        // Add event listener for editing tasks
        const editButton = listItem.querySelector(".hover-button-2");
        editButton.addEventListener("click", function () {
          const taskSpan = listItem.querySelector("span");
          const updatedTask = prompt("Edit task:", taskSpan.textContent);
          if (updatedTask !== null) {
            taskSpan.textContent = updatedTask;
          }
        });
        
        // Add event listener for deleting tasks
        const deleteButton = listItem.querySelector(".hover-button-1");
        deleteButton.addEventListener("click", function () {
            listItem.remove();
        });
    }
    
    // Add task when "Add" button is clicked
    addTaskButton.addEventListener("click", addNewTask);
    
    // Add task when Enter key is pressed
    taskInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            addNewTask();
        }
    });
});



