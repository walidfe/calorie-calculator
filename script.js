const calcBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const result = document.getElementById("result");
const historyList = document.getElementById("historyList");

let theme = "dark";
document.getElementById("toggleTheme").onclick = () => {
  document.body.classList.toggle("light-mode");
};

calcBtn.onclick = () => {
  const age = +document.getElementById("age").value;
  const gender = document.getElementById("gender").value;
  const weight = +document.getElementById("weight").value;
  const height = +document.getElementById("height").value;
  const activity = +document.getElementById("activity").value;
  const goal = +document.getElementById("goal").value;

  if (!age || !weight || !height) {
    result.innerText = "❌ Please fill in age, weight, and height.";
    return;
  }

  const bmr =
    gender === "male"
      ? 10 * weight + 6.25 * height - 5 * age + 5
      : 10 * weight + 6.25 * height - 5 * age - 161;

  const maintenance = Math.round(bmr * activity);
  const goalText = goal ? `🎯 Your goal: ${goal} kcal` : "";
  result.innerText = `🔥 Maintenance Calories: ${maintenance} kcal\n${goalText}`;

  // Save to history
  const li = document.createElement("li");
  li.innerText = `Age: ${age}, Gender: ${gender}, Weight: ${weight}kg, Height: ${height}cm → ${maintenance} kcal`;
  historyList.prepend(li);
};

resetBtn.onclick = () => {
  document.querySelectorAll("input").forEach((input) => (input.value = ""));
  result.innerText = "";
};