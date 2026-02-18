"use strict";
var tiles;
var rootElement;
var turnTextElement;
var turnCounter = 0;
var currentPlayerTurn = null;
window.onload = function () {
    document.getElementById("resetBtn").onclick = function () { return setup(); };
    rootElement = document.getElementById("root");
    turnTextElement = document.getElementById("turnText");
    setup();
};
function setup() {
    tiles = [];
    currentPlayerTurn = "X";
    turnCounter = 0;
    setTurn("X");
    rootElement.innerHTML = "";
    var _loop_1 = function (i) {
        element = document.createElement("div");
        element.classList.add("tile");
        element.id = i.toString();
        var t = {
            id: i,
            element: element,
            playerPiece: null
        };
        tiles.push(t);
        element.textContent = "";
        element.onclick = function () { return onClicked(i); };
        rootElement.appendChild(element);
    };
    var element;
    for (var i = 0; i < 9; i++) {
        _loop_1(i);
    }
}
function setTurn(player) {
    currentPlayerTurn = player;
    turnTextElement.textContent = "Current Player Turn: " + currentPlayerTurn;
}
function onTurn() {
    turnCounter++;
    setTurn(currentPlayerTurn == "O" ? "X" : "O");
}
function onClicked(index) {
    var tile = tiles[index];
    if (tile.playerPiece != null) {
        return;
    }
    if (turnCounter <= 8) {
        console.log("click " + index);
        console.log("turn: " + turnCounter);
        updateTile(tiles[index], currentPlayerTurn);
        onTurn();
    }
}
function updateTile(tile, p) {
    tile.playerPiece = p;
    tile.element.textContent = p;
}
