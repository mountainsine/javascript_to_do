var toDos = [];
var retrievedDataArray = [];
var temporaryVariablePotato = 1;
var tag_id = document.getElementById('nothingMessage');
// var onScreenLocalStorage = document.getElementById('myRenderDiv2');
// var onScreenLocalStorage2 = document.getElementById('myRenderDiv3');
var myObj = [];

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

// function aNEWDoYouHaveAnyTasks(temporaryVariablePotato) {
//   if (temporaryVariablePotato) {
//     myRenderDiv3.innerHTML = 'This is a literal string but generated from JS into the innerHTML via tag ID';
//   } else {
//       console.log('no temporaryVariablePotato');
//   }
// };

//// TO DO 20210525 Create a function or way to loop through the tDos and call to dom 
function loopMachineWacky() {
  if (retrievedDataArray && retrievedDataArray.length > 0){
    console.log("INITIATE WACKINESS!")
    renderLocalStorage(retrievedDataArray);
    tag_id.innerHTML = '&#x2705 You have no Tasks!';

    //localStorage.getItem("testKey", JSON.stringify(toDos));
    //onScreenLocalStorage.innerHTML = JSON.stringify(localStorage, myObj, '\t');

  } else {
    console.log('loopMachineWacky FAILURE!');
    tag_id.innerHTML = '';

  };
}

function renderLocalStorage(){
  //   var i=0;
  //   i<localStorage.length; i++) {
  //     var key = localStorage;
  //     var item = JSON.parse( localStorage.getItem( key ) );
  // }

  var myNodelist = document.getElementsByTagName("LI");
  for (i = 0; i < myNodelist.length; i++) 
  // var array = JSON.parse(retrievedDataArray);
  console.log("PARSED RETRIEVED DATA ARRAY = " , retrievedDataArray)
  console.log("RENDERING LOCAL STORAGE!"); //
  var li = document.createElement("li"); // good


  // var i;
  // for (i = 0; i < myNodelist.length; i++) {
  //   var span = document.createElement("SPAN");
  //   var txt = document.createTextNode("\u00D7");
  //   span.className = "close";
  //   span.appendChild(txt);
  //   myNodelist[i].appendChild(span);
  //   var li = document.createElement("li");
  //   document.getElementById("myUL").appendChild(li);
  //     let myObj = array.JSON.parse(retrievedDataArray);
  // }

}


// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
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

    }
    
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
  
  
//   // Create a new list item when clicking on the "Add" button
  function newElement() {
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
        window.onload

      }

      
    }

    validateToDoFunction();  

    
  }






