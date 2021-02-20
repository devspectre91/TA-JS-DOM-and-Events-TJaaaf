let form = document.querySelector("form");



form.addEventListener("submit", handleSubmit);
function resetError() {
    let smallElms = document.querySelectorAll("small");
    smallElms.forEach(e => {
        e.innerText = "";
    })
}
function handleSubmit(e) {
    e.preventDefault();
    console.log("clicked");
    let userNameError = "";
    let emailError = "";
    let phoneError = "";


    let usernameElm = e.target.elements.username;

    if (usernameElm.value.length < 4) {
        userNameError = "Username can't be less than 4 characters"
        usernameElm.nextElementSibling.innerText = userNameError;
    }
    else if (usernameElm.value.split("").some(e => Number(e))) {
        userNameError = "Username can't contain numbers";
        usernameElm.nextElementSibling.innerText = userNameError;
    } else {
        usernameElm.nextElementSibling.innerText = "";
    }
    let emailElm = e.target.elements.email;
    if (emailElm.value.length < 6) {
        emailError = "Email can't be less than 6 characters"
        emailElm.nextElementSibling.innerText = emailError;
    }
    else if (!(emailElm.value.split("").some(e => e == "@"))) {
        emailError = "Not a valid email";
        emailElm.nextElementSibling.innerText = emailError;
    }
    else {
        emailElm.nextElementSibling.innerText = "";
    }

    let phoneElm = e.target.elements.phone;
    if (phoneElm.value.length < 7) {
        phoneError = "Phone No. can't be less than 7 characters"
        phoneElm.nextElementSibling.innerText = phoneError;
    }
    else if ((phoneElm.value.split("").some(e => isNaN(e)))) {
        phoneError = "Phone numbers can only contain numbers";
        phoneElm.nextElementSibling.innerText = phoneError;
    }
    else {
        phoneElm.nextElementSibling.innerText = "";
    }


    let passwordElm = e.target.elements.password;
    let cpasswordElm = e.target.elements.cpassword;


    if (passwordElm.value !== cpasswordElm.value) {

        cpasswordElm.nextElementSibling.innerText = "Passwords don't match";

    }
    else {
        cpasswordElm.nextElementSibling.innerText = "";
    }
}
