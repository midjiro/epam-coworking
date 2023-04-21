import { getMenu, isExpanded, switchMenuState } from "./menu.js";
import FormValidator from "./form-validator.js";
import { validateDate, validatePlace } from "./validators.js";

let button = document.getElementsByClassName("navbar__toggle")[0];
let form = document.querySelector("form");
let [place, date] = document.querySelectorAll("input");
const formValidator = new FormValidator(form);

formValidator.register(place, validatePlace);
formValidator.register(date, validateDate);

button.addEventListener("click", (e) => {
  let menu = getMenu(e.currentTarget);
  switchMenuState(button, menu);
});

window.addEventListener("resize", () => {
  let width = window.innerWidth;
  if (width >= 768) {
    if (isExpanded(button) === "false") {
      button.setAttribute("aria-expanded", "true");
    }
  }
});

window.addEventListener("load", () => {
  let width = window.innerWidth;
  if (width >= 768) {
    button.setAttribute("aria-expanded", "true");
  }
});
