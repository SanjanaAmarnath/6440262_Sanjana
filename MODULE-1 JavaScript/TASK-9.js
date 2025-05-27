const loading = document.getElementById('loading');
const container = document.getElementById('events-container');

// Mock API URL (you can use https://jsonplaceholder.typicode.com/users or your own)
const apiURL = 'https://mocki.io/v1/6d4e5a56-8eb4-4bdb-9b48-17f01938a4a5'; 
// Replace with your mock JSON endpoint URL that returns event data

// Using then() and catch()
function fetchEventsWithThen() {
  loading.style.display = 'block';
  fetch(apiURL)
    .then(response => {
      if (!response.ok) throw new Error('Network error');
      return response.json();
    })
    .then(events => {
      loading.style.display = 'none';
      renderEvents(events);
    })
    .catch(error => {
      loading.style.display = 'none';
      container.textContent = 'Error loading events: ' + error.message;
    });
}

// Using async/await
async function fetchEventsAsync() {
  try {
    loading.style.display = 'block';
    const response = await fetch(apiURL);
    if (!response.ok) throw new Error('Network error');
    const events = await response.json();
    loading.style.display = 'none';
    renderEvents(events);
  } catch (error) {
    loading.style.display = 'none';
    container.textContent = 'Error loading events: ' + error.message;
  }
}

// Simple render function to display events
function renderEvents(events) {
  container.innerHTML = '';
  events.forEach(event => {
    const div = document.createElement('div');
    div.textContent = `${event.name} - ${event.date} (${event.category}) - Seats: ${event.seats}`;
    container.appendChild(div);
  });
}

// Call one of these to test:
// fetchEventsWithThen();
fetchEventsAsync();
