import AuthForm from "./form.js";
import AUTH from "./config.js";
import Alert from "./alert.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js";

class RegisterForm extends AuthForm {
  constructor(formSelector, fieldSelector, triggerSelector) {
    super(formSelector, fieldSelector, triggerSelector);
    this.trigger.addEventListener("click", this.#handleClick.bind(this));
  }

  async #handleClick() {
    try {
      await createUserWithEmailAndPassword(AUTH, this.email, this.password);
      let alert = new Alert("Registered in successfully");
      alert.show("success");
    } catch (e) {
      this.handleError(e);
    }
  }
}

export default RegisterForm;
