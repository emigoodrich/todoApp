var editPopUpTodo = document.getElementById('editPopUpTodo');
var listOptionsPopUp = document.getElementById('listOptionsPopUp');
var createNewButton = document.getElementById('createNewButton');
var originalPopUp = document.getElementById('peekaboo');
var createNewTodo = document.getElementById('createNewTodo');
var listEditPopUp = document.getElementById('listEditPopUp');
listEditPopUp.className = 'hidden';
editPopUpTodo.className = 'hidden';
createNewTodo.className = 'hidden';
originalPopUp.className = 'hidden';
listOptionsPopUp.className = 'hidden';
//set up for all the pop ups, i should've just given them all an id lol
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
//drag and drop didn't work rip
function dragStart() {
    console.log('Event: ', 'dragstart')
}
function dragEnter() {
    console.log('Event: ', 'dragenter')
}
function dragLeave() {
    console.log('Event: ', 'dragleave')
}
function dragOver() {
    console.log('Event: ', 'dragover')
}
function dragDrop() {
    console.log('Event: ', 'drop')
}
function drag() {
    const draggables = document.querySelectorAll('.list-group-item')
    const dragListItems = document.querySelectorAll('.theTodoList li')

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', dragStart)
    })

    dragListItems.forEach(item => {
        item.addEventListener('dragover', dragOver) 
        item.addEventListener('drop', dragDrop)
        item.addEventListener('dragenter', dragEnter)
        item.addEventListener('dragleave', dragLeave)
    })
}
let listNameButton = document.getElementById('listNameButton');

var chosenId = null;
var currentlyClickedTodo = null;
var todoIdForRemoving = null;
var currentlyClickedList = null;
function onListClick(id) {
    currentlyClickedList = lists.find(l => l.id === id);
   
    render();
}

//list changes
function togglingListOptions() {
    if (listOptionsPopUp.className === 'hidden') {
        listOptionsPopUp.className = 'listOptionsClass';
    } else {
        listOptionsPopUp.className = 'hidden';
    }
}
var currentlyEditingList
function changingList(id) {
    togglingListOptions();
    chosenId = id;
    currentlyEditingList = lists.find(l => l.id === chosenId)
    
}
function editingListName(chosenId) {
    if (listEditPopUp.className === 'hidden') {
        listEditPopUp.className = 'createNewPopUp'
    } else {
        listEditPopUp.className = 'hidden'
    }
}
function listEditClose() {
    editingListName();
} 

function submitListEdit() {
    if (listEditInput.value == "" ) {
        alert('hey! fill out the input before pressing done!')
    } else {
        
        currentlyClickedList.name = listEditInput.value;
        listEditInput.value = ""
        
    }
    listEditPopUp.className = 'hidden'
    listOptionsPopUp.className = 'hidden'
    render();
}
function deletingList() {
    let filteredListOfLists = lists.filter(x => {
        return x.id !== chosenId;
    });
    lists = filteredListOfLists
    currentlyClickedList = null;
    createNewTodo.className = 'hidden'
    document.getElementById('listTitle').innerHTML = null;
    togglingListOptions();
    render();
}

//todo changes
var newTodoNameInput = document.getElementById('newTodoNameInput');
var currentlyEditingTodo = null;
function editTheTodoStart(id) {
    //another function in ere but im tired bruh
    if (editPopUpTodo.className === 'hidden') {
        editPopUpTodo.className = 'createNewPopUp'
    } else {
        editPopUpTodo.className = 'hidden'
    }
    currentlyEditingTodo = currentlyClickedList.todoList.find(td => td.id === id)
}
function closeXButtonEditTodo() {
    editPopUpTodo.className = 'hidden';
}
function changingEditTodo() {
    if (newTodoNameInput.value == "") {
        alert('hey! fill out the input before pressing done!')
    } else {
    currentlyEditingTodo.name = newTodoNameInput.value
newTodoNameInput.value = ""
    closeXButtonEditTodo(); }
        render();
}
function completedTodo(id) {
    var todoToComplete = currentlyClickedList.todoList.find(td => td.id === id);
    if (todoToComplete.completed === true) {
        todoToComplete.completed = false;
    } else if (todoToComplete.completed === false) {
        todoToComplete.completed = true;
    }
    render();
}

function deleteTodo(id) {
    let filteredList = currentlyClickedList.todoList.filter(x => {
        return x.id !== id;
    });
    currentlyClickedList.todoList = filteredList;
    render();
}
//remember that if the html doesn't change, you probably didn't put the render at the end!!!
function render() {
    //rendering list names and it's edits (if it is edited)
    let listsHtml = '<ul class="list-group">';
    lists.forEach((list) => {
        listsHtml += `<li class="listName" id="theCurrentList${list.id}"><a href="#" class="normalListColor" onclick="onListClick(${list.id})">${list.name} <img src="three_dots.png" alt="three dots for opening list options" class="smallNavIcons" onclick="changingList(${list.id})"></a></li>`;
        
    
    });
    listsHtml += '</ul>';
    
    
    document.getElementById('listOfLists').innerHTML = listsHtml;


    if (currentlyClickedList) {
        let currentListName = currentlyClickedList.name;
        document.getElementById('listTitle').innerHTML = currentListName;
        document.getElementById(`theCurrentList${currentlyClickedList.id}`).className = 'chosenListClass'

    createNewTodo.className = 'createNewTodoClass';
    }

//redering the todos and their changes (if there is one)
    let todosHtml = '<ul class="list-group-flush">';
    if (currentlyClickedList) {
    currentlyClickedList.todoList.forEach((todo) => {
        if (todo.completed) {
            todosHtml += `<li class="list-group-item"><span class="theTodoClassCompleted"><span><span><img src="checkmark.png" alt="checkmark" onclick="completedTodo(${todo.id})" class="checkmark"></span><span class="todoWordsCompleted">${todo.name}</span></span><span class="deleteTodoButton" onclick="deleteTodo(${todo.id})">X</span></span></li>`;
        }
        //changing the code on whether or not the task is completed
        else {
            todosHtml += `<li class="list-group-item"><span class="theTodoClass"><span><span><button onclick="completedTodo(${todo.id})" class="todoCompleteButton"></button></span><span class="todoWords">${todo.name}</span></span><span class="leftTwoOfTodo"><span onclick="editTheTodoStart(${todo.id})">edit</span><span class="deleteTodoButton" onclick="deleteTodo(${todo.id})">X</span></span></span></li>`;
        }

    });
    }
    document.getElementById('theTodoList').innerHTML = todosHtml;
    saveLists();
}
var listNameInput = document.getElementById('listNameInput');

var lists = [];
const storageKey = 'myLists';
function saveLists() {
    const dataToSave = JSON.stringify(lists);
    window.localStorage.setItem(storageKey, dataToSave);
}

function getLists() {
    try {
        const stringData = window.localStorage.getItem(storageKey);
        lists = JSON.parse(stringData);
        render();
    }
    catch {

    }
}
//pushing list to lists
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
//pushing the todos to the todoList of the currentlyClickedList
var todoNameInput = document.getElementById('todoNameInput');
var todoNameButton = document.getElementById('todoNameButton');
todoNameButton.addEventListener('click', function addTodo() {

    const todoText = todoNameInput.value;
    
    todoNameInput.value = "";
    var ticks = Date.now();
    if (todoText) {
        //pushing the todo to a the current list
        currentlyClickedList.todoList.push({
            id: ticks,
            name: todoText,
            completed: false
        })
        render();
        
        popUpNewTodo.className = 'hidden';
    }

})
// try {
//     render();
// }
// catch(err) {
//     console.log(err.message)
//  } //this was messing up my local storage but it did hlep
getLists();