let nameError = document.getElementById('name-error');
let phoneError = document.getElementById('phone-error');
let emailError = document.getElementById('email-error');
let messageError = document.getElementById('message-error');
let submitError = document.getElementById('submit-error');

function validName() {
    let name = document.getElementById("contact-name").value;

    if(name.length == 0){
        nameError.innerHTML = "Name is required";
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "Write Full Name";
        return false;
    }
    nameError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    return true;
}

function validPhone() {
    let phone = document.getElementById("contact-phone").value;

    if (phone.length == 0) {
        phoneError.innerHTML = "Phone no is required";
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = "Phone no should be 10 digit";
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = "Only digits";
        return false;
    }

    phoneError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    return true;
}   

function validEmail() {
    let email = document.getElementById("contact-email").value;

    if (email.length == 0) {
        emailError.innerHTML = "Email is required";
        return false;
    }
    if (email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = "Email Invalid";
        return false;
    }

    emailError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    return true;
    
}

function validMessage() {
    let message = document.getElementById("contact-message").value;
    let required = 30;
    let left = required - message.length;

    if(left > 0){
        messageError.innerHTML = left + " more charecter required";
        return false;
    }

    messageError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    return true;
}

function validSubmit() {
    if(!validName() || !validPhone() || !validEmail() || !validMessage()){
        submitError.innerHTML = "Please fix error to submit";
        submitError.style.display="block";
        setTimeout(function(){submitError.style.display = 'none';},3000);
        return false;
    }
}