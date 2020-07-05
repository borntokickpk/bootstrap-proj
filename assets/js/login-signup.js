document.addEventListener("DOMContentLoaded", function (event) {
  const signupButton = document.querySelector("#signup");
  const loginButton = document.querySelector("#login");

  const loginDiv = document.querySelector("#login-content");
  const signupDiv = document.querySelector("#signup-content");

  const loginForm = document.querySelector("#login-form");
  const signupForm = document.querySelector("#signup-form");

  signupButton.addEventListener("click", function (event) {
    toggleForms();
  });

  loginButton.addEventListener("click", function (event) {
    toggleForms();
  });

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    if (loginForm.checkValidity() === false) {
      loginForm.classList.add("was-validated");
      return;
    }
    alert("Form submitted");
  });

  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();
    if (signupForm.checkValidity() === false) {
      signupForm.classList.add("was-validated");
      return;
    }
    alert("Form submitted");
  });

  function toggleForms() {
    const displayPropOfLoginDiv = loginDiv.computedStyleMap().get("display");

    loginDiv.style.display =
      displayPropOfLoginDiv.value === "block" ? "none" : "block";
    signupDiv.style.display =
      displayPropOfLoginDiv.value === "block" ? "block" : "none";
  }
});
