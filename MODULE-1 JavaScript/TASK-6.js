// Array of community events
let communityEvents = [
  { name: "Yoga Workshop", category: "Wellness", date: "2025-06-10", seats: 10 },
  { name: "Music Fest", category: "Music", date: "2025-06-15", seats: 50 },
  { name: "Art Expo", category: "Art", date: "2025-06-20", seats: 20 }
];

// 1. Add new events using .push()
communityEvents.push(
  { name: "Workshop on Baking", category: "Cooking", date: "2025-06-25", seats: 15 },
  { name: "Classical Night", category: "Music", date: "2025-07-01", seats: 30 }
);

console.log(" All Events:", communityEvents);

// 2. Filter only music events using .filter()
const musicEvents = communityEvents.filter(event => event.category === "Music");

console.log(" Music Events:");
musicEvents.forEach(event => console.log(`- ${event.name}`));

// 3. Format display using .map() (e.g., "Workshop on Baking")
const formattedCards = communityEvents.map(event => {
  return ` ${event.name} (${event.category}) - ${event.date} | Seats: ${event.seats}`;
});

console.log(" Event Display Cards:");
formattedCards.forEach(card => console.log(card));
