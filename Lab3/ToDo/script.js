const todoList = document.getElementById("todo-list");

function addItem() {
    const newItemInput = document.getElementById("new-item");
    const newItemText = newItemInput.value.trim();
    if (newItemText !== "") {
        const newItem = document.createElement("li");
        newItem.classList.add("todo-item");
        newItem.textContent = newItemText;

        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.addEventListener("change", function() {
            if (this.checked) {
                newItem.classList.add("done");
            } else {
                newItem.classList.remove("done");
            }
        });
        newItem.insertBefore(checkBox, newItem.firstChild);

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");
        deleteButton.addEventListener("click", function() {
            todoList.removeChild(newItem);
        });
        newItem.appendChild(deleteButton);

        todoList.appendChild(newItem);
        newItemInput.value = "";
    }
}