// Global Variables
let bill = 0;
let people = 1;
let tip = 5;

const updateResults = () => {
  let tipPerPerson = ((bill / 100) * tip) / people;
  let totalPerPerson = bill / people + tipPerPerson;
  document.getElementById("per-result").innerText =
    "$" + tipPerPerson.toFixed(2);
  document.getElementById("total-result").innerText =
    "$" + totalPerPerson.toFixed(2);
};

const updateBill = () => {
  bill = document.getElementById("bill").value;
  if (bill < 0) {
    bill = 0;
  }
  updateResults();
};

// Add event listeners to each tip button
const chooseTip = () => {};
const tips = ["5", "10", "15", "25", "50"];
tips.forEach((amount) => {
  document.getElementById(amount).addEventListener("click", () => {
    tip = amount;
    updateResults();
  });
});

// Custom Tip
const customTip = () => {
  let input = document.getElementById("custom-tip").value;
  let number = parseInt(input);

  if (isNaN(number)) {
    tip = 0;
  } else {
    tip = number.toFixed(2);
  }

  document.getElementById("custom-tip").value = input + "%";
  updateResults();
};

const updatePeople = () => {
  people = document.getElementById("people").value;
  if (people < 1) {
    people = 1;
  }
  updateResults();
};

const reset = () => {
  bill = 0;
  people = 1;
  tip = 5;

  document.getElementById("bill").value = "";
  document.getElementById("people").value = "";
  document.getElementById("custom-tip").value = "";

  updateResults();
};
