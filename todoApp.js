
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







let listNameInput = document.getElementById('listNameInput');
let listNameButton = document.getElementById('listNameButton');
const theList = {

}


listNameButton.addEventListener('click', function creatingListName() {
    console.log(listNameInput.value);
;})




const listOfLists = {
    
}