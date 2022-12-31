const todoInput = document.querySelector('.todo-list');
const todoButton = document.querySelector('.todo-button'); 
const todoList = document.querySelector('todo-list');
const filterOption = document.querySelector('.filter.-todo');

document.addEventListener('DOMContentLoaded', getLocalTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('change', filterTodo);

