// Sample list of events
const events = [
  { name: "Yoga Workshop", date: "2025-06-10", seats: 10 },
  { name: "Cooking Class", date: "2025-05-01", seats: 5 },     // Past event
  { name: "Music Fest", date: "2025-06-20", seats: 0 },        // Full event
  { name: "Art Exhibition", date: "2025-06-25", seats: 20 }
];

// Get today's date in YYYY-MM-DD format
const today = new Date().toISOString().split("T")[0];

// Display only valid events (upcoming + has seats)
console.log("Upcoming Available Events:");
events.forEach(event => {
  if (event.date > today && event.seats > 0) {
    console.log(`- ${event.name} on ${event.date} (${event.seats} seats)`);
  } else {
    console.log(`(Hidden) ${event.name} is either in the past or full.`);
  }
});

// Registration function with error handling
function registerUser(eventName) {
  const event = events.find(e => e.name === eventName);

  try {
    if (!event) {
      throw new Error("Event not found.");
    }

    if (event.date <= today) {
      throw new Error("Cannot register for past events.");
    }

    if (event.seats <= 0) {
      throw new Error("No seats available.");
    }

    event.seats--;
    console.log(`Registered for ${event.name}. Seats left: ${event.seats}`);

  } catch (err) {
    console.error(`Registration failed: ${err.message}`);
  }
}

// Test the registration logic
registerUser("Music Fest");       // Should fail (0 seats)
registerUser("Yoga Workshop");    // Should succeed
registerUser("Cooking Class");    // Should fail (past event)
registerUser("Unknown Event");    // Should fail (not found)
