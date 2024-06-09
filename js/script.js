const activeSetter =  document.querySelectorAll(".asideItem")

activeSetter.forEach((item)=>{
    item.addEventListener("click",()=>{
        activeSetter.forEach(nav => nav.classList.remove("active"))
        item.classList.add("active")
    })
})
function sendMail(){
    let input = {
        name : document.querySelector("#name").value,
        email : document.querySelector("#email").value,
        subject : document.querySelector("#subject").value,
        message : document.querySelector("#message").value
    }
const serviceId = "service_pr4u6h8"
const templateId = "template_uiu3ex7"

    emailjs.send(serviceId , templateId , input)
    .then((response) => {
        document.querySelector("#name").value = ""
        document.querySelector("#email").value = ""
        document.querySelector("#subject").value = ""
        document.querySelector("#message").value = ""
        console.log(response);
        alert("Your Message sent successfully")
    })
    .catch((error)=>{
        console.log(error);
        alert("Failed to send email")
    })
        }
