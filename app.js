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

// console.log(firstName);

// console.log(firstName, lastName, email, password);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const fName = firstName.value;
  const lName = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;
  // console.log(fName, lName, emailVal, passwordVal);

  // Check first name
  if (fName === "") {
    firstName.classList.add("error");
    fnError.textContent = "First Name cannot be empty";
    fnError.setAttribute(
      "style",
      "text-align: right; display: block; color: var(--red); font-size: 0.7rem; margin-top: 0.4rem; font-style: italic; font-weight: normal;"
    );
  } else {
    firstName.classList.remove("error");
    fnError.removeAttribute("style");
    fnError.textContent = "";
  }
  // Check last name

  if (lName === "") {
    lastName.classList.add("error");
    lnError.setAttribute(
      "style",
      "text-align: right; display: block; color: var(--red); font-size: 0.7rem; margin-top: 0.4rem; font-style: italic; font-weight: normal;"
    );
    lnError.textContent = "Last Name cannot be empty";
  } else {
    lastName.classList.remove("error");
    fnError.removeAttribute("style");
    lnError.textContent = "";
  }
  // Check email

  if (!validateEmail(emailVal) || emailVal === "") {
    email.classList.add("error");
    emailError.setAttribute(
      "style",
      "text-align: right; display: block; color: var(--red); font-size: 0.7rem; margin-top: 0.4rem; font-style: italic; font-weight: normal;"
    );
    emailError.textContent = "Looks like this is not an email";
  } else {
    email.classList.remove("error");
    emailError.removeAttribute("style");
    emailError.textContent = "";
  }

  // Check password

  if (passwordVal === "") {
    password.classList.add("error");
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
