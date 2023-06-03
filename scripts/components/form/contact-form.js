import { Form } from "./form.js";
import { getFormData } from "../../helpers/utils.js";
import { DB, contactMailsRecipient } from "../../config.js";
import {
  collection,
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js";

class ContactForm extends Form {
  constructor(formSelector, fieldSelector, triggerSelector) {
    super(formSelector, fieldSelector, triggerSelector);

    this.form.addEventListener("submit", this.#handleSubmit.bind(this));
  }

  #createMail(extractedData) {
    if (!extractedData)
      throw Error("Unable to create a mail: no data provided.");
    const { firstName, email, message } = extractedData;
    if (message.length == 0) return null;
    const mail = {
      to: [contactMailsRecipient],
      message: {
        subject: "Contact Form",
        html: `<h1>From: ${firstName}</h1><h2>Contact Address: ${email}</h2><p>${message}</p>`,
      },
    };

    return mail;
  }

  async #handleSubmit(event) {
    event.preventDefault();
    const { target: form } = event;
    const extractedData = getFormData(form);

    if (!extractedData)
      throw Error("Unable to send a contact message: Nothing to send.");

    const mail = this.#createMail(extractedData);
    if (!mail) {
      alert("Message must not be empty.");
      return;
    }
    // Refers to firestore "mail" collection
    const docCollection = collection(DB, "mail");
    // Refers to document with auto-assigned identifier inside of "mail" collection
    const docRef = doc(docCollection);
    // Add new mail in collection
    await setDoc(docRef, mail);
  }
}

export default ContactForm;
