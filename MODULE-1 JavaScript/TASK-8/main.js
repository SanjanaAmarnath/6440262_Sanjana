let events = [
  { name: "Yoga Workshop", date: "2025-06-10", seats: 10, category: "Wellness" },
  { name: "Music Fest", date: "2025-06-20", seats: 50, category: "Music" },
  { name: "Art Expo", date: "2025-06-15", seats: 20, category: "Art" },
  { name: "Workshop on Baking", date: "2025-06-25", seats: 15, category: "Cooking" }
];

const container = document.querySelector("#events-container");
const categoryFilter = document.querySelector("#categoryFilter");
const searchInput = document.querySelector("#searchInput");

function render(eventsList) {
  container.innerHTML = eventsList.length ? "" : "No matching events";
  eventsList.forEach(event => {
    const card = document.createElement("div");
    card.style = "border:1px solid #ccc;padding:10px;margin:5px 0;border-radius:5px";
    card.innerHTML = `
      <h3>${event.name}</h3>
      <p>Date: ${event.date}</p>
      <p>Seats: ${event.seats}</p>
      <p>Category: ${event.category}</p>
      <button ${event.seats === 0 ? "disabled" : ""}>Register</button>
    `;
    card.querySelector("button").onclick = () => {
      if (event.seats > 0) {
        event.seats--;
        alert(`Registered for ${event.name}`);
        filterAndRender();
      }
    };
    container.appendChild(card);
  });
}

function filterAndRender() {
  const cat = categoryFilter.value;
  const search = searchInput.value.toLowerCase();
  const filtered = events.filter(e =>
    (cat === "All" || e.category === cat) &&
    e.name.toLowerCase().includes(search)
  );
  render(filtered);
}

categoryFilter.onchange = filterAndRender;
searchInput.oninput = filterAndRender;

render(events);
