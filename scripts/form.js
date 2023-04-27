import AUTH from "./config.js";
import Alert from "./alert.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js";

class AuthForm {
  constructor(formSelector, fieldSelector, triggerSelector) {
    this.form = document.querySelector(formSelector);
    this.fields = this.form.querySelectorAll(fieldSelector);
    this.trigger = document.querySelector(triggerSelector);

    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
    });

    onAuthStateChanged(AUTH, this.#checkAuthState);
  }

  handleError(error) {
    let alert = new Alert();

    switch (error.code) {
      // Registration errors
      case "auth/email-already-in-use":
        alert.message = "Email is already in use.";
        break;

      case "auth/missing-email":
        alert.message = "Please fill the email field.";
        break;

      case "auth/missing-password":
        alert.message = "Please fill the password field.";
        break;

      case "auth/weak-password":
        alert.message = "Password length must be at least 6 characters.";
        break;

      // Login errors
      case "auth/user-not-found":
        alert.message = "No account found with such email and password.";
        break;

      case "auth/invalid-email":
        alert.message = "Invalid email address. Try again.";
        break;

      case "auth/wrong-password":
        alert.message = "Invalid password. Try again.";
        break;

      default:
        alert.message = "Something went wrong. Please contact us.";
        console.error(error.code, error.message);
        break;
    }

    alert.show("error");
  }

  get email() {
    let field = this.fields[0];
    return field.value;
  }

  get password() {
    let field = this.fields[1];
    return field.value;
  }

  async #checkAuthState(user) {
    let alert = new Alert(
      "Welcome on board! You have authenticated successfully ."
    );
    user ? alert.show() : null;
  }
}

export default AuthForm;
