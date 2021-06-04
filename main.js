
var toDos = [];
var retrievedDataArray = [];
var tag_id = document.getElementById('nothingMessage');
var myObj = [];
//var parsedArrayObject = [JSON.parse(window.localStorage.getItem('testKey'))];
var myNodelist = document.getElementsByTagName("li");

// RETRIEVES LOCAL STORAGE ITEMS
var retrievedDataArray = JSON.parse(localStorage.getItem("testKey"));

function validateToDoFunction(){
  count++;
  if (retrievedDataArray && retrievedDataArray.length > 0){
    //console.log("LOCALSTORAGEDETECTED!")
    console.log('Stored Item Length = ' + retrievedDataArray.length);
    tag_id.innerHTML = '';
    loopMachineWacky();
  } else {
    tag_id.innerHTML = '&#x2705 You have no Tasks!';
    //console.log("NO LOCAL STORAGE FOUND!");
  };
};

window.onload = function() {
  validateToDoFunction();
};

//// TO DO 20210525 Create a function or way to loop through the tDos and call to dom 
function loopMachineWacky() {
  if (retrievedDataArray && retrievedDataArray.length > 0){
    //console.log("INITIATE WACKINESS!")
    renderLocalStorage();
   // JSON.parse(retrievedDataArray) // Does not return anything
    //localStorage.getItem("testKey", JSON.stringify(toDos));
    //console.log(toDos);
    //myRenderDiv2.innerHTML = JSON.stringify(localStorage, myObj, '\t');

  } else {
    console.log('loopMachineWacky FAILURE!');
    tag_id.innerHTML = '&#x2705 You have no Tasks!';
    

  };
};


var para = document.createElement("p");
var node = document.createTextNode("THIS IS ONLY STATIC BUT WILL DISPLAY");
para.appendChild(node);
var element = document.getElementById("div1");
element.appendChild(para);



// ANOTHER attempt at loop through the tDos and call to dom 
function renderLocalStorage(){
  if (retrievedDataArray && retrievedDataArray.length > 0){
    var currentToDoString = JSON.stringify(retrievedDataArray[0]);

    console.log(currentToDoString);
    //document.getElementById("myUL").appendChild(li);
    var t = document.createElement("li");
    var li = document.createElement("li");
    let myObj = JSON.stringify(retrievedDataArray[0]);
    toDos.push(myObj);
    document.getElementById("myUL").appendChild(li);
    let myObjSerialized = JSON.myObjSerialized;
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "localstorage";
    //span.appendChild(txt);
    //li.appendChild(span);


    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        window.onload

      }
    }
  }
}
  
// Create a "close" button and append it to each list item

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
   ///validateToDoFunction();  