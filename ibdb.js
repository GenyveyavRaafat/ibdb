var email2 = document.getElementById('email2');
var loginform = document.getElementById('login');
var email2err = document.getElementById('email-err');
email2.addEventListener('input', function (e) {
    var log = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    var logform = e.target.value;
    var valid = log.test(logform);
    if (valid) {
        email2err.style.display = 'none';
    }
    else {
        email2err.style.display = 'block';
    }

})
var pass2 = document.getElementById('pwd2');
var loginpass = document.getElementById('login');
var pass2err = document.getElementById('pass2-err');
pass2.addEventListener('input', function (e) {
    var pass2 = /^[A-Za-z]\w{7,14}$/;
    var logpass = e.target.value;
    var valid = pass2.test(logpass);
    if (valid) {
        pass2err.style.display = 'none';
    }
    else {
        pass2err.style.display = 'block';
    }

})
var user = document.getElementById('name');
var signform = document.getElementById('signup');
var nameerr = document.getElementById('name-err');
user.addEventListener('input', function (e) {
    var name = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/;
    var username = e.target.value;
    var valid = name.test(username);
    if (valid) {
        nameerr.style.display = 'none';
    }
    else {
        nameerr.style.display = 'block';
    }

})
var email1 = document.getElementById('email');
var signform = document.getElementById('signup');
var emailerr = document.getElementById('email1-err');
email1.addEventListener('input', function (e) {
    var sign = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    var signup = e.target.value;
    var valid = sign.test(signup);
    if (valid) {
        emailerr.style.display = 'none';
    }
    else {
        emailerr.style.display = 'block';
    }

})
var pass = document.getElementById('pwd');
var signpass = document.getElementById('signup');
var pass1err = document.getElementById('pass1-err');
pass.addEventListener('input', function (e) {
    var pass1 = /^[A-Za-z]\w{7,14}$/;
    var signpass = e.target.value;
    var valid = pass1.test(signpass);
    if (valid) {
        pass1err.style.display = 'none';
    }
    else {
        pass1err.style.display = 'block';
    }

})
function addData() {
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pwd').value;
    var name = document.getElementById('name').value;

    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPwd', pass);
    localStorage.setItem('userName', name);
};


function checkData() {
    var enterEmail = document.getElementById('email2').value;
    var enterPwd = document.getElementById('pwd2').value;

    var getEmail = localStorage.getItem('userEmail');
    var getPwd = localStorage.getItem('userPwd');

    if (enterEmail == getEmail) {
        if (enterPwd == getPwd) {
            alert("login successful");
            window.open("file:///E:/books/IBDB/a.html");
        }
        else {
            alert("wrong password");
        }
    }
    else {
        alert("invalid detalis");
    }

};