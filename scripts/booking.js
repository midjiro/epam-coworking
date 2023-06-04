import Place from "./components/place.js";
import Storage from "./helpers/storage.js";
import { authRequired } from "./helpers/utils.js";
import { AUTH } from "./config.js";

const form = document.querySelector(".form");
const storage = new Storage("places", "coworkingTypes");

function handleSubmit(form, storage) {
  const place = Place.fromForm(form);
  place.owner = AUTH.currentUser.uid;
  storage.book(place);
}

handleSubmit = authRequired(
  handleSubmit,
  "You must be logged in to book a place."
);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  handleSubmit(form, storage);
});
