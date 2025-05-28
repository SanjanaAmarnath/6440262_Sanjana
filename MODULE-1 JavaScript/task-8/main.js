const events = [
  { id: 1, name: "Jazz Night", date: "2025-07-12", category: "Music", seats: 5 },
  { id: 2, name: "AI Bootcamp", date: "2025-07-15", category: "Tech", seats: 3 },
  { id: 3, name: "Baking Workshop", date: "2025-07-20", category: "Cooking", seats: 2 },
  { id: 4, name: "Guitar Basics", date: "2025-07-22", category: "Music", seats: 4 },
];

const container = document.querySelector("#event-container");
const categoryFilter = document.querySelector("#categoryFilter");
const searchInput = document.querySelector("#searchInput");

function renderEvents(filterCategory = "All", searchTerm = "") {
  container.innerHTML = "";

  // Normalize search term
  const normalizedSearch = searchTerm.trim().toLowerCase();

  const filteredEvents = events.filter(event => {
    const matchesCategory = filterCategory === "All" || event.category === filterCategory;
    const matchesSearch = event.name.toLowerCase().includes(normalizedSearch);
    return matchesCategory && matchesSearch;
  });

  if (filteredEvents.length === 0) {
    container.innerHTML = "<p>No events match your criteria.</p>";
    return;
  }

  filteredEvents.forEach(event => {
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

function register(id) {
  const event = events.find(e => e.id === id);
  if (event && event.seats > 0) {
    event.seats--;
    alert(`✅ Registered for ${event.name}`);
    updateUI();
  } else {
    alert("❌ No seats available");
  }
}

function updateUI() {
  const selectedCategory = categoryFilter.value;
  const searchTerm = searchInput.value;
  renderEvents(selectedCategory, searchTerm);
}

// Attach event listeners
categoryFilter.onchange = updateUI;

searchInput.onkeydown = (e) => {
  // Optional: Trigger update on Enter key only, or on every keystroke
  // For instant search, uncomment below line:
  // updateUI();

  // For search on Enter key:
  if (e.key === "Enter") {
    updateUI();
  }
};

// Initial render
renderEvents();
