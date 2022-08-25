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
        // Addition operation
        const iAdd = resValue.indexOf("+");
        const operand1 = resValue.slice(0, iAdd);
        const operand2 = resValue.slice(iAdd + 1);

        // binary to decimal conversion

        // decimal operation

        // decimal to binary convertion

        //
      } else if (resValue.indexOf("-") !== -1) {
        const iSub = resValue.indexOf("-");
        const operand1 = resValue.slice(0, iSub);
        const operand2 = resValue.slice(iSub + 1);

        // binary to decimal conversion

        // decimal operation

        // decimal to binary convertion

        //
      } else if (resValue.indexOf("*") !== -1) {
        const iMul = resValue.indexOf("*");
        const operand1 = resValue.slice(0, iMul);
        const operand2 = resValue.slice(iMul + 1);

        // binary to decimal conversion

        // decimal operation

        // decimal to binary convertion

        //
      } else if (resValue.indexOf("/") !== -1) {
        const iDiv = resValue.indexOf("/");
        const operand1 = resValue.slice(0, iDiv);
        const operand2 = resValue.slice(iDiv + 1);

        // binary to decimal conversion

        // decimal operation

        // decimal to binary convertion

        //
      } else {
        alert("invalid operation");
      }
    }
  });
});
