import { NumericFormat } from "react-number-format";
import moment from "moment";

export function emailAddressMask(myemailId = "") {
  var maskid = "";
  if (myemailId !== null && myemailId !== undefined) {
    var prefix = myemailId.substring(0, myemailId.lastIndexOf("@"));
    var postfix = myemailId.substring(myemailId.lastIndexOf("@"));

    for (var i = 0; i < prefix.length; i++) {
      if (i === 0 || i === prefix.length - 1) {
        ////////
        maskid = maskid + prefix[i].toString();
      } else {
        maskid = maskid + "x";
      }
    }
    maskid = maskid + postfix;
  }
  return maskid;
}

export function mask(input) {
  if (
    input === undefined ||
    input === null ||
    input === "undefined" ||
    input === "null"
  ) {
    return "";
  }
  return (
    input.slice(0, input.length - 4).replace(/([a-zA-Z0-9])/g, "x") +
    input.slice(-4)
  );
}
export function maskPAN(input) {
  if (
    input === undefined ||
    input === null ||
    input === "undefined" ||
    input === "null"
  ) {
    return "";
  }
  return input.replace(/([a-zA-Z])/g, "x");
}

export function accNoFormat(account = {}) {
  return (
    <span>
      {account?.accountType} {account?.accountNo}
    </span>
  );
}

export function amountFormat(amount = "", currency = "NPR") {
  return (
    <NumericFormat
      displayType="text"
      value={amount}
      thousandSeparator={true}
      thousandsGroupStyle={"thousand"}
      decimalScale={2}
      fixedDecimalScale={true}
      renderText={(value) => {
        const [beforeDecimal, afterDecimal] = value.split(".");
        return (
          <>
            <div style={{ display: "inline", paddingRight: 2 }}>
              {"NPR" || currency}
            </div>
            <div style={{ display: "inline" }}>{beforeDecimal}</div>
            <div style={{ display: "inline", fontSize: "11px" }}>
              .{afterDecimal}
            </div>
          </>
        );
      }}
    />
  );
}

export function exchangeRateFormat(amount = "", currency) {
  return (
    <NumericFormat
      displayType="text"
      value={amount}
      thousandSeparator={true}
      thousandsGroupStyle={"thousand"}
      renderText={(formattedValue) => {
        const decimalIndex = formattedValue.indexOf(".");
        const hasDecimal = decimalIndex !== -1;
        const displayValue = hasDecimal
          ? formattedValue
          : `${formattedValue}.00`;
        const [integerPart, decimalPart] = displayValue.split(".");
        return (
          <>
          <div style={{ display: "inline", paddingRight: 2 }}>
          {"NPR" || currency}
            </div>
            <div style={{ display: "inline" }}>{integerPart}</div>
            <div style={{ display: "inline", fontSize: "11px" }}>
              .{decimalPart}
            </div>           
          </>
        );
      }}
    />
  );
}

export const allowOnlyAlphaNumerics = async (e) => {
  const regex = new RegExp("[a-zA-Z0-9]");
  const pressedKey = String.fromCharCode(!e.charCode ? e.which : e.charCode);
  if (!regex.test(pressedKey)) {
    e.preventDefault();
    return false;
  }
};

export const allowOnlyAlphabets = async (e) => {
  const regex = new RegExp("[a-zA-Z]");
  const pressedKey = String.fromCharCode(!e.charCode ? e.which : e.charCode);
  if (!regex.test(pressedKey)) {
    e.preventDefault();
    return false;
  }
};

export const allowOnlyNumbers = async (e) => {
  const regex = new RegExp("[0-9]");
  const pressedKey = String.fromCharCode(!e.charCode ? e.which : e.charCode);
  if (!regex.test(pressedKey)) {
    e.preventDefault();
    return false;
  }
};

export const allowOnlyNumbersWithoutLeadingZeros = async (e) => {
  const regex = new RegExp("[1-9][0-9]{0,1}|100000");
  const pressedKey = String.fromCharCode(!e.charCode ? e.which : e.charCode);
  if (!regex.test(pressedKey)) {
    e.preventDefault();
    return false;
  }
};

export const allowOnlyAlphaNumericsWithSpace = async (e) => {
  const regex = new RegExp(/^[a-zA-Z0-9\d\s]+$/i);
  const pressedKey = String.fromCharCode(!e.charCode ? e.which : e.charCode);
  if (!regex.test(pressedKey)) {
    e.preventDefault();
    return false;
  }
};

export const allowOnlyAlphabetsWithSpace = async (e) => {
  const regex = new RegExp(/^[a-zA-Z ]*$/);
  const pressedKey = String.fromCharCode(!e.charCode ? e.which : e.charCode);
  if (!regex.test(pressedKey)) {
    e.preventDefault();
    return false;
  }
};

export const allowOnlyAlphaNumericsWithSpaceAndComma = (e) => {
  const regex = new RegExp(/^[a-zA-Z0-9\d\s,]+$/i);
  const pressedKey = String.fromCharCode(!e.charCode ? e.which : e.charCode);
  if (!regex.test(pressedKey)) {
    e.preventDefault();
    return false;
  }
};

export const allowOnlyNumberswithMaxLimit = (e, maxLimit) => {
  const regex = new RegExp("[0-9]");
  const pressedKey = String.fromCharCode(!e.charCode ? e.which : e.charCode);
  if (pressedKey === "." || !regex.test(pressedKey)) {
    e.preventDefault();
    return false;
  }
  const inputValue = e.target.value.replace(/[^0-9]/g, "");
  const newValue = parseFloat(inputValue + pressedKey);
  if (!isNaN(newValue) && newValue > maxLimit) {
    e.preventDefault();
    return false;
  }
  const newInputValue = parseFloat(pressedKey + inputValue);
  if (!isNaN(newInputValue) && newInputValue > maxLimit) {
    e.preventDefault();
    return false;
  }
};

export const allowOnlyPressesNumbersWithMaxLimit = (e, maxLimit) => {
  const regex = new RegExp("[0-9]");
  const pressedKey = String.fromCharCode(!e.charCode ? e.which : e.charCode);
  if (pressedKey === "." || !regex.test(pressedKey)) {
    e.preventDefault();
    return false;
  }
  const inputValue = e.target.value.replace(/[^0-9]/g, "");
  const newValue = parseFloat(inputValue + pressedKey);
  if (!isNaN(newValue) && newValue > maxLimit) {
    e.preventDefault();
    return false;
  }

};

export const allowDecimalwithMaxLimit = (e, maxLimit) => {
  const regex = new RegExp("[0-9.]");
  const pressedKey = String.fromCharCode(!e.charCode ? e.which : e.charCode);
  if (!regex.test(pressedKey)) {
    e.preventDefault();
    return false;
  }
  const inputValue = e.target.value;
  const newValue = parseFloat(inputValue + pressedKey);
  if (!isNaN(newValue) && newValue > maxLimit) {
    e.preventDefault();
    return false;
  }
};

export const allowOnlyAlphaNumericsWithSpecialChar = (e) => {
  const regex = new RegExp(/^[a-zA-Z0-9._-]+$/i);
  const pressedKey = String.fromCharCode(!e.charCode ? e.which : e.charCode);
  if (!regex.test(pressedKey)) {
    e.preventDefault();
    return false;
  }
};

export const getTransferAmount = (amount) => {
  return typeof amount === "number"
    ? amount
    : parseFloat(amount.replaceAll(/,/g, ""));
};

export const allowOnlyAlphaNumericsWithSpecificSpecialCharacterAndSpace = async (e) => {
  const regex = new RegExp(/^[a-zA-Z0-9\s@/%,&]+$/i);
  const pressedKey = String.fromCharCode(!e.charCode ? e.which : e.charCode);
  if (!regex.test(pressedKey)) {
    e.preventDefault();
    return false;
  }
};

export function DateFormat(value) {
  try {
    const date = new Date(value).toISOString();
    const convertDate = moment(date).format("DD.MM.YYYY");
    return convertDate;
  } catch (err) {
    return "-";
  }
}

export function DateWithTimeFormat(value) {
  try {
    const date = new Date(value).toISOString();
    const convertDate = moment(date).format("DD.MM.YYYY H:mm A");
    return convertDate;
  } catch (err) {
    return "-";
  }
}
