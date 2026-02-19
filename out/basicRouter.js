"use strict";
var navBar = document.getElementById("nav-bar");
var header = document.getElementsByTagName("header")[0];
var pages;
pages = [
    { path: "index.html", displayText: "Index" },
    { path: "side1.html", displayText: "Page 1" },
    { path: "side2.html", displayText: "Page 2" },
    { path: "flex.html", displayText: "Flex" },
    { path: "animation.html", displayText: "Animation" },
    { path: "api.html", displayText: "API" },
    { path: "tictactoe.html", displayText: "Tic Tac Toe" }
];
window.addEventListener("load", function () {
    console.log("basicRouter::load");
    if (navBar != null && pages.length > 0) {
        for (var index = 0; index < pages.length; index++) {
            var page = pages[index];
            navBar.appendChild(createLinkElement(page));
        }
    }
    if (header != null && header.childElementCount <= 0) {
        var h1 = document.createElement("h1");
        header.appendChild(h1);
        var fileName = window.location.href.split("/").slice(-1).toString().split(".")[0];
        h1.textContent = capitalizeFirstLetter(fileName);
    }
});
function createLinkElement(page) {
    var a = document.createElement("a");
    a.setAttribute("href", page.path);
    a.textContent = page.displayText;
    return a;
}
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
