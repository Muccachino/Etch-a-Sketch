"use strict";

const mainBox = document.querySelector("#drawpad");
mainBox.style.width = "700px";

const gridCreator = (choice) => {
  mainBox.style.display = "grid";
  mainBox.style.gridTemplateColumns = "repeat(" + choice + ", 1fr)";
  mainBox.style.gridTemplateRows = "repeat(" + choice + ", 1fr)";
};

const boxCreator = (choice) => {
  for (let i = 0; i < choice * choice; i++) {
    let minibox = document.createElement("div");
    minibox.style.width = 700 / choice + "px";
    minibox.style.height = 700 / choice + "px";
    minibox.style.border = "1px solid black";
    minibox.className = "minibox";
    mainBox.appendChild(minibox);
  }
};

const colorChange = (color) => {
  const allMinibox = document.querySelectorAll(".minibox");
  if (color === "red") {
    redButton.style.border = "3px solid black";
    greenButton.style.border = "none";
    blueButton.style.border = "none";
    randomButton.style.border = "none";
    allMinibox.forEach((box) => {
      box.addEventListener("mouseover", () => {
        box.style.backgroundColor = "red";
      });
    });
  } else if (color === "green") {
    redButton.style.border = "none";
    greenButton.style.border = "3px solid black";
    blueButton.style.border = "none";
    randomButton.style.border = "none";
    allMinibox.forEach((box) => {
      box.addEventListener("mouseover", () => {
        box.style.backgroundColor = "green";
      });
    });
  } else if (color === "blue") {
    redButton.style.border = "none";
    greenButton.style.border = "none";
    blueButton.style.border = "3px solid black";
    randomButton.style.border = "none";
    allMinibox.forEach((box) => {
      box.addEventListener("mouseover", () => {
        box.style.backgroundColor = "blue";
      });
    });
  } else if (color === "random") {
    redButton.style.border = "none";
    greenButton.style.border = "none";
    blueButton.style.border = "none";
    randomButton.style.border = "3px solid black";
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
  }
};

const reset = () => {
  redButton.style.border = "none";
  greenButton.style.border = "none";
  randomButton.style.border = "none";
  let choice = 0;
  choice = parseInt(prompt("How many colums and rows do you want? (1 - 100)"));
  while (choice > 100 || choice < 1) {
    choice = parseInt(prompt("Please select a number between 1 and 100!"));
  }
  mainBox.innerHTML = "";
  gridCreator(choice);
  boxCreator(choice);
};

const resetButton = document.querySelector("#reset");
const redButton = document.querySelector("#red");
const greenButton = document.querySelector("#green");
const blueButton = document.querySelector("#blue");
const randomButton = document.querySelector("#randomColor");

resetButton.addEventListener("click", reset);
redButton.addEventListener("click", colorChange.bind(null, "red"));
greenButton.addEventListener("click", colorChange.bind(null, "green"));
blueButton.addEventListener("click", colorChange.bind(null, "blue"));
randomButton.addEventListener("click", colorChange.bind(null, "random"));
