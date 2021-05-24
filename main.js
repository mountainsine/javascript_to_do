// This is just a test utility
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
    /// VERY IMPORTANT THIS IS THE InputValueVariable
    var inputValue = document.getElementById("myInput").value;
    //var t = document.createTextNode(inputValue);//OLD ONE
    var t = document.createTextNode(localStorage.getItem("toDo"));
    console.log("text node = " + inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    localStorage.setItem('toDo', JSON.stringify(inputValue));
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

 

function showOrHidePlaceholdMessage(){
  var anythingIneedToDo = document.getElementsByClassName("close")
  var i;
  if(myNodelist.length > 0){
    document.getElementById("nothingMessage").classList.add("hidden");
  } else {
    document.getElementById("nothingMessage").classList.remove("hidden");
  }
}

function isUserLoggedIn(){
  let isUserLoggedIn = "TEST";
  if (theuserProfileZone.length > 0){
    dynamicUserProfile.setAttribute("src", "A STRING");
  } else {
    dynamicUserProfile.setAttribute("src", "WELCOME")
  }

}
