console.log("i'm alive back here"); 

var fields = ["companyName", "firstName", "surname"];
var i = 0;
var dataArr = []
var fieldCount = fields.length;

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse){

  }
)

chrome.runtime.onMessage.addListener(
    function(message) {

      if (message.type == "add") {

        console.log("message received in background");
        console.log(message.content);
        
        console.log(i);

        dataArr.push(message.content);

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
      } else if (message.type == "new") {
          fields = message.content;
          fieldCount = fields.length;
          dataArr = [];
          i = 0;
      }
    });
