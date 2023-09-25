var listNameInput = document.getElementById('listNameInput');

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
    }
}

function closeXButton() {
    if (originalPopUp.className === 'createNewPopUp') {
        originalPopUp.className = 'hidden';
        listNameInput.value = "";
    }
}






let listNameButton = document.getElementById('listNameButton');



listNameButton.addEventListener('click', function creatingListName() {
    console.log(listNameInput.value);
;})




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
const theList = groupOfLists[0];