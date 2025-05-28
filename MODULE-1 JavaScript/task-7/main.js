// Sample array of events
const events = [
  { id: 1, name: "Jazz Night", date: "2025-07-12", category: "Music", seats: 5 },
  { id: 2, name: "AI Bootcamp", date: "2025-07-15", category: "Tech", seats: 3 },
  { id: 3, name: "Baking Workshop", date: "2025-07-20", category: "Cooking", seats: 2 },
];

// Access container using querySelector
const container = document.querySelector("#event-container");

// Render events
function renderEvents() {
  container.innerHTML = ""; // Clear old content
  events.forEach(event => {
    const card = document.createElement("div");
    card.className = "event-card";

    card.innerHTML = `
      <h3>${event.name}</h3>
      <p><strong>Date:</strong> ${event.date}</p>
      <p><strong>Category:</strong> ${event.category}</p>
      <p><strong>Seats Left:</strong> ${event.seats}</p>
    `;

    const button = document.createElement("button");
    button.textContent = "Register";
    button.disabled = event.seats === 0;
    button.onclick = () => register(event.id);

    card.appendChild(button);
    container.appendChild(card);
  });
}

// Register user and update UI
function register(id) {
  const event = events.find(e => e.id === id);
  if (event && event.seats > 0) {
    event.seats--;
    alert(`✅ Registered for ${event.name}`);
    renderEvents(); // Re-render UI
  } else {
    alert("❌ No seats available");
  }
}

// Initial render
renderEvents();
