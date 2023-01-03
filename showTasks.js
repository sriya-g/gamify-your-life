var numElements = localStorage.getItem("numElements");
var tasks = JSON.parse(localStorage.getItem('taskNames'));
var xpVals = JSON.parse(localStorage.getItem('xpVals'));
var taskdisp = document.getElementById("tasks-area");
for (var i = 0; i < numElements; i++) {
  taskdisp.innerHTML = taskdisp.innerHTML + '<div class = "task-container"><h2>'+tasks[i]+'</h2><h3>'+xpVals[i]+' XP</h3><button class = "finish-button">Finished Task</button><button class = "delete-button">Delete Task</button></div>'
}

