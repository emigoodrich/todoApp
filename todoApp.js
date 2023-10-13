
var createNewButton = document.getElementById('createNewButton');
var originalPopUp = document.getElementById('peekaboo');
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





var currentlyClickedList = null;
var todoList = [];
function onListClick(id) {
    currentlyClickedList = lists.find(l => l.id === id);
    todoList = currentlyClickedList.todoList
    render();
}

function render() {
    
    let listsHtml = '<ul class="list-group">';
    lists.forEach((list) => {
        listsHtml += `<li class="listName" id="theCurrentList${list.id}"><a href="#" onclick="onListClick(${list.id})">${list.name}</a></li>`;
        
    
    });
    listsHtml += '</ul>';
    console.log(listsHtml)
    console.log(lists)
    
    document.getElementById('listOfLists').innerHTML = listsHtml;


    if (currentlyClickedList) {
    let currentListName = currentlyClickedList.name;
    document.getElementById('listTitle').innerHTML = currentListName;
    console.log(currentlyClickedList.todoList)
    }
    

    let todosHtml = '<ul class="list-group-flush">';
    todoList.forEach((todo) => {
        todosHtml += `<li class="list-group-item">${todo.name}</li>`;
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
    
    if (todoText) {
        todoList.push({
            name: todoText,
            completed: false
        })
        render();
    }

})