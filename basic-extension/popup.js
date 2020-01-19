console.log("background running");
document.getElementById('snip').addEventListener('click', onSnip, false)
document.getElementById('csv').addEventListener('click', csv, false)
document.getElementById('start').addEventListener('click', start, false)


function clickme(){
  alert("click")
}

function onSnip() {
  chrome.tabs.getSelected(null, function(tab){
    
    chrome.tabs.sendRequest(tab.id, {method: "getSelection"}, function(response){
      

      // send data to background script
      chrome.runtime.sendMessage(response.data);
    });
});
}

function start(){
  window.open('http://127.0.0.1:5000/start', '_blank')
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