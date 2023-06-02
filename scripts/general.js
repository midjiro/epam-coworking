import Menu from "./components/menu.js";
import Link from "./components/link.js";

const generalLinks = [
  new Link("About Us", "/#about"),
  new Link("Coworking Types", "/#pricing"),
];

const defaultLinks = generalLinks.concat(
  new Link("Authenticate", "/templates/authenticate.html")
);

const authenticatedUserLinks = defaultLinks.concat(
  new Link("Book a place", "/templates/booking.html", "button--outline")
);

const menu = new Menu(
  ".navbar__toggle",
  ".navbar__menu",
  defaultLinks,
  authenticatedUserLinks
);
