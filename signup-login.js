let showPassword = document.querySelector('#show-password')
let hidePassword = document.querySelector('#hide-password')

function showPasswordFunction() {
    var togglePassword = document.getElementById("password-input");
    if (togglePassword.type === "password") {
      togglePassword.type = "text";
      showPassword.classList.remove('current')
        hidePassword.classList.add('current')
    } else {
      togglePassword.type = "password";
      hidePassword.classList.remove('current')
    showPassword.classList.add('current')
    }
  }

showPassword.addEventListener('click', function() {
    
    showPasswordFunction()

})

hidePassword.addEventListener('click', function() {
    
    showPasswordFunction()

})