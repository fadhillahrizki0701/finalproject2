function signIn() {
  let email = document.getElementById("loginEmail").value
  let password = document.getElementById("loginPassword").value
  let accounts = JSON.parse(localStorage.getItem('accounts'))
  if (accounts) {
    let account = accounts.find(e => e.email === email && e.password === password)
    if (account) {
      localStorage.setItem('loggedIn', JSON.stringify(account))
      alert('Login Success!')
      return true
    }
  }
  alert('Login Failed!\nEmail or Password not found.')
  return false
}

function signOut() {
  if (confirm('Logout?')) {
    localStorage.removeItem('loggedIn')
    alert('Logout Success!')
    window.location.replace("index.html")
  }
}

(function () {
  'use strict'

  let forms = document.querySelectorAll('.signin-form')

  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        } else {
          !signIn() && event.preventDefault()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()


var logout = () => {};
let loggedIn = JSON.parse(localStorage.getItem('loggedIn'));
if (loggedIn) {
  logout = () => {
    localStorage.removeItem('loggedIn');
  };
  let oneMin = 60 * 1000;
  let loggedInDisplay = document.getElementById('loggedIn');
  loggedInDisplay.getElementsByTagName('button')[0].innerHTML = loggedIn.username;
  document.getElementById('loggedOut').style.display = 'none';
  loggedInDisplay.style.display = 'block';
  setTimeout(() => {
    localStorage.removeItem('loggedIn');
    window.location.replace("index.html");
  }, oneMin * 3);
}