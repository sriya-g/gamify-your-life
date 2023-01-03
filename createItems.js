var numElements = localStorage.getItem("numElements");
var form = document.getElementById('submitTasks');
for (var i = 0; i < numElements; i++) {
  form.innerHTML = form.innerHTML + '<div class = "create-task-container"><h3>Task #'+(i+1)+'</h3>Name of task: <input name = "taskName'+i+'" class = "taskName" type = "textbox"<p></p>XP granted upon completion: <input name = "xpVal'+i+'" class = "xpVal" type = "number"></div>'
}
form.innerHTML = form.innerHTML + '<p></p>'+'<button type = "submit" id = "submitTasksBtn">Submit!</button>';

var subTasksButton = document.getElementById('submitTasksBtn');
subTasksButton.addEventListener("click", saveTasks);
var savedTaskNames = [];
var savedXpVals = [];

function saveTasks() {
  var allTasks = document.getElementsByClassName('create-task-container');
  for (var i = 0; i < numElements; i++) {
    savedTaskNames[i] = allTasks[i].getElementsByClassName('taskName')[0].value;
    savedXpVals[i] = allTasks[i].getElementsByClassName('xpVal')[0].value;
  }
  localStorage.setItem('taskNames', JSON.stringify(savedTaskNames));
  localStorage.setItem('xpVals', JSON.stringify(savedXpVals));
}

