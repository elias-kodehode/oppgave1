
var parent = document.getElementsByTagName("footer")[0];

if(parent != null){
    var button = document.createElement("button");
    button.textContent = "dynamically created button";
    
    parent.appendChild(button);
}




button.addEventListener("click", (ev) => {
    alert("clicked");
});
