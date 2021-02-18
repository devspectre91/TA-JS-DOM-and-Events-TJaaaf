

let areaLeft = document.querySelector(".first");
let areaRight = document.querySelector(".second");


areaLeft.addEventListener("click", colorClick);
areaRight.addEventListener("mousemove", colorMove);

function colorClick() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    areaLeft.style.backgroundColor = '#' + randomColor;
    console.log("hi")
}
function colorMove() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    console.log("moved");
    areaRight.style.backgroundColor = '#' + randomColor;
}