
var p = document.getElementsByTagName("footer")[0];

if(p != null){
    var button = document.createElement("button");
    button.textContent = "dynamically created button";
    
    p.appendChild(button);
}




button.addEventListener("click", (ev) => {
    alert("clicked");
});
