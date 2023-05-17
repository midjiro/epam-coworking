class Alert {
  constructor(message) {
    this.message = message;
  }

  createAlert(modifier) {
    const alert = document.createElement("article");
    alert.className = modifier ? `alert alert--${modifier}` : "alert";
    const alertMessage = document.createElement("p");
    alertMessage.className = "alert__message";
    alertMessage.textContent = this.message;
    alert.append(alertMessage);

    return alert;
  }

  show(modifier) {
    const element = this.createAlert(modifier);
    document.body.prepend(element);
    setTimeout(() => {
      element.remove();
    }, 2500);
  }
}

export default Alert;
