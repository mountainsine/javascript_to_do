
var toDos = [];
var retrievedDataArray = [];
var tag_id = document.getElementById('myRenderDiv3');
var myObj = [];
//var parsedArrayObject = [JSON.parse(window.localStorage.getItem('testKey'))];
var myNodelist = [];
//var myNodelist = document.getElementsByTagName("li");

// RETRIEVES LOCAL STORAGE ITEMS
var retrievedDataArray = JSON.parse(localStorage.getItem("testKey"));

function validateToDoFunction(){
  if (retrievedDataArray && retrievedDataArray.length > 0){
    //console.log("LOCALSTORAGEDETECTED!")
    console.log('Stored Item Length = ' + retrievedDataArray.length);

    renderLocalStorage2();
  } else {
    //tag_id.innerHTML = '&#x2705 You have no Tasks!';
    //console.log("NO LOCAL STORAGE FOUND!");
  };
};

/// Checks on Window Load if the are local storage to Do Items
window.onload = function() {
  validateToDoFunction();
};


function renderLocalStorage2() {
  if (retrievedDataArray && retrievedDataArray.length > 0){
    var currentToDoString = JSON.stringify(retrievedDataArray[0]);
    tag_id.innerHTML = currentToDoString;
  } else {
    console.log('renderLocalStorage2 FAILURE!');
    tag_id.innerHTML = '&#x2705 You have no Tasks!';
    
  };
};





// ANOTHER attempt at loop through the tDos and call to dom 
function renderLocalStorage(){
  if (retrievedDataArray && retrievedDataArray.length > 0){
    //document.getElementById("myUL").appendChild("test");
    var t = document.createElement("li");
    var li = document.createElement("li");
   // let myObj = JSON.stringify(retrievedDataArray[0]);
    toDos.push(myObj);
    document.getElementById("myUL").appendChild(li);
    let myObjSerialized = JSON.myObjSerialized;
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "localstorage";
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        window.onload

      }
    }
  } else {
    
  }
}
  
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
    console.log('YOYOYOYO');
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
      let myObj = {
        task: document.getElementById("myInput").value,
        prioritylevel: 999
      }
      toDos.push(myObj);
      let myObjSerialized = JSON.myObjSerialized;
      localStorage.setItem("testKey", JSON.stringify(toDos));
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
        // window.onload
      };
    };
  };
  validateToDoFunction();  