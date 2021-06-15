

function displayArtists() {

    // Our JSON data
    var data = 
      {
        "artists" : [
          { 
            "artistname" : "Leonard Cohen",
            "born" : "1934"
            },
          { 
            "artistname" : "Joe Satriani",
            "born" : "1956" 
            },
          { 
            "artistname" : "Snoop Dogg",
            "born" : "1971"
            }
        ]
      }
      
      // Put the data into a variable and format with HTML tags
      var output = "<h1>Artists</h1>";
      output += "<ul>";    
      
      // Loop through the artists
      for (var i in data.artists) {
          output += "<li>" + data.artists[i].artistname + " (Born: " + data.artists[i].born + ")</li>"; 
      }
      
      output += "</ul>";
  
      // Output the data to the "artistList" element
      document.getElementById("artistList").innerHTML=output;
  }    
  
  // Load the above function when the window loads
  window.onload = displayArtists;


  //// ANOTHER ATTEMPT

const txt = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
const aPERSON = JSON.parse("txt");
console.log(aPERSON);
document.getElementById("demo").innerHTML = aPERSON.name + ", " + aPERSON.age;