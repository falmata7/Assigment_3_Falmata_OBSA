/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let costPerDay = 35;
let numberOfDaysSelected = 0;
let clickedDays = [];
const fullButton = document.getElementById("full");
const halfButton = document.getElementById("half");
const calculatedCostElement = document.getElementById("calculated-cost");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function handleDayClick(dayButton) {
  if (!clickedDays.includes(dayButton.id)) {
    clickedDays.push(dayButton.id);
    numberOfDaysSelected++;
    dayButton.classList.add("clicked");
    updateCalculatedCost();
  }
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function handleClearButtonClick() {
  clickedDays.forEach(function(day) {
    document.getElementById(day).classList.remove("clicked");
  });
  clickedDays = [];
  numberOfDaysSelected = 0;
  updateCalculatedCost();
}

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function handleHalfButtonClick() {
  costPerDay = 20;
  fullButton.classList.remove("clicked");
  halfButton.classList.add("clicked");
  updateCalculatedCost();
}

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function handleFullButtonClick() {
  costPerDay = 35;
  halfButton.classList.remove("clicked");
  fullButton.classList.add("clicked");
  updateCalculatedCost();
}

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function updateCalculatedCost() {
  const totalCost = costPerDay * numberOfDaysSelected;
  calculatedCostElement.innerHTML = totalCost;
}

// event listeners

const dayButtons = document.querySelectorAll(".day-selector li");
dayButtons.forEach(function(dayButton) {
  dayButton.addEventListener("click", function() {
    handleDayClick(dayButton);
  });
});

const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", handleClearButtonClick);

fullButton.addEventListener("click", handleFullButtonClick);
halfButton.addEventListener("click", handleHalfButtonClick);
