class Popup {
  constructor(message) {
    this.message = message;
  }

  #create(modifier) {
    const popup = document.createElement("article");
    popup.className = modifier ? `popup popup--${modifier}` : "popup";
    const popupMessage = document.createElement("p");
    popupMessage.className = "popup__message";
    popupMessage.textContent = this.message;
    popup.append(popupMessage);

    return popup;
  }

  show(modifier) {
    const element = this.#create(modifier);
    document.body.prepend(element);
    setTimeout(() => {
      element.remove();
    }, 2500);
  }
}

export default Popup;
