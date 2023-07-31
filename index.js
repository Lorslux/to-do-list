
const tasks = [];


function createButton() {
  let button = document.createElement("button");
  button.setAttribute("type", "button");
  button.setAttribute("class", "btn");
  return button;
}

function addTaskInArray(){
  const inputValue = document.getElementById("inputValue").value;
  tasks.push(inputValue);
  console.log(tasks);
  generateTasks(tasks);
}

function generateTasks(tasks) {
  document.querySelector("ul").innerHTML = '';
  for (let i = 0; i < tasks.length; i++) {
    addItemInDom(tasks[i] , i);
  }
}

function addItemInDom(inputValue, index) {
  let uid = 0;

  let taskCheckBox;
  let li;
  let deleteButton;
  let labelCheckBox;
  let trashIcon;
  let editButton;
  let editIcon;

  const text = document.createTextNode(inputValue);
  li = document.createElement("li");
  li.setAttribute("id", uid++);
  li.dataset.index = index;

  taskCheckBox = document.createElement("input");
  taskCheckBox.setAttribute("type", "checkbox");

  labelCheckBox = document.createElement("label");

  deleteButton = createButton();
  trashIcon = document.createElement("img");
  trashIcon.setAttribute("src", "img/delete.png");

  editButton = createButton();
  editIcon = document.createElement("img");
  editIcon.setAttribute("src", "img/edit.png");


  if (inputValue.trim() === "") {
    alert("Ops!, you forgot to type the task");
  } else {
    document.querySelector("ul").appendChild(li);
    li.appendChild(taskCheckBox);
    labelCheckBox.appendChild(text);
    li.appendChild(labelCheckBox);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    
    deleteButton.appendChild(trashIcon);
    editButton.appendChild(editIcon);

    deleteButton.addEventListener("click", function () {
      console.log(this.parentNode , this.parentNode.dataset);
      tasks.splice(this.parentNode.dataset.index, 1);
      this.parentNode.remove();
      generateTasks(tasks);
    });

    document.getElementById("inputValue").value = "";
  }

  console.log(taskCheckBox, inputValue, taskCheckBox.checked, uid);
}
