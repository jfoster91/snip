console.log("background running");

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.sendRequest(tab.id, {method: "getSelection"}, function(response){
     console.log(response.data);
     $.post("http://127.0.0.1:5000/external",
      {
        tab: "Donald Duck",
        test: response.data
      },
      function(data, status){
      alert("Snip");
  });
  });
});
