const form = document.getElementById("registerForm");
const errorMsg = document.getElementById("error");

form.onsubmit = function (e) {
  e.preventDefault(); // Prevent form reload

  const { name, email, event } = form.elements;

  if (!name.value || !email.value || !event.value) {
    errorMsg.textContent = "All fields are required.";
    return;
  }

  if (!email.value.includes("@")) {
    errorMsg.textContent = "Invalid email address.";
    return;
  }

  errorMsg.textContent = "";
  alert(`Registered ${name.value} for ${event.value}`);
  form.reset();
};
