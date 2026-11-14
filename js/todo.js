const toDoForm = document.getElementById("todo-form");
//const toDoInput = document.querySelector("#todo-form input");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
const toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  //console.log(event.target.parentElement);
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  li.appendChild(span);
  li.appendChild(button);
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  span.innerText = newTodo;
  //console.log(li);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello() {
  console.log("hello");
}

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  parsedToDos.forEash();
}
