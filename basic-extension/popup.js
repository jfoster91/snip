console.log("background running");
document.getElementById('snip').addEventListener('click', onSnip, false)
document.getElementById('csv').addEventListener('click', csv, false)

function onSnip() {
  chrome.tabs.getSelected(null, function(tab){
    
    chrome.tabs.sendRequest(tab.id, {method: "getSelection"}, function(response){
      console.log(response.data);
      $.post("http://127.0.0.1:5000/snip",
        {
          tab: "Donald Duck",
          test: response.data
        },
        function(data, status){
        alert("Snip");
    });
    });
});
}

function csv() {
  // download the csv file that has been building
}
