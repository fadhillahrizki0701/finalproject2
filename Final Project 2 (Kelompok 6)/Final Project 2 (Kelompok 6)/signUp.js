let usernameSignUpListener = document.getElementById('signUpUsername');
let emailSignUpListener = document.getElementById('signUpEmail');
let password1SignUpListener = document.getElementById('signUpPassword1');
let password2SignUpListener = document.getElementById('signUpPassword2');

(function () {
  'use strict';
  let forms = document.querySelectorAll('.signup-form');

  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      'submit',
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          if (!confirm('Data sudah benar?')) event.preventDefault();
          else {
            event.preventDefault();
            let username = usernameSignUpListener.value;
            let email = emailSignUpListener.value;
            let password = password1SignUpListener.value;
            let accounts = JSON.parse(localStorage.getItem('accounts'));
            let updated = false;
            if (!accounts) accounts = [{ username, email, password }];
            else {
              accounts = accounts.map((e) => {
                if (e.email === email) {
                  updated = true;
                  return { ...e, username, password };
                }
                return e;
              });
              !updated && accounts.push({ username, email, password });
            }
            localStorage.setItem('accounts', JSON.stringify(accounts));
            alert(updated ? 'Account has been updated!' : 'Sign Up Success!');
            window.location.replace("index.html");
          }
        }

        form.classList.add('was-validated');
      },
      false
    );
  });
})();