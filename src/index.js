import "./styles.scss";
import {MAIL, LOGIN, PHONE, MESSAGE} from "./constants.js";
import Input from "./components/forms/Input.js";
import Button from "./components/forms/Button.js";
import Modal from "./components/modal/Modal.js";
import request from "./requests/request.js";
import Phone from "./components/forms/Phone.js";

const userName = new Input({
  parent: "block",
  tag: "input",
  text: "Name",
  type: "text",
  placeholder: "user name",
  classInput: "input",
  classLabel: "label",
  minSymbols: LOGIN.minSymbols,
  maxSymbols: LOGIN.maxSymbols,
  regx: LOGIN.regx,
  errorText: "Invalid name",
});

const userPhone = new Phone({
  parent: "block",
  tag: "input",
  text: "Phone",
  type: "text",
  placeholder: "user phone",
  classInput: "input",
  classLabel: "label",
  regx: PHONE.regx,
  errorText: "Invalid phone",
});

const userEmail = new Input({
  parent: "block",
  tag: "input",
  text: "E-mail",
  type: "email",
  placeholder: "user e-mail",
  classInput: "input",
  classLabel: "label",
  minSymbols: MAIL.minSymbols,
  maxSymbols: MAIL.maxSymbols,
  regx: MAIL.regx,
  errorText: "Invalid e-mail",
});

const userMessage = new Input({
  parent: "block",
  tag: "textarea",
  text: "Message",
  placeholder: "user message",
  classInput: "input",
  classLabel: "label",
  minSymbols: MESSAGE.minSymbols,
  maxSymbols: MESSAGE.maxSymbols,
  regx: MESSAGE.regx,
  errorText: "Invalid message",
});

const sendRequest = async () => {
  const name = userName.validation();
  const email = userEmail.validation();
  const phone = userPhone.validation();
  const message = userMessage.validation();
  const modalMessage = document.getElementById("modal");
  const fieldMessage = document.querySelector(".modal");
  if (name && email && phone && message) {
    const serverRequest = await request({name: name, email: email, phone: phone, message: message});
    if (serverRequest.status === "success") {
      fieldMessage.textContent = serverRequest.msg;
      userPhone.resetValue();
      userMessage.resetValue();
      userName.resetValue();
      userEmail.resetValue();
    } else {
      let string = "";
      for (let key in serverRequest.fields) {
        string = string + key + " - " + serverRequest.fields[key] + ",";
      }
      fieldMessage.textContent = string;
    }
    modalMessage.checked = true;
    modal.hiddenScroll(true);
  }
};

const button = new Button({
  parent: "block",
  type: "button",
  class: "button",
  text: "Registration",
  onClick: () => sendRequest(),
});

const modal = new Modal({
  parent: "body",
  classInput: "modalInput",
  text: "Hello Dear Friend",
});