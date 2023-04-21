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

export { getFormData, addLocalStorageEntry };
