import "../styles/phone.scss";
import Input from "./Input.js";
import countries from "countries-phone-masks";

class Phone extends Input {
  constructor(options) {
    super(options);
    const flags = document.createElement("select");
    flags.className = "selectorFlags";
    const defaultOption = document.createElement("option");
    defaultOption.disabled = true;
    defaultOption.selected = true;
    defaultOption.hidden = true;
    defaultOption.textContent = "Choose country";
    flags.appendChild(defaultOption);

    countries.map((item) => {
      const option = document.createElement("option");
      option.value = item.name;
      option.textContent = item.name;
      flags.appendChild(option);
    });

    this.selector.insertBefore(flags, this.input);

    flags.onchange = () => {
      const item = countries.find(({name}) => name === flags.value);
      const code = document.createElement("p");
      code.textContent = item.code;
      code.className = "code";
      const oldCode = document.querySelector(".code");
      if (oldCode) {
        this.selector.replaceChild(code, oldCode);
      } else {
        this.selector.insertBefore(code, this.input);
      }
      this.input.placeholder = item.mask;
    };
  };

}

export default Phone;