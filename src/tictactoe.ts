type PlayerPiece = null | "X" | "O";

interface Tile{
    id : number;
    element : HTMLDivElement;
    playerPiece : PlayerPiece;
}

let tiles : Tile[];
let rootElement : HTMLElement;
let turnTextElement : HTMLDivElement;
let turnCounter : number = 0;
let currentPlayerTurn: PlayerPiece = null;

window.onload = function() {
    document.getElementById("resetBtn").onclick = () => setup();
    rootElement = document.getElementById("root");
    turnTextElement = document.getElementById("turnText") as HTMLDivElement;
    setup();
}

function setup(){
    tiles = [];
    currentPlayerTurn = "X";
    turnCounter = 0;
    setTurn("X");
    //Delete all child elements
    rootElement.innerHTML = "";

    for (let i = 0; i < 9; i++) {
        var element = document.createElement("div");
        element.classList.add("tile");
        element.id = i.toString();
        const t: Tile = {
            id: i,
            element: element,
            playerPiece: null
        };
        tiles.push(t);
        element.textContent = "";
        element.onclick = () => onClicked(i);
        rootElement.appendChild(element);
    }
}

function setTurn(player: PlayerPiece){
    currentPlayerTurn = player;
    turnTextElement.textContent = "Current Player Turn: " + currentPlayerTurn;
}
function onTurn(){
    turnCounter++;
    setTurn(currentPlayerTurn == "O" ? "X" : "O");
    //TODO: Implement win logic...
}

function onClicked(index: number){
    var tile = tiles[index];
    if(tile.playerPiece != null){
        return;
    }
    if(turnCounter <= 8){
        console.log("click " + index)
        console.log("turn: " + turnCounter)
        updateTile(tiles[index], currentPlayerTurn)
        onTurn();
    }
}

function updateTile(tile : Tile, p: PlayerPiece){
    tile.playerPiece = p;
    tile.element.textContent = p;
}