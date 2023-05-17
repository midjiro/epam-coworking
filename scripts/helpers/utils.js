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
    if (!AUTH.currentUser) throw Error(errorMessage);

    return func(...args);
  };
}

export { getFormData, addLocalStorageEntry, authRequired };
