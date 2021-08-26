window.onload = function(){
  var content = document.getElementById("box");
  var cursor = document.getElementById("cursor");
  var rect = cursor.getBoundingClientRect();
  var box = content.getBoundingClientRect();

  if(true){
      console.log("rect.top: " + rect.top);
      console.log("rect.bottom: " + rect.bottom);
      console.log("rect.right: " + rect.right);
      console.log("rect.left: " + rect.left);
      console.log("box.top: " + box.top);
      console.log("box.bottom: " + box.bottom);
      console.log("box.right: " + box.right);
      console.log("box.left: " + box.left);
  }

  //たとえばこういう操作で調整
  if (rect.top > 200){               
    content.scrollTop = rect.top - 200 + box.top - 2; 
  }
};