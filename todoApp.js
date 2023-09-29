

var createNewButton = document.getElementById('createNewButton');
var originalPopUp = document.getElementById('peekaboo');
originalPopUp.className = 'hidden';
function openPopUp() {
    if (originalPopUp.className === 'hidden' ) {
        
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


var todoNameInput = document.getElementById('todoNameInput');



 const currentList = {
     1: {
         name: "shopping list",
         todos: [
             {
                 text: 'bananas',
                completed: false
             }
         ]
     }
 }
const listOfLists = {
    1: {name: 'First lisjt'},
    2: {name: 'what ill do for college'},
    3: {name: 'history of pizza'}
}

const groupOfLists = {
    1: {
        name: 'first list', 
        todos: [
            {
                text: 'cats',
                completed: false
            },
            {
                text: 'phone',
                complete: false
            }
        ]
    }
}
//const currentList = groupOfLists[0];
var listTitle = document.getElementById('listTitle');
function render() {
    // this will hold the html that will be displayed in the sidebar
    let listsHtml = '<ul class="list-group">';
    // iterate through the lists to get their names
    lists.forEach((list) => {
      listsHtml += `<li class="list-group-item">${list.name}</li>`;
    });
    listsHtml += '</ul>';
    // print out the lists
    document.getElementById('lists').innerHTML = listsHtml;
   
    // print out the name of the current list
    document.getElementById('current-list-name').innerText = currentList.name;
   
    // iterate over the todos in the current list
    let todosHtml = '<ul class="list-group-flush">';
    currentList.todos.forEach((list) => {
      todosHtml += `<li class="list-group-item">${todo.text}</li>`;
    });
    // print out the todos
    document.getElementById('current-list-todos').innerHTML = todosHtml;
   }
   var listNameInput = document.getElementById('listNameInput');

   listNameButton.addEventListener('click', function creatingList() {
    listTitle.textContent = listNameInput.value;
    const newListNameElement = document.createElement('div');
    newListNameElement.classList.add('listOfTodoLists');
    
    const text = todoNameInput.value;
    console.log(text);
    if (text) {
        currentList.todos.push({
            text: text,
            completed: false
        })
        render();
    }

;})
