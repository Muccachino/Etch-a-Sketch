"use strict";

const mainBox = document.querySelector("#drawpad");
mainBox.style.width = "700px"; //size of the drawpad should match the number in the boxCreator

/* creates the draw grid */
const gridCreator = (choice) => {
  mainBox.style.display = "grid";
  mainBox.style.gridTemplateColumns = "repeat(" + choice + ", 1fr)";
  mainBox.style.gridTemplateRows = "repeat(" + choice + ", 1fr)";
};

/* creates the seperate boxes inside the grid */
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

/* drawing color depending which color button was clicked */
const colorChange = (color) => {
  const allMinibox = document.querySelectorAll(".minibox");
  if (color === "red") {
    hideOwnColor(); //hides the input areas of the "own color" section if they are open
    borderChange(color); //highlights the chosen color
    allMinibox.forEach((box) => {
      box.addEventListener("mouseover", () => {
        //adds the mouseover event for each box created before
        box.style.backgroundColor = "red";
      });
    });
  } else if (color === "green") {
    hideOwnColor();
    borderChange(color);
    allMinibox.forEach((box) => {
      box.addEventListener("mouseover", () => {
        box.style.backgroundColor = "green";
      });
    });
  } else if (color === "blue") {
    hideOwnColor();
    borderChange(color);
    allMinibox.forEach((box) => {
      box.addEventListener("mouseover", () => {
        box.style.backgroundColor = "blue";
      });
    });
  } else if (color === "random") {
    hideOwnColor();
    borderChange(color);
    allMinibox.forEach((box) => {
      box.addEventListener("mouseover", () => {
        //random numbers are created for the rgb values
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
  } else if (color === "ownColor") {
    borderChange(color);
    allMinibox.forEach((box) => {
      box.addEventListener("mouseover", () => {
        //rgb values are those from the input areas of "own Color" section
        box.style.backgroundColor =
          "rgb(" +
          ownRed.value +
          "," +
          ownBlue.value +
          "," +
          ownGreen.value +
          ")";
      });
    });
  }
};

/* start/reset button resets previous choices and asks for drawpad size*/
const reset = () => {
  hideOwnColor();
  redButton.style.border = "none";
  greenButton.style.border = "none";
  blueButton.style.border = "none";
  randomButton.style.border = "none";
  ownColorButton.style.border = "none";

  let choice = 0;
  choice = parseInt(prompt("How many colums and rows do you want? (1 - 100)"));
  while (choice > 100 || choice < 1) {
    choice = parseInt(prompt("Please select a number between 1 and 100!"));
  }
  mainBox.innerHTML = "";
  gridCreator(choice);
  boxCreator(choice);
};

/* hides or shows "own color" input areas*/
const toggleOwnColor = () => {
  ownRed.classList.toggle("hide");
  ownBlue.classList.toggle("hide");
  ownGreen.classList.toggle("hide");
};
/* hides input areas when other colors are selected*/
const hideOwnColor = () => {
  ownRed.classList.add("hide");
  ownBlue.classList.add("hide");
  ownGreen.classList.add("hide");
};

/* highlights the chosen color*/
const borderChange = (color) => {
  redButton.style.border = "none";
  greenButton.style.border = "none";
  blueButton.style.border = "none";
  randomButton.style.border = "none";
  ownColorButton.style.border = "none";
  if (color === "red") {
    redButton.style.border = "3px solid black";
  } else if (color === "green") {
    greenButton.style.border = "3px solid black";
  } else if (color === "blue") {
    blueButton.style.border = "3px solid black";
  } else if (color === "random") {
    randomButton.style.border = "3px solid black";
  } else if (color === "ownColor") {
    ownColorButton.style.border = "3px solid black";
  }
};

/* different buttons and input areas from the HTML */
const resetButton = document.querySelector("#reset");
const redButton = document.querySelector("#red");
const greenButton = document.querySelector("#green");
const blueButton = document.querySelector("#blue");
const randomButton = document.querySelector("#randomColor");
const ownColorButton = document.querySelector("#ownColor");
const ownRed = document.querySelector("#ownRed");
const ownGreen = document.querySelector("#ownGreen");
const ownBlue = document.querySelector("#ownBlue");

/* event listeners for the different buttons/color choices*/
resetButton.addEventListener("click", reset);
redButton.addEventListener("click", colorChange.bind(null, "red"));
greenButton.addEventListener("click", colorChange.bind(null, "green"));
blueButton.addEventListener("click", colorChange.bind(null, "blue"));
randomButton.addEventListener("click", colorChange.bind(null, "random"));
ownColorButton.addEventListener("click", colorChange.bind(null, "ownColor"));
ownColorButton.addEventListener("click", toggleOwnColor);
