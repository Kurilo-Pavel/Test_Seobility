import "../styles/input.scss";
import Element from "../Element.js";

class Input extends Element {
  constructor(options) {
    options.selector = "label";
    super(options.selector);
    const parent = document.getElementById(options.parent);
    parent.appendChild(this.selector);
    this.selector.textContent = options.text;
    this.selector.className = options.classLabel;
    this.minLength = options.minSymbols;
    this.maxLength = options.maxSymbols;
    this.regx = options.regx;
    this.classInput = options.classInput;
    this.input = document.createElement(options.tag);
    this.selector.appendChild(this.input);
    options.type ? this.input.type = options.type : null;
    this.input.placeholder = options.placeholder;
    this.input.className = this.classInput;
    this.input.onchange = () => {
      this.value = this.input.value;
    }
    this.error = document.createElement("p");
    this.selector.appendChild(this.error);
    this.error.className = "error";
    this.error.textContent = options.errorText;
  };

  validation() {
    if (this.value) {
      const isValid = this.regx(this.minLength, this.maxLength).test(this.value);
      if (isValid) {
        this.input.className = this.classInput;
        this.hiddenError();
        return this.value;
      } else {
        this.showError();
      }
    } else {
      this.showError();
    }
  };

  showError() {
    this.input.className = this.classInput + " " + "input_error";
    this.visibleError();
  };

  visibleError() {
    this.error.style.display = "inline-block";
  };

  hiddenError() {
    this.error.style.display = "none";
  };

  resetValue() {
    this.value = "";
    this.input.value = "";
  }
}

export default Input;