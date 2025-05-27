const events = [
  { name: "Yoga Workshop", date: "2025-06-10", seats: 10, category: "Wellness" },
  { name: "Music Fest", date: "2025-06-20", seats: 50, category: "Music" },
  { name: "Art Expo", date: "2025-06-15", seats: 20, category: "Art" },
];

// Function with default parameter and destructuring
const filterEvents = (eventList = [], category = "All") => {
  // Clone array with spread operator
  const clonedEvents = [...eventList];

  return clonedEvents.filter(({ category: cat }) =>
    category === "All" ? true : cat === category
  );
};

// Usage example
const filtered = filterEvents(events, "Music");
console.log(filtered);
