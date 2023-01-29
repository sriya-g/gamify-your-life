localStorage.setItem('xp', 0);
var currentXP = Number(localStorage.getItem('xp'));
var numElements = localStorage.getItem("numElements");
var tasks = JSON.parse(localStorage.getItem('taskNames'));
var xpVals = JSON.parse(localStorage.getItem('xpVals'));
var taskdisp = document.getElementById("tasks-area");
var xpCounter = document.getElementById("xp-area");
for (var i = 0; i < numElements; i++) {
  taskdisp.innerHTML = taskdisp.innerHTML + '<div class = "task-container" id = "task-container' + i + '"><h2>' + tasks[i] + '</h2><h3>' + xpVals[i] + ' XP</h3><button class = "finish-button" id = "finish-button' + i + '">Finished Task</button><button class = "delete-button" id = "delete-button'+i+'">Delete Task</button></div>';
}
const tasksets = [];
const finButs = [];
for (var i = 0; i < numElements; i++) {
  tasksets[i] = document.getElementById("task-container" + i);
  finButs[i] = document.getElementById("finish-button" + i);
  finButs[i].addEventListener("click", finishTask);
}
const delButs = [];
for (var i = 0; i < numElements; i++) {
  delButs[i] = document.getElementById("delete-button" + i);
  delButs[i].addEventListener("click", delTask);
}
function finishTask() {
  const numTask = this.id.substr(13);
  currentXP = currentXP + Number(xpVals[numTask]);
  tasksets[numTask].innerHTML = '<h3 class = "task-finished">Task finished, hooray! '+xpVals[numTask]+' XP earned!</h3>';
  numElements--;
  tasks[numTask] = 0;
  xpVals[numTask] = 0;
  xpCounter.innerHTML = '<h2 id = "xp-counter">Current XP: '+currentXP+'</h2>';
}
function delTask() {
  const numTask = this.id.substr(13);
  alert("Are you sure you want to delete this task? (This cannot be undone!)");
  tasksets[numTask].innerHTML = '<h3 class = "task-deleted">Task deleted.</h3>';
  numElements--;
  tasks[numTask] = 0;
  xpVals[numTask] = 0;
}
function save() {
  localStorage.setItem('xp', currentXP);
  localStorage.setItem('taskNames', JSON.stringify(tasks));
  localStorage.setItem('xpVals', JSON.stringify(xpVals));
}

