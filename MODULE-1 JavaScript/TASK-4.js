// Master event list
let events = [
  { name: "Yoga Workshop", date: "2025-06-10", seats: 10, category: "Wellness" },
  { name: "Music Fest", date: "2025-06-20", seats: 50, category: "Music" },
  { name: "Art Expo", date: "2025-06-15", seats: 25, category: "Art" }
];

// 1. Function to add new events
function addEvent(name, date, seats, category) {
  events.push({ name, date, seats, category });
  console.log(`Event "${name}" added.`);
}

// 2. Function to register a user for an event
function registerUser(eventName) {
  const today = new Date().toISOString().split("T")[0];
  const event = events.find(e => e.name === eventName);

  try {
    if (!event) throw new Error("Event not found.");
    if (event.date <= today) throw new Error("Event has already occurred.");
    if (event.seats <= 0) throw new Error("Event is full.");
    event.seats--;
    console.log(`Registered for ${event.name}. Remaining seats: ${event.seats}`);
  } catch (err) {
    console.error(`Registration error: ${err.message}`);
  }
}

// 3. Function to filter events by category
function filterEventsByCategory(category) {
  return events.filter(event => event.category === category);
}

// 4. Closure to track total registrations per category
function createCategoryCounter(category) {
  let count = 0;
  return function () {
    count++;
    console.log(`Total registrations for ${category}: ${count}`);
  };
}

const musicCounter = createCategoryCounter("Music");

// Simulate some registrations
registerUser("Music Fest");
musicCounter();  // 1st registration
registerUser("Music Fest");
musicCounter();  // 2nd registration

// 5. Higher-order function for dynamic filtering
function filterEvents(callback) {
  return events.filter(callback);
}

// Example: Filter events with more than 20 seats
const spaciousEvents = filterEvents(event => event.seats > 20);
console.log("Events with more than 20 seats:", spaciousEvents);
