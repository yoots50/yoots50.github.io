const focusForm = document.querySelector(".focus-form");
const focusInput = document.querySelector(".focus-form input");
const todoList = document.querySelector(".todo-list");

const TODOS_KEY = "todos";

let todoArray = [];

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todoArray));
}

function removeTodo(event) {
    const li = event.target.parentElement;
    
    li.remove();
}

function printTodo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");

    button.innerText = "X";
    li.classList.add("todo-li");
    span.classList.add("todo-span");
    button.classList.add("todo-delete-button");
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
    button.addEventListener("click", removeTodo);
    span.innerText = newToDo.text;
}

function handleFocusForm(event) {
    event.preventDefault();
    const newToDo = focusInput.value;
    const newToDoObject = {
        "text": newToDo,
        "id": Date.now(),
    }
    focusInput.value = "";
    todoArray.push(newToDoObject);
    saveTodos();
    printTodo(newToDoObject);
}

focusForm.addEventListener("submit", handleFocusForm);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos) {
    const parsedTodos = JSON.parse(savedTodos);
    todoArray = parsedTodos;
    parsedTodos.forEach(printTodo);
}