var toDos = [];
var retrievedDataArray = [];

var temporaryVariablePotato = 1;
var tag_id = document.getElementById('nothingMessage');
var myObj = [];
var parsedArrayObject = [];

// RETRIEVES LOCAL STORAGE ITEMS
var retrievedDataArray = JSON.parse(localStorage.getItem("testKey"));

function validateToDoFunction(){
  if (retrievedDataArray && retrievedDataArray.length > 0){
    console.log("LOCALSTORAGEDETECTED!")
    console.log('Stored Item Length = ' + retrievedDataArray.length);
    tag_id.innerHTML = '';
    loopMachineWacky();
  } else {
    tag_id.innerHTML = '&#x2705 You have no Tasks!';
    console.log("NO LOCAL STORAGE FOUND!");
  };
}

window.onload = function() {
  validateToDoFunction();
};

//// TO DO 20210525 Create a function or way to loop through the tDos and call to dom 
function loopMachineWacky() {
  if (retrievedDataArray && retrievedDataArray.length > 0){
    console.log("INITIATE WACKINESS!")
    renderLocalStorage();
   
   // JSON.parse(retrievedDataArray) // Does not return anything
    //localStorage.getItem("testKey", JSON.stringify(toDos));
    //console.log(toDos);
    //onScreenLocalStorage.innerHTML = JSON.stringify(localStorage, myObj, '\t');

  } else {
    console.log('loopMachineWacky FAILURE!');
    tag_id.innerHTML = '';
    

  };
}

function renderLocalStorage(){
    if (retrievedDataArray && retrievedDataArray.length > 0){
      var currentToDoString = JSON.stringify(retrievedDataArray[0]);
      //tag_id.innerHTML = JSON.stringify(retrievedDataArray[0]);
      //tag_id.innerHTML = JSON.localStorageValue.task(retrievedDataArray[0]);
      
      console.log(retrievedDataArray);
      console.log(JSON.stringify(retrievedDataArray[0]));
      let arr = ['this is the first element', 'this is the second element', 'this is the last element']
      console.log(arr[0]) 
  }
    else {
      tag_id.innerHTML = '';
    }
  ;
  }


 
/// A function or way to loop through to dos and call to dom ^ 

// Create a "close" button and append it to each list item
  var myNodelist = document.getElementsByTagName("LI");
  var i;
  for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
  }

  // Click on a close button to hide the current list item
  var close = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

  // Add a "checked" symbol when clicking on a list item
  var list = document.querySelector('#myUL');
  list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);
  
  
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
        div.style.display = "none";
      }
    }

      

    validateToDoFunction();  

  
}



