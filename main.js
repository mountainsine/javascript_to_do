// INITIALIZE VARIABLES
var toDos = [];
var retrievedDataArray = [];
var noTasksCopyVariable = document.getElementById('nothingMessageId');
var myObj = [];
var parsedArrayObject = [JSON.parse(window.localStorage.getItem('testKey'))];
var newSpotForLocalStorageDataRender = document.getElementById('myULfromLocalStorage');
var toDoValueVariable = [];
var stringifiedARRAYforRENDER = [];
var myNodelist = document.getElementsByTagName("LI");


// STEP ONE - VALIDATE IF WE HAVE LOCAL STORAGE
function validateToDoFunction(){
  console.log('01 Retrieve and Parse local storage');
  var retrievedDataArray = JSON.parse(localStorage.getItem("testKey"));
  if (retrievedDataArray && retrievedDataArray.length > 0){
    hideDefaultMessage();
    renderThatLocalStorageData();
  } else {
    enableDefaultMessage();
  };
};

// STEP 2 - DISPLAY THE NO TASKS MESSAGE
function enableDefaultMessage(){
  console.log('02 -  SET The NO TASKS INNER HTML STRING');
  noTasksCopyVariable.innerHTML = '&#x2705 You have no Tasks!';
}

// STEP 3 - HIDE THE DEFAULT MESSAGE
function hideDefaultMessage(){
  console.log('03 -  Change the display style of the no Tasks element to none');
  document.getElementById('nothingMessageId').style.display = 'none';
}

 
  // STEP 5 - delete from LIST when clicking X
  var list = document.querySelector('#myUL');
  var close = document.getElementsByClassName("close");
  list.addEventListener('click', function(ev) {
    if (ev.target.className === 'close') {
      console.log("DELETED!");
      deleteFromLocalStorageFromClick('#myUL');
    }
  }, false);
  var i;
  for (i = 0; i < close.length; i++) {
    console.log("closeButtonClicked")

  }

  // STEP 6 - Add a "checked" symbol when clicking on a list item
  var list = document.querySelector('#myUL');
  list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
      console.log("checked");
    }
  }, false);

  
  ///STEP 7 - CREATE A NEW LIST ITEM VIA UI INPUT FUNCTION
  function newElement() {
    var inputValue = document.getElementById("myInput").value;
    if (inputValue === '') {
      alert("You must write something!");
    } else { 
      appendListItem(inputValue);
    }
    hideDefaultMessage();
  }


/// STEP 8 - Checks on Window Load if the are local storage to Do Items
window.onload = function(Artists) {
  validateToDoFunction();
};

// STEP 2 - RENDER ANY PREXISTING LocalStorage
function renderThatLocalStorageData(){
  var myStringArray = JSON.parse(localStorage.getItem('testKey'));
  var arrayLength = myStringArray.length;
  document.createTextNode("myStringArray[i].task");
  for (var i = 0; i < arrayLength; i++) {
    appendListItem(myStringArray[i].task);
  }
}


/// STEP 10 - APPEND THE LIST
function appendListItem(inputValue) {
  var li = document.createElement("li");
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  console.log("appendListItemEXECUTES");
  var span = document.createElement("SPAN");
  li.appendChild(span);
  var txt = document.createTextNode("\u00D7");
  span.appendChild(txt);
  span.className = "close";
  document.getElementById("myUL").appendChild(li);
  writeToLocalStorageFromInput(inputValue); 

}

// STEP 11 - UTILITY FUNCTION - WRITE TO LOCAL STORAGE FROM INPUT
function writeToLocalStorageFromInput(inputValue){
  let myObj = {
    task: inputValue,
    prioritylevel: 999
  }
  toDos.push(myObj);
  localStorage.setItem("testKey", JSON.stringify(toDos));
}


  // UTILITY FUNCTION - Delete from LOCAL STORAGE via click
  function deleteFromLocalStorageFromClick(inputValue){
    console.log("DELETINGLOCALSTORAGEITEM")
    localStorage.removeItem("testKey", JSON.stringify("currentDeleteItem"));
    location.reload();
  }



