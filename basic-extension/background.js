console.log("i'm alive back here"); 

var fields = ["companyName", "firstName", "surname"];
var i = 0;
var dataArr = []
var fieldCount = fields.length;

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log("message received in background");
        console.log(request);
        
        console.log(i);

        dataArr.push(request);

        if (i == fieldCount - 1) {
            i = 0;
            $.post("http://127.0.0.1:5000/snip",
            {
              arrayTest: JSON.stringify(dataArr)
            },
            function(data, status){
            alert("Snip");
            dataArr = [];
            });
          }
          else {
            i++
          }
        return true;
    });
