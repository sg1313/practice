const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); // index.html에서 todo-form이 있기때문에 거기 안에서 todo 의 input값을 찾을 수 있다.
// document.querySelector('#todo-form input')과 같다.!! id가 todo-form인 form 안에서 input을 찾는다.
const toDoList = document.getElementById("todo-list");

function handleTodoSubmit(e) {
  e.preventDefault();
  const newTodo = toDoInput.value; // todo input값 비우기 전에 값 저장
  console.log(toDoInput.value);
  toDoInput.value = "";
  console.log(newTodo, toDoInput.value);
}

toDoForm.addEventListener("submit", handleTodoSubmit);
