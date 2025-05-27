// Declare event details
const eventName = "Community Yoga Session";
const eventDate = "2025-06-10";
let availableSeats = 30;

// Display event info using template literals
console.log(`Event: ${eventName}`);
console.log(`Date: ${eventDate}`);
console.log(`Available Seats: ${availableSeats}`);

// Simulate a user registering for the event
console.log("User registered...");
availableSeats--;  // Decrease seat count by 1

// Show updated seat count
console.log(`Updated Seats after registration: ${availableSeats}`);

// Simulate cancellation
console.log("User cancelled...");
availableSeats++;  // Increase seat count by 1

// Final seat count
console.log(`Seats after cancellation: ${availableSeats}`);
