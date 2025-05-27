// Sample events array
let events = [
  { name: "Yoga Workshop", date: "2025-06-10", seats: 10, category: "Wellness" },
  { name: "Music Fest", date: "2025-06-20", seats: 50, category: "Music" }
];

// Function to render events dynamically
function renderEvents() {
  const container = document.querySelector("#events-container");
  container.innerHTML = ""; // Clear previous content

  events.forEach(event => {
    // Create event card div
    const card = document.createElement("div");
    card.classList.add("event-card");
    card.style.border = "1px solid #ccc";
    card.style.padding = "10px";
    card.style.marginBottom = "10px";
    card.style.borderRadius = "5px";

    // Event info
    const name = document.createElement("h3");
    name.textContent = event.name;

    const date = document.createElement("p");
    date.textContent = `Date: ${event.date}`;

    const seats = document.createElement("p");
    seats.textContent = `Available Seats: ${event.seats}`;

    // Register button
    const registerBtn = document.createElement("button");
    registerBtn.textContent = "Register";
    registerBtn.disabled = event.seats === 0; // Disable if no seats

    // Handle registration click
    registerBtn.onclick = () => {
      if (event.seats > 0) {
        event.seats--;
        alert(`Registered for ${event.name}`);
        renderEvents();  // Re-render to update seats & button state
      }
    };

    // Append all elements to card
    card.appendChild(name);
    card.appendChild(date);
    card.appendChild(seats);
    card.appendChild(registerBtn);

    // Append card to container
    container.appendChild(card);
  });
}

// Initial render
renderEvents();
