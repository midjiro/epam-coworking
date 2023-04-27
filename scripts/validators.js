function validatePlace(place) {
  if (place <= 0) {
    return {
      pass: false,
      message: "Place number should be at least equal to 1.",
    };
  }

  return {
    pass: true,
    message: undefined,
  };
}

function validateDate(date) {
  const regex = /\d{4}\-\d{2}\-\d{2}/gm;
  let isMatch = date.match(regex);

  if (!isMatch) {
    return {
      pass: false,
      message: "Date should be presented at format dd.mm.yyyy e.g 01.01.2022.",
    };
  }

  return {
    pass: true,
    message: undefined,
  };
}

function validateEmail(value) {
  const pattern = /([a-z0-9\.-]+)@([a-z0-9]+)\.([a-z]{2,4})/gm;
  if (value.length === 0 || !pattern.test(value)) {
    return {
      pass: false,
      message: "Invalid email address.",
    };
  }

  return {
    pass: true,
    message: undefined,
  };
}

function validatePassword(value) {
  if (value.length < 8 || value.length > 16) {
    return {
      pass: false,
      message: "Password must be between 8 and 16 characters long",
    };
  }

  return {
    pass: true,
    message: undefined,
  };
}

export { validateDate, validatePlace, validateEmail, validatePassword };
