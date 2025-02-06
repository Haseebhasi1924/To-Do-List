function addTask() {
  var task = document.getElementById("input1").value;
  var unList = document.getElementById("ul");
  var category = document.getElementById("categorySelect").value;

  if (task == "") {
      alert("Please enter a task");
      return;
  }

  // Only add the "All" class if this is the first task
  if (unList.children.length === 0) {
      unList.className = "All";
  }

  var li = document.createElement("li");
  li.classList.add(category); // Add the category class for color
  var taskSpan = document.createElement("span");
  taskSpan.innerText = task;

  var listdivcontainer = document.createElement("div");
  listdivcontainer.className = "task-button";

  var deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.onclick = function () {
      unList.removeChild(li);
      // Remove the "All" class if this was the last task
      if (unList.children.length === 0) {
          unList.className = "";
      }
  };

  var completeButton = document.createElement("button");
  completeButton.innerText = "Complete";
  completeButton.onclick = function () {
      li.classList.toggle("Completed");
  };

  li.appendChild(taskSpan);
  li.appendChild(listdivcontainer);
  listdivcontainer.appendChild(deleteButton);
  listdivcontainer.appendChild(completeButton);

  unList.appendChild(li);
  document.getElementById("input1").value = "";
}
