
var numberOfLists = 0; //nvm 
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
    1: { name: 'First lisjt' },
    2: { name: 'what ill do for college' },
    3: { name: 'history of pizza' }
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

function render() {

    let listsHtml = '<ul class="list-group">';
    lists.forEach((list) => {
        listsHtml += `<li class="listName" id="theCurrentList"><div id='list${list.id}>${list.name}</div></li>`;
    
     // listsHtml += `<input type="button" onclick="() => lists.remove(${list.id})">X</input>`
    });
    listsHtml += '</ul>';

    console.log(lists)

    // print out the lists
    document.getElementById('listOfLists').innerHTML = listsHtml;

    // print out the name of the current list
    
    //let currentListName = document.getElementById('theCurrentList${list.id}');
    //document.getElementById('listTitle').innerHTML = currentListName;
    
    //put everything on the right or in main right here

    // iterate over the todos in the current list
    let todosHtml = '<ul class="list-group-flush">';
    todoList.forEach((todo) => {
        todosHtml += `<li class="list-group-item">${todo.text}</li>`;
    });
    // for (var i = 0; i < lists.length; i++) {
    //     console.log(document.getElementById(`list${lists[i].id}`));
    //     var currentListDiv = document.getElementById(`list${lists[i].id}`);
    //          currentListDiv.addEventListener("click", function() {
    //             console.log("you clicked region number " + index);
    //           });
    //  }
    
    // print out the todos
   // document.getElementById('current-list-todos').innerHTML = todosHtml;
}

var listNameInput = document.getElementById('listNameInput');

var lists = [];
var todoList = [];
listNameButton.addEventListener('click', function creatingList() {
    // listTitle.textContent = listNameInput.value;
    // const newListNameElement = document.createElement('div');
    // newListNameElement.classList.add('listOfTodoLists');
    
    const text = listNameInput.value;
    
    listNameInput.value = "";
    var ticks = Date.now();
    if (text) {
        lists.push({
            id: ticks,
            name: text,
            completed: false,
            array: [{
                id: ticks,
                name: todoList
        }]
        })
        
        render();
    }
    document.getElementById('mainItem');
})

var todoNameButton = document.getElementById('todoNameButton');
todoNameButton.addEventListener('click', function addTodo() {

    const text = todoNameInput.value;
    
    todoNameInput.value = "";
    
    if (text) {
        todoList.push({
            name: text,
            completed: false
        })
        // function printingOutTodos() {
        //     document.getElementById('theTodoList') = document.createElement('li')//not it but close more or less
        //     const textnode = document.createTextNode(`${text}`)
        //     document.getElementById('theTodoList').append(textnode)
        //     // document.getElementById('theTodoList').append(`<li id="listItemBox">`);
        //     // document.getElementById('theTodoList').append(`${text}`);
        //     // document.getElementById('theTodoList').append(`</li>`);
        // }
        printingOutTodos();
    }
console.log(todoList)
})



// for (let i = 0; i < lists.length; i++) {
//     console.log(lists[i].name)
//     lists[i].addEventListener('click', function chooseMe() {
//         alert('yessir')
//         console.log(lists[i].name)
//     })
//  }
for (let i = 0; i < lists.length; i++) (function(i){
    lists[i].onclick = function() {
        console.log("yay")
        console.log("You clicked:" + lists[i].name)
    }
})(i);