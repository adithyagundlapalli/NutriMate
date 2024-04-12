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

// Lunch Functions

const inputBoxLunch = document.getElementById("input-food");
const listContainer = document.getElementById("list-container");

// function addTask() {
//   if (inputBoxLunch.value === "") {
//     alert("You must write something!");
//   } else {
//     let li = document.createElement("li");
//     li.innerHTML = inputBoxLunch.value;
//     listContainer.appendChild(li);
//     let span = document.createElement("span");
//     span.innerHTML = "\u00d7";
//     li.appendChild(span);
//   }
//   inputBoxLunch.value = "";
//   saveInfo();
// }

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveInfo();
    }
  },
  false
);

const form = document.querySelector(".input");
const submitBtn = document.getElementById("btn");

function getDataForm(e) {
  e.preventDefault();
  const formData = new FormData(form);

  alert(formData.get("food"));

  form.reset();
}

submitBtn.addEventListener("click", getDataForm);
