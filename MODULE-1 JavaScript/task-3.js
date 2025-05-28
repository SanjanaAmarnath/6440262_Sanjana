// Sample event list
const events = [
  { name: "Community Meetup", date: "2025-06-15", seats: 10 },
  { name: "Tech Talk", date: "2024-12-10", seats: 0 }, // Past and full
  { name: "Startup Pitch", date: "2025-07-01", seats: 5 }
];

// Get today's date
const today = new Date();

// Loop through events and show only valid ones
events.forEach(event => {
  const eventDate = new Date(event.date);

  // Condition: show only upcoming events with available seats
  if (eventDate > today && event.seats > 0) {
    console.log(`📢 Event: ${event.name}`);
    console.log(`📅 Date: ${event.date}`);
    console.log(`💺 Seats Available: ${event.seats}\n`);
  } else {
    console.log(`❌ Event "${event.name}" is either full or in the past.`);
  }
});

// Function to register for an event
function register(eventName) {
  try {
    const event = events.find(e => e.name === eventName);
    if (!event) throw new Error("Event not found.");
    
    const eventDate = new Date(event.date);
    if (eventDate <= today) throw new Error("Cannot register for past events.");
    if (event.seats <= 0) throw new Error("No seats available.");

    // Reduce seat count
    event.seats--;
    console.log(`✅ Registered for "${event.name}". Remaining seats: ${event.seats}`);
  } catch (error) {
    console.error(`⚠️ Registration failed: ${error.message}`);
  }
}

// Example test
register("Startup Pitch");
register("Tech Talk"); // Should fail
register("Nonexistent Event"); // Should fail
