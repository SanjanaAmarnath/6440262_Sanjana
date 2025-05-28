const form = document.getElementById('registrationForm');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form from submitting and refreshing the page

  // Clear previous errors
  document.querySelectorAll('.error').forEach(el => el.textContent = '');

  // Capture inputs using form.elements
  const { name, email, event } = form.elements;

  let valid = true;

  // Validate name (not empty)
  if (!name.value.trim()) {
    document.getElementById('nameError').textContent = 'Name is required.';
    valid = false;
  }

  // Validate email (simple regex check)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.trim()) {
    document.getElementById('emailError').textContent = 'Email is required.';
    valid = false;
  } else if (!emailRegex.test(email.value)) {
    document.getElementById('emailError').textContent = 'Enter a valid email.';
    valid = false;
  }

  // Validate event selection (not empty)
  if (!event.value) {
    document.getElementById('eventError').textContent = 'Please select an event.';
    valid = false;
  }

  if (valid) {
    // If valid, do something (e.g., show success or send data)
    alert(`Thank you for registering, ${name.value}! You signed up for the ${event.value} event.`);
    form.reset(); // Clear form
  }
});
