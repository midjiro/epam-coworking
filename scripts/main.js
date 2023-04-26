import Menu from "./menu.js";
import FormValidator from "./form-validator.js";
import { validateDate, validatePlace } from "./validators.js";

let [place, date] = document.querySelectorAll("input");
const formValidator = new FormValidator("form");
const menu = new Menu("navbar__toggle");

formValidator.register(place, validatePlace);
formValidator.register(date, validateDate);
