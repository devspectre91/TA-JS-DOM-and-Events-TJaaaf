

let boxesLeft = document.querySelectorAll(".boxes")[0];
let boxesRight = document.querySelectorAll(".boxes")[1];


for (let i = 0; i < 12; i++) {
    let box = document.createElement("li");
    box.classList.add("box");
    box.setAttribute("data-number", i + 1);
    boxesLeft.append(box);
    box.addEventListener("click", handleClick);
}

function handleClick(e) {
    console.dir(e.target);
    if (e.target.className !== "boxes") {
        (e.target.innerText === e.target.dataset.number) ? e.target.innerText = "" : e.target.innerText = e.target.dataset.number;
    }
}

//with event delegation

for (let i = 0; i < 12; i++) {
    let box = document.createElement("li");
    box.classList.add("box");
    box.setAttribute("data-number", i + 1);
    boxesRight.append(box);
    // box.addEventListener("click", handleClickRight);
}
boxesRight.addEventListener("click", handleClick);


