function add(){
    var name = document.getElementById("name");
    var surname = document.getElementById("surname");
    var output = document.querySelector("#output tbody");
    output.innerHTML += "<tr><td>"+name.value+"</td><td>"+surname.value+"</td></tr>"
  }
  