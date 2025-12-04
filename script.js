const addTask = document.getElementById("add-task");
const taskContainer = document.getElementById("task-container");
const inputTask = document.getElementById("input-task");

//event listener for add button
addTask.addEventListener("click", function () {
  let task = document.createElement("div");
  task.classList.add("task");

  let li = document.createElement("li");
  li.innerText = inputTask.value;
  task.appendChild(li);

  // Check button
  let checkButton = document.createElement("button");
  checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
  checkButton.classList.add("checkTask");
  task.appendChild(checkButton);

  // Edit button (NEW)
  let editButton = document.createElement("button");
  editButton.innerHTML = '<i class="fa-solid fa-pen"></i>';
  editButton.classList.add("editTask");
  task.appendChild(editButton);

  // Delete button
  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  deleteButton.classList.add("deleteTask");
  task.appendChild(deleteButton);

  if (inputTask.value === "") {
    alert("Please Enter a Task");
  } else {
    taskContainer.appendChild(task);
  }
  inputTask.value = "";

  // Check task
  checkButton.addEventListener("click", function () {
    li.style.textDecoration =
      li.style.textDecoration === "line-through" ? "none" : "line-through";
  });

  // Delete task
  deleteButton.addEventListener("click", function () {
    task.remove();
  });

  // Edit task (NEW)
  editButton.addEventListener("click", function () {
    if (editButton.innerHTML.includes("pen")) {
      // change to input mode
      let editInput = document.createElement("input");
      editInput.type = "text";
      editInput.value = li.innerText;
      task.replaceChild(editInput, li);

      editButton.innerHTML = '<i class="fa-solid fa-save"></i>';
      li = editInput;
    } else {
      // save edited task
      let newLi = document.createElement("li");
      newLi.innerText = li.value;
      task.replaceChild(newLi, li);

      editButton.innerHTML = '<i class="fa-solid fa-pen"></i>';
      li = newLi;
    }
  });
});
