

function Toggle(id) {
    var hbtnvar = document.getElementById(id);
    if (hbtnvar.style.color == "red") {
        hbtnvar.style.color = "#ccc"
    }
    else {
        hbtnvar.style.color = "red"
    }
}

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const btn = document.querySelector(".subbtn");
const post = document.querySelector(".post");
const widget = document.querySelector(".star-widget");
const editBtn = document.querySelector(".edit");
btn.onclick = () => {
    widget.style.display = "none";
    post.style.display = "block";
    editBtn.onclick = () => {
        widget.style.display = "block";
        post.style.display = "none";
    }
    return false;
}

function checkpass() {
    var enterPass = document.getElementById('passadmin').value;
    if (enterPass == "admin123") {
        window.location.href = "file:///C:/Users/LENOVO/Desktop/IBDB%20final/IBDB/admin.html";
    }
    else {
        alert(" wrong password");
    }
};

function favlist() {
    var x = document.getElementById("favl");
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}