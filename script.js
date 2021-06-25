//variables for form validation
var form = document.getElementById("subscribe");
var fullnameError = document.querySelector(".fullname-message");
var firstnameError = document.querySelector(".firstname-message");
var surnameError = document.querySelector(".surname-message");
var emailError = document.querySelector(".email-message");
var commentError = document.querySelector(".comment-message");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  fullnameError.innerHTML = "";
  firstnameError.innerHTML = "";
  surnameError.innerHTML = "";
  emailError.innerHTML = "";
  commentError.innerHTML = "";

  var fullname = document.getElementById("fullname");
  var firstname = document.getElementById("firstname");
  var surname = document.getElementById("surname");
  var email = document.getElementById("email");
  var comment = document.getElementById("comment");

  var error = [];

  // adding error messages
  if (fullname.value.trim().length == 0) {
    error.push({ fullname: "Please input your name" });
  }
  if (firstname.value.trim().length == 0) {
    error.push({ firstname: "Please input your name" });
  }

  if (surname.value.trim().length == 0) {
    error.push({ surname: "Please input your surname" });
  }

  if (
    email.value.trim().length == 0 ||
    email.value.trim().length != email.toLowerCase
  ) {
    error.push({ email: "Please input your email in the correct format" });
  }

  if (comment.value.trim().length == 0) {
    error.push({ comment: "Please input your comment" });
  }

  if (error.length > 0) {
    for (let i = 0; i < error.length; i++) {
      if (error[i]["fullname"]) {
        fullnameError.innerHTML = error[i]["fullname"];
      }
      if (error[i]["firstname"]) {
        firstnameError.innerHTML = error[i]["firstname"];
      }
      if (error[i]["surname"]) {
        surnameError.innerHTML = error[i]["surname"];
      }
      if (error[i]["email"]) {
        emailError.innerHTML = error[i]["email"];
      }
      if (error[i]["comment"]) {
        commentError.innerHTML = error[i]["comment"];
      }
    }
  }
});

const submitInfo = document.querySelector
('.submit');
const collectName = document.querySelectorAll
('.Name');
const collectEmail = document.querySelector
('.Email');
const collectMessage = document.querySelector
('.message');

submitInfo.onclick = function() {
  const collectInfo = {
    collectName: subject.value,
    collectEmail: email.value,
    collectMessage: message.value,
  };
  localStorage.setItem('collectInfo', JSON.stringify(collectInfo));
} 