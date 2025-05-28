const form = document.getElementById('registrationForm');
const messageDiv = document.getElementById('message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  messageDiv.textContent = 'Submitting...';

  const { name, email } = form.elements;

  const userData = {
    name: name.value.trim(),
    email: email.value.trim(),
  };

  // Simulate delay with setTimeout
  setTimeout(() => {
    // Mock API endpoint (use JSONPlaceholder for demo)
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (!response.ok) throw new Error('Network response not ok');
        return response.json();
      })
      .then((data) => {
        messageDiv.textContent = `Success! Registered with ID: ${data.id}`;
        form.reset();
      })
      .catch((error) => {
        messageDiv.textContent = 'Registration failed. Please try again.';
        console.error('Error:', error);
      });
  }, 1500); // 1.5 seconds delay to simulate server response
});
