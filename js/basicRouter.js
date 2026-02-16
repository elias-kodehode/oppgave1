const pages = ["index","side1", "side2"];

var navBar = document.getElementById("nav-bar");

window.onload = function(){
    if(pages.length > 0){

        for (let index = 0; index < pages.length; index++) {
            const p = pages[index];

            navBar.appendChild(createLinkElement(p))
        }
    }
}


function createLinkElement(name) {
    var a = document.createElement("a");
    a.setAttribute("href", name + ".html");
    a.textContent = name;
    return a;
}
