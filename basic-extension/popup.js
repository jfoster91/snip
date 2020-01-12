console.log("background running");
document.getElementById('snip').addEventListener('click', onSnip, false)
document.getElementById('csv').addEventListener('click', csv, false)

var fields = ["companyName", "firstName", "surname"];
var i = 0;
var dataArr = []
var fieldCount = fields.length;

function onSnip() {
  chrome.tabs.getSelected(null, function(tab){
    
    chrome.tabs.sendRequest(tab.id, {method: "getSelection"}, function(response){
      // send the data once the object has been completely filled

      // send data to background script
      chrome.runtime.sendMessage(response.data);
      
      dataArr.push(response.data);
     
      
      if (i == fieldCount) {
        i = 0;
        $.post("http://127.0.0.1:5000/snip",
        {
          arrayTest: JSON.stringify(dataArr)
        },
        function(data, status){
        alert("Snip");
        });
      }
      else {
        i++
      }
      
      
  
    });
});
}

function csv() {
  // download the csv file that has been building
}
