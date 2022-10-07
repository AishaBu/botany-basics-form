
const form = document.querySelector('form');

const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const emailAddress = document.getElementById('email');
const phoneNumber = document.getElementById('phone-number');
const userPassword = document.getElementById('user-password');
const confirmPassword = document.getElementById('confirm-password');


const firstNameErrorMessage = document.querySelector('#first-name + span.error');
const lastNameErrorMessage = document.querySelector('#last-name + span.error');
const emailErrorMessage = document.querySelector('#email + span.error');
const phoneErrorMessage = document.querySelector('#phone-number + span.error');
const userPasswordErrorMessage = document.querySelector('#user-password + span.error');
const confirmPasswordErrorMessage = document.querySelector('#confirm-password + span.error');

/*First Name*/
firstName.addEventListener('input', () => {

    /*if there is an error message showing and the first name input type is valid, 
    it should remove the error message and reset the class name of the message*/

    if(firstName.validity.valid){
        firstNameErrorMessage.textContent = '';
        firstNameErrorMessage.className = 'error';
    }
    else{

        /*if the input is not valid, it should show 
        the correct error message for the input type*/
        showErrorMessage();
    }

});


/*Last Name*/
lastName.addEventListener('input', () => {

    /*if there is an error message showing and the first name input type is valid, 
    it should remove the error message and reset the class name of the message*/

    if(lastName.validity.valid){
        lastNameErrorMessage.textContent = '';
        lastNameErrorMessage.className = 'error';
    }
    else{

        /*if the input is not valid, it should show 
        the correct error message for the input type*/
        showErrorMessage();
    }

});

/*Email Address*/
emailAddress.addEventListener('input', () => {

    /*if there is an error message showing and the first name input type is valid, 
    it should remove the error message and reset the class name of the message*/

    if(emailAddress.validity.valid){
        emailErrorMessage.textContent = '';
        emailErrorMessage.className = 'error';
    }
    else{

        /*if the input is not valid, it should show 
        the correct error message for the input type*/
        showErrorMessage();
    }

});

/*Phone Number*/
phoneNumber.addEventListener('input', () => {

    /*if there is an error message showing and the first name input type is valid, 
    it should remove the error message and reset the class name of the message*/

    if(phoneNumber.validity.valid){
        phoneErrorMessage.textContent = '';
        phoneErrorMessage.className = 'error';
    }
    else{

        /*if the input is not valid, it should show 
        the correct error message for the input type*/
        showErrorMessage();
    }

});

/*User Password*/
userPassword.addEventListener('input', () => {

    /*if there is an error message showing and the first name input type is valid, 
    it should remove the error message and reset the class name of the message*/

    if(userPassword.validity.valid){
       userPasswordErrorMessage.textContent = '';
       userPasswordErrorMessage.className = 'error';
    }
    else{

        /*if the input is not valid, it should show 
        the correct error message for the input type*/
        showErrorMessage();
        checkPasswordMatch();
    }

});

/*Confirm Password*/
confirmPassword.addEventListener('input', () => {

    /*if there is an error message showing and the first name input type is valid, 
    it should remove the error message and reset the class name of the message*/

    if(confirmPassword.validity.valid){
       confirmPasswordErrorMessage.textContent = '';
       confirmPasswordErrorMessage.className = 'error';
    }
    else{

        /*if the input is not valid, it should show 
        the correct error message for the input type*/
        showErrorMessage();
        checkPasswordMatch();
    }

});


function showErrorMessage(){

    /*First Name*/
    if(firstName.validity.valueMissing){
        firstNameErrorMessage.textContent = '*You need to enter a first name';
    }

    if(firstName.validity.patternMismatch){

        firstNameErrorMessage.textContent = "*Letters and numbers only, no punctuation or special characters";
    }

    /*Last Name*/
    if(lastName.validity.patternMismatch){

        lastNameErrorMessage.textContent = "*Letters and numbers only, no punctuation or special characters";
    }

    /*Email Address*/
    if( emailAddress.validity.valueMissing || emailAddress.validity.typeMismatch){

        emailErrorMessage.textContent = "*You need to enter an email address";
    }

    /*Phone Number*/
    if(phoneNumber.validity.patternMismatch){

            phoneErrorMessage.textContent = "*You need to enter a US based phone number in the format of: 123-456-7890";
    }

  
     /*Password*/
     if(userPassword.validity.patternMismatch || userPassword.validity.valueMissing){

        userPasswordErrorMessage.innerHTML = "*At least one uppercase letter <br>" +
        "*At least one lowercase letter <br>" + "*At least one number <br>" + 
        "*At least one special character <br>" + "*Mininum eight characters";  
    }

    if(userPassword.validity.tooShort || confirmPassword.validity.tooShort){

        userPasswordErrorMessage.textContent = `Your password should be at least ${userPassword.minLength} ` 
        + `characters; you entered ${userPassword.value.length}.`;

        confirmPasswordErrorMessage.textContent = `Your password should be at least ${confirmPassword.minLength} ` 
        + `characters; you entered ${confirmPassword.value.length}.`;

        userPasswordErrorMessage.style.color = "red";
        confirmPasswordErrorMessage.style.color = "red";
    }

}


function checkPasswordMatch(){

    if(userPassword.value != confirmPassword.value){
        userPasswordErrorMessage.textContent = "Not a Match!";
        confirmPasswordErrorMessage.textContent = "Not a Match";
        userPasswordErrorMessage.style.color = 'red';
        confirmPasswordErrorMessage.style.color = 'red';
    }
    else if(userPassword.value == "" || confirmPassword.value == ""){
            userPasswordErrorMessage.textContent = "Please enter a password";
            confirmPasswordErrorMessage.textContent = "Please enter a confirmation password";
    }

    else{
        userPasswordErrorMessage.textContent = "Match";
        confirmPasswordErrorMessage.textContent = "Match";
        userPasswordErrorMessage.style.color = 'green';
        confirmPasswordErrorMessage.style.color = 'green';
    }
}



/* If the input field is not valid, it will add the input invalid border stying, 
show the error messages with their styling and not let the form submit*/
form.addEventListener("submit", (event) => {

    if (!firstName.validity.valid || !lastName.validity.valid || !emailAddress.validity.valid || !phoneNumber.validity.valid || 
        !userPassword.validity.valid || !confirmPassword.validity.valid) {

      /*If it the input fields are invalid, it will give the form a class of submitted,which is styled in the css, 
      this is so it doesn't show the invalid style right away on page load, it will wait for the submit
       button to be clicked, and it will display the error message*/

        form.setAttribute('class', 'submitted');
        showErrorMessage();

      /*Along with displaying the error message, it will prevent 
      the form from being sent by canceling the submit button event*/

      event.preventDefault();
    }

    else{
        alert('Yaaaaay!');
    }
  });

