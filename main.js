var toDos = [];
var retrievedData = [];

var retrievedData = localStorage.getItem("testKey");
  //console.log(retrievedData);
  // handle load event

window.onload = loopMachineWacky(retrievedData)
  if (retrievedData){
    console.log(retrievedData);
    document.getElementById("nothingMessageID").classList.add("hidden");
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");

  } else {
    console.log("NO LOCAL STORAGE FOUND!");
    document.getElementById("nothingMessageID").classList.remove("hidden");
    var li = document.createElement("li");
    var toDoValue = document.getElementById("retrievedData");
  };


/// TO DO 20210525 Create a function or way to loop through the tDos and call to dom ^

/// The loop Machine Wacky attempts to do the above
function loopMachineWacky(){
  if (retrievedData === '') {
    //console.log('YAM');
    document.getElementById("nothingMessageID").classList.add("hidden");
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");

  } else {
    // console.log('potato');
    document.getElementById("nothingMessageID").classList.remove("hidden");
  };
}
loopMachineWacky();



function renderLocalStorage(){
    var li = document.createElement("li");
    var toDoValue = document.getElementById("retrievedData").value;
    var t = document.createTextNode.
    li.appendChild(t);
    if (retrievedData === '') {
      // console.log('YAM');
    } else {
      document.getElementById("myUL").appendChild(li);
      let myObj = {
        task: document.getElementById("myInput").value,
        prioritylevel: 999
      }
      toDos.push(myObj);
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
    };

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







