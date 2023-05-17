class Link {
  constructor(caption, href, className = "navbar__link") {
    this.caption = caption;
    this.href = href;
    this.className = className;
  }

  create() {
    const link = document.createElement("a");
    link.textContent = this.caption;
    link.href = this.href ? this.href : "#";
    this.className ? (link.className = this.className) : null;

    return link;
  }

  static createList(links) {
    if (!links) throw Error("No links provided.");

    let list = [];
    list = links.map((link) => link.create());
    return list;
  }
}

export default Link;
