import "../styles/button.scss";
import Element from "../Element.js";

class Button extends Element {
  constructor(options) {
    options.selector = "button";
    super(options.selector);
    const parent = document.getElementById(options.parent);
    parent.appendChild(this.selector);
    this.selector.type = options.type;
    this.selector.className = options.class;
    this.selector.textContent = options.text;
    this.selector.onclick=()=>{
      options.onClick()
    }
  };
}

export default Button;