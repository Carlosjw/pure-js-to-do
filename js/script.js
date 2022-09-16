// Seleção de elementos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");
// Funções
const saveTodo = (text) => {

    // criando div
    const todo = document.createElement("div");
    // adicionando classe ao elemento/tag criado
    todo.classList.add("todo");

    // criando cabeçalho
    const todoTitle = document.createElement("h3");
    todoTitle.innerText = text;
}

// Eventos
todoForm.addEventListener('submit', (e) => {
    e.preventDefault(); // não deixa o formulário ser enviado ao back-end quando for pressionado o botão

    const inputValue = todoInput.value;

    if(inputValue){
        saveTodo(inputValue)
    }
})