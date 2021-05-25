

var toDos = [];
/// TO DO 20210525 Ready From array from Local Storage  
var retrievedData = localStorage.getItem("testKey");
//console.log(retrievedData);/// TEST LOG IGNORE
/// TO DO 20210525 Deserialize string
var toDos2 = JSON.parse(retrievedData);
console.log(retrievedData);/// TEST LOG IGNORE
/// TO DO 20210525 Create a function or way to loop through the tDos and call to dom ^


function loopMachineWacky(){
  let thingsIHAVETODO = JSON.parse(localStorage.getItem('task'));
  console.log(thingsIHAVETODO);
  var loopMachineWacky = [];
}
document.getElementById("myNewDIV").innerHTML = "Bonjour";

 
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
  showOrHidePlaceholdMessage();
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
      let myObj = {
        task: document.getElementById("myInput").value,
        prioritylevel: 999
      }
      toDos.push(myObj);
      //let myObjSerialized = JSON.myObjSerialized;
//     localStorage.setItem("testKey", JSON.stringify(myObj));// OLD local storage set for reference
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
        div.style.display = "none";
      }
    }
    showOrHidePlaceholdMessage();
  } 


function addListItemToDom(item){
  
} 



function showOrHidePlaceholdMessage(){
  var anythingIneedToDo = document.getElementsByClassName("close")
  var i;
  if(myNodelist.length > 0){
    document.getElementById("nothingMessage").classList.add("hidden");
  } else {
    document.getElementById("nothingMessage").classList.remove("hidden");
  }
}

