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
    if (firebase.auth().currenUser) {
      firebase.auth().signOut();
      return;
    }

    const email = loginForm.elements["email"].value;
    const password = loginForm.elements["password"].value;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function (res) {
        toastr.success(`${res.user.email} has logged in`, "Success", {
          timeOut: 2000,
        });
      })
      .catch(function (error) {
        toastr.error(`${error.message}`, "Error", { timeOut: 2000 });
      });
  });

  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();
    if (signupForm.checkValidity() === false) {
      signupForm.classList.add("was-validated");
      return;
    }

    const email = signupForm.elements["email"].value;
    const password = signupForm.elements["password"].value;

    console.log(email);

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function (res) {
        toastr.success(`${res.user.email} has registered`, "Success", {
          timeOut: 2000,
        });
      })
      .catch(function (error) {
        toastr.error(`${error.message}`, "Error", { timeOut: 2000 });
      });
  });

  function toggleForms() {
    const displayPropOfLoginDiv = loginDiv.computedStyleMap().get("display");

    loginDiv.style.display =
      displayPropOfLoginDiv.value === "block" ? "none" : "block";
    signupDiv.style.display =
      displayPropOfLoginDiv.value === "block" ? "block" : "none";
  }
});
