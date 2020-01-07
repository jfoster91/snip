console.log("background running");
document.getElementById('snip').addEventListener('click', onSnip, false)
document.getElementById('csv').addEventListener('click', csv, false)
var dataRow = new Object();
var fields = ["companyName", "firstName", "surname"];
var field = "";
var i = 0;
var fieldCount = fields.length;

function onSnip() {
  chrome.tabs.getSelected(null, function(tab){
    
    chrome.tabs.sendRequest(tab.id, {method: "getSelection"}, function(response){
      // send the data once the object has been completely filled
      if (i == fieldCount) {
        i = 0;
        dataRow.companyName = response.data;
        dataRow.firstName = "Jonathan";
        dataRow.surname = "Foster";
        console.log(dataRow)
        $.post("http://127.0.0.1:5000/snip",
        {
          tab: "Donald Duck",
          test: JSON.stringify(dataRow)
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
