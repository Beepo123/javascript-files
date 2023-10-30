let todoList = JSON.parse(localStorage.getItem('todoList')) || [];
console.log(todoList)
renderTodoList();

function renderTodoList(){
  let todoListHTML = '';
  for(let i = 0; i < todoList.length; i++){
    todoName = todoList[i].todoName;
    dueDate = todoList[i].dueDate;

    let html = `
      <div>${todoName}</div>
      <div>${dueDate}</div>
      <button class="delete-todo-button" onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
      ">Delete</button>`

    todoListHTML = html + todoListHTML;
    
  }
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo(){
  let todoName = document.querySelector('.js-todo-input').value;
  let dueDate = document.querySelector('.js-date-input').value;
  
  todoObj = {
    todoName,
    dueDate,
  }

  document.querySelector('.js-todo-input').value = '';
  todoList.push(todoObj);
  localStorage.setItem('todoList', JSON.stringify(todoList))
  renderTodoList();
}

let sample = function something(){
  console.log('hiii')
}

sample()