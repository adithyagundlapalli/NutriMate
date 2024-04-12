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

// Breakfast Functions
const inputBoxBreakfast = document.getElementById("bfood");
const calBreakfast = document.getElementById("bcal");
const proBreakfast = document.getElementById("bpro");
const breakfastListContainer = document.querySelector(
  ".meal-type.breakfast ul"
);
const breakfastButton = document.getElementById("bbtn");

breakfastButton.addEventListener("click", function (e) {
  e.preventDefault(); // Prevent the default form submission behavior
  if (
    calBreakfast.value === "" ||
    proBreakfast.value === "" ||
    inputBoxBreakfast.value === ""
  ) {
    alert("You must enter all of the information!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBoxBreakfast.value;
    breakfastListContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    inputBoxBreakfast.value = ""; // Clear input fields
    calBreakfast.value = "";
    proBreakfast.value = "";
    saveInfo();
  }
});

// Dinner Functions
const inputBoxDinner = document.getElementById("dfood");
const calDinner = document.getElementById("dcal");
const proDinner = document.getElementById("dpro");
const dinnerListContainer = document.querySelector(".meal-type.dinner ul");
const dinnerButton = document.getElementById("dbtn");

dinnerButton.addEventListener("click", function (e) {
  e.preventDefault(); // Prevent the default form submission behavior
  if (
    calDinner.value === "" ||
    proDinner.value === "" ||
    inputBoxDinner.value === ""
  ) {
    alert("You must enter all of the information!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBoxDinner.value;
    dinnerListContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    inputBoxDinner.value = ""; // Clear input fields
    calDinner.value = "";
    proDinner.value = "";
    saveInfo();
  }
});

// Snacks Functions
const inputBoxSnacks = document.getElementById("sfood");
const calSnacks = document.getElementById("scal");
const proSnacks = document.getElementById("spro");
const snacksListContainer = document.querySelector(".meal-type.snack ul");
const snacksButton = document.getElementById("sbtn");

snacksButton.addEventListener("click", function (e) {
  e.preventDefault(); // Prevent the default form submission behavior
  if (
    calSnacks.value === "" ||
    proSnacks.value === "" ||
    inputBoxSnacks.value === ""
  ) {
    alert("You must enter all of the information!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBoxSnacks.value;
    snacksListContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    inputBoxSnacks.value = ""; // Clear input fields
    calSnacks.value = "";
    proSnacks.value = "";
    saveInfo();
  }
});

// Lunch Functions
const inputBoxLunch = document.getElementById("lfood");
const calLunch = document.getElementById("lcal");
const proLunch = document.getElementById("lpro");
const lunchListContainer = document.getElementById("list-container");
const lunchButton = document.getElementById("lbtn");
const form = document.querySelector(".input");

lunchButton.addEventListener("click", function (e) {
  e.preventDefault(); // Prevent the default form submission behavior
  if (
    calLunch.value === "" ||
    proLunch.value === "" ||
    inputBoxLunch.value === ""
  ) {
    alert("You must enter all of the information!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBoxLunch.value;
    lunchListContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    inputBoxLunch.value = ""; // Clear input fields
    calLunch.value = "";
    proLunch.value = "";
    saveInfo();
  }
});

lunchListContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveInfo();
    }
  },
  false
);

function saveInfo() {
  // You can save the information to localStorage or perform any other necessary action here.
}

// Handle form submission
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the default form submission behavior
  // You can handle the form submission here or call your existing getDataForm function
  getDataForm(e);
});

function getDataForm(e) {
  const formData = new FormData(form);
  // Handle form data
  // Reset the form after processing
  form.reset();
}

// submitBtn.addEventListener("click", getDataForm);
