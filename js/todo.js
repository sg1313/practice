const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); // index.html에서 todo-form이 있기때문에 거기 안에서 todo 의 input값을 찾을 수 있다.
// document.querySelector('#todo-form input')과 같다.!! id가 todo-form인 form 안에서 input을 찾는다.
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];
// toDos는 항상 빈 배열이기 때문에 새로운 값을 입력하면 localStorage에 이전값은 없고 새로운값만 배열에 저장됨
// 따라서 const 말고 let으로 바꿔주고 업데이트 가능하게 해준다.

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // toDos의 배열을 로컬스토리지에 넣음
}
// localStorage에 배열로 저장이 안되기 때문에, json.stringify로 '배열처럼 생긴 문자'로 저장 후,
// 다시 json.parse를 이용해 array로 꺼낸다!

function deleteTodo(e) {
  const li = e.target.parentElement;
  li.remove();
  // console.log(typeof li.id); // --> string
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //toDo:toDo.id와 내가 클릭한 id가 다른것.
  // toDo.id는 숫자고 li.id는 string이라서 parseInt 씀
  saveTodos(); // localStorage에도 동일한 값 저장하기!!!!
}

function paintToDo(newTodo) {
  //newTodo는 input의 값을 비우기 전의 값을 나타냄.
  // console.log("i will paint", newTodo);
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text; // text 안쓰면 인풋창에 입력할때 [object Object] 라고뜸
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
  const newTodoObj = {
    text: newTodo,
    id: Date.now(), // 각각의 li item 구별
  };
  toDos.push(newTodoObj); // localStorage에 저장됨
  paintToDo(newTodoObj); //newTodoObj 호출
  saveTodos();
}

toDoForm.addEventListener("submit", handleTodoSubmit);

// function sayHello(item) {
//   console.log("hello", item);
// }

const savedTodos = localStorage.getItem(TODOS_KEY);
if (savedTodos !== null) {
  const parsedToDos = JSON.parse(savedTodos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
  // JS는 배열에 있는 각각의 item에 대해 function을 실행할 수 있게 해줌.
  // 그래서 pasedToDos 라는 함수를 만들고, 안에 있는 savedTodos를 각각 꺼내서(forEach사용)
  // forEach를 써서 함수 실행한다(forEach는 함수를 실행하게 해줌)
  // array.forEach는 받아온 배열을 for반복문 없이 item 하나씩 함수에 넣을 수 있게 해줌
  // forEach(sayHello)라고 고치면 주석 처리된 sayHello 함수 실행. 콘솔에 hello 어쩌구 카면서 한줄씩 찍힘
  //forEach의 매개변수가 (item) => console.log("hello", item)이 아니라 paintToDo인 이유: 어차피 저거는 내가 인풋에 입력한 item이고,
  // paintToDo는 입력한 인풋값들을 화면에 보여줌. 그러면 localStorage에 있는 배열 속 각각의 item 들을 화면에 보여주게된다
}
