"use strict";

const res = document.getElementById("res");
const btns = Array.from(document.querySelectorAll(".btns"));
const btn0 = document.getElementById("btn0");
const btn1 = document.getElementById("btn1");

console.log(btns);

btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const curTarget = e.target.id;
    console.log(curTarget);
  });
});
