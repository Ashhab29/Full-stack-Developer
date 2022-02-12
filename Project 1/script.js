// Retrieving HTMl element for the DOM
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('email');
const password2 = document.getElementById('password2');

function showError(input, message) {
    const formcontrol = input.parentElement;
    formcontrol.className = 'form-control error';
    const small = formcontrol.querySelector('small');
    small.innerText = message;
}

function showsuccess(input) {
    const formcontrol = input.parentElement;
    formcontrol.className = 'form-control success';
}


// Event Listeners
// create Event listener for submit button
form.addEventListener('submit', function(e) {
 // Stop page from reloading on submit
    e.preventDefault();
    
   // Check if username input is empty
   if(username.value === '') {
        showError(username, 'username is required');
   } else {
       showsuccess(username);
   }
   if(email.value === '') {
    showError(email, 'email is required');
} else {
   showsuccess(email);
}
});