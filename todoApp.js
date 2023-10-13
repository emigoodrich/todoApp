
var createNewButton = document.getElementById('createNewButton');
var originalPopUp = document.getElementById('peekaboo');
var createNewTodo = document.getElementById('createNewTodo');
createNewTodo.className = 'hidden';
originalPopUp.className = 'hidden';
function openPopUp() {
    if (originalPopUp.className === 'hidden') {

        originalPopUp.className = 'createNewPopUp';

    } else {
        originalPopUp.className = 'hidden';
    }

}
var togglingNavigation = document.getElementById('navigation');
togglingNavigation.className = 'hidden';
function navBarToggle() {
    if (togglingNavigation.className === 'hidden') {
        togglingNavigation.className = 'navigationBar';

    } else {
        togglingNavigation.className = 'hidden';
        originalPopUp.className = 'hidden';
        listNameInput.value = "";
    }
}
var popUpNewTodo = document.getElementById('popUpNewTodo');
popUpNewTodo.className = 'hidden';
function todoCreate() {
    if (popUpNewTodo.className === 'hidden') {
        popUpNewTodo.className = 'forNewTodos';
    } else {
        popUpNewTodo.className = 'hidden';
    }
}
function closeXButton() {
    if (originalPopUp.className === 'createNewPopUp') {
        originalPopUp.className = 'hidden';
        listNameInput.value = "";
    }
}
function closeXButtonTodo() {
    if (popUpNewTodo.className === 'forNewTodos') {
        popUpNewTodo.className = 'hidden';
        popUpNewTodo.value = "";
    }
}





let listNameButton = document.getElementById('listNameButton');



//var changeTodo = null;
var currentlyClickedTodo = null;
var completion = false;
var todoIdForRemoving = null;
var currentlyClickedList = null;
var todoList = [];
function onListClick(id) {
    currentlyClickedList = lists.find(l => l.id === id);
    todoList = currentlyClickedList.todoList
    if (todoList) {
    currentlyClickedTodo = todoList.find(l => l.id === id);
    todoIdForRemoving = currentlyClickedTodo.id;
    completion = currentlyClickedTodo.completed;
    changeTodo = document.getElementById(`changeTodo${currentlyClickedTodo.id}`)
    }
    render();
}




function completedTodo() {
    completion = true;
    if (completion === true) {
        console.log('its tru')
        changeTodo.className = ''
        
    }
    render();
}

function deleteTodo() {
    
    let eliminated = todoList.filter(x => {
        return x.id != todoIdForRemoving;
    })
    console.log(eliminated)
    console.log(todoIdForRemoving)
}
function render() {
    
    let listsHtml = '<ul class="list-group">';
    lists.forEach((list) => {
        listsHtml += `<li class="listName" id="theCurrentList${list.id}"><a href="#" class="normalListColor" onclick="onListClick(${list.id})">${list.name}</a></li>`;
        
    
    });
    listsHtml += '</ul>';
    
    
    document.getElementById('listOfLists').innerHTML = listsHtml;


    if (currentlyClickedList) {
    let currentListName = currentlyClickedList.name;
    document.getElementById('listTitle').innerHTML = currentListName;
        document.getElementById(`theCurrentList${currentlyClickedList.id}`).className = 'chosenListClass'
    if (currentlyClickedTodo) {
    
    
    }
    createNewTodo.className = 'createNewTodoClass';
    }
    

    let todosHtml = '<ul class="list-group-flush">';
    todoList.forEach((todo) => {
        todosHtml += `<li class="list-group-item"><span class="theTodoClass"><span><span><button onclick="completedTodo(${todo.id})" class="todoCompleteButton"></button></span><span class="todoWords" id="changeTodo${todo.id}">${todo.name}</span></span><span class="deleteTodoButton" onclick="deleteTodo()">X</span></span></li>`;
    });

    document.getElementById('theTodoList').innerHTML = todosHtml;

}
var listNameInput = document.getElementById('listNameInput');

var lists = [];

listNameButton.addEventListener('click', function creatingList() {
    
    const text = listNameInput.value;
    
    listNameInput.value = "";
    var ticks = Date.now();
    if (text) {
        lists.push({
            id: ticks,
            name: text,
            completed: false,
            todoList: []
        })
        
        render();
        originalPopUp.className = 'hidden';
    }
})
var todoNameInput = document.getElementById('todoNameInput');
var todoNameButton = document.getElementById('todoNameButton');
todoNameButton.addEventListener('click', function addTodo() {

    const todoText = todoNameInput.value;
    
    todoNameInput.value = "";
    var ticks = Date.now();
    if (todoText) {
        todoList.push({
            id: ticks,
            name: todoText,
            completed: false
        })
        render();
        
        popUpNewTodo.className = 'hidden';
    }

})