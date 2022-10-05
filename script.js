
const form = document.querySelector('form');

const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const emailAddress = document.getElementById('email');

const firstNameErrorMessage = document.querySelector('#first-name + span.error');
const lastNameErrorMessage = document.querySelector('#last-name + span.error');
const emailErrorMessage = document.querySelector('#email + span.error');


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


function showErrorMessage(){

    /*First Name*/
    if(firstName.validity.valueMissing){
        firstNameErrorMessage.textContent = 'You need to enter a first name';
    }

    if(firstName.validity.patternMismatch){

        firstNameErrorMessage.textContent = "Letters and numbers only, no punctuation or special characters";
    }


    /*Last Name*/
    if(lastName.validity.patternMismatch){

        lastNameErrorMessage.textContent = "Letters and numbers only, no punctuation or special characters";
    }

    /*Last Name*/
    if(emailAddress.validity.valueMissing || !emailAddress.validity.valid){

        emailErrorMessage.textContent = "You need to enter an email address";
    }
}



form.addEventListener("submit", (event) => {

    // if the input field is valid, it will let the form submit
    if (!firstName.validity.valid || !lastName.validity.valid || !emailAddress.validity.valid) {

      /*If it isn't valid, it will give the form a class of submitted,which is styled in the css, 
      this is so it doesn't show the invalid style right away on page load, it will wait for the submit
       button to be clicked, and it will display the error message*/
        form.setAttribute('class', 'submitted');
        showErrorMessage();

      /*Along with displaying the error message, it will prevent 
      the form from being sent by canceling the submit button event*/
      event.preventDefault();
    }
  });

