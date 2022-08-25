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
        console.log("addition");
      } else if (resValue.indexOf("-") !== -1) {
        console.log("sub");
      } else if (resValue.indexOf("*") !== -1) {
        console.log("Mul");
      } else if (resValue.indexOf("/") !== -1) {
        console.log("div");
      } else {
        alert("invalid operation");
      }
    }
  });
});
