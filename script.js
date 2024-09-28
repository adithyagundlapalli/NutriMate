///////////////////// CALORIE AND PROTEIN GOAL FUNCTIONS //////////////////////

const calGoal = document.getElementById("input-box");
const button1 = document.getElementById("btn1");
const value = document.getElementById("value");

function updateCalories() {
  value.innerHTML = calGoal.value + " calories";
  calGoal.value = "";

  saveData();
}

button1.addEventListener("click", updateCalories);

const proGoal = document.getElementById("input-box2");
const button2 = document.getElementById("btn2");
const value2 = document.getElementById("value2");

function updateProtein() {
  value2.innerHTML = proGoal.value + " grams";
  proGoal.value = "";
  saveData();
}

button2.addEventListener("click", updateProtein);

function saveData() {
  localStorage.setItem("data", value.innerHTML);
  localStorage.setItem("data2", value2.innerHTML);
}

function showGoal() {
  value.innerHTML = localStorage.getItem("data");
  value2.innerHTML = localStorage.getItem("data2");
}
showGoal();

//////////////////////// BREAKFAST TRACKER FUCNTIONS //////////////////////

let breakfastCalories = 0;
let breakfastProtein = 0;
const breakfastCounter = document.querySelector(
  ".meal-type.breakfast .counter"
);

const inputBoxBreakfast = document.getElementById("bfood");
const calBreakfast = document.getElementById("bcal");
const proBreakfast = document.getElementById("bpro");
const breakfastListContainer = document.querySelector(
  ".meal-type.breakfast ul"
);
const breakfastButton = document.getElementById("bbtn");

// Function to save breakfast data to localStorage
function saveBreakfastData() {
  const breakfastItems = [];
  const breakfastList = breakfastListContainer.querySelectorAll("li");

  breakfastList.forEach((item) => {
    let food = item.children[0].textContent;
    let calories = item.children[1].textContent.split(" ")[0];
    let protein = item.children[2].textContent.split(" ")[0];

    breakfastItems.push({ food, calories, protein });
  });

  localStorage.setItem("breakfastData", JSON.stringify(breakfastItems));
  localStorage.setItem("breakfastCalories", breakfastCalories);
  localStorage.setItem("breakfastProtein", breakfastProtein);
}

// Function to load breakfast data from localStorage
function loadBreakfastData() {
  const savedBreakfastData = JSON.parse(localStorage.getItem("breakfastData"));
  const savedCalories = localStorage.getItem("breakfastCalories");
  const savedProtein = localStorage.getItem("breakfastProtein");

  if (savedBreakfastData) {
    savedBreakfastData.forEach((item) => {
      let li = document.createElement("li");

      let foodSpan = document.createElement("span");
      foodSpan.innerHTML = item.food;
      li.appendChild(foodSpan);

      let calSpan = document.createElement("span");
      calSpan.innerHTML = item.calories + " calories";
      li.appendChild(calSpan);

      let proSpan = document.createElement("span");
      proSpan.innerHTML = item.protein + " grams";
      li.appendChild(proSpan);

      let span = document.createElement("span");
      span.className = "delete-button";
      span.innerHTML = "\u00d7";
      li.appendChild(span);

      breakfastListContainer.appendChild(li);
    });

    breakfastCalories = parseInt(savedCalories);
    breakfastProtein = parseInt(savedProtein);
    breakfastCounter.textContent = `${breakfastCalories} cal ${breakfastProtein} pro`;
  }
}

breakfastButton.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    calBreakfast.value === "" ||
    proBreakfast.value === "" ||
    inputBoxBreakfast.value === ""
  ) {
    alert("You must enter all of the information!");
  } else {
    let li = document.createElement("li");

    let foodSpan = document.createElement("span");
    foodSpan.innerHTML = inputBoxBreakfast.value;
    li.appendChild(foodSpan);

    let calSpan = document.createElement("span");
    calSpan.innerHTML = calBreakfast.value + " calories";
    li.appendChild(calSpan);

    let proSpan = document.createElement("span");
    proSpan.innerHTML = proBreakfast.value + " grams";
    li.appendChild(proSpan);

    let span = document.createElement("span");
    span.className = "delete-button";
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    breakfastCalories += parseInt(calBreakfast.value);
    breakfastProtein += parseInt(proBreakfast.value);

    breakfastCounter.textContent = `${breakfastCalories} cal ${breakfastProtein} pro`;

    breakfastListContainer.appendChild(li);
    inputBoxBreakfast.value = "";
    calBreakfast.value = "";
    proBreakfast.value = "";

    saveBreakfastData(); // Save data to localStorage
  }
});

// Event listener to remove items
breakfastListContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.className === "delete-button") {
      let listItem = e.target.parentElement;

      let itemCal = parseInt(listItem.children[1].textContent);
      let itemPro = parseInt(listItem.children[2].textContent);

      breakfastCalories -= itemCal;
      breakfastProtein -= itemPro;

      breakfastCounter.textContent = `${breakfastCalories} cal ${breakfastProtein} pro`;

      listItem.remove();
      saveBreakfastData(); // Update localStorage after removal
    }
  },
  false
);

// Load breakfast data on page load
window.addEventListener("load", loadBreakfastData);

//////////////////////// DINNER TRACKER FUCNTIONS //////////////////////

function addMacros() {}

let dinnerCalories = 0;
let dinnerProtein = 0;
const dinnerCounter = document.querySelector(".meal-type.dinner .counter");

const inputBoxDinner = document.getElementById("dfood");
const calDinner = document.getElementById("dcal");
const proDinner = document.getElementById("dpro");
const dinnerListContainer = document.querySelector(".meal-type.dinner ul");
const dinnerButton = document.getElementById("dbtn");

dinnerButton.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    calDinner.value === "" ||
    proDinner.value === "" ||
    inputBoxDinner.value === ""
  ) {
    alert("You must enter all of the information!");
  } else {
    let li = document.createElement("li");

    let foodSpan = document.createElement("span");
    foodSpan.innerHTML = inputBoxDinner.value;
    li.appendChild(foodSpan);

    let calSpan = document.createElement("span");
    calSpan.innerHTML = calDinner.value + " calories";
    li.appendChild(calSpan);

    let proSpan = document.createElement("span");
    proSpan.innerHTML = proDinner.value + " grams";
    li.appendChild(proSpan);

    let span = document.createElement("span");
    span.className = "delete-button";
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    dinnerCalories += parseInt(calDinner.value);
    dinnerProtein += parseInt(proDinner.value);

    dinnerCounter.textContent = `${dinnerCalories} cal ${dinnerProtein} pro`;

    dinnerListContainer.appendChild(li);
    inputBoxDinner.value = "";
    calDinner.value = "";
    proDinner.value = "";
    saveInfo();
  }
});

dinnerListContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.className === "delete-button") {
      let listItem = e.target.parentElement;

      let itemCalories = parseInt(listItem.children[1].textContent);
      let itemProtein = parseInt(listItem.children[2].textContent);

      dinnerCalories -= itemCalories;
      dinnerProtein += itemProtein;

      dinnerCounter.textContent = `${dinnerCalories} cal ${dinnerProtein} pro`;

      listItem.remove();
    }
  },
  false
);

//////////////////////// SNACK TRACKER FUCNTIONS //////////////////////

let snacksCalories = 0;
let snacksProtein = 0;
const snacksCounter = document.querySelector(".meal-type.snack .counter");

const inputBoxSnacks = document.getElementById("sfood");
const calSnacks = document.getElementById("scal");
const proSnacks = document.getElementById("spro");
const snacksListContainer = document.querySelector(".meal-type.snack ul");
const snacksButton = document.getElementById("sbtn");

snacksButton.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    calSnacks.value === "" ||
    proSnacks.value === "" ||
    inputBoxSnacks.value === ""
  ) {
    alert("You must enter all of the information!");
  } else {
    let li = document.createElement("li");

    let foodSpan = document.createElement("span");
    foodSpan.innerHTML = inputBoxSnacks.value;
    li.appendChild(foodSpan);

    let calSpan = document.createElement("span");
    calSpan.innerHTML = calSnacks.value + " calories";
    li.appendChild(calSpan);

    let proSpan = document.createElement("span");
    proSpan.innerHTML = proSnacks.value + " grams";
    li.appendChild(proSpan);

    let span = document.createElement("span");
    span.className = "delete-button";
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    snacksCalories += parseInt(calSnacks.value);
    snacksProtein += parseInt(proSnacks.value);

    snacksCounter.textContent = `${snacksCalories} cal ${snacksProtein} pro`;

    snacksListContainer.appendChild(li);
    inputBoxSnacks.value = "";
    calSnacks.value = "";
    proSnacks.value = "";
    saveInfo();
  }
});

snacksListContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.className === "delete-button") {
      let listItem = e.target.parentElement;

      let itemCalories = parseInt(listItem.children[1].textContent);
      let itemProtein = parseInt(listItem.children[2].textContent);

      snacksCalories -= itemCalories;
      snacksProtein += itemProtein;

      snacksCounter.textContent = `${snacksCalories} cal ${snacksProtein} pro`;

      listItem.remove();
    }
  },
  false
);

//////////////////////// LUNCH TRACKER FUCNTIONS //////////////////////

let lunchCalories = 0;
let lunchProtein = 0;
const lunchCounter = document.querySelector(".meal-type.lunch .counter");

const inputBoxLunch = document.getElementById("lfood");
const calLunch = document.getElementById("lcal");
const proLunch = document.getElementById("lpro");
const lunchListContainer = document.getElementById("list-container");
const lunchButton = document.getElementById("lbtn");
const form = document.querySelector(".input");

lunchButton.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    calLunch.value === "" ||
    proLunch.value === "" ||
    inputBoxLunch.value === ""
  ) {
    alert("You must enter all of the information!");
  } else {
    let li = document.createElement("li");

    let foodSpan = document.createElement("span");
    foodSpan.innerHTML = inputBoxLunch.value;
    li.appendChild(foodSpan);

    let calSpan = document.createElement("span");
    calSpan.innerHTML = calLunch.value + " calories";
    li.appendChild(calSpan);

    let proSpan = document.createElement("span");
    proSpan.innerHTML = proLunch.value + " grams";
    li.appendChild(proSpan);

    let span = document.createElement("span");
    span.className = "delete-button";
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    lunchCalories += parseInt(calLunch.value);
    lunchProtein += parseInt(proLunch.value);

    lunchCounter.textContent = `${lunchCalories} cal ${lunchProtein} pro`;

    lunchListContainer.appendChild(li);
    inputBoxLunch.value = "";
    calLunch.value = "";
    proLunch.value = "";
    saveInfo();
  }
});

lunchListContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.className === "delete-button") {
      let listItem = e.target.parentElement;

      let itemCalories = parseInt(listItem.children[1].textContent);
      let itemProtein = parseInt(listItem.children[2].textContent);

      lunchCalories -= itemCalories;
      lunchProtein += itemProtein;

      lunchCounter.textContent = `${lunchCalories} cal ${lunchProtein} pro`;

      listItem.remove();
    }
  },
  false
);

//////////////////////// TOTAL MACRO COUNTER FUNCTIONS //////////////////////

function updateTotals() {
  let totalCal =
    breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
  let totalPro =
    breakfastProtein + lunchProtein + dinnerProtein + snacksProtein;

  const calories = document.querySelector(".calorie-total");
  const protein = document.querySelector(".protein-total");

  calories.textContent = `${totalCal} Calories`;
  protein.textContent = `${totalPro} Grams`;
}

function saveInfo() {
  localStorage.setItem("breakfastCalories", breakfastCalories);
  localStorage.setItem("lunchCalories", lunchCalories);
  localStorage.setItem("dinnerCalories", dinnerCalories);
  localStorage.setItem("snacksCalories", snacksCalories);

  localStorage.setItem("breakfastProtein", breakfastProtein);
  localStorage.setItem("lunchProtein", lunchProtein);
  localStorage.setItem("dinnerProtein", dinnerProtein);
  localStorage.setItem("snacksProtein", snacksProtein);

  updateTotals();
}
