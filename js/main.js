"use strict";

let elLightModeBtn = document.querySelector(".light-mode-btn");
let elDarkModeBtn = document.querySelector(".dark-mode-btn");

elLightModeBtn.addEventListener("click", function () {
  document.body.classList.remove("dark-mode");
});

elDarkModeBtn.addEventListener("click", function () {
  document.body.classList.add("dark-mode");
});
