import { AUTH } from "../../config.js";
import Popup from "../popup.js";
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
    let popup = new Popup();

    switch (error.code) {
      // Registration errors
      case "auth/email-already-in-use":
        popup.message = "Email is already in use.";
        break;

      case "auth/missing-email":
        popup.message = "Please fill the email field.";
        break;

      case "auth/missing-password":
        popup.message = "Please fill the password field.";
        break;

      case "auth/weak-password":
        popup.message = "Password length must be at least 6 characters.";
        break;

      // Login errors
      case "auth/user-not-found":
        popup.message = "No account found with such email and password.";
        break;

      case "auth/invalid-email":
        popup.message = "Invalid email address. Try again.";
        break;

      case "auth/wrong-password":
        popup.message = "Invalid password. Try again.";
        break;

      default:
        popup.message = "Something went wrong. Please contact us.";
        console.error(error.code, error.message);
        break;
    }

    popup.show("error");
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
    notify("Welcome on board! You have authenticated successfully.");
    user ? popup.show() : null;
  }
}

export default AuthForm;
