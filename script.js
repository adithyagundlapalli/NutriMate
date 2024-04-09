const calGoal = document.getElementById("input-box");
const button1 = document.getElementById("btn1");
const value = document.getElementById("value");

function updateCalories() {
  value.innerHTML = calGoal.value + " calories";
}

button1.addEventListener("click", updateCalories);

const proGoal = document.getElementById("input-box2");
const button2 = document.getElementById("btn2");
const value2 = document.getElementById("value2");

function updateProtein() {
  value2.innerHTML = proGoal.value + " grams";
}

button2.addEventListener("click", updateProtein);
