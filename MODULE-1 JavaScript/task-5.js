// Event class definition
class Event {
  constructor(name, date, seats, category) {
    this.name = name;
    this.date = date;
    this.seats = seats;
    this.category = category;
  }

  // Instance method to display info
  info() {
    return `${this.name} on ${this.date} [${this.category}] - Seats: ${this.seats}`;
  }
}

// ✅ Add checkAvailability() to prototype
Event.prototype.checkAvailability = function () {
  const eventDate = new Date(this.date);
  const today = new Date();
  return eventDate > today && this.seats > 0;
};
// Create event objects
const event1 = new Event("Women in Tech", "2025-07-15", 25, "Tech");
const event2 = new Event("Past Conference", "2024-02-10", 10, "Business");
const event3 = new Event("Zero Seat Event", "2025-08-01", 0, "Education");

// Use checkAvailability()
console.log(event1.info());
console.log("✅ Available:", event1.checkAvailability()); // true

console.log(event2.info());
console.log("❌ Available:", event2.checkAvailability()); // false (past)

console.log(event3.info());
console.log("❌ Available:", event3.checkAvailability()); // false (no seats)
// Use Object.entries()
console.log("🔑 Event Properties (event1):");
for (const [key, value] of Object.entries(event1)) {
  console.log(`${key}: ${value}`);
}
