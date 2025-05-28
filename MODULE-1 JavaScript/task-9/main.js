const container = document.querySelector("#event-container");
const loading = document.querySelector("#loading");

function renderEvents(events) {
  container.innerHTML = "";
  events.forEach(event => {
    const card = document.createElement("div");
    card.className = "event-card";
    card.textContent = `${event.name} on ${event.date} [${event.category}]`;
    container.appendChild(card);
  });
}

// Mock API URL (using a public fake JSON API)
const apiURL = "https://jsonplaceholder.typicode.com/posts/1/comments"; 
// This URL returns JSON but not event data — just for demo, we will adapt response.

loading.style.display = "block";

async function fetchEvents() {
    loading.style.display = "block";
    container.innerHTML = "";
  
    try {
      const response = await fetch(apiURL);
      if (!response.ok) throw new Error("Network response not ok");
      const data = await response.json();
  
      const events = data.slice(0, 5).map(item => ({
        name: `Event: ${item.name}`,
        date: "2025-07-15",
        category: "Demo",
      }));
  
      renderEvents(events);
    } catch (error) {
      container.textContent = "Failed to load events: " + error.message;
    } finally {
      loading.style.display = "none";
    }
  }
  
  fetchEvents();
  
