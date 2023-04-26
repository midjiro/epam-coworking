import { getFormData, addLocalStorageEntry } from "./utils.js";

class FormValidator {
  constructor(form) {
    this.form = form;
    this.invalidFields = [];

    form.addEventListener("submit", this.handleSubmit);
  }

  get hasInvalidFields() {
    return this.invalidFields.length > 0;
  }

  handleSubmit(event) {
    event.preventDefault();
    let isInvalid = this.hasInvalidFields;
    if (!isInvalid) {
      let formFields = document.querySelectorAll("input");
      let entry = getFormData(formFields);
      let entries = localStorage.getItem("places");
      if (entries === null) {
        addLocalStorageEntry("places", [entry]);
      } else {
        entries = JSON.parse(entries);
        entries.push(entry);
        addLocalStorageEntry("places", entries);
      }

      alert("Place booked successfully!");
    }
  }

  markInvalidField(field, errorElement, message) {
    if (!field) throw Error("No input field provided!");
    let invalidFieldId = this.invalidFields.indexOf(field);

    if (invalidFieldId == -1) {
      this.invalidFields.push(field);
      field.classList.add("field__input--invalid");
    }

    errorElement.textContent = message;
  }

  unmarkInvalidField(field, errorElement) {
    if (!field) throw Error("No input field provided!");

    let invalidFieldId = this.invalidFields.indexOf(field);
    if (invalidFieldId > -1) {
      this.invalidFields.splice(invalidFieldId, 1);
      field.classList.remove("field__input--invalid");
    }

    errorElement.textContent = "";
  }

  register(field, validate) {
    field.addEventListener("change", () => {
      let errorElement = field.closest("div").querySelector("p");
      let { pass, message } = validate(field.value);

      if (!pass) {
        this.markInvalidField(field, errorElement, message);
      } else {
        this.unmarkInvalidField(field, errorElement);
      }
    });
  }
}

export default FormValidator;
