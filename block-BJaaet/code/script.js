document.body.addEventListener("keypress", handleKey);
document.body.addEventListener("click", handleClick);
let list = document.querySelector("ul");

function handleKey(event) {
    let inputValue = document.querySelector("input");
    if (event.keyCode == 13) {

        if (inputValue.value.length == 0) {
            alert("Name cannot be empty");
        } else {
            let movieItem = document.createElement("li");
            let span = document.createElement("span");
            span.innerText = "❌ " + inputValue.value;
            console.log(span.innerText);
            movieItem.append(span);

            list.append(movieItem);
            inputValue.blur();
            inputValue.value = "";
            inputValue.focus();
        }
    }

}


function handleClick(event) {
    if (event.target.nodeName == "SPAN") {
        event.target.remove();
    }
}