var toDos = [];
var retrievedDataArray = [];

// RETRIEVES LOCAL STORAGE ITEMS
var retrievedDataArray = JSON.parse(localStorage.getItem("testKey"));

window.onload = function() {
  if (retrievedDataArray){
    console.log(retrievedDataArray[0]);
    loopMachineWacky();
    console.log("LOCALSTORAGEDETECTED!")
  } else {
    console.log("NO LOCAL STORAGE FOUND!");
  };
};

//// TO DO 20210525 Create a function or way to loop through the tDos and call to dom 
function loopMachineWacky() {
  if (retrievedDataArray){
    console.log("INITIATE WACKINESS!")
    renderLocalStorage(retrievedDataArray);
    //console.log(retrievedData);
    ///document.getElementById("nothingMessageID").classList.remove;
  } else {
    console.log("NO LOCAL STORAGE FOUND!");
  };
}

function renderLocalStorage(){
  var i;
  var myNodelist = document.getElementsByTagName("LI");
  for (i = 0; i < myNodelist.length; i++) 
  var array = JSON.parse(retrievedDataArray);
  console.log("THIS IS THE PARSTED RETRIEVED DATA ARRAY" , retrievedDataArray)
  console.log("RENDERING LOCAL STORAGE!"); //
  console.log(array); //
  var li = document.createElement("li"); // good
  var inputValue = document.getElementById("myInput").value;

  var i;
  for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
    var li = document.createElement("li");
    document.getElementById("myUL").appendChild(li);
      let myObj = array.JSON.parse(retrievedDataArray);
  }

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
  // showOrHidePlaceholdMessage();

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

      }
    }

    
  }







