import Menu from "./components/menu.js";
import Link from "./components/link.js";

const generalLinks = [
  new Link("About Us", "https://midjiro.github.io/epam-coworking/#about"),
  new Link(
    "Coworking Types",
    "https://midjiro.github.io/epam-coworking/#pricing"
  ),
  new Link("Contacts", "https://midjiro.github.io/epam-coworking/#contacts"),
];

const defaultLinks = generalLinks.concat(
  new Link(
    "Authenticate",
    "https://midjiro.github.io/epam-coworking/templates/authenticate.html"
  ),
  new Link(
    "Book a place",
    "https://midjiro.github.io/epam-coworking/#booking-form",
    "button--outline"
  )
);

const authenticatedUserLinks = generalLinks.concat(
  new Link(
    "Profile",
    "https://midjiro.github.io/epam-coworking/templates/profile.html"
  ),
  new Link(
    "Book a place",
    "https://midjiro.github.io/epam-coworking/#booking-form",
    "button--outline"
  )
);

const menu = new Menu(
  ".navbar__toggle",
  ".navbar__menu",
  defaultLinks,
  authenticatedUserLinks
);
