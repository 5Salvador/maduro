const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");
function sendEmail(){
    const bodyMessage = 'Nome completo:{fullName.value}<br Email:{email.value}<br Numero de celular:{phone.value}<br Mensagem:{mess.value}<br';
    Email.send({
        SecurityToken: "41f1233d-19ba-477e-ace8-1be3efbaaa94",
        Host : "smtp.elasticemail.com",
        Username : "carlos.chirindza0@gmail.com",
        To : 'carlos.chirindza0@gmail.com',
        From : "carlos.chirindza0@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message =>{
        if(message == "OK"){
            Swal.fire({
                title: "Sucesso!",
                text: "Mensagem enviada com sucesso!",
                icon: "success"
              });
        }
      }
    );
}
function checkInputs(){
    const items = document.querySelector(".item");
    for(const item of items){
        if(item.value == ""){
            item.classList.add("error");
            item.psrentElment.classList.add("error");
        }
        if(items[1].value != ""){
            checkEmail();
        }
        items[1].addEventListener("keyup", () => {
            checkEmail();
        });
        item.addEventListener("keyup", () =>{
           if(item.value != ""){
            item.classList.remove("error");
            item.psrentElment.classList.remove("error");
           } 
           else{
            item.classList.add("error");
            item.psrentElment.classList.add("error");
           }
        });
    }
}
function checkEmail(){
    const emailRegex = /^([a-z\d.-]+)@([a-z]\d+)([a-z]{2,3})([a-z]{2,3})?$/;
    const errorTxtEmail = document.querySelector("error-txt email")
    if(!email.value.match(emailRegex)){
        item.classList.add("error");
        item.psrentElment.classList.add("error");

        if(email.value != ""){
            errorTxtEmail.innerTxt = "Coloque email valido"
        }
        else{
            errorTxtEmail.innerTxt = "Email não pode estar em branco"
        }
    }
    else{
        item.classList.remove("error");
        item.psrentElment.classList.remove("error");
    }
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    if(!fullName.classList.contains("error") && !fullName.classList.contains("error") && !phone.classList.contains("error") && !phone.classList.contains("error") && !subject.classList.contains("error") && !mess.classList.contains("error")){
         sendEmail();

         form.reset();
         return false;
    }
})