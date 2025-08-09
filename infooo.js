function callvalue() {
    var name = localStorage.getItem("userName");
    var pas = localStorage.getItem("userPwd");
    var email = localStorage.getItem("userEmail");

    document.getElementById('result-name').innerHTML = name;
    document.getElementById('result-pass').innerHTML = pas;
    document.getElementById('result-email').innerHTML = email;

}