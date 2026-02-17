const pages = ["Index","Side1", "Side2", "API", "tictactoe"];

var navBar = document.getElementById("nav-bar");
var header = document.getElementsByTagName("header")[0];

window.onload = function(){

    if(navBar != null && pages.length > 0){

        //dynamically fill the nav element with anchor tags, based on the pages array
        for (let index = 0; index < pages.length; index++) {
            const p = pages[index];

            navBar.appendChild(createLinkElement(p))
        }
    }


    //Automatically set the header to the name of the page
    if(header != null && header.childElementCount <= 0){
        var h1 = document.createElement("h1");
        header.appendChild(h1);
        var fileName = window.location.href.split("/").slice(-1).toString().split(".")[0];
        h1.textContent = capitalizeFirstLetter(fileName);
    }

}

//Create anchor tag and set its href to name, and display said name
function createLinkElement(name) {
    var a = document.createElement("a");
    a.setAttribute("href", name.toString().toLowerCase() + ".html");
    a.textContent = name;
    return a;
}

//capitalizes first letter of a string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}