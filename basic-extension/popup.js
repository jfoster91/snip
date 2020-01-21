console.log("background running");
document.getElementById('snip').addEventListener('click', onSnip, false)
document.getElementById('csv').addEventListener('click', csv, false)
document.getElementById('start').addEventListener('click', start, false)
document.getElementById('add').addEventListener('click', add, false)
document.getElementById('remove').addEventListener('click', remove, false)

// list of columns
var colList = document.getElementById("colList");

// Add new column to the list
function add() {
  // Create a <li> node
  var node = document.createElement("LI"); 
  // Create a text node                
  var textnode = document.createTextNode(document.getElementById("fname").value);  
  // Append the text to <li>       
  node.appendChild(textnode); 
  // Append <li> to <ul> with id="colList"                             
  colList.appendChild(node);     
}

// Couple of bugs need to fix but it is workable
function remove() {
  var len = colList.childElementCount;
  console.log(len);
  colList.removeChild(colList.childNodes[len - 1]);
}

function onSnip() {
  chrome.tabs.getSelected(null, function(tab){
    
    chrome.tabs.sendRequest(tab.id, {method: "getSelection"}, function(response){
    
      // send data to background script
      chrome.runtime.sendMessage({content: response.data, type: "add"});
 
    });
});
}

function start(){
  dataArr = [];
  var len = colList.childElementCount;

// EXTRACT OUT THE TEXT CONTENT OF EACH LI AND THEN ADD TO ARRAY
  for (var i = 0; i < len; i++) {
    var col = colList.children[i].innerHTML;
    dataArr.push(col);
  }

// Update the data held in the background script before posting to the backend
  chrome.runtime.sendMessage({content: dataArr, type: "new"});

  $.post( "http://127.0.0.1:5000/start", { colArray: JSON.stringify(dataArr) }, 
    function(data, status){
    alert("Sent"); 
    });
  
}

function csv() {
  // download the csv file that has been building
  window.open('http://127.0.0.1:5000/download', '_blank');
}



/* workflow

- click pop up
- press start
- start takes you to new page... allows you to create a list of categories
*/