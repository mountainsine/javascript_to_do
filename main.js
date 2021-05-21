
let aTestMessage = 'Hello World';
console.log(aTestMessage);


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
  
  // Create a new list item when clicking on the "Add" button
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

      doSomething;///console.log(li);
    }
  } 

  
let doIHaveanyTasks;
// locate the text message
var validateTaskList = document.getElementById("nothingMessage");
///console.log(validateTaskList.textContent);
// Check for existence of the list exists
if (validateTaskList) {
  //console.log(validateTaskList)
} else {
  console.log('The variable does not exist.')
}

// //// Another attempt
// var anythingIneedToDo = document.getElementsByClassName("close")
// console.log(anythingIneedToDo);
// if (anythingIneedToDo => 0){
//   console.log('this is gonna hide my element later') } else {
//   console.log('nothing')
//   };

  // ^ works but does not work outside page load so it needs to be in a function

//// another attempt in function

function doSomething(){
  var anythingIneedToDo = document.getElementsByClassName("close")
  //console.log(anythingIneedToDo);
  if (anythingIneedToDo => 0){
  console.log('this is gonna hide my element later') } else {
  console.log('nothing')
  };

}




// // Toggle visibilty based on if 
// var li = document.createElement("li");
// var inputValue = document.getElementById("myInput").value;
// var t = document.createTextNode(inputValue);
// li.appendChild(t);
// if (inputValue === '') {
//   alert("You must write something!");
// } else {