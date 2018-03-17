function add() {
    var val = document.getElementById("val");
    var list = document.getElementById("list");
    var li = document.createElement("LI");
    // var b = document.getElementById("B");
    var span = document.createElement("SPAN");
    var btn = document.createElement("BUTTON");
    var btnText = document.createTextNode("Delete");

    btn.appendChild(btnText);
    btn.onclick = function() {
         var span =this.parentNode;
         var li = span.parentNode;
         var ul = li.parentNode;
         ul.removeChild(li);
    }
    var text = document.createTextNode(val.value);
    li.appendChild(text);
    
    li.appendChild(span);
    span.appendChild(btn);
    list.appendChild(li);
    val.value = " ";
}

function deleteAll() {
    alert("are you sure");
    document.getElementById("list").innerHTML = " ";
}
