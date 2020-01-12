console.log("i'm alive back here"); 
var i = 0;

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log("message received in background");
        console.log(request);
        i++;
        console.log(i);
        return true;
    });
