const form = document.getElementById("form");
const button = document.getElementById("button");
const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
// const newError = document.querySelector(".newError");
const fnError = document.querySelector(".fnError");
const lnError = document.querySelector(".lnError");
const emailError = document.querySelector(".emailError");
const passwordError = document.querySelector(".passwordError");
const iconError = document.querySelector(".icon-error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const fName = firstName.value;
  const lName = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;

  // Check first name
  if (fName === "") {
    firstName.classList.add("error");
    fnError.innerHTML = "First Name cannot be empty";
    fnError.classList.add("oneError");
    iconError.style.display = "block";
  } else {
    firstName.classList.remove("error");
  }
  // Check last name

  if (lName === "") {
    lastName.classList.add("error");
    lnError.innerHTML = "Last Name cannot be empty";
    lnError.classList.add("oneError");
    iconError.style.display = "block";
  } else {
    lastName.classList.remove("error");
  }
  // Check email

  if (!validateEmail(emailVal) || emailVal === "") {
    email.classList.add("error");
    emailError.innerHTML = "Looks like this is not an email";
    emailError.classList.add("oneError");
  } else {
    email.classList.remove("error");
  }

  // Check password

  if (passwordVal === "") {
    password.classList.add("error");
    passwordError.innerHTML = "Password cannot be empty";
    passwordError.classList.add("oneError");
  } else {
    password.classList.remove("error");
  }
});

//Validate email
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
