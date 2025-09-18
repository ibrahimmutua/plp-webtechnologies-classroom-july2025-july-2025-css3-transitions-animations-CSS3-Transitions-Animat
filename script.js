// ==========================
// Part 1: Animation Trigger
// ==========================
document.getElementById("startAnimation").addEventListener("click", function() {
  const box = document.getElementById("animateBox");

  // Remove animation class if it exists to restart
  box.classList.remove("animate");

  // Trigger reflow to restart animation
  void box.offsetWidth;

  // Add class to start animation
  box.classList.add("animate");
});

// ==========================
// Part 2: Function Scope & Parameters
// ==========================
function sumNumbers(a, b) { // parameters a and b
  let total = a + b; // 'total' variable has function scope
  return total;      // return value to caller
}

// ==========================
// Part 3: Event Handling & DOM Interaction
// ==========================
document.getElementById("calculateBtn").addEventListener("click", function() {
  // Call sumNumbers function
  let result = sumNumbers(10, 15);

  // Display result in the DOM
  document.getElementById("result").textContent = "The sum is: " + result;
});
