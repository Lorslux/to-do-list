function createButton() {
  let button = document.createElement("button");
  button.setAttribute("type", "button");
  button.setAttribute("class", "btn");
  return button;
}

function addItem() {
  let uid = 0;
  let inputValue;
  let taskCheckBox;
  let li;
  let deleteButton;
  let labelCheckBox;
  let trashIcon;
  let editButton;
  let editIcon;

  inputValue = document.getElementById("inputValue").value;
  const text = document.createTextNode(inputValue);
  li = document.createElement("li");
  li.setAttribute("id", uid++);

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
      this.parentNode.remove();
    });

    document.getElementById("inputValue").value = "";
  }

  console.log(taskCheckBox, inputValue, taskCheckBox.checked, uid);
}
