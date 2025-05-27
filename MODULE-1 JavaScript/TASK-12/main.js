const form = document.getElementById("registerForm");
const statusMsg = document.getElementById("status");

form.onsubmit = function (e) {
  e.preventDefault();

  const { name, email, event } = form.elements;

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

  statusMsg.textContent = "Submitting...";
  statusMsg.style.color = "black";

  // Simulate delay using setTimeout
  setTimeout(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed");
        return res.json();
      })
      .then((data) => {
        statusMsg.textContent = "Registered successfully!";
        statusMsg.style.color = "green";
        form.reset();
      })
      .catch((err) => {
        statusMsg.textContent = "Registration failed.";
        statusMsg.style.color = "red";
      });
  }, 1500); // 1.5 sec delay
};
