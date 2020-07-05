document.addEventListener("DOMContentLoaded", function (event) {
  const signupButton = document.querySelector("#signup");
  const loginButton = document.querySelector("#login");

  const loginDiv = document.querySelector("#login-content");
  const signupDiv = document.querySelector("#signup-content");

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
