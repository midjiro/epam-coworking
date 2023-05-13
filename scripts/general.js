import Menu from "./menu.js";
import Link from "./link.js";

const generalLinks = [
  new Link("About Us", "/#about"),
  new Link("Coworking Types", "/#pricing"),
  new Link("Contacts", "/#contacts"),
];

const defaultLinks = generalLinks.concat(
  new Link("Authenticate", "templates/authenticate.html")
);

const authenticatedUserLinks = generalLinks.concat(
  new Link("Profile", "templates/profile.html"),
  new Link("Book a place", "/#booking-form", "button--outline")
);

const menu = new Menu(
  ".navbar__toggle",
  ".navbar__menu",
  defaultLinks,
  authenticatedUserLinks
);
