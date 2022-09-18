// Seleção de elementos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

// INICIALIZANDO VALOR ANTIGO DO INPUT
let oldInputValue;

// Funções
const saveTodo = (text) => {

    // criando div
    const todo = document.createElement("div");
    // adicionando classe ao elemento/tag criado
    todo.classList.add("todo");

    // criando cabeçalho
    const todoTitle = document.createElement("h3");
    todoTitle.innerText = text;
    todo.appendChild(todoTitle)

    // criando botões
    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-todo");
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    // colocando o botão dentro da div
    todo.appendChild(doneBtn);

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-todo");
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    // colocando o botão dentro da div}
    todo.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("remove-todo");
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    // colocando o botão dentro da div}
    todo.appendChild(deleteBtn);

    // colocando tudo dentro da lista/div principal
    todoList.appendChild(todo);

    todoInput.value = ""; // limpando o input após inserir valor
    todoInput.focus();
};

// DEFININDO AÇÕES QUE APÓS CLICAR NO BOTÃO EDITAR
const toggleForms = () => {
    // exibindo/ocultando o editForm
    editForm.classList.toggle('hide');
    // exibindo/ocultado o todoForm
    todoForm.classList.toggle('hide');
    // rexibindo/ocultado lista de tarefas
    todoList.classList.toggle('hide');

};

const updateTodo = (text) => {
    // selecionando todos os todos
    const todos = document.querySelectorAll(".todo");

    // mapeando todos os 'todos'
    todos.forEach((todo) => {

        let todoTitle = todo.querySelector('h3');

        // verificando se o título atual é igual ao anterior
        if(todoTitle.innerText === oldInputValue){
            todoTitle.innerText = text;
        };
    });
}

// Eventos
todoForm.addEventListener('submit', (e) => {
    e.preventDefault(); // não deixa o formulário ser enviado ao back-end quando for pressionado o botão

    const inputValue = todoInput.value;

    if(inputValue){
        saveTodo(inputValue);
    };
});

/* criando evento para clique captura dos cliques em qualquer dos botões  */

document.addEventListener('click', (e) => {

    const targetEl = e.target;
    // selecionando o elemento pai mais próximo
    const parentEl = targetEl.closest('div');

    // PEGANDO ELEMENTO PELO TÍTULO
    let todoTitle;
    if(parentEl && parentEl.querySelector('h3')){
        todoTitle = parentEl.querySelector('h3');
    }

    /* verificando a classe do item botão clicado */
    if(targetEl.classList.contains('finish-todo')){
        // adicionando a classe 'done' para o elementos clicados
        parentEl.classList.toggle('done');
        // toggle => acrescenta ou remove uma ação
    }

    // removendo tarefa
    if(targetEl.classList.contains('remove-todo')){
        parentEl.remove();
    }

    // EDITANDO TAREFA
    if(targetEl.classList.contains('edit-todo')){
        // chamando função que exibe um formulário e esconde outro
        toggleForms();

        // ARMAZENANDO VALORES DO INPUT
        editInput.value = todoTitle;
        oldInputValue = todoTitle;
    }
})

// EVENTO DO BOTÃO CANCELAR
cancelEditBtn.addEventListener('click', (e) => {
    e.preventDefault();

    toggleForms();
})

// EDITANDO VALORES
editForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const editInputValue = editInput.value;

    if(editInputValue){
        updateTodo(editInputValue)
    }

    toggleForms()
})