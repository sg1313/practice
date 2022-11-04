const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); // index.html에서 todo-form이 있기때문에 거기 안에서 todo 의 input값을 찾을 수 있다.
// document.querySelector('#todo-form input')과 같다.!! id가 todo-form인 form 안에서 input을 찾는다.
const toDoList = document.getElementById("todo-list");

function deleteTodo(e) {
  const li = e.target.parentElement;
  li.remove();
}

function paintToDo(newTodo) {
  //newTodo는 input의 값을 비우기 전의 값을 나타냄.
  // console.log("i will paint", newTodo);
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button"); // document.querySelector 로 안되노,,
  button.innerText = "❌️";
  button.addEventListener("click", deleteTodo);

  li.appendChild(span); // li에 span 추가
  li.appendChild(button);
  toDoList.appendChild(li); // toDoList에 li 추가
}

function handleTodoSubmit(e) {
  e.preventDefault();
  const newTodo = toDoInput.value; // todo input값 비우기 전에 값 저장
  // console.log(toDoInput.value);
  toDoInput.value = "";
  // console.log(newTodo, toDoInput.value);
  paintToDo(newTodo); //newTodo 호출
}

toDoForm.addEventListener("submit", handleTodoSubmit);
