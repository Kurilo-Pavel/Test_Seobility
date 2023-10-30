const MAIL = {
  minSymbols: 3,
  maxSymbols: 256,
  regx: function () {
    return new RegExp("^(([^<>()[\\]\\\\.,;:\\s@\"]" +
      "+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}" +
      "\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$", "i");
  },
};
const LOGIN = {
  minSymbols: 2,
  maxSymbols: 50,
  regx: function (min, max) {
    return new RegExp("^[ a-z0-9а-я]{" +
      min + "," + max + "}$", "i");
  },
};

const PHONE = {
  regx: function () {
    return new RegExp("^[0-9-()]+$");
  }
}

const MESSAGE = {
  minSymbols: 1,
  maxSymbols: 300,
  regx: function (min, max) {
    return new RegExp("^[\"\\[\\]\\s-:)(/=!#$%&'*+?^_`{|}~.,<>@A-Z0-9А-Я]{" +
      min + "," + max + "}$", "i")
  },
};

export {MAIL, LOGIN, PHONE, MESSAGE};