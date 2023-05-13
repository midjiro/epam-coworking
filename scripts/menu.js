import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js";
import AUTH from "./config.js";
import Link from "./link.js";

class Menu {
  constructor(
    toggleSelector,
    navMenuSelector,
    defaultLinks,
    authenticatedUserLinks
  ) {
    this.toggle = document.querySelector(toggleSelector);
    this.menu = document.querySelector(navMenuSelector);

    this.defaultLinks = defaultLinks;
    this.authenticatedUserLinks = authenticatedUserLinks;

    this.#handleLoad();
    this.toggle.addEventListener("click", this.#switchState.bind(this));
    window.addEventListener("resize", this.#handleResize.bind(this));
    onAuthStateChanged(AUTH, this.renderLinks.bind(this));
  }

  get isExpanded() {
    return this.toggle.getAttribute("aria-expanded") === "true";
  }

  #switchState() {
    this.toggle.setAttribute("aria-expanded", !this.isExpanded);
  }

  #handleResize() {
    if (window.innerWidth < 768 || this.isExpanded) return;
    this.toggle.setAttribute("aria-expanded", "true");
  }

  #handleLoad() {
    if (window.innerWidth < 768) return;
    this.toggle.setAttribute("aria-expanded", "true");
  }

  renderLinks(user) {
    let links = [];

    if (!user) {
      links = Link.createList(this.defaultLinks);
    } else {
      links = Link.createList(this.authenticatedUserLinks);
    }

    this.menu.replaceChildren(...links);
  }
}

export default Menu;
