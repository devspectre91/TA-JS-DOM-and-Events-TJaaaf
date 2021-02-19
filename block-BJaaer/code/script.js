let form = document.querySelector("form");
let modal = document.querySelector(".modal");
let userInfo = {};
let close = document.querySelector(".close");
close.addEventListener("click", handleClick);
modal.style.display = "none";
form.addEventListener("submit", handleSubmit);
console.log(form.elements.drone);


function handleClick() {
    modal.style.display = "none";
}
function handleSubmit(event) {

    event.preventDefault();
    form.style.display = "none";

    userInfo.name = form.elements.text.value;
    userInfo.email = "Email is: " + form.elements.email.value;
    userInfo.love = "Love: " + form.elements.love.value;
    userInfo.color = "Color: " + form.elements.color.value;
    userInfo.rating = "Rating: " + form.elements.rating.value;

    let radioValues = form.elements.drone;
    radioValues.forEach(element => {
        if (element.checked == true) {
            userInfo.genre = "Book Genre: " + element.value;
        }
    });
    userInfo.terms = form.elements.terms.checked;
    let root = document.querySelector("ul");
    let item1 = document.createElement("li");
    let h2 = document.createElement("h2");
    h2.innerText = userInfo.name;
    item1.append(h2);
    let item2 = document.createElement("li");
    item2.innerText = userInfo.email;
    let item3 = document.createElement("li");
    item3.innerText = userInfo.love;
    let item4 = document.createElement("li");
    item4.innerText = userInfo.color;
    let item5 = document.createElement("li");
    item5.innerText = userInfo.rating;

    let item6 = document.createElement("li");
    item6.innerText = userInfo.genre;
    let item7 = document.createElement("li");
    item7.style.textDecoration = "underline";
    item7.innerText = `👉 You agree to terms and conditions`;

    root.append(item1, item2, item3, item4, item5, item6);
    if (userInfo.terms == true) {
        root.append(item7);
    }
    modal.style.display = "block";

}