
const form = document.querySelector('form');

const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const emailAddress = document.getElementById('email');
const phoneNumber = document.getElementById('phone-number');
const userPassword = document.getElementById('user-password');
const confirmPassword = document.getElementById('confirm-password');
const showPassword = document.getElementById('show-password');
const showUserPassToggle = document.getElementById('show-user-pass-toggle');
const showConfirmPassToggle = document.getElementById('show-confirm-pass-toggle');


const firstNameErrorMessage = document.querySelector('#first-name + span.error');
const lastNameErrorMessage = document.querySelector('#last-name + span.error');
const emailErrorMessage = document.querySelector('#email + span.error');
const phoneErrorMessage = document.querySelector('#phone-number + span.error');
const userPasswordErrorMessage = document.querySelector('#user-password + span.error');
const confirmPasswordErrorMessage = document.querySelector('#confirm-password + span.error');

const passwordTooltip = document.getElementById('password-tooltip');
const upperCaseLetter = document.getElementById('upper-case-letter');
const lowerCaseLetter = document.getElementById('lower-case-letter');
const aNumber = document.getElementById('a-number');
const specialCharacter = document.getElementById('special-character');
const minCharacterLength = document.getElementById('minimum-character-length');
 

const Button = document.querySelector('.submit-button');
const haveAccPar = document.querySelector('.have-account-par');


/*First Name*/
firstName.addEventListener('input', () => {

    /*If an error message is triggered and the user begins typing valid characters,
     it should remove the error message and red border color*/

    if(firstName.validity.valid){

        firstNameErrorMessage.textContent = '';
        firstName.removeAttribute('class', 'input-invalid');
    }
    else{

        /*If the input fields is empty or using the wrong characters,
         types like periods or special characters, error
         message should display*/
      
        if(firstName.validity.valueMissing){
            firstNameErrorMessage.textContent = '*Please enter a first name';
            firstNameErrorMessage.setAttribute('id', 'first-name-error-message');
            firstNameErrorMessage.className = 'error';
            firstName.setAttribute('class', 'input-invalid');
        }

        if(firstName.validity.patternMismatch){

            firstNameErrorMessage.textContent = "*Letters and numbers only, no punctuation or special characters";
            firstNameErrorMessage.setAttribute('id', 'punctuation-error-message');
            firstNameErrorMessage.className = 'error';
            firstName.setAttribute('class', 'input-invalid');
            
        }
    }

});


/*Last Name*/
lastName.addEventListener('input', () => {

    /*If an error message is triggered and the user begins typing valid 
    characters,it should remove the error message and red border color*/

    if(lastName.validity.valid){

        lastNameErrorMessage.textContent = '';
        lastName.removeAttribute('class', 'input-invalid');
    }
    else{

        /*If the input fields is using the wrong character types, like 
        periods and special characters,error message should display*/

        if(lastName.validity.patternMismatch){

            lastNameErrorMessage.textContent = "*Letters and numbers only, no punctuation or special characters";
            lastNameErrorMessage.setAttribute('id', 'punctuation-error-message');
            lastNameErrorMessage.className = 'error';
            lastName.setAttribute('class', 'input-invalid');
        }

    }

});


/*Email Address*/
emailAddress.addEventListener('input', () => {

    /*If an error message is triggered and the user begins typing valid
     characters,it should remove the error message and red border color*/

    if(emailAddress.validity.valid){

        emailErrorMessage.textContent = '';
        emailAddress.removeAttribute('class', 'input-invalid');

    }
    else{

        /*If the input field is empty or value is the wrong type for
         an email, error message should display*/

        if( emailAddress.validity.valueMissing){

            emailErrorMessage.textContent = "*Please enter an email address";
            emailErrorMessage.className = 'error';
            emailAddress.setAttribute('class', 'input-invalid');
        }

        else if(emailAddress.validity.typeMismatch){

            emailErrorMessage.textContent = "*Please enter an email address in the correct format";
            emailErrorMessage.setAttribute('id', 'email-format-error-message');
            emailErrorMessage.className = 'error';
            emailAddress.setAttribute('class', 'input-invalid');
        }

    }
});


/*Phone Number*/
phoneNumber.addEventListener('input', () => {

    /*If an error message is triggered and the user begins typing valid characters,
     it should remove the error message and red border color*/

    if(phoneNumber.validity.valid){

            phoneErrorMessage.textContent = '';
            phoneNumber.removeAttribute('class', 'input-invalid');   
        }

     
     /*If the input value is not the right format or not numbers, 
     error message should display*/
     else if(phoneNumber.validity.patternMismatch){
    
        phoneErrorMessage.textContent = "*You need to enter a number in the format of: 123-456-7890";
        phoneErrorMessage.setAttribute('id', 'phone-format-error-message');
        phoneErrorMessage.className = 'error';
        phoneNumber.setAttribute('class', 'input-invalid');
    }

    })


/*User Password*/
userPassword.addEventListener('input', () => {

    /*If an error message is triggered and the user begins typing valid characters,
     it should remove the error message and red border color*/

    if(userPassword.validity.valid){
       userPasswordErrorMessage.textContent = '';
       userPasswordErrorMessage.className = 'error';
    }
    else{ 
        if(userPassword.validity.valueMissing){
            userPasswordErrorMessage.textContent = "You need to enter a password";
            userPasswordErrorMessage.style.color = "red";
            showUserPassToggle.style.display = 'none';
           
        }else{
            userPasswordErrorMessage.textContent = "";
            checkPasswordsLength();
        }      
    }        
}

);


/*Confirm Password*/
confirmPassword.addEventListener('input', () => {

      /*If an error message is triggered and the user begins typing valid characters,
     it should remove the error message and red border color*/

    if(confirmPassword.validity.valid){
       confirmPasswordErrorMessage.textContent = '';
    }

   else {
            if(confirmPassword.validity.valueMissing){
                confirmPasswordErrorMessage.textContent = "You need to enter a confirmation password";
                confirmPasswordErrorMessage.setAttribute('id','confirm-password-error-message');
                confirmPasswordErrorMessage.style.color = "red";
                confirmPasswordErrorMessage.className = 'error';
                showConfirmPassToggle.style.display = "none";
        }else{
                confirmPasswordErrorMessage.textContent = "";
                checkPasswordsLength();
            }
    }
   
});


function checkPasswordsLength(){

    /*Checks user password length and counts if too short*/
    if(userPassword.validity.tooShort){

        userPasswordErrorMessage.textContent = `Your password should be at least ${userPassword.minLength} ` 
        + `characters; you entered ${userPassword.value.length}.`;
        userPasswordErrorMessage.setAttribute('id','user-password-length-error-message');
    } 

    else if(confirmPassword.validity.tooShort){

        confirmPasswordErrorMessage.textContent = `Your password should be at least ${confirmPassword.minLength} ` 
        + `characters; you entered ${confirmPassword.value.length}.`;
        confirmPasswordErrorMessage.setAttribute('id','confirm-password-length-error-message');
       
    }   
    
}


/*While the input field is not empty, and form is submitted,
 values should be compared for match*/
form.addEventListener("submit", (event) => {

        /*Reset Password text when passwords are updated*/
        showUserPassToggle.textContent = "Show Password";
        showConfirmPassToggle.textContent = "Show Password";

        if(userPassword.value != confirmPassword.value){

            userPasswordErrorMessage.textContent = "Passwords do not match!";
            userPassword.setAttribute('class', 'input-invalid');
            confirmPassword.setAttribute('class', 'input-invalid');

            userPasswordErrorMessage.style.color = 'red';

            showUserPassToggle.style.display = 'block';
            showConfirmPassToggle.style.display = "block";

            /*Show password on mouse over(hover)*/
            showUserPassToggle.onmouseover = () => {
                showUserPassToggle.textContent = userPassword.value;
            }

            showConfirmPassToggle.onmouseover = () => { 
                showConfirmPassToggle.textContent = confirmPassword.value};

            /*Update values in input,when changed*/
            userPassword.addEventListener('input', () => {
                showUserPassToggle.textContent = userPassword.value;
            });

            confirmPassword.addEventListener('input', () => {
                showConfirmPassToggle.innerHTML = confirmPassword.value
            });

            event.preventDefault();
        }
    
        else {
            userPasswordErrorMessage.textContent = "Match!";
            userPassword.removeAttribute('class', 'input-invalid');
            confirmPassword.removeAttribute('class', 'input-invalid');

            userPasswordErrorMessage.style.color = 'green';

            showUserPassToggle.style.display = 'none';
            showConfirmPassToggle.style.display = "none";
        }
})


/*Display or remove tooltip when input field is either 
on focus or on mouseout, and match regex on keyup*/
function onKeyUpAndFocused(){

  /*User Password OnFocus*/
    userPassword.onfocus = function showPassTooltip(){

        userPassword.onkeydown = () => {
            passwordTooltip.style.display = 'block';
        }

        userPassword.onmouseout = () => {
            passwordTooltip.style.display = 'none';
        }
        
    }

    /*Confirm Password OnFocus*/
        confirmPassword.onfocus = function showPassTooltip(){
        
           confirmPassword.onkeydown = () => {
                passwordTooltip.style.display = 'block';
        }

            confirmPassword.onmouseout = function showPassTooltip(){
        
            passwordTooltip.style.display = 'none';
        }
}

    /*Matches Regex Lines on keyup*/
    userPassword.onkeyup = function () {
        matchRegexLines(userPassword);
    }

    confirmPassword.onkeyup = function () {
        matchRegexLines(confirmPassword);
    }
} onKeyUpAndFocused();



 /*Match Regex Lines to password pattterns*/
function matchRegexLines(passField){

        const isUpperCase = passField.value.match(/[A-Z]/g);
        const isLowerCase = passField.value.match(/[a-z]/g);
        const isNumber = passField.value.match(/[0-9]/g);
        const isSpecialCharacter = passField.value.match(/[\W_]/g);
        const isCharacterLength = passField.value.match(/.{8,}/g);


        if(isUpperCase){
            upperCaseLetter.dataset.isValid = "true";
        }else{
            upperCaseLetter.dataset.isValid = "false";
        }
    
        if(isLowerCase){
            lowerCaseLetter.dataset.isValid = "true";
        }else{
            lowerCaseLetter.dataset.isValid = "false";
        }
    
        if(isNumber){
            aNumber.dataset.isValid = "true";
        }else{
            aNumber.dataset.isValid = "false";
        }
    
        if(isCharacterLength){
            minCharacterLength.dataset.isValid = "true";
        }else{
            minCharacterLength.dataset.isValid = "false";
        }
    
        if(isSpecialCharacter){
        specialCharacter.dataset.isValid = "true";
        }else{
            specialCharacter.dataset.isValid = "false";
        }

    }
    


/*Checks if required fields are empty 
or pattern mismatched when submit button is clicked,
disables submit button and displays error messages if true*/
function checksFormInputsWhenSubmitted(){

    /*First Name*/
    if(firstName.validity.valueMissing){
        firstNameErrorMessage.textContent = '*You need to enter a first name';
    }

    /*Email Address*/
    if( emailAddress.validity.valueMissing){

        emailErrorMessage.textContent = "*You need to enter an email address";
    }

    /*Password*/
    if(userPassword.validity.valueMissing || confirmPassword.validity.valueMissing){
    
        userPasswordErrorMessage.innerHTML = "You need to enter a password:<br>" +
        "*At least one uppercase letter <br>" + "*At least one lowercase letter <br>" + 
        "*At least one number <br>" + "*At least one special character <br>" +
        "*Mininum eight characters";  
        
        userPasswordErrorMessage.style.color = "red";
        passwordTooltip.style.display = "none";

        confirmPasswordErrorMessage.textContent = "*You need to enter a confirmation password";
        confirmPasswordErrorMessage.setAttribute('id','confirm-password-error-message');
        confirmPasswordErrorMessage.style.color = "red";

        showUserPassToggle.style.display = 'none';
        showConfirmPassToggle.style.display = "none";
   
    }
    else if(userPassword.validity.patternMismatch || confirmPassword.validity.patternMismatch){
      
        passwordTooltip.style.display = "block";   
       
    }
}


/* If the input field is not valid, it will add the input invalid border stying, 
show the error messages with their styling and not let the form submit*/
form.addEventListener("submit", (event) => {

    if (!firstName.validity.valid || !lastName.validity.valid || !emailAddress.validity.valid 
        || !phoneNumber.validity.valid || !userPassword.validity.valid || !confirmPassword.validity.valid) {

        /*If the input values are invalid, the form will prevented 
       being sent to the server by canceling the submit button event*/

        event.preventDefault();

      /*If the input fields are invalid, it will give the form a class of submitted,which is styled in the css, 
      this is so it doesn't show the invalid style right away on page load, it will wait for the submit
       button to be clicked, and it will display the error message*/

        form.setAttribute('class', 'submitted');
        checksFormInputsWhenSubmitted();
       
    }
  });

 