import express from "express";
import {LOGIN, MAIL, PHONE, MESSAGE} from "../src/constants.js";

const server = express();
const port = 9090;

server.options('/*', (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
  // res.setHeader("Access-Control-Allow-Origin", "http://localhost:63342");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET,DELETE,POST,PUT");
});

server.use(express.json({type: "*/*"}));


server.get("/api/ping", (request, response) => {
  response.send({
    status: "success",
    message: "Server is ready"
  });
});

server.post("/api/registration", (request, response) => {
  // response.setHeader("Access-Control-Allow-Origin", "http://localhost:63342");
  response.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
  const isName = LOGIN.regx(LOGIN.minSymbols, LOGIN.maxSymbols).test(request.body.name);
  const isEmail = MAIL.regx(MAIL.minSymbols, MAIL.maxSymbols).test(request.body.email);
  const isMessage = MESSAGE.regx(MESSAGE.minSymbols, MESSAGE.maxSymbols).test(request.body.message);
  const isPhone = PHONE.regx().test(request.body.phone);
  if (isName && isEmail && isMessage && isPhone) {
    response.status(200).send({status: "success", msg: "Your application has been successfully sent"});
  } else {
    const error = {status: "error", fields: {}};
    if (!isName) {
      Object.assign(error.fields, {inputName: "Invalid name"});
    }
    if (!isEmail) {
      Object.assign(error.fields, {inputEmail: "Invalid email"});
    }
    if (!isMessage) {
      Object.assign(error.fields, {inputMessage: "Invalid message"});
    }
    if (!isPhone) {
      Object.assign(error.fields, {inputPhone: "Invalid phone"});
    }
    response.status(400).send(error);
  }
});

server.listen(port, () => {
  console.log("server working...");
});
