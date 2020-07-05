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

  function toggleForms() {
    const displayPropOfLoginDiv = loginDiv.computedStyleMap().get("display");

    loginDiv.style.display =
      displayPropOfLoginDiv.value === "block" ? "none" : "block";
    signupDiv.style.display =
      displayPropOfLoginDiv.value === "block" ? "block" : "none";
  }
});
