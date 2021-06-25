//variables for form validation
var form = document.getElementById("subscribe");
var firstnameError = document.querySelector(".firstname-message");
var surnameError = document.querySelector(".surname-message");
var emailError = document.querySelector(".email-message");
var commentError = document.querySelector(".comment-message");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  firstnameError.innerHTML = "";
  surnameError.innerHTML = "";
  emailError.innerHTML = "";
  commentError.innerHTML = "";
  submit.innerHTML = "";

  var firstname = document.getElementById("firstname");
  var surname = document.getElementById("surname");
  var email = document.getElementById("email");
  var comment = document.getElementById("comment");

  var error = [];

  // adding error messages
  if (firstname.value.trim().length == 0) {
    error.push({ firstname: "Please input your name" });
  }

  if (surname.value.trim().length == 0) {
    error.push({ surname: "Please input your surname" });
  }

  if (
    email.value.trim().length == 0 ||
    email.value.trim().length !== email.toLowerCase
  ) {
    error.push({ email: "Please input your email in the correct format" });
  }

  if (comment.value.trim().length == 0) {
    error.push({ comment: "Please input your comment" });
  }

  if (error.length > 0) {
    for (let i = 0; i < error.length; i++) {
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

