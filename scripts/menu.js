class Menu {
  constructor(toggleSelector) {
    this.toggle = document.getElementsByClassName(toggleSelector)[0];

    this.#handleLoad();
    this.toggle.addEventListener("click", this.#switchState.bind(this));
    window.addEventListener("resize", this.#handleResize.bind(this));
  }

  get isExpanded() {
    let expanded = this.toggle.getAttribute("aria-expanded");
    if (expanded === "true") {
      return true;
    }

    return false;
  }

  #switchState() {
    this.toggle.setAttribute("aria-expanded", !this.isExpanded);
  }

  #handleResize() {
    let width = window.innerWidth;
    if (!this.isExpanded && width >= 768) {
      this.toggle.setAttribute("aria-expanded", "true");
    }
  }

  #handleLoad() {
    let width = window.innerWidth;
    if (width >= 768) {
      this.toggle.setAttribute("aria-expanded", "true");
    }
  }
}

export default Menu;
