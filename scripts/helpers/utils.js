import Popup from "../components/popup.js";
import { AUTH } from "../config.js";

function getFormData(formFields) {
  let coworking = {};
  for (let formField of formFields) {
    if (formField.getAttribute("type") == "date") {
      coworking[formField.name] = Date.parse(formField.value);
      continue;
    }

    coworking[formField.name] = formField.value;
  }

  return coworking;
}

function addLocalStorageEntry(table, entry) {
  let jsonEntry = JSON.stringify(entry);
  localStorage.setItem(table, jsonEntry);
}

// wraps function into another one which checks wether user has logged in or not
function authRequired(func, errorMessage) {
  return (...args) => {
    if (!AUTH.currentUser) {
      notify(errorMessage, "error");
    }

    return func(...args);
  };
}

function notify(message, modifier, popup = new Popup()) {
  popup.message = message;
  modifier ? popup.show(modifier) : popup.show();
}

function createMail(extractedData) {
  if (!extractedData) throw Error("Unable to create a mail: no data provided.");
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

export { getFormData, addLocalStorageEntry, authRequired, notify, createMail };
