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

export { validateDate, validatePlace };
