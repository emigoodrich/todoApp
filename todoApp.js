
var createNewButton = document.getElementById('createNewButton');
var originalPopUp = document.getElementById('peekaboo');
originalPopUp.className = 'createNewPopUpHidden';
function openPopUp() {
    if (originalPopUp.className === 'createNewPopUpHidden' ) {
        
        originalPopUp.className = 'createNewPopUp';
        
    } else {
        originalPopUp.className = 'createNewPopUpHidden';
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