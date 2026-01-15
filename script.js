// Task 1

function formatFullName(firstName, lastName) {
  if (!firstName || !lastName) return "Invalid name input.";
  const f = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
  const l = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
  return `${l}, ${f}`;
}

function handleFormatName() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  document.getElementById("nameResult").textContent = formatFullName(firstName, lastName);
}



// Task 2

function calculateTotalCost2(price, quantity, taxRate) {
  if (isNaN(price) || isNaN(quantity) || isNaN(taxRate)) return "Invalid input.";
  return (price * quantity) * (1 + taxRate);
}

function handleTotalCost2() {
  const price = Number(document.getElementById("price2").value);
  const quantity = Number(document.getElementById("quantity2").value);
  const taxRate = Number(document.getElementById("taxRate2").value);
  const result = calculateTotalCost2(price, quantity, taxRate);
  document.getElementById("costResult2").textContent =
    typeof result === "string" ? result : `Total Cost: $${result.toFixed(2)}`;
}


// Task 3

function checkEligibility(age, isEmployed) {
  if (age > 18 && isEmployed) return "You are eligible for the program.";
  if (age > 18 && !isEmployed) return "You are conditionally eligible for the program.";
  return "You are not eligible for the program.";
}

function handleEligibility() {
  const age = Number(document.getElementById("age").value);
  const isEmployed = document.getElementById("isEmployed").value === "true";
  document.getElementById("eligibilityResult").textContent = checkEligibility(age, isEmployed);
}



// Task 4

function calculateTotalCost4(price, quantity, taxRate, discount = 0) {
  if (isNaN(price) || isNaN(quantity) || isNaN(taxRate) || isNaN(discount)) return "Invalid input.";
  const subtotal = (price * quantity) - discount;
  return subtotal * (1 + taxRate);
}

function handleTotalCost4() {
  const price = Number(document.getElementById("price4").value);
  const quantity = Number(document.getElementById("quantity4").value);
  const taxRate = Number(document.getElementById("taxRate4").value);
  const discount = Number(document.getElementById("discount4").value) || 0;
  const result = calculateTotalCost4(price, quantity, taxRate, discount);
  document.getElementById("costResult4").textContent =
    typeof result === "string" ? result : `Total Cost: $${result.toFixed(2)}`;
}