let list1 = JSON.parse(localStorage.getItem('list1')) ?? [];
console.log(list1);
let html = '';
let toDoListHTML = '';

function addTodo(){
  let input = document.querySelector('.js-todo-input1').value;
  list1.push(input);
  console.log(list1);
  localStorage.setItem('list1', JSON.stringify(list1));

  document.querySelector('.js-todo-input1').value = '';
}

function addTodo2(){
  let value = document.querySelector('.js-todo-input2').value;
  let html = `<p>${value}</p>`
  toDoListHTML = html + toDoListHTML;

  document.querySelector('.js-todo-list').innerHTML = toDoListHTML;

  document.querySelector('.js-todo-input2').value = '';
}
