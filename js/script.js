
window.addEventListener("keyup", function(event){
  event.preventDefault();
  if(event.keyCode == 13){
    var arg = document.getElementById("argument").value;
    var ref = firebase.database().ref();
    ref.once('value', function(snapshot) {
      if (snapshot.hasChild(arg)) {
        ref.child(arg).child("action").once("value", function(snapshot) {
          var x = snapshot.val();
          if(x == "+"){
           var inp =  (document.getElementById("inputs").value).split(" ");
           console.log(parseFloat(inp[0]) + parseFloat(inp[1]));
         }else if(x == "-"){
           var inp =  (document.getElementById("inputs").value).split(" ");
           console.log(parseFloat(inp[0]) - parseFloat(inp[1]));
         }else if(x == "*"){
           var inp =  (document.getElementById("inputs").value).split(" ");
           console.log(parseFloat(inp[0]) * parseFloat(inp[1]));
         }else if(x == "/"){
           var inp =  (document.getElementById("inputs").value).split(" ");
           console.log(parseFloat(inp[0]) / parseFloat(inp[1]));
         }else if(x == "="){
           var inp =  (document.getElementById("inputs").value).split(" ");
           ref.set({
             action: 'hello'
           });
         }
        });
      }
    });
  }
});
