let cellList = document.querySelectorAll("td");
var myVar;
let table = document.querySelector("table");

table.addEventListener("mouseenter", startDisco);
table.addEventListener("mouseleave", endDisco);

function startDisco() {
    myVar = setInterval(changeColors, 500);
}
function endDisco() {
    clearInterval(myVar);
    cellList.forEach((cell) => {
        cell.style.backgroundColor = "white";
    })
}


function changeColors() {
    cellList.forEach((cell) => {
        var randomColor = Math.floor(Math.random() * 16777215).toString(16);
        let randomNumber = Math.floor(Math.random() * 500);
        cell.innerText = randomNumber;
        cell.style.backgroundColor = "#" + randomColor;
    });


}