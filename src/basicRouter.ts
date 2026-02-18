
interface Page{
    path: string;
    displayText: string;
}

var navBar = document.getElementById("nav-bar");
var header = document.getElementsByTagName("header")[0];

let pages: Page[];
pages = [
    {path: "index.html", displayText: "Index"}, 
    {path: "side1.html", displayText: "Page 1" },
    {path: "side2.html", displayText: "Page 2"},
    {path: "animation.html", displayText: "Animation"},
    {path: "api.html", displayText: "API"},
    {path: "tictactoe.html", displayText: "Tic Tac Toe"}
];


window.addEventListener("load", () => {
    console.log("basicRouter::load")
    if(navBar != null && pages.length > 0){

        //dynamically fill the nav element with anchor tags, based on the pages array
        for (let index = 0; index < pages.length; index++) {
            const page = pages[index];

            navBar.appendChild(createLinkElement(page))
        }
    }


    //Automatically set the header to the name of the page
    if(header != null && header.childElementCount <= 0){
        var h1 = document.createElement("h1");
        header.appendChild(h1);
        var fileName = window.location.href.split("/").slice(-1).toString().split(".")[0];
        h1.textContent = capitalizeFirstLetter(fileName);
    }
});

//Create anchor tag and set its href to name, and display said name
function createLinkElement(page: Page) {
    var a = document.createElement("a");
    a.setAttribute("href", page.path);
    a.textContent = page.displayText;
    return a;
}

//capitalizes first letter of a string
function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}