import "../styles/modal.scss";
import Element from "../Element.js";

class Modal extends Element {
  constructor(options) {
    options.selector = "div";
    super(options.selector);
    const parent = document.getElementById(options.parent);
    parent.appendChild(this.selector);
    this.input = document.createElement("input");
    this.input.type = "checkbox";
    this.input.id = "modal";
    this.input.className = options.classInput;
    this.input.onchange = () => {
      if (this.input.checked) {
        this.hiddenScroll(true);
      } else {
        this.hiddenScroll(false);
      }
    };
    this.selector.appendChild(this.input);
    const button = document.createElement("label");
    button.className = "modalButton";
    button.htmlFor = "modal";
    this.selector.appendChild(button);
    const wrapper = document.createElement("div");
    wrapper.className = "modalWrapper";
    this.selector.appendChild(wrapper);
    this.modal = document.createElement("p");
    this.modal.className = "modal";
    this.modal.textContent = options.text;
    wrapper.appendChild(this.modal);
  };

  hiddenScroll = (hidden) => {
    if (hidden) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "visible";
    }
  };
}

export default Modal;