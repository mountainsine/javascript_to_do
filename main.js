// INITIALIZE VARIABLES
var toDos = [];
var retrievedDataArray = [];
var tag_id = document.getElementById('myRenderDiv3');
var noTasksCopyVariable = document.getElementById('nothingMessageId');
var the = document.getElementById('myUL');
var myObj = [];
var parsedArrayObject = [JSON.parse(window.localStorage.getItem('testKey'))];
var newSpotForLocalStorageDataRender = document.getElementById('myULfromLocalStorage');
var toDoValueVariable = [];




// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");

// HIDE THE DEFAULT MESSAGE
function hideDefaultMessage(){
  noTasksCopyVariable.hidden;
  //hideDefaultMessage.style.display = 'none';
  //document.getElementById(nothingMessageId).style.display = 'none';
}

// DISPLAY THE NO TASKS MESSAGE
function enableDefaultMessage(){
    noTasksCopyVariable.innerHTML = '&#x2705 You have no Tasks!';
}

// STEP ONE - VALIDATE IF WE HAVE LOCAL STORAGE
function validateToDoFunction(){
  console.log('STEP ONE - VALIDATE IF WE HAVE LOCAL STORAGE');
  var retrievedDataArray = JSON.parse(localStorage.getItem("testKey"));
  if (retrievedDataArray && retrievedDataArray.length > 0){
    hideDefaultMessage();
    renderLocalStorage2();
  } else {
    enableDefaultMessage();
  };
};

// STEP 3 THIS IS MY 2nd FAILED ATTEPT AT RENDERING LOCAL STORAGE
function renderLocalStorage2() {
  var i;
  for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    //span.appendChild(txt);
    //myNodelist[i].appendChild(span);
  }

  var savedToDos = JSON.parse(localStorage.getItem('testKey')); 
  console.log("length of your savedToDos Array:" + savedToDos.length);
  console.log(savedToDos[0].task);
  var li = document.createElement("li");
  var span = document.createElement("SPAN");
  span.className = "close";
  var toDoValueVariable = document.createTextNode(savedToDos[0].task);;
  var t = document.createTextNode(toDoValueVariable);
  li.appendChild(t);
  if (savedToDos.length < 0){
  }
}

  
// STEP 4 - Create a "close" button and append it to each list item
  var myNodelist = document.getElementsByTagName("LI");
  var i;
  for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
  }

  // STEP 5 - Click on a close button to hide the current list item
  var close = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

  // STEP 6 - Add a "checked" symbol when clicking on a list item
  var list = document.querySelector('#myUL');
  list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);

  // UTILITY FUNCTION - WRITE TO LOCAL STORAGE
  function writeToLocalStorageFromInput(){
      let myObj = {
        task: document.getElementById("myInput").value,
        prioritylevel: 999
      }
      toDos.push(myObj);
      localStorage.setItem("testKey", JSON.stringify(toDos));
  }
  
  
  ///Create a new list item when clicking on the "Add" button
  function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else { 
      document.getElementById("myUL").appendChild(li);
      writeToLocalStorageFromInput();      
    }
    
    document.getElementById("myInput").value = "";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
    var div = this.parentElement;

      };




    };




  };

  for (i = 0; i < close.length; i++) {
    console.log(toDos);
  };



/// FINAL STEP - Checks on Window Load if the are local storage to Do Items
window.onload = function() {
  validateToDoFunction();
  renderThatLocalStorageData();
};

// STEP TWO - RENDER ANY PREXISTING LocalStorage
function renderThatLocalStorageData(){
  var newlyRenderedLocalStorageItems = localStorage.getItem("testKey", JSON.stringify(toDos));
  console.log('STEP TWO - RENDER ANY PREXISTING LocalStorage');
  var i;
  for (i = 0; i < myNodelist.length; i++) {
   console.log(localStorage.getItem("testKey", JSON.stringify(toDos)));

  //noTasksCopyVariable.innerHTML = `test`;
}

}
