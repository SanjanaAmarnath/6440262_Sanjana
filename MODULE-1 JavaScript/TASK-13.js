const form = document.getElementById("registerForm");
const statusMsg = document.getElementById("status");

form.onsubmit = function (e) {
  e.preventDefault();
  console.log("Form submitted"); // Step 1: Check if function triggers

  const { name, email, event } = form.elements;

  console.log("Input values:", name.value, email.value, event.value); // Step 2: Verify values

  if (!name.value || !email.value || !event.value) {
    statusMsg.textContent = "Please fill all fields.";
    statusMsg.style.color = "red";
    return;
  }

  const userData = {
    name: name.value,
    email: email.value,
    event: event.value,
  };

  console.log("Payload to send:", userData); // Step 3: Confirm payload

  statusMsg.textContent = "Submitting...";

  // Set a breakpoint on this line in Chrome DevTools
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  })
    .then((res) => {
      console.log("Response status:", res.status); // Step 4: Log status
      if (!res.ok) throw new Error("Network response was not OK");
      return res.json();
    })
    .then((data) => {
      console.log("Server response:", data); // Step 5: Output response
      statusMsg.textContent = "Registered successfully!";
      statusMsg.style.color = "green";
      form.reset();
    })
    .catch((err) => {
      console.error("Error during fetch:", err); // Step 6: Log errors
      statusMsg.textContent = "Registration failed.";
      statusMsg.style.color = "red";
    });
};
