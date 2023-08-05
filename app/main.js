// get form data select here 

const formData = document.getElementById("formData");
const msg = document.querySelector(".msg");


// submit event here 
formData.onsubmit = (e) => {
    e.preventDefault();

    const form_data = new FormData(e.target);
    const data = Object.fromEntries(form_data);
    

    // form validation
    if(!data.name || !data.email || !data.mobile){
        msg.innerHTML = alertStatus("All Fireld Are Requered !");
    }else if(!isMobile(data.mobile)){
      msg.innerHTML = alertStatus("Invalied Your Moblie Number", "danger");
    }else if(!isEmail(data.email)){
      msg.innerHTML = alertStatus("Invalied Your Email Number", "danger");
    }else{
      msg.innerHTML = alertStatus("Your sucssfully lon in your Account", "info");
    }
}