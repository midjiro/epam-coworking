import FormValidator from "./form-validator.js";
import { validateDate, validatePlace } from "./validators.js";

let [place, date] = document.querySelectorAll("input");
const formValidator = new FormValidator("form");

formValidator.register(place, validatePlace);
formValidator.register(date, validateDate);
