// DOM helper to display output
const outputDiv = document.getElementById("output");
function log(msg) {
  outputDiv.innerHTML += `<p>${msg}</p>`;
}

// Store events
const events = [];

function addEvent(name, date, seats, category) {
  events.push({ name, date, seats, category });
  log(`🎉 Event "<strong>${name}</strong>" added.`);
}

function registerUser(eventName) {
  const event = events.find(e => e.name === eventName);
  if (!event) return log("❌ Event not found.");

  const eventDate = new Date(event.date);
  const today = new Date();

  if (eventDate <= today) return log("❌ Cannot register for past events.");
  if (event.seats <= 0) return log("❌ No seats left.");

  event.seats--;
  log(`✅ Registered for "<strong>${event.name}</strong>". Remaining seats: ${event.seats}`);
}

function filterEventsByCategory(category) {
  return events.filter(e => e.category === category && new Date(e.date) > new Date());
}

function categoryRegistrationCounter(category) {
  let count = 0;
  return function () {
    count++;
    log(`📊 Total registrations for "<strong>${category}</strong>": ${count}`);
  };
}

function filterEvents(callback) {
  return events.filter(callback);
}

// Trigger logic
function runEventLogic() {
  outputDiv.innerHTML = ""; // Clear previous output

  addEvent("Women in Tech", "2025-07-15", 30, "Tech");
  addEvent("Green Summit", "2025-06-10", 20, "Environment");
  addEvent("Past Event", "2024-01-01", 10, "Tech");

  const techCounter = categoryRegistrationCounter("Tech");
  registerUser("Women in Tech");
  techCounter();
  registerUser("Women in Tech");
  techCounter();

  const techEvents = filterEventsByCategory("Tech");
  log("👩‍💻 <strong>Tech Events:</strong>");
  techEvents.forEach(e => log(`- ${e.name}, ${e.date}, Seats: ${e.seats}`));

  const soonEvents = filterEvents(event => new Date(event.date) < new Date("2025-07-01"));
  log("📅 <strong>Events before July 2025:</strong>");
  soonEvents.forEach(e => log(`- ${e.name}, ${e.date}`));
}
