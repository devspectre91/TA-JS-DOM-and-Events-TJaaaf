let form = document.querySelector("form");
let modal= document.querySelector(".modal");
let userInfo= {};

modal.style.display="none";
form.addEventListener("submit", handleSubmit);
console.log(form.elements.drone);
function handleSubmit(event){
   
    event.preventDefault();
    form.style.display="none";
    modal.style.display="block";
    userInfo.name= form.elements.text.value;
    userInfo.email=form.elements.email.value;
    userInfo.love=form.elements.love.value;
    userInfo.color=form.elements.color.value;
    userInfo.rating=form.elements.rating.value;
  
    let radioValues= form.elements.drone;
    radioValues.forEach(element => {
        if(element.checked==true){
            userInfo.genre=element.value;
        }
    });
   userInfo.terms=form.elements.terms.checked;


 


}