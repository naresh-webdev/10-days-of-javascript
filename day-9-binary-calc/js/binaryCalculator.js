"use strict";

const res = document.getElementById("res");
const btns = Array.from(document.querySelectorAll(".btns"));
const btn0 = document.getElementById("btn0");
const btn1 = document.getElementById("btn1");

console.log(btns);
res.textContent = "";

btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const curTarget = e.target.id;
    if (curTarget === "btn0") {
      res.textContent += 0;
    } else if (curTarget === "btn1") {
      res.textContent += 1;
    } else if (curTarget === "btnClr") {
      res.textContent = "";
    } else if (curTarget === "btnSum") {
      res.textContent += "+";
    } else if (curTarget === "btnSub") {
      res.textContent += "-";
    } else if (curTarget === "btnDiv") {
      res.textContent += "/";
    } else if (curTarget === "btnMul") {
      res.textContent += "*";
    } else if (curTarget === "btnEql") {
      // calc functionality
      console.log(res.textContent);

      const resValue = res.textContent;

      if (resValue.indexOf("+") !== -1) {
        //* Addition operation
        const iAdd = resValue.indexOf("+");
        const bOperand1 = resValue.slice(0, iAdd);
        const bOperand2 = resValue.slice(iAdd + 1);

        // binary to decimal conversion
        const dOperand1 = binaryToDecimal(bOperand1);
        const dOperand2 = binaryToDecimal(bOperand2);

        console.log(dOperand1, dOperand2);

        // decimal operation
        const dSum = dOperand1 + dOperand2;
        console.log(dSum);

        // decimal to binary convertion
        const bSum = decimalToBinary(dSum);

        // Result
        res.textContent = bSum;

        //
      } else if (resValue.indexOf("-") !== -1) {
        //* Subtraction

        const iSub = resValue.indexOf("-");
        const bOperand1 = resValue.slice(0, iSub);
        const bOperand2 = resValue.slice(iSub + 1);

        // binary to decimal conversion
        const dOperand1 = binaryToDecimal(bOperand1);
        const dOperand2 = binaryToDecimal(bOperand2);

        // decimal operation
        const dSub = dOperand1 - dOperand2;

        // decimal to binary convertion
        const bSub = decimalToBinary(dSub);

        // display result
        res.textContent = bSub;

        //
      } else if (resValue.indexOf("*") !== -1) {
        //* Multiplication

        const iMul = resValue.indexOf("*");
        const bOperand1 = resValue.slice(0, iMul);
        const bOperand2 = resValue.slice(iMul + 1);

        // binary to decimal conversion
        const dOperand1 = binaryToDecimal(bOperand1);
        const dOperand2 = binaryToDecimal(bOperand2);

        // decimal operation
        const dMul = dOperand1 * dOperand2;

        // decimal to binary convertion
        const bMul = decimalToBinary(dMul);

        // Result
        res.textContent = bMul;

        //
      } else if (resValue.indexOf("/") !== -1) {
        //* Division
        const iDiv = resValue.indexOf("/");
        const bOperand1 = resValue.slice(0, iDiv);
        const bOperand2 = resValue.slice(iDiv + 1);

        // binary to decimal conversion
        const dOperand1 = binaryToDecimal(bOperand1);
        const dOperand2 = binaryToDecimal(bOperand2);

        // decimal operation
        const dDiv = dOperand1 / dOperand2;

        // decimal to binary convertion
        const bDiv = decimalToBinary(dMul);

        // Result
        res.textContent = bDiv;

        //
      } else {
        alert("invalid operation");
      }
    }
  });
});

const binaryToDecimal = function (binary) {
  const decimal = parseInt(binary, 2);
  return decimal;
};

const decimalToBinary = function (decimal) {
  const binary = Number(decimal).toString(2);
  return binary;
};
