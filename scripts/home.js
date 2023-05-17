import Place from "./components/place.js";
import Storage from "./helpers/storage.js";
import { authRequired } from "./helpers/utils.js";

const form = document.querySelector(".form");
const storage = new Storage("places", "coworkingTypes");

function handleSubmit(form, storage) {
  const place = Place.fromForm(form);
  storage.book(place);
}

handleSubmit = authRequired(handleSubmit);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  handleSubmit(form, storage);
});
