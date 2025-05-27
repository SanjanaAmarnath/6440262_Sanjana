// 1. Define Event class
class Event {
  constructor(name, date, seats, category) {
    this.name = name;
    this.date = date;
    this.seats = seats;
    this.category = category;
  }

  // 2. Add method using prototype to check availability
  checkAvailability() {
    const today = new Date().toISOString().split("T")[0];
    return this.date > today && this.seats > 0;
  }
}

// Create some event instances
const event1 = new Event("Yoga Workshop", "2025-06-10", 10, "Wellness");
const event2 = new Event("Music Fest", "2025-05-01", 0, "Music");

// Use checkAvailability() method
console.log(`${event1.name} available?`, event1.checkAvailability()); // true
console.log(`${event2.name} available?`, event2.checkAvailability()); // false

// 3. List keys and values using Object.entries()
console.log("🔎 Event 1 details:");
Object.entries(event1).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
