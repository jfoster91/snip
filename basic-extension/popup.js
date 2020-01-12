console.log("background running");
document.getElementById('snip').addEventListener('click', onSnip, false)
document.getElementById('csv').addEventListener('click', csv, false)



function onSnip() {
  chrome.tabs.getSelected(null, function(tab){
    
    chrome.tabs.sendRequest(tab.id, {method: "getSelection"}, function(response){
      

      // send data to background script
      chrome.runtime.sendMessage(response.data);
      
      
     
      
      
      
      
  
    });
});
}

function csv() {
  // download the csv file that has been building
}
