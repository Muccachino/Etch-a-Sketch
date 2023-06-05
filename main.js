"use strict";

const mainBox = document.querySelector("#drawpad");
mainBox.style.width = "800px";
const resetButton = document.querySelector("#reset");

const gridCreator = (choice) => {
  mainBox.style.display = "grid";
  mainBox.style.gridTemplateColumns = "repeat(" + choice + ", 1fr)";
  mainBox.style.gridTemplateRows = "repeat(" + choice + ", 1fr)";
};

const boxCreator = (choice) => {
  for (let i = 0; i < choice * choice; i++) {
    let minibox = document.createElement("div");
    minibox.style.width = 800 / choice + "px";
    minibox.style.height = 800 / choice + "px";
    minibox.style.border = "1px solid black";
    minibox.className = "minibox";
    mainBox.appendChild(minibox);
  }
};

const colorChange = () => {
  const allMinibox = document.querySelectorAll(".minibox");

  allMinibox.forEach((box) => {
    box.addEventListener("mouseover", () => {
      box.style.backgroundColor =
        "rgb(" +
        parseInt(Math.random() * 255) +
        "," +
        parseInt(Math.random() * 255) +
        "," +
        parseInt(Math.random() * 255) +
        ")";
    });
  });
};

const reset = () => {
  let choice = prompt("How many colums and rows do you want?");
  mainBox.innerHTML = "";
  gridCreator(choice);
  boxCreator(choice);
  colorChange();
};
resetButton.addEventListener("click", reset);
