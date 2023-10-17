var editPopUpTodo = document.getElementById('editPopUpTodo');
var listOptionsPopUp = document.getElementById('listOptionsPopUp');
var createNewButton = document.getElementById('createNewButton');
var originalPopUp = document.getElementById('peekaboo');
var createNewTodo = document.getElementById('createNewTodo');
editPopUpTodo.className = 'hidden';
createNewTodo.className = 'hidden';
originalPopUp.className = 'hidden';
listOptionsPopUp.className = 'hidden';
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

function enableDragSort(listClass) {
    const sortableLists = document.getElementsByClassName(listClass);
    Array.prototype.map.call(sortableLists, (list) => {enableDragList(list)});
  }
  
  function enableDragList(list) {
    Array.prototype.map.call(list.children, (item) => {enableDragItem(item)});
  }
  
  function enableDragItem(item) {
    item.setAttribute('draggable', true)
    item.ondrag = handleDrag;
    item.ondragend = handleDrop;
  }
  
  function handleDrag(item) {
    const selectedItem = item.target,
          list = selectedItem.parentNode,
          x = event.clientX,
          y = event.clientY;
    
    selectedItem.classList.add('drag-sort-active');
    let swapItem = document.elementFromPoint(x, y) === null ? selectedItem : document.elementFromPoint(x, y);
    
    if (list === swapItem.parentNode) {
      swapItem = swapItem !== selectedItem.nextSibling ? swapItem : swapItem.nextSibling;
      list.insertBefore(selectedItem, swapItem);
    }
  }
  
  function handleDrop(item) {
    item.target.classList.remove('drag-sort-active');
  }
  
  (()=> {enableDragSort('listOfLists')})();



let listNameButton = document.getElementById('listNameButton');

var chosenId = null;
var currentlyClickedTodo = null;
var todoIdForRemoving = null;
var currentlyClickedList = null;
function onListClick(id) {
    currentlyClickedList = lists.find(l => l.id === id);
   
    render();
}

//for later!!!
function togglingListOptions() {
    if (listOptionsPopUp.className === 'hidden') {
        listOptionsPopUp.className = 'listOptionsClass';
    } else {
        listOptionsPopUp.className = 'hidden';
    }
}
function changingList(id) {
    togglingListOptions();
    chosenId = id;
    console.log(chosenId)
}
function deletingList() {
    let filteredListOfLists = lists.filter(x => {
        return x.id !== chosenId;
    });
    lists = filteredListOfLists
    render();
}
var newTodoNameInput = document.getElementById('newTodoNameInput');
var currentlyEditingTodo = null;
function editTheTodoStart(id) {
    //another function in ere but im tired bruh
    if (editPopUpTodo.className === 'hidden') {
        editPopUpTodo.className = 'editPopUpTodoVisible'
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
    todoToComplete.completed = true;    
    render();
}

function deleteTodo(id) {
    let filteredList = currentlyClickedList.todoList.filter(x => {
        return x.id !== id;
    });
    currentlyClickedList.todoList = filteredList;
    render();
}
function render() {
    
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
    if (currentlyClickedTodo) {
    
    
    }
    createNewTodo.className = 'createNewTodoClass';
    }
    

    let todosHtml = '<ul class="list-group-flush">';
    if (currentlyClickedList) {
    currentlyClickedList.todoList.forEach((todo) => {
        if (todo.completed) {
            todosHtml += `<li class="list-group-item"><span class="theTodoClassCompleted"><span><span><img src="checkmark.png" alt="checkmark" class="checkmark"></span><span class="todoWords">${todo.name}</span></span><span class="deleteTodoButton" onclick="deleteTodo(${todo.id})">X</span></span></li>`;
        }
        else {
            todosHtml += `<li class="list-group-item"><span class="theTodoClass"><span><span><button onclick="completedTodo(${todo.id})" class="todoCompleteButton"></button></span><span class="todoWords">${todo.name}</span></span><span><span onclick="editTheTodoStart(${todo.id})">edit</span><span class="deleteTodoButton" onclick="deleteTodo(${todo.id})">X</span></span></span></li>`;
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
        currentlyClickedList.todoList.push({
            id: ticks,
            name: todoText,
            completed: false
        })
        render();
        
        popUpNewTodo.className = 'hidden';
    }

})

getLists();