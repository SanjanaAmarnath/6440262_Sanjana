// Define constant values for event name and date
const eventName = "Community Meetup";
const eventDate = "2025-06-15";

// Use 'let' for a variable value that can change
let availableSeats = 50;

// Concatenate and display event details using template literals
console.log(`📅 Event: ${eventName}\n🗓️ Date: ${eventDate}\n💺 Available Seats: ${availableSeats}`);

// Simulate a registration (seat booked)
availableSeats--; // or availableSeats = availableSeats - 1;
console.log(`✅ One seat booked. Remaining seats: ${availableSeats}`);

// Simulate a cancellation (seat freed)
availableSeats++; // or availableSeats = availableSeats + 1;
console.log(`↩️ One seat canceled. Updated seats: ${availableSeats}`);
