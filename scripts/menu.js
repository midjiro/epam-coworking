function getMenu(button) {
  let identifier = button.getAttribute("aria-controls");
  if (!identifier) {
    throw new Error("No target specified for menu button.");
  }

  let menu = document.getElementById(identifier);
  return menu;
}

function isExpanded(button) {
  let isExpanded = button.getAttribute("aria-expanded");
  return isExpanded;
}

function switchMenuState(button, menu) {
  if (!menu) {
    throw new Error("No menu element provided.");
  }

  let expanded = isExpanded(button);
  if (expanded === "false") {
    button.setAttribute("aria-expanded", "true");
  } else {
    button.setAttribute("aria-expanded", "false");
  }
}

export { getMenu, isExpanded, switchMenuState };
