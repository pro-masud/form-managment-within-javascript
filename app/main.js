// get form data select here 

const formData = document.getElementById("formData");


// submit event here 
formData.onsubmit = (e) => {
    e.preventDefault();

    const form_data = new FormData(e.target);
    const data = Object.fromEntries(form_data);
    console.log(data);
}